import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata = {
  title: 'Speaking | Oke Oluwaseun',
  description: 'Book Oke Oluwaseun for keynotes, conferences, and seminars globally.',
};

export default function SpeakingPage() {
  const topics = [
    {
      title: "The Architecture of Greatness",
      desc: "An exploration of the 5-stage transformation framework. Perfect for leadership summits and corporate retreats."
    },
    {
      title: "Leading from Identity",
      desc: "Why traditional management fails and how authentic authority is generated from within. Ideal for executive offsites."
    },
    {
      title: "Nation Building & Systemic Transformation",
      desc: "A macro-level keynote for governmental bodies and policy makers on constructing values-based civilizations."
    }
  ];

  return (
    <div className="bg-surface min-h-screen">
      <section className="relative bg-primary pt-32 pb-24 md:py-40 px-4 text-center overflow-hidden">
        <AnimatedSection className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-7xl font-serif text-white mb-6">A Voice for <span className="text-accent italic">Transformation</span></h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
            Provocative, perspective-shifting, and profoundly actionable keynotes that leave audiences permanently altered.
          </p>
          <Link href="/contact?subject=Booking%20Inquiry" className="inline-flex items-center bg-accent text-primary px-8 py-4 font-semibold hover:bg-accent-light transition">
            Book Oke to Speak <Calendar className="ml-2" size={20} />
          </Link>
        </AnimatedSection>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <img src="/Mr Paul 4.jpg" alt="Oke Speaking" className="w-full aspect-video object-cover shadow-2xl" />
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <h2 className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-4">The Experience</h2>
              <h3 className="text-3xl md:text-4xl font-serif text-primary mb-6">Not Just Motivation. <br/>A Paradigm Shift.</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Oke Oluwaseun does not deliver generic motivational speeches. He delivers structural blueprints. His sessions are meticulously crafted to dismantle limiting beliefs and architect new frameworks of possibility within the minds of the audience.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Whether speaking to an intimate boardroom of 10 executives or an auditorium of 10,000, his delivery is characterized by intense clarity, authoritative depth, and an undeniable presence.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center md:text-left mb-12">
            <h2 className="text-3xl font-serif text-primary">Signature Topics</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topics.map((topic, idx) => (
              <AnimatedSection key={idx} delay={0.1 * idx} className="bg-white p-8 border border-primary/10 border-t-4 border-t-accent hover:shadow-lg transition-all">
                <h3 className="text-xl font-serif text-primary mb-4">{topic.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{topic.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-primary text-white text-center">
        <AnimatedSection className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-serif mb-6">MAXIMIZE Conference</h2>
          <p className="text-white/70 text-lg mb-8">
            The annual flagship gathering of transformational leaders, innovators, and nation-builders hosted by Oke Oluwaseun. Join the waitlist for the next edition.
          </p>
          <Link href="/contact?subject=MAXIMIZE%20Conference%20Waitlist" className="inline-flex items-center text-accent hover:text-white transition border-b border-accent pb-1">
            Join the Waitlist <ArrowRight size={16} className="ml-2" />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
