'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxWatermarkProps {
  text: string;
}

export default function ParallaxWatermark({ text }: ParallaxWatermarkProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div 
      ref={containerRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-[-10]"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden select-none">
        <motion.div
          style={{ y }}
          className="text-[12rem] md:text-[20rem] font-serif uppercase tracking-tighter opacity-[0.05] text-stone-900 whitespace-nowrap will-change-transform"
        >
          {text}
        </motion.div>
      </div>
    </div>
  );
}
