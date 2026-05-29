"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function LocationCard() {
  return (
    <section className="pt-8 pb-16 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-stone-50 p-8 md:p-12 lg:p-16 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl"
        >
          {/* Background Map Pattern (Abstract Topographic Lines / Grid) */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-stone-50" />
                </pattern>
                <pattern id="dotPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="currentColor" className="text-stone-50" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#gridPattern)" />
              <rect width="100%" height="100%" fill="url(#dotPattern)" opacity="0.5" />
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10 flex items-center gap-6">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
              <MapPin className="text-stone-50 w-8 h-8" />
            </div>
            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-stone-50 mb-2">
                Headquartered in Sugar Land, Texas
              </h3>
              <p className="text-stone-300 font-light text-lg">
                United States
              </p>
            </div>
          </div>

          {/* Action */}
          <div className="relative z-10">
            <a 
              href="https://maps.google.com/?q=Sugar+Land,+Texas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white transition-all duration-300 rounded-xl font-medium tracking-wide uppercase text-sm shadow-[0_0_15px_rgba(184,134,11,0.2)] hover:shadow-[0_0_25px_rgba(184,134,11,0.4)]"
            >
              View on Google Maps
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
