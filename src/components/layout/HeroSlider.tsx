"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    image: '/hero_slide_1_new_1776512824971.png',
    titleLine1: 'Raising Leaders Who',
    titleLine2: 'Transform Nations',
    subtitle: "Most people don't fail because they lack skill. They fail because they lack identity.",
    primaryCta: 'Explore The Framework',
    primaryLink: '/framework',
  },
  {
    id: 2,
    image: '/hero_slide_2_new_1776512884150.png',
    titleLine1: 'Architecting',
    titleLine2: 'Generational Legacy',
    subtitle: "You cannot build a meaningful life with borrowed attention. Success is achieved in a lifetime; legacy outlives you.",
    primaryCta: 'Work With Me',
    primaryLink: '/work-with-me',
  },
  {
    id: 3,
    image: '/hero_slide_3_new_1776512971338.png',
    titleLine1: 'Unlock Your',
    titleLine2: 'Highest Potential',
    subtitle: "A mind transformed is a world changed. We unlock your identity and deploy your purpose on a global scale.",
    primaryCta: 'Read Insights',
    primaryLink: '/insights',
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full bg-primary overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slides[current].image}
            alt="Hero Background"
            fill
            className="object-cover object-center opacity-60"
            priority
          />
          {/* Subtle gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/80" />
        </motion.div>
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-full flex items-center">
        <div className="max-w-4xl pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${current}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-[1.1] mb-8">
                {slides[current].titleLine1} <br />
                <span className="text-accent italic">{slides[current].titleLine2}</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl leading-relaxed mb-12 border-l-2 border-accent pl-6">
                {slides[current].subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href={slides[current].primaryLink} className="bg-accent hover:bg-accent-light text-primary font-medium px-8 py-4 text-center transition-colors flex items-center justify-center rounded-sm">
                  {slides[current].primaryCta} <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link href="/contact" className="border border-white/30 hover:border-white text-white px-8 py-4 text-center transition-colors rounded-sm backdrop-blur-sm bg-white/5">
                  Book to Speak
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1 transition-all duration-300 rounded-full ${
              current === idx ? 'w-12 bg-accent' : 'w-4 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
