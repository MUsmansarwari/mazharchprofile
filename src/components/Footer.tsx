"use client";

import { Linkedin, MapPin } from "lucide-react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <footer 
      className="group relative overflow-hidden bg-slate-900 text-stone-50 pt-16 pb-8 px-6"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 hidden md:block"
        style={{
          maskImage: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
          WebkitMaskImage: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#B8860B_1px,transparent_1px),linear-gradient(to_bottom,#B8860B_1px,transparent_1px)] bg-[size:32px_32px] opacity-20"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10 pointer-events-auto">
        
        {/* Top Section - CTA */}
        <div className="text-center mb-24 md:mb-32">
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-10 leading-[1.1]">
            Let's Build Something <br className="hidden md:block" />
            <span className="text-theme-gold italic font-light">Exceptional.</span>
          </h2>
          <button className="bg-theme-gold hover:bg-theme-goldMuted text-white px-10 py-5 rounded-full font-medium text-lg transition-all duration-300 shadow-lg shadow-theme-gold/20 hover:scale-105 active:scale-95">
            Get in Touch
          </button>
        </div>

        {/* Middle Section - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16 border-t border-theme-gold/20 pt-16">
          
          {/* Column 1: About */}
          <div className="md:pr-8">
            <Link href="#home" className="inline-block mb-6">
              <Image 
                src="/logo-light.webp" 
                alt="Mazhar Chaudhary" 
                width={600} 
                height={180} 
                className="object-contain w-48 md:w-56 h-auto"
              />
            </Link>
            <p className="text-theme-ivory/70 font-light leading-relaxed text-lg">
              Mazhar Chaudhary — Healthcare & Employee Benefits Consultant, and Philanthropist.
            </p>
          </div>

          {/* Column 2: Companies */}
          <div>
            <h4 className="text-white font-serif text-2xl mb-6">Organizations</h4>
            <ul className="space-y-4 text-theme-ivory/70 font-light">
              <li className="hover:text-theme-gold transition-colors cursor-default">PrimeLife Financial LLC</li>
              <li className="hover:text-theme-gold transition-colors cursor-default">Digital Rhodium LLC</li>
              <li className="hover:text-theme-gold transition-colors cursor-default">Colonial Life</li>
              <li className="hover:text-theme-gold transition-colors cursor-default">Allys International</li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-white font-serif text-2xl mb-6">Connect</h4>
            <ul className="space-y-5 text-theme-ivory/70 font-light">
              <li className="flex items-start gap-4">
                <MapPin className="text-theme-gold shrink-0 mt-1" size={20} />
                <span>Sugar Land, Texas,<br />United States</span>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/mazharchaudhary" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:text-theme-gold transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-theme-gold/10 flex items-center justify-center group-hover:bg-theme-gold group-hover:text-white transition-colors">
                    <Linkedin className="text-theme-gold group-hover:text-white transition-colors" size={18} />
                  </div>
                  <span>LinkedIn Profile</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-theme-gold/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-theme-ivory/40 text-sm font-light">
          <p>© {new Date().getFullYear()} Mazhar Chaudhary. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-theme-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-theme-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-theme-gold/5 blur-[120px] rounded-t-full pointer-events-none z-0" />
    </footer>
  );
}
