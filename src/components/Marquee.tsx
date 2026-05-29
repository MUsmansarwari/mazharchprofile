"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  const text = "MBA • MHA • PMP Certified • Healthcare Consultant • Philanthropist • CEO • ";
  const repeatedText = text.repeat(4);

  return (
    <section className="bg-theme-navy text-theme-ivory py-6 overflow-hidden border-y border-theme-gold/20">
      <div className="relative flex whitespace-nowrap items-center">
        {/* We use two sets of text to ensure seamless looping */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40, // Slower speed
          }}
          className="flex whitespace-nowrap items-center"
        >
          <span className="text-xl md:text-2xl font-serif tracking-widest px-4">
            {repeatedText}
          </span>
          <span className="text-xl md:text-2xl font-serif tracking-widest px-4 text-theme-gold">
            {repeatedText}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
