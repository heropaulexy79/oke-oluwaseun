import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="mb-6 inline-block">
              <img src="/full main logo white.png" alt="Oke Oluwaseun Logo" className="h-12 w-auto" />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-xs">
              Unlocking Potentials. Transforming Leaders. Impacting Nations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif mb-6 text-accent">Transform</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li><Link href="/framework" className="hover:text-accent transition-colors">The Framework</Link></li>
              <li><Link href="/work-with-me" className="hover:text-accent transition-colors">Consulting</Link></li>
              <li><Link href="/work-with-me" className="hover:text-accent transition-colors">MAXIMIZE Academy</Link></li>
              <li><Link href="/speaking" className="hover:text-accent transition-colors">Book Speaking</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-serif mb-6 text-accent">Insights</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li><Link href="/insights" className="hover:text-accent transition-colors">Thought Leadership</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">Philosophy</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-serif mb-6 text-accent">The Movement</h4>
            <p className="text-white/70 text-sm mb-4">
              Join a global network of leaders transforming nations. First access to insights.
            </p>
            <form className="flex mt-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/10 border border-white/20 px-4 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:border-accent w-full"
              />
              <button 
                type="submit" 
                className="bg-accent text-primary px-4 py-2 hover:bg-accent-light transition-colors"
                aria-label="Subscribe"
              >
                <ArrowUpRight size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Oke Oluwaseun. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent">LinkedIn</a>
            <a href="#" className="hover:text-accent">Twitter</a>
            <a href="#" className="hover:text-accent">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
