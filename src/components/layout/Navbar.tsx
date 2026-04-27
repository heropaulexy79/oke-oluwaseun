"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Framework", path: "/framework" },
    { name: "Work With Me", path: "/work-with-me" },
    { name: "Speaking", path: "/speaking" },
    { name: "Insights", path: "/insights" },
    { name: "Book", path: "/book" },
    { name: "Contact", path: "/contact" },
  ];

  // Logic to determine if we should be transparent or solid
  // On Homepage and major sections, we want transparency on top because of the Navy headers.
  const isTransparent = !scrolled && (
    pathname === "/maximize-nation" || 
    pathname === "/" || 
    pathname === "/insights" || 
    pathname.startsWith("/insights/") || 
    pathname === "/framework" || 
    pathname === "/work-with-me" || 
    pathname === "/speaking" || 
    pathname === "/about" ||
    pathname === "/book" ||
    pathname === "/contact"
  );

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isTransparent 
          ? "bg-transparent py-8" 
          : "bg-white/90 backdrop-blur-lg shadow-xl shadow-primary/5 py-4 border-b border-primary/5"
      }`}
    >
      {/* Subtle safety gradient for transparent state to ensure readability on any background */}
      {isTransparent && (
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-transparent -z-10 h-32 pointer-events-none" />
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" onClick={() => setIsOpen(false)} className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
            {isTransparent ? (
              <img src="/full main logo white.png" alt="Oke Oluwaseun Logo" className="h-10 md:h-12 w-auto" />
            ) : (
              <img src="/full main logo blue.png" alt="Oke Oluwaseun Logo" className="h-9 md:h-10 w-auto" />
            )}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-[13px] uppercase tracking-[0.15em] font-medium transition-all duration-300 relative group ${
                  pathname === link.path
                    ? "text-accent"
                    : isTransparent ? "text-white/90 hover:text-accent" : "text-primary hover:text-accent"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-accent transition-all duration-300 ${pathname === link.path ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${isTransparent ? "text-white" : "text-primary"}`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div 
        className={`md:hidden absolute top-0 left-0 w-full h-screen bg-primary z-[60] flex flex-col items-center justify-center transition-all duration-500 transform ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
        >
          <X size={32} />
        </button>
        
        <div className="flex flex-col space-y-8 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-serif tracking-wide transition-all ${
                pathname === link.path ? "text-accent text-3xl italic" : "text-white hover:text-accent"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <div className="mt-20 border-t border-white/10 pt-10 w-48 text-center">
          <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold">Unlocking Identity</p>
        </div>
      </div>
    </nav>
  );
}
