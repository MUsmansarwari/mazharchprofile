"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";
import ParallaxWatermark from "@/components/backgrounds/ParallaxWatermark";

const experiences = [
  {
    company: "PrimeLife Financial LLC",
    role: "CEO/Founder",
    description: "Healthcare & Employee Benefits Consultant driving sustainable impact and comprehensive employee solutions.",
    year: "Present",
  },
  {
    company: "Digital Rhodium",
    role: "Founder & Chief Executive Officer",
    description: "Spearheading digital strategy, innovation, and strategic growth initiatives.",
    year: "Previous",
  },
  {
    company: "Colonial Life",
    role: "Business Development Partner",
    description: "Fostering strategic partnerships, business expansion, and organizational growth.",
    year: "Previous",
  },
  {
    company: "Allys International Inc.",
    role: "Business Manager / Project Manager",
    description: "Overseeing daily operations, project lifecycles, and cross-functional team management.",
    year: "Previous",
  },
];

export default function Experience() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Track vertical scroll progress within the container
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Translate vertical scroll into horizontal movement
  // Moving from 0% to a negative percentage
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} id="experience" className="relative z-0 h-[300vh]">
      <ParallaxWatermark text="VISION" />
      {/* Sticky container that locks into place during scroll */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* The horizontal scrolling track */}
        <motion.div style={{ x }} className="flex gap-8 md:gap-12 px-6 md:px-20 w-max">
          
          {/* Section Header */}
          <div className="w-[85vw] md:w-[40vw] max-w-xl flex flex-col justify-center shrink-0 pr-8">
            <h2 className="text-5xl md:text-7xl font-serif text-theme-navy mb-6 leading-[1.1]">
              Professional <br />
              <span className="text-theme-gold italic font-light">Journey</span>
            </h2>
            <p className="text-lg md:text-xl text-theme-navy/70 font-light leading-relaxed">
              A track record of excellence, leadership, and impactful consulting across the healthcare and corporate sectors.
            </p>
          </div>

          {/* Experience Cards */}
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="w-[85vw] md:w-[450px] shrink-0 bg-white/80 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-theme-navy/5 border-t-4 border-t-theme-gold flex flex-col justify-between group hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-shadow duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-full bg-theme-gold/10 flex items-center justify-center text-theme-gold group-hover:bg-theme-gold group-hover:text-white transition-colors duration-300">
                    <Briefcase size={24} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-semibold text-theme-navy/40 tracking-widest uppercase bg-theme-navy/5 px-3 py-1 rounded-full">
                    {exp.year}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-serif text-theme-navy mb-3">
                  {exp.company}
                </h3>
                
                <h4 className="text-md md:text-lg text-theme-gold font-medium mb-5">
                  {exp.role}
                </h4>
                
                <p className="text-theme-navy/70 leading-relaxed font-light">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}

          {/* Padding element at the end to ensure the last card isn't flush with the right screen edge */}
          <div className="w-[2vw] shrink-0" />
        </motion.div>
      </div>
    </section>
  );
}
