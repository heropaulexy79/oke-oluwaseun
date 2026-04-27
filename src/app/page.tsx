import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ExternalLink } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import HeroSlider from '@/components/layout/HeroSlider';
import { getAllPosts } from '@/lib/cms';

// Always fetch live Substack posts on every request — no caching
export const revalidate = 0;

export default async function Home() {
  const posts = await getAllPosts();
  const recentPosts = posts.slice(0, 3);
  return (
    <>
      <HeroSlider />

      {/* Intro Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-4">The Architect</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-primary mb-8 leading-tight">
                Strategic Leadership Thinker & Transformation Architect.
              </h3>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Oke Oluwaseun helps individuals, organizations, and governments unlock identity, activate leadership, and create lasting impact globally.
              </p>
              <Link href="/about" className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors pb-1 border-b border-primary hover:border-accent">
                Read The Full Story <ArrowRight size={16} className="ml-2" />
              </Link>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} className="relative aspect-[4/5] bg-gray-200">
              <div className="absolute inset-0 bg-primary flex items-center justify-center -z-10 translate-x-4 translate-y-4 shadow-xl" />
              <img src="/Mr Paul 2.jpg" alt="Oke Oluwaseun" className="object-cover w-full h-full" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Framework Preview */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-4">Proprietary Methodology</h2>
            <h3 className="text-3xl md:text-5xl font-serif mb-6">The Transformation Framework</h3>
            <p className="text-white/70 text-lg">A five-stage architecture designed to move you from obscurity to legacy.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {['Identity Revelation', 'Mindset Transformation', 'Leadership Activation', 'Purpose Deployment', 'Legacy Construction'].map((stage, idx) => (
              <AnimatedSection key={idx} delay={0.1 * idx} className="border border-white/10 p-6 hover:bg-white/5 transition-colors group cursor-pointer">
                <div className="text-4xl font-serif text-white/20 mb-4 group-hover:text-accent transition-colors">0{idx + 1}</div>
                <h4 className="text-xl font-serif mb-2">{stage}</h4>
                <div className="w-8 h-[1px] bg-accent group-hover:w-full transition-all duration-300" />
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/framework" className="inline-flex items-center text-white hover:text-accent transition-colors border border-white/20 px-8 py-3">
              View Detailed Framework <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonial / Impact Preview */}
      <section className="py-24 bg-surface text-center">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-accent mb-8">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="mx-auto opacity-50">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-4xl font-serif text-primary leading-tight mb-8">
              "When you build people from the inside out, the impact on their world becomes inevitable. That is the essence of true transformation."
            </h3>
            <p className="text-foreground/60 uppercase tracking-widest text-sm font-semibold">— Oke Oluwaseun</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Maximize Nation Teaser */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/max conference.JPG" 
            alt="Maximize Nation Background" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-sm uppercase tracking-[0.3em] text-accent font-bold mb-4">The Movement</h2>
              <h3 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
                Maximize <span className="text-accent italic">Nation</span>
              </h3>
              <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-xl">
                More than a community, it is an architecture for global impact. Join thousands of 
                value-driven leaders dedicated to transformation across various expressions.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link href="/maximize-nation" className="bg-accent text-primary px-8 py-4 font-bold uppercase tracking-widest hover:bg-white transition-all">
                  Join The Movement
                </Link>
                <Link href="/maximize-nation#registration" className="border border-white/20 text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
                  Register for 2026
                </Link>
              </div>
            </AnimatedSection>
            
            <div className="grid grid-cols-2 gap-4 h-[400px]">
              <AnimatedSection delay={0.2} className="relative rounded-2xl overflow-hidden mt-12">
                <Image src="/maximize-conference1.JPG" alt="Maximize Conference" fill className="object-cover" />
                <div className="absolute inset-0 bg-primary/20" />
                <div className="absolute bottom-4 left-4 text-white text-[10px] uppercase tracking-widest font-bold">Conference</div>
              </AnimatedSection>
              <AnimatedSection delay={0.4} className="relative rounded-2xl overflow-hidden mb-12">
                <Image src="/campus tour1.jpg" alt="Campus Tour" fill className="object-cover" />
                <div className="absolute inset-0 bg-primary/20" />
                <div className="absolute bottom-4 left-4 text-white text-[10px] uppercase tracking-widest font-bold">Campus Tour</div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-24 bg-surface border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <AnimatedSection className="max-w-2xl">
              <h2 className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-4">Insights & Thinking</h2>
              <h3 className="text-3xl md:text-5xl font-serif text-primary">Latest Perspectives</h3>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="hidden md:block">
              <Link href="/insights" className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors pb-1 border-b border-primary hover:border-accent">
                View All Insights <ArrowRight size={16} className="ml-2" />
              </Link>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post, idx) => (
              <AnimatedSection key={post.slug} delay={0.1 * idx} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl border border-primary/5 transition-all duration-500 group flex flex-col h-full transform hover:-translate-y-2">
                {post.imageUrl && (
                  <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                    <Image 
                      src={post.imageUrl} 
                      alt={post.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{post.category}</span>
                    <span className="text-xs text-foreground/40 font-medium">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <h4 className="text-2xl font-serif text-primary mb-3 leading-snug group-hover:text-accent transition-colors">
                    <Link href={`/insights/${post.slug}`} className="line-clamp-2">
                      {post.title}
                    </Link>
                  </h4>
                  <p className="text-foreground/60 leading-relaxed mb-8 text-sm flex-grow line-clamp-3 font-light">
                    {post.excerpt}
                  </p>
                  <Link href={`/insights/${post.slug}`} className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors mt-auto group-hover:gap-2">
                    Preview Insight <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link href="/insights" className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors pb-1 border-b border-primary hover:border-accent">
              View All Insights <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary pt-20 px-8 pb-24 md:p-24 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent via-primary to-primary"></div>
            <AnimatedSection className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Ready to Accelerate Your Impact?</h2>
              <p className="text-lg text-white/70 mb-10">Whether you are an individual pursuing greatness or an organization aiming for legacy, the time to build is now.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/book" className="bg-accent text-primary px-8 py-4 font-bold uppercase tracking-widest hover:bg-white transition-all">
                  Book a Session
                </Link>
                <Link href="/work-with-me" className="bg-transparent border border-white/30 text-white px-8 py-4 hover:border-white transition font-bold uppercase tracking-widest">
                  Partner with Me
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
