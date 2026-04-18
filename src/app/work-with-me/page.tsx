import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata = {
  title: 'Work With Me | Oke Oluwaseun',
  description: 'Coaching, Consulting, and Advisory for Individuals, Organizations, and Governments.',
};

export default function WorkWithMePage() {
  return (
    <div className="bg-surface min-h-screen">
      <section className="bg-primary pt-32 pb-24 md:py-40 px-4 text-center">
        <AnimatedSection className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-serif text-white mb-6">Partner For <span className="text-accent italic">Impact</span></h1>
          <p className="text-xl text-white/70">
            Tailored transformation for individuals, high-growth organizations, and nations.
          </p>
        </AnimatedSection>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-serif text-primary mb-12 border-b border-primary/10 pb-6">For Individuals</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection className="bg-white p-10 border border-primary/5 shadow-sm hover:shadow-xl transition-all">
              <h3 className="text-2xl font-serif text-primary mb-4">Executive Coaching</h3>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                One-on-one high-level advisory for executives, founders, and leaders looking to navigate complex transitions, scale their influence, and architect sustainable legacy.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start"><CheckCircle2 className="text-accent mr-3 min-w-5" size={20} /> <span className="text-sm">Identity mapping & purpose alignment</span></li>
                <li className="flex items-start"><CheckCircle2 className="text-accent mr-3 min-w-5" size={20} /> <span className="text-sm">Leadership capacity expansion</span></li>
                <li className="flex items-start"><CheckCircle2 className="text-accent mr-3 min-w-5" size={20} /> <span className="text-sm">Strategic blind-spot illumination</span></li>
              </ul>
              <Link href="/contact?subject=Executive%20Coaching" className="inline-flex items-center text-primary font-semibold hover:text-accent transition">
                Apply for Coaching <ArrowRight size={16} className="ml-2" />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="bg-primary text-white p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 22h20L12 2zm0 3.83L18.17 19H5.83L12 5.83z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-accent mb-4 relative z-10">MAXIMIZE Academy</h3>
              <p className="text-white/80 mb-8 leading-relaxed relative z-10">
                A premier leadership institution designed to take emerging and established leaders through the 5-stage Transformation Framework in a cohort-based environment.
              </p>
              <ul className="space-y-4 mb-10 text-white/90 relative z-10">
                <li className="flex items-start"><CheckCircle2 className="text-accent mr-3 min-w-5" size={20} /> <span className="text-sm">Intensive framework integration</span></li>
                <li className="flex items-start"><CheckCircle2 className="text-accent mr-3 min-w-5" size={20} /> <span className="text-sm">Global peer network</span></li>
                <li className="flex items-start"><CheckCircle2 className="text-accent mr-3 min-w-5" size={20} /> <span className="text-sm">Actionable deployment strategy</span></li>
              </ul>
              <Link href="/contact?subject=MAXIMIZE%20Academy" className="inline-flex items-center bg-accent text-primary px-6 py-3 font-medium hover:bg-accent-light transition relative z-10 shadow-lg">
                Join the Next Cohort <ArrowRight size={16} className="ml-2" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-serif text-primary mb-12 border-b border-primary/10 pb-6">For Organizations & Governments</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Leadership Consulting",
                desc: "Diagnosing organizational culture and restructuring management paradigms to foster high-performance teams driven by internalized values rather than compliance."
              },
              {
                title: "Strategy & Policy Advisory",
                desc: "Working with governmental bodies and corporate boards to design policies that align with long-term national or organizational vision."
              },
              {
                title: "Executive Training",
                desc: "Customized seminars and systemic training programs tailored to equip your C-suite and middle management with transformational authority."
              }
            ].map((service, idx) => (
              <AnimatedSection key={idx} delay={0.1 * idx} className="bg-white p-8 border border-primary/10 hover:border-accent transition-colors shadow-sm">
                <h3 className="text-xl font-serif text-primary mb-4">{service.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-8">{service.desc}</p>
                <Link href={`/contact?subject=${encodeURIComponent(service.title)}`} className="text-accent font-semibold hover:text-primary transition flex items-center text-sm">
                  Inquire <ArrowRight size={14} className="ml-1" />
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
