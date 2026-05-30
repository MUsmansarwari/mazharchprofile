"use client";

import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from "framer-motion";
import { useRef } from "react";
import { Target, HeartPulse, Globe, HandHelping } from "lucide-react";
import ParallaxWatermark from "@/components/backgrounds/ParallaxWatermark";

const cards = [
  {
    title: "Strategic Planning & Project Management",
    subtitle: "Core Skills",
    description: "Two decades of corporate and international trade expertise. Focused on PMP-certified project lifecycles, ERP implementations, and driving operational excellence.",
    icon: Target,
  },
  {
    title: "Healthcare & Benefits Consulting",
    subtitle: "Business Solutions",
    description: "Empowering businesses with tailored health plans, financial protection strategies, and comprehensive employee well-being solutions.",
    icon: HeartPulse,
  },
  {
    title: "Humanitarian Initiatives",
    subtitle: "Philanthropy & Community",
    description: "Actively building community centers, resettling displaced families, and championing educational programs and scholarships for orphans.",
    icon: Globe,
  },
  {
    title: "Underprivileged Support",
    subtitle: "Global Impact",
    description: "Providing essential services, hot meals, and life-changing mentorship programs for those in need both locally and internationally.",
    icon: HandHelping,
  },
];

export default function ExpertiseImpact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="expertise" className="relative z-0 pt-12 pb-12">
      <ParallaxWatermark text="IMPACT" />
      {/* Section Header */}
      <div className="relative z-20 sticky top-16 w-full py-4">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-serif text-theme-navy text-center leading-[1.1]">
            Expertise & <br className="md:hidden" />
            <span className="text-theme-gold italic font-light">Impact</span>
          </h2>
        </div>
      </div>

      {/* Cards Container */}
      <div ref={containerRef} className="relative z-10 w-full mt-8">
        {cards.map((card, index) => (
          <Card 
            key={index} 
            index={index} 
            {...card} 
            progress={scrollYProgress} 
            total={cards.length} 
          />
        ))}
      </div>
    </section>
  );
}

const Card = ({ index, title, subtitle, description, icon: Icon, progress, total }: any) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Calculate when this specific card should start scaling down.
  // It starts scaling when it reaches the top, which happens roughly at `index / (total - 1)`.
  const isLast = index === total - 1;
  const start = isLast ? 0.99 : index / (total - 1);
  
  // Calculate how small the card will get. Earlier cards shrink more than later ones.
  const targetScale = 1 - ((total - index - 1) * 0.04);
  
  const scale = useTransform(
    progress,
    [start, 1],
    [1, targetScale]
  );

  return (
    <div className="sticky top-40 h-[75vh] w-full flex items-start justify-center px-4 sm:px-6 pt-10 z-10">
      <motion.div 
        onMouseMove={handleMouseMove}
        style={{ 
          scale,
          top: `calc(${index * 30}px)` 
        }}
        className="group relative w-full max-w-5xl bg-slate-900 text-theme-ivory rounded-[2rem] p-8 md:p-14 shadow-[0_10px_40px_rgb(0,0,0,0.2)] border border-[#B8860B]/30 border-t border-t-[#B8860B]/60 overflow-hidden flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start origin-top"
      >
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 hidden md:block"
          style={{
            maskImage: useMotionTemplate`radial-gradient(250px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
            WebkitMaskImage: useMotionTemplate`radial-gradient(250px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#B8860B_1px,transparent_1px),linear-gradient(to_bottom,#B8860B_1px,transparent_1px)] bg-[size:32px_32px] opacity-30"></div>
        </motion.div>

        {/* Left Side: Icon & Subtitle */}
        <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left gap-6 shrink-0 relative z-10">
          <div className="w-20 h-20 rounded-2xl bg-theme-gold/10 flex items-center justify-center text-theme-gold border border-theme-gold/20 shadow-inner">
            <Icon size={40} strokeWidth={1.5} />
          </div>
          <span className="text-theme-gold font-medium tracking-widest uppercase text-sm">
            {subtitle}
          </span>
        </div>
        
        {/* Right Side: Content */}
        <div className="md:w-2/3 flex flex-col gap-5 text-center md:text-left relative z-10">
          <h3 className="text-3xl md:text-5xl font-serif leading-tight text-white">
            {title}
          </h3>
          <p className="text-theme-ivory/80 text-lg md:text-xl font-light leading-relaxed">
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};
