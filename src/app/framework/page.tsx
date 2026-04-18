import Link from 'next/link';
import { ArrowDown, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata = {
  title: 'Transformation Framework | Oke Oluwaseun',
  description: 'The proprietary 5-stage architecture to move you from obscurity to legacy.',
};

export default function FrameworkPage() {
  const stages = [
    {
      id: "01",
      title: "Identity Revelation",
      meaning: "The foundational discovery of who you truly are, stripped of societal conditioning and past traumas.",
      problem: "Identity crisis, imposter syndrome, and misalignment with one's true calling.",
      outcome: "Absolute clarity, unwavering confidence, and alignment with your specific purpose.",
    },
    {
      id: "02",
      title: "Mindset Transformation",
      meaning: "The systematic renovation of thought patterns, paradigms, and belief systems.",
      problem: "Limiting beliefs, scarcity mentality, and self-sabotage.",
      outcome: "Expanded capacity, abundance mentality, and the psychological resilience needed for high-level leadership.",
    },
    {
      id: "03",
      title: "Leadership Activation",
      meaning: "The transition from self-management to the capacity to influence and command systems.",
      problem: "Inability to influence others, lack of executive presence, and poor team dynamics.",
      outcome: "Transformational authority, the ability to duplicate yourself in others, and strategic influence.",
    },
    {
      id: "04",
      title: "Purpose Deployment",
      meaning: "The strategic execution and mobilization of your activated potential into the marketplace or society.",
      problem: "Stored potential with zero impact, lack of execution strategy, and societal irrelevance.",
      outcome: "Measurable impact, value creation, and recognized authority in your sphere of influence.",
    },
    {
      id: "05",
      title: "Legacy Construction",
      meaning: "The architectural design of systems and successions that ensure your impact outlives you.",
      problem: "Short-lived success, organizational dependency on the founder, and historical obscurity.",
      outcome: "Generational impact, sustainable institutions, and immortalized influence.",
    }
  ];

  return (
    <div className="bg-surface min-h-screen">
      <section className="bg-primary pt-32 pb-24 md:py-48 text-center px-4 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_#112240_0%,_transparent_70%)] opacity-60"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        <AnimatedSection className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block py-1 px-4 border border-accent/30 rounded-full mb-8 backdrop-blur-sm">
            <span className="text-accent text-[10px] font-bold tracking-[0.3em] uppercase">Proprietary Methodology</span>
          </div>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif text-white mb-8 tracking-tight leading-[1.1]">
            The Architecture of <br/><span className="text-accent italic">Greatness</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
            A sequential, comprehensive framework designed to predictably reconstruct individuals and systems for global relevance.
          </p>
        </AnimatedSection>
        
        <div className="mt-20 flex justify-center relative z-10">
          <div className="h-24 w-[1px] bg-gradient-to-b from-accent to-transparent"></div>
        </div>
      </section>

      <section className="py-32 relative bg-white overflow-hidden">
        {/* Subtle texture for the content section */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#0A192F" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-primary/5 -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-32 relative z-10">
            {stages.map((stage, index) => (
              <AnimatedSection key={stage.id} delay={0.1 * index} className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}>
                {/* Timeline Node */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-primary/10 items-center justify-center z-20 shadow-xl">
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse"></div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2">
                  <div className="bg-white p-8 md:p-14 rounded-3xl border border-primary/5 shadow-[0_20px_50px_rgba(10,25,47,0.05)] hover:shadow-[0_20px_50px_rgba(10,25,47,0.1)] transition-all duration-500 group relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 text-[12rem] font-serif text-primary/[0.03] pointer-events-none group-hover:text-primary/[0.06] transition-colors select-none">
                      {stage.id}
                    </div>
                    
                    <span className="text-xl font-serif text-accent mb-4 block italic">Phase {stage.id}</span>
                    <h3 className="text-3xl md:text-4xl font-serif text-primary mb-8 tracking-tight">{stage.title}</h3>
                    
                    <div className="space-y-10">
                      <div>
                        <h4 className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-4 opacity-40">The Essence</h4>
                        <p className="text-foreground/80 leading-relaxed md:text-lg font-light italic">"{stage.meaning}"</p>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-6 pt-10 border-t border-primary/5">
                        <div className="flex gap-4">
                          <div className="mt-1 w-2 h-2 rounded-full bg-red-400 shrink-0"></div>
                          <div>
                            <h4 className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1 opacity-60">Challenge</h4>
                            <p className="text-sm text-foreground/70 leading-relaxed font-medium">{stage.problem}</p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="mt-1 w-2 h-2 rounded-full bg-green-400 shrink-0"></div>
                          <div>
                            <h4 className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1 opacity-60">Manifestation</h4>
                            <p className="text-sm text-foreground/70 leading-relaxed font-medium">{stage.outcome}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Side / Space */}
                <div className="w-full md:w-1/2 hidden md:block">
                  <div className={`p-10 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <div className="text-6xl lg:text-8xl font-serif text-primary/5 select-none leading-none">
                      {stage.title.split(' ')[0]}<br/>
                      <span className="pl-12">{stage.title.split(' ')[1]}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 bg-primary relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="circles" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#circles)" />
          </svg>
        </div>
        
        <AnimatedSection className="relative z-10 px-4">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-10 max-w-4xl mx-auto leading-tight">
            Ready to Traverse the <span className="text-accent italic">Architecture?</span>
          </h2>
          <Link href="/work-with-me" className="inline-flex items-center bg-accent text-primary px-12 py-6 font-bold hover:bg-accent-light transition-all text-xl tracking-widest shadow-[0_15px_40px_rgba(197,160,89,0.3)] hover:-translate-y-1">
            START YOUR JOURNEY <ArrowRight size={24} className="ml-3" />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
