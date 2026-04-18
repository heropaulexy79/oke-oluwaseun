import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { getPostBySlug } from '@/lib/cms';

export default async function InsightPreviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-surface min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/insights" 
          className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors mb-12"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Insights
        </Link>
        
        <AnimatedSection>
          <div className="mb-8">
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest px-3 py-1 bg-accent/10 rounded-full">
              {post.category}
            </span>
            <span className="text-sm text-foreground/50 font-medium ml-4">
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif text-primary mb-12 leading-[1.1]">
            {post.title}
          </h1>

          {post.imageUrl && (
            <div className="relative w-full h-80 md:h-[500px] rounded-2xl overflow-hidden mb-16 shadow-2xl">
              <Image 
                src={post.imageUrl} 
                alt={post.title} 
                fill 
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none text-foreground/80 font-light leading-relaxed relative">
            {/* We render a snippet of the HTML content */}
            <div 
              dangerouslySetInnerHTML={{ __html: post.content }} 
              className="line-clamp-[12] md:line-clamp-[15] overflow-hidden" 
            />
            
            {/* Fade out effect at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-surface to-transparent pointer-events-none" />
          </div>

          <div className="mt-16 pt-16 flex justify-center border-t border-primary/5">
            <Link 
              href={post.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-light text-white font-medium px-10 py-5 text-center transition-colors flex items-center justify-center rounded-sm shadow-xl hover:shadow-2xl hover:-translate-y-1 transform duration-300"
            >
              Continue Reading on Substack <ExternalLink size={20} className="ml-3" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
