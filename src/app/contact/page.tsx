import { Mail, MapPin } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata = {
  title: 'Contact | Oke Oluwaseun',
  description: 'Get in touch for coaching, consulting, and speaking engagements.',
};

export default function ContactPage() {
  return (
    <div className="bg-surface min-h-screen">
      <section className="bg-primary pt-32 pb-24 px-4 text-center">
        <AnimatedSection className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Start the <span className="text-accent italic">Conversation</span></h1>
          <p className="text-xl text-white/70">
            For speaking engagements, strategic consulting, or executive coaching inquiries.
          </p>
        </AnimatedSection>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <AnimatedSection>
              <h2 className="text-3xl font-serif text-primary mb-8">Direct Inquiries</h2>
              <p className="text-foreground/70 mb-10 leading-relaxed">
                We selectively partner with leaders and organizations dedicated to genuine, lasting transformation. Fill out the form, and our office will get in touch within 48 hours.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-primary/5 p-3 rounded-full text-accent mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Email</h4>
                    <p className="text-foreground/70 text-sm">office@okeoluwaseun.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/5 p-3 rounded-full text-accent mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Global Office</h4>
                    <p className="text-foreground/70 text-sm">Available for international engagements.<br/>Based in London, UK.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="bg-white p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-primary/5 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[100px] pointer-events-none"></div>
              <form className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="firstName" className="block text-[10px] font-bold text-primary uppercase tracking-widest mb-2">First Name</label>
                    <input type="text" id="firstName" className="w-full border-b border-primary/20 bg-transparent py-2 focus:outline-none focus:border-accent transition-colors text-sm" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-[10px] font-bold text-primary uppercase tracking-widest mb-2">Last Name</label>
                    <input type="text" id="lastName" className="w-full border-b border-primary/20 bg-transparent py-2 focus:outline-none focus:border-accent transition-colors text-sm" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-[10px] font-bold text-primary uppercase tracking-widest mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full border-b border-primary/20 bg-transparent py-2 focus:outline-none focus:border-accent transition-colors text-sm" placeholder="john@example.com" />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-[10px] font-bold text-primary uppercase tracking-widest mb-2">Subject of Inquiry</label>
                  <select id="subject" className="w-full border-b border-primary/20 bg-transparent py-2 focus:outline-none focus:border-accent transition-colors text-foreground/70 text-sm">
                    <option value="">Select an option</option>
                    <option value="Executive Coaching">Executive Coaching</option>
                    <option value="MAXIMIZE Academy">MAXIMIZE Academy</option>
                    <option value="Speaking Engagement">Speaking Engagement</option>
                    <option value="Consulting">Consulting Advisory</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-[10px] font-bold text-primary uppercase tracking-widest mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full border-b border-primary/20 bg-transparent py-2 focus:outline-none focus:border-accent transition-colors resize-none text-sm" placeholder="Tell us about yourself and what you're looking to achieve..."></textarea>
                </div>
                
                <button type="button" className="w-full bg-primary text-white font-medium py-4 hover:bg-primary-light transition-colors mt-4 text-sm tracking-wide">
                  Send Message
                </button>
              </form>
            </AnimatedSection>
            
          </div>
        </div>
      </section>
    </div>
  );
}
