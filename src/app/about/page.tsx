import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata = {
  title: 'About | Oke Oluwaseun',
  description: 'The story and philosophy of Oke Oluwaseun: Identity, Leadership, Impact.',
};

export default function AboutPage() {
  return (
    <div className="bg-surface min-h-screen">
      {/* Page Header */}
      <section className="bg-primary text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif mb-6 text-white tracking-tight">
              Driven by <span className="text-accent italic">Purpose</span>, Defined by Impact.
            </h1>
            <p className="text-xl text-white/80 font-light leading-relaxed">
              Oke Oluwaseun is more than a consultant; he is an architect of human and organizational potential. His calling is to awaken the identity of leaders globally.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* The Journey */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <AnimatedSection>
                <div className="sticky top-32">
                  <h2 className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-4">The Journey</h2>
                  <h3 className="text-3xl md:text-4xl font-serif text-primary mb-6">A Calling to Transform.</h3>
                  <div className="w-12 h-[2px] bg-accent mb-8" />
                  <img src="/Mr Paul 3.jpg" alt="Oke Oluwaseun Portrait" className="w-full aspect-[4/5] object-cover shadow-2xl" />
                </div>
              </AnimatedSection>
            </div>
            
            <div className="lg:col-span-7 prose prose-lg md:prose-xl prose-slate h-full flex flex-col justify-center text-foreground/80 space-y-6 pt-12 lg:pt-0">
              <AnimatedSection delay={0.2}>
                <p className="mb-6">
                  From his early years, Oke Oluwaseun understood that the crises plaguing human society—from individual failures to national stagnation—are rarely a result of inadequate resources. They are crises of leadership rooted in a profound loss of identity.
                </p>
                <p className="mb-6">
                  With over a decade of experience advising executives, governmental figures, and aspiring leaders, Oke has developed a reputation for piercing through superficial symptoms and addressing the root causes of systemic limitations.
                </p>
                <h4 className="text-2xl font-serif text-primary mt-12 mb-4 font-semibold">The Core Philosophy</h4>
                <p className="mb-6">
                  At the heart of his methodology lies a simple yet profound truth: <strong>Identity determines capability.</strong> Before one can activate leadership or construct a legacy, they must first experience an Identity Revelation. 
                </p>
                <p className="mb-6">
                  This holistic approach ensures that transformations are not merely cosmetic adjustments to behavior, but deep, structural rebuilds of mindset and purpose.
                </p>
                
                <blockquote className="border-l-4 border-accent pl-8 py-4 my-12 text-2xl font-serif text-primary italic bg-primary/5 rounded-r">
                  "We do not build nations by making policies first. We build nations by making men. When the man is right, his policies will heal his world."
                </blockquote>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision & Mission */}
      <section className="bg-primary text-white py-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
               <AnimatedSection className="border border-white/10 p-10 lg:p-16 hover:border-accent transition-colors bg-white/5">
                  <h3 className="text-3xl font-serif text-accent mb-6">The Mission</h3>
                  <p className="text-white/80 leading-relaxed text-lg">
                    To meticulously equip, activate, and deploy individuals and systems that will rewrite the narratives of families, corporations, and nations through values-based leadership and accurate identity.
                  </p>
               </AnimatedSection>
               <AnimatedSection delay={0.2} className="border border-white/10 p-10 lg:p-16 hover:border-accent transition-colors bg-white/5">
                  <h3 className="text-3xl font-serif text-accent mb-6">The Vision</h3>
                  <p className="text-white/80 leading-relaxed text-lg">
                    A global movement of enlightened leaders operating at the zenith of their potential—architecting legacies that outlive them and constructing civilizations reflective of divine excellence.
                  </p>
               </AnimatedSection>
            </div>
         </div>
      </section>
      
      {/* Call to action */}
      <section className="py-24 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8">Begin Your Transformation</h2>
          <Link href="/framework" className="inline-flex items-center bg-accent text-primary font-medium px-8 py-4 hover:bg-accent-light transition-colors shadow-lg">
            Discover The Framework <ArrowRight size={20} className="ml-2" />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
