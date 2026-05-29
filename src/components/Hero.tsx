"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import AmbientOrbs from "@/components/backgrounds/AmbientOrbs";

export default function Hero() {
  return (
    <section id="home" className="relative z-0 min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      <AmbientOrbs />
      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left/Content Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-start space-y-8 max-w-2xl bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 lg:p-10 lg:-mr-12 relative z-20"
        >
          <div className="space-y-4">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-theme-gold font-medium tracking-wider uppercase text-sm"
            >
              Visionary Leadership • Healthcare Excellence
            </motion.p>
            <h1 className="text-5xl md:text-7xl font-serif text-theme-navy leading-[1.1]">
              Transforming <br />
              <span className="italic font-light text-theme-gold">Healthcare</span> <br />
              for Tomorrow.
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-theme-navy/70 max-w-lg font-light leading-relaxed">
            I am Mazhar Chaudhary, a passionate healthcare consultant, philanthropist, and CEO dedicated to driving sustainable impact and operational excellence across organizations globally.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-theme-gold hover:bg-theme-goldMuted text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-colors w-full sm:w-auto justify-center shadow-lg shadow-theme-gold/20"
            >
              Discover My Work
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-medium text-theme-navy border border-theme-navy/20 hover:border-theme-navy/50 transition-colors w-full sm:w-auto justify-center"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>

        {/* Right/Visual Side */}
        <div className="relative w-full flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
          
          {/* Subtle Background Elements Behind Image */}
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
            <svg className="w-[120%] h-[120%] opacity-5 text-slate-900" viewBox="0 0 100 100" fill="none">
              <pattern id="hero-grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="8" cy="8" r="1" fill="currentColor" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#hero-grid)" />
            </svg>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="aspect-[3/4] w-full max-w-md mx-auto lg:mr-0 relative z-10"
          >
            {/* The Floating Node */}
            <div className="absolute -top-3 -left-3 z-20 w-4 h-4 rounded-full bg-[#B8860B] ring-4 ring-[#B8860B]/30" />

            {/* Image Box */}
            <div className="w-full h-full rounded-[2rem] relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-slate-100">
              <Image 
                src="/hero-portrait.png"
                alt="Mazhar Chaudhary - CEO Portrait"
                fill
                priority
                className="object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
