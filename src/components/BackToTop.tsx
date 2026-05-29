"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const { scrollY, scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center"
        >
          {/* Progress Ring SVG */}
          {/* The -rotate-90 makes the progress start from the top center */}
          <svg className="absolute w-16 h-16 pointer-events-none -rotate-90">
            <circle
              cx="32"
              cy="32"
              r="28"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="2"
              className="text-slate-200/20"
            />
            <motion.circle
              cx="32"
              cy="32"
              r="28"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="text-theme-gold"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="relative w-12 h-12 rounded-full bg-slate-900/80 backdrop-blur-md flex items-center justify-center text-stone-50 shadow-lg border border-slate-700/50 group"
          >
            <motion.div
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            >
              <ArrowUp size={20} strokeWidth={2.5} />
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
