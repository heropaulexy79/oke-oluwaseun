import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { getAllPosts } from '@/lib/cms';

export const metadata = {
  title: 'Insights | Oke Oluwaseun',
  description: 'Thought leadership, articles, and profound insights on leadership, identity, and transformation.',
};

export const revalidate = 3600;

export default async function InsightsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page = '1' } = await searchParams;
  const currentPage = parseInt(page, 10) || 1;
  const pageSize = 10;
  
  const allPosts = await getAllPosts();
  const totalPages = Math.ceil(allPosts.length / pageSize);
  
  // Basic bounds check
  const safePage = Math.min(Math.max(1, currentPage), totalPages || 1);
  const startIndex = (safePage - 1) * pageSize;
  const posts = allPosts.slice(startIndex, startIndex + pageSize);

  // Enrich ONLY the posts on the current page to keep it fast
  // This ensures images and excerpts show up in the list for historical posts
  await Promise.all(posts.map(async (post) => {
    if (post.isHistorical && (!post.imageUrl || !post.excerpt)) {
      try {
        const res = await fetch(post.link);
        const html = await res.text();
        const imageMatch = html.match(/<meta property="og:image" content="([^"]+)"/);
        const descMatch = html.match(/<meta property="og:description" content="([^"]+)"/);
        if (imageMatch) post.imageUrl = imageMatch[1];
        if (descMatch) post.excerpt = descMatch[1];
      } catch (e) {
        // Fallback silently if enrichment fails
      }
    }
  }));

  return (
    <div className="bg-surface min-h-screen">
      <section className="bg-primary pt-32 pb-24 px-4 text-center">
        <AnimatedSection className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Thought <span className="text-accent italic">Leadership</span></h1>
          <p className="text-xl text-white/70">
            Articles, frameworks, and deep dives into the mechanics of leadership and human potential.
          </p>
        </AnimatedSection>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 mb-20">
            {posts.length > 0 ? (
              posts.map((post, idx) => (
                <AnimatedSection key={post.slug} delay={0.1 * idx} className="bg-white rounded-2xl overflow-hidden border border-primary/5 hover:shadow-2xl transition-all duration-500 group flex flex-col md:flex-row transform hover:-translate-y-1">
                  {post.imageUrl && (
                    <div className="md:w-2/5 shrink-0 relative h-64 md:h-auto overflow-hidden bg-gray-100">
                      <Image 
                        src={post.imageUrl} 
                        alt={post.title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  )}
                  
                  <div className="p-8 md:p-12 md:w-full flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest px-3 py-1 bg-accent/10 rounded-full">{post.category}</span>
                      <span className="text-xs text-foreground/50 font-medium">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl md:text-4xl font-serif text-primary mb-4 leading-snug group-hover:text-accent transition-colors">
                      <Link href={`/insights/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-foreground/70 leading-relaxed mb-8 text-sm md:text-base font-light">
                      {post.excerpt}
                    </p>
                    <Link href={`/insights/${post.slug}`} className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors group-hover:gap-2">
                      Preview Insight <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </AnimatedSection>
              ))
            ) : (
              <div className="py-20 text-center">
                <p className="text-foreground/50 italic">No insights found on this page.</p>
              </div>
            )}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <AnimatedSection className="flex flex-col items-center gap-6 pt-12 border-t border-primary/5">
              <div className="flex items-center gap-8">
                {safePage > 1 ? (
                  <Link 
                    href={`/insights?page=${safePage - 1}`}
                    className="flex items-center gap-2 text-sm font-bold text-primary hover:text-accent transition-colors group"
                  >
                    <ChevronLeft size={20} className="transition-transform group-hover:-translate-x-1" /> Previous
                  </Link>
                ) : (
                  <span className="flex items-center gap-2 text-sm font-bold text-foreground/20 cursor-not-allowed">
                    <ChevronLeft size={20} /> Previous
                  </span>
                )}

                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <Link
                      key={p}
                      href={`/insights?page=${p}`}
                      className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold transition-all ${
                        p === safePage 
                          ? "bg-primary text-white shadow-lg scale-110" 
                          : "text-primary/40 hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {p}
                    </Link>
                  ))}
                </div>

                {safePage < totalPages ? (
                  <Link 
                    href={`/insights?page=${safePage + 1}`}
                    className="flex items-center gap-2 text-sm font-bold text-primary hover:text-accent transition-colors group"
                  >
                    Next <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                ) : (
                  <span className="flex items-center gap-2 text-sm font-bold text-foreground/20 cursor-not-allowed">
                    Next <ChevronRight size={20} />
                  </span>
                )}
              </div>
              
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/30">
                Page {safePage} of {totalPages}
              </p>
            </AnimatedSection>
          )}
        </div>
      </section>
    </div>
  );
}
