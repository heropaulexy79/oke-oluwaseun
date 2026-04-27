import Image from "next/image";
import { Calendar, MapPin, Clock, ArrowRight, Target, Brain, ShieldAlert, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import WebinarRegistrationForm from "@/components/maximize/WebinarRegistrationForm";

export default function WebinarPage() {
  return (
    <div className="bg-[#050B1F] min-h-screen text-white selection:bg-accent selection:text-primary">
      {/* Background Aesthetic Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] left-[5%] w-px h-[60%] bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
      </div>

      <div className="relative z-10">
        {/* Navigation / Header Placeholder */}
        <header className="container mx-auto px-4 py-8 flex justify-between items-center">
            <div className="text-xl font-serif tracking-tighter flex items-center gap-2">
                OKE <span className="text-accent italic font-bold">OLUWASEUN</span>
            </div>
            <div className="hidden md:block text-[10px] uppercase tracking-[0.3em] text-white/50">
                Leadership • Identity • Impact
            </div>
        </header>

        {/* Hero Section */}
        <section className="pt-12 pb-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
                  <Sparkles size={14} className="text-accent" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent">Exclusive Webinar Session</span>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-tight tracking-tight">
                  Identity <br />
                  <span className="italic text-accent">Crisis</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-white/70 font-light max-w-xl leading-relaxed mb-12">
                  Uncovering the difference between who you are and who the world told you to be. 
                  A strategic session for visionaries seeking clarity in a noisy world.
                </p>

                <div className="space-y-6 mb-12">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Calendar className="text-accent" size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Date</p>
                      <p className="text-lg">April 26th, 2026</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Clock className="text-accent" size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Time</p>
                      <p className="text-lg">7:00 PM WAT</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <MapPin className="text-accent" size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Venue</p>
                      <p className="text-lg">Google Meet</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                    <a href="#register" className="bg-accent text-primary px-10 py-4 font-bold uppercase tracking-widest hover:bg-white transition-all shadow-2xl shadow-accent/20">
                        Secure Your Spot
                    </a>
                    <div className="text-xs uppercase tracking-widest text-white/40 font-bold">
                        FREE REGISTRATION
                    </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2} className="relative">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/5 group">
                  <Image
                    src="/new webinar flyer.jpg"
                    alt="Identity Crisis Webinar Flier"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B1F] via-transparent to-transparent opacity-60" />
                </div>
                
                {/* Abstract Hexagon from flier aesthetic */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/10 backdrop-blur-3xl rounded-full -z-10" />
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 backdrop-blur-3xl rounded-full -z-10" />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Discussion Topics */}
        <section className="py-24 bg-white/5 backdrop-blur-sm border-y border-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="text-center mb-16">
                <h2 className="text-sm uppercase tracking-[0.4em] text-accent font-bold mb-6">Inside The Session</h2>
                <h3 className="text-4xl md:text-5xl font-serif mb-8">What We Will Unpack</h3>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {[
                  {
                    icon: <Target className="text-accent" size={32} />,
                    title: "The Lost Echo",
                    desc: "Why so many people feel lost despite being busy and productive."
                  },
                  {
                    icon: <ShieldAlert className="text-accent" size={32} />,
                    title: "The Cost of Confusion",
                    desc: "Understanding how identity confusion drains your energy and resources."
                  },
                  {
                    icon: <Brain className="text-accent" size={32} />,
                    title: "Who Are You?",
                    desc: "Decoding the difference between your essence and the external world's expectations."
                  },
                  {
                    icon: <Sparkles className="text-accent" size={32} />,
                    title: "The Definition",
                    desc: "Practical steps to finally define yourself and walk in your authentic power."
                  }
                ].map((topic, i) => (
                  <AnimatedSection key={i} delay={0.1 * i} className="flex gap-6 p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                    <div className="shrink-0">{topic.icon}</div>
                    <div>
                      <h4 className="text-xl font-serif mb-3 italic">{topic.title}</h4>
                      <p className="text-white/60 leading-relaxed">{topic.desc}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Registration Section */}
        <section className="py-24 relative" id="register">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <AnimatedSection className="text-center mb-16">
                <h2 className="text-sm uppercase tracking-[0.4em] text-accent font-bold mb-6">Join Us</h2>
                <h3 className="text-4xl md:text-6xl font-serif mb-8">Register Now</h3>
                <p className="text-white/60">
                    Registration is compulsory but free. After registration, you will be automatically 
                    redirected to the WhatsApp community where the link will be shared.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="bg-[#0A1229] p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl rounded-full" />
                    <WebinarRegistrationForm />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-white/5 text-center">
            <AnimatedSection>
                <p className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold mb-4">
                    OKE OLUWASEUN • IDENTITY CRISIS WEBINAR 2026
                </p>
            </AnimatedSection>
        </footer>
      </div>
    </div>
  );
}
