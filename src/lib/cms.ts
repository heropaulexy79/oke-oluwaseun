import Parser from 'rss-parser';

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  category: string;
  imageUrl?: string;
  link: string;
  isHistorical?: boolean;
}

const parser = new Parser({
  customFields: {
    item: [
      ['enclosure', 'enclosure'],
      ['content:encoded', 'contentEncoded']
    ]
  }
});

const SUBSTACK_URL = 'https://okeoluwaseun.substack.com';
const RSS_URL = `${SUBSTACK_URL}/feed`;
const SITEMAP_URL = `${SUBSTACK_URL}/sitemap.xml`;

// Helper to extract a consistent slug from a Substack URL
function extractSlugFromUrl(url: string): string {
  if (!url) return 'post';
  if (url.includes('/p/')) {
    return url.split('/p/')[1].split('?')[0].replace(/\/$/, '');
  }
  const parts = url.split('/');
  return parts[parts.length - 1].split('?')[0].replace(/\/$/, '');
}

export const revalidate = 0; // always fetch fresh Substack data on every request

export async function getAllPosts(): Promise<Post[]> {
  try {
    // 1. Fetch RSS Feed (Recent 20 posts with full data)
    // Use fetch so Next.js ISR can revalidate the cached response
    const rssRes = await fetch(RSS_URL, { cache: 'no-store' });
    const rssText = await rssRes.text();
    const feed = await parser.parseString(rssText);
    const feedPosts: Post[] = (feed?.items || []).map(item => {
      let imageUrl: string | undefined = undefined;
      if (item.enclosure && item.enclosure.url) {
        imageUrl = item.enclosure.url;
      } else if (item.contentEncoded) {
        const imgMatch = item.contentEncoded.match(/<img.*?src="(.*?)"/);
        if (imgMatch && imgMatch[1]) {
          imageUrl = imgMatch[1];
        }
      }

      return {
        slug: extractSlugFromUrl(item.link || ''),
        title: item.title || 'Untitled',
        excerpt: item.contentSnippet || '',
        content: item.contentEncoded || item.content || '',
        publishedAt: item.isoDate || new Date().toISOString(),
        category: (item.categories && item.categories.length > 0) ? item.categories[0] : 'Insight',
        imageUrl: imageUrl,
        link: item.link || ''
      };
    });

    // 2. Fetch Sitemap (Full list of all publications)
    const sitemapRes = await fetch(SITEMAP_URL, { cache: 'no-store' });
    const sitemapXml = await sitemapRes.text();
    
    // Extract /p/ links and dates
    const locMatches = [...sitemapXml.matchAll(/<loc>(https:\/\/okeoluwaseun\.substack\.com\/p\/[^<]+)<\/loc><lastmod>([^<]+)<\/lastmod>/g)];
    
    const sitemapPosts: Post[] = locMatches.map(match => {
      const link = match[1];
      const publishedAt = match[2];
      const slug = extractSlugFromUrl(link);
      
      return {
        slug,
        title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        excerpt: '',
        content: '',
        publishedAt: new Date(publishedAt).toISOString(),
        category: 'Archive',
        link,
        isHistorical: true
      };
    });

    // 3. Merge: RSS posts override Sitemap posts
    const mergedMap = new Map<string, Post>();
    sitemapPosts.forEach(p => mergedMap.set(p.slug, p));
    feedPosts.forEach(p => mergedMap.set(p.slug, p));

    return Array.from(mergedMap.values()).sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  } catch (error) {
    console.error("Failed to fetch contents:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const posts = await getAllPosts();
  const decodedSlug = decodeURIComponent(slug);
  const post = posts.find(p => p.slug === decodedSlug);
  
  // Real-time enrichment for historical posts
  if (post && (!post.content || !post.imageUrl || post.isHistorical)) {
    try {
      const res = await fetch(post.link);
      const html = await res.text();
      
      const titleMatch = html.match(/<meta property="og:title" content="([^"]+)"/);
      const imageMatch = html.match(/<meta property="og:image" content="([^"]+)"/);
      const descMatch = html.match(/<meta property="og:description" content="([^"]+)"/);
      
      if (titleMatch && titleMatch[1]) post.title = titleMatch[1];
      if (imageMatch && imageMatch[1]) post.imageUrl = imageMatch[1];
      if (descMatch && descMatch[1]) post.excerpt = descMatch[1];
      
      if (!post.content || post.content.length < 50) {
        post.content = post.excerpt ? `<p>${post.excerpt}</p>` : 'Click the button below to continue reading the full insight directly on Substack.';
      }
    } catch (e) {
      console.error("Enrichment failed:", e);
    }
  }
  
  return post;
}
