import Image from "next/image";
import { ArrowRight, Calendar, MapPin, Users, GraduationCap, Trophy } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import RegistrationForm from "@/components/maximize/RegistrationForm";
import Link from "next/link";

export default function MaximizeNationPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/70 z-10" />
          <Image
            src="/max conference.JPG"
            alt="Maximize Nation"
            fill
            className="object-cover opacity-40 scale-105 animate-pulse-slow"
            priority
          />
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <div className="inline-block px-4 py-1.5 mb-6 border border-accent/30 rounded-full bg-accent/5 backdrop-blur-sm">
                <span className="text-accent text-[10px] uppercase tracking-[0.3em] font-bold">The Transformation Movement</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 tracking-tight leading-none">
                Maximize <span className="text-accent italic">Nation</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed mb-12">
                A global community of high-impact leaders committed to identity discovery, 
                leadership activation, and institutional building.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href="#registration" className="bg-accent text-primary px-10 py-4 font-bold uppercase tracking-widest hover:bg-white transition-all shadow-xl shadow-accent/10">
                  Join The Movement
                </a>
                <a href="#expressions" className="text-white flex items-center gap-2 font-medium hover:text-accent transition-colors">
                  Explore Expressions <ArrowRight size={20} />
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
        
        {/* Subtle scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
          <div className="w-[1px] h-12 bg-accent/50" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-surface" id="expressions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection>
              <h2 className="text-sm uppercase tracking-[0.3em] text-accent font-bold mb-6">Our Vision</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-primary mb-8 leading-tight">
                One Nation, Infinite Expressions.
              </h3>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Maximize Nation is not just an organization; it is a mindset. Through various expressions 
                like our annual conference, campus tours, and leadership cohorts, we are raising a 
                generation that refuses to settle for average.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-accent text-4xl font-serif mb-2">5,000+</div>
                  <p className="text-sm text-foreground/50 uppercase tracking-widest font-bold">Lives Impacted</p>
                </div>
                <div>
                  <div className="text-accent text-4xl font-serif mb-2">12+</div>
                  <p className="text-sm text-foreground/50 uppercase tracking-widest font-bold">Cities Reached</p>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <Users size={24} />, title: "Community", desc: "A network of visionaries." },
                { icon: <GraduationCap size={24} />, title: "Training", desc: "Proprietary leadership labs." },
                { icon: <Trophy size={24} />, title: "Excellence", desc: "Commitment to global standards." },
                { icon: <Calendar size={24} />, title: "Events", desc: "High-impact gatherings." },
              ].map((item, idx) => (
                <AnimatedSection key={idx} delay={0.1 * idx} className="p-8 bg-white border border-primary/5 shadow-sm hover:shadow-xl transition-all">
                  <div className="text-accent mb-4">{item.icon}</div>
                  <h4 className="text-xl font-serif text-primary mb-2">{item.title}</h4>
                  <p className="text-foreground/60 text-sm whitespace-nowrap">{item.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Maximize Conference 2025 Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1 relative">
              <AnimatedSection className="relative aspect-video lg:aspect-square">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-accent z-10" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-accent z-10" />
                <Image
                  src="/maximize-conference1.JPG"
                  alt="Maximize Conference 2025"
                  fill
                  className="object-cover"
                />
              </AnimatedSection>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <AnimatedSection>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-[1px] bg-accent" />
                  <span className="text-accent text-sm uppercase tracking-widest font-bold">Flashback</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-serif text-primary mb-6">Maximize Conference 2025</h3>
                <p className="text-lg text-foreground/70 mb-8 italic">"The Awakening of Giants"</p>
                <p className="text-foreground/60 mb-8 leading-relaxed">
                  In 2025, we gathered thousands of thinkers and doers for a weekend of strategic illumination. 
                  It was more than a conference; it was a shift in consciousness that produced leaders 
                  now building impactful institutions across sectors.
                </p>
                <Link href="/insights" className="inline-flex items-center text-primary font-bold hover:text-accent transition-colors">
                  View Photo Highlights <ArrowRight size={18} className="ml-2" />
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Maximize Campus Tour 2025 Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <AnimatedSection>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-[1px] bg-accent" />
                  <span className="text-accent text-sm uppercase tracking-widest font-bold">On The Road</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-serif text-primary mb-6">Maximize Campus Tour 2025</h3>
                <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                  Taking the message of transformation to the halls of academia. Our 2025 
                  Campus Tour visited over 10 institutions, igniting purpose in the hearts 
                  of emerging student leaders. We believe the future of any nation 
                  resides in its academic landscapes.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Identity & Self-Mastery Workshops",
                    "Strategic Career Pathing",
                    "Student Leadership Activations",
                    "Mentorship Matching Sessions"
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>
            <div className="lg:w-1/2 relative">
              <AnimatedSection className="relative aspect-video lg:aspect-square">
                <Image
                  src="/campus tour1.jpg"
                  alt="Maximize Campus Tour 2025"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px]" />
                <div className="absolute bottom-8 left-8 bg-white p-6 shadow-2xl max-w-xs">
                  <p className="text-primary font-serif text-lg mb-2">"This tour changed the trajectory of my final year."</p>
                  <p className="text-accent text-xs font-bold uppercase tracking-widest">— Olamide, Student Leader</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Registration 2026 Section */}
      <section className="py-24 bg-primary relative overflow-hidden" id="registration">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <AnimatedSection>
              <h2 className="text-sm uppercase tracking-[0.4em] text-accent font-bold mb-6">Upcoming Event</h2>
              <h3 className="text-4xl md:text-6xl font-serif text-white mb-8">Maximize Conference 2026</h3>
              <p className="text-xl text-white/60 mb-12">
                Secure your spot for the most anticipated leadership gathering of the year. 
                Experience transformation like never before. <span className="text-accent">Access is free but registration is compulsory.</span>
              </p>
              
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                <div className="flex items-center gap-3 text-white/80">
                  <Calendar className="text-accent" size={24} />
                  <span>27th June, 2026</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <MapPin className="text-accent" size={24} />
                  <span>Eridan Space, Ikeja</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.2} className="max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl">
              <RegistrationForm />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer Teaser */}
      <section className="py-16 bg-background border-t border-primary/5 text-center">
        <AnimatedSection>
          <div className="mb-8">
            {/* Logo Placeholder */}
            <div className="text-2xl font-serif text-primary tracking-tighter inline-flex items-center gap-1">
              MAXIMIZE <span className="text-accent italic font-bold">NATION</span>
            </div>
          </div>
          <p className="text-foreground/40 text-[10px] uppercase tracking-[0.5em] font-medium mb-4">
            Unlocking Identity • Activating Leadership
          </p>
        </AnimatedSection>
      </section>
    </div>
  );
}
