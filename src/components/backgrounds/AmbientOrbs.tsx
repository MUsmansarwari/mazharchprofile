'use client';

import { motion } from 'framer-motion';

export default function AmbientOrbs() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Muted Gold Orb */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-[#B8860B]/40 mix-blend-multiply blur-[120px] will-change-transform"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          top: '10%',
          left: '20%'
        }}
      />
      
      {/* Deep Navy Orb */}
      <motion.div
        className="absolute w-[30rem] h-[30rem] rounded-full bg-slate-900/20 mix-blend-multiply blur-[120px] will-change-transform"
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 80, -120, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          bottom: '20%',
          right: '10%'
        }}
      />
    </div>
  );
}
