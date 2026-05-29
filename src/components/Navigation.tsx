"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Expertise", href: "#expertise" },
  { name: "Impact", href: "#impact" },
];

export default function Navigation() {
  const { scrollY } = useScroll();
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      setIsScrollingDown(false);
      return;
    }

    const previous = scrollY.getPrevious() ?? 0;
    
    if (current > previous && current > 100) {
      setIsScrollingDown(true);
    } else if (current < previous) {
      setIsScrollingDown(false);
    }
  });

  return (
    <>
      <div className="fixed top-6 inset-x-0 w-full flex justify-center z-50 pointer-events-none">
        <motion.nav
        layout
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pointer-events-auto flex items-center justify-between px-2 py-2 rounded-full transition-all duration-300 bg-slate-900/95 backdrop-blur-md text-stone-50 border border-slate-700/50 shadow-xl"
      >
        <motion.div layout className="pl-4 pr-2 flex items-center">
          <Link href="#home" className="flex items-center">
            <Image 
              src="/logo-light.webp" 
              alt="Mazhar Chaudhary" 
              width={500} 
              height={150} 
              className="object-contain w-32 md:w-40 h-auto hover:opacity-80 transition-opacity"
            />
          </Link>
        </motion.div>
        
        <AnimatePresence>
          {!isScrollingDown && (
            <motion.ul
              layout
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="hidden md:flex items-center overflow-hidden whitespace-nowrap"
            >
              <div className="flex items-center gap-8 px-4">
                {links.map((link) => (
                  <motion.li layout key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-sm font-medium text-stone-300 hover:text-theme-gold transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </div>
            </motion.ul>
          )}
        </AnimatePresence>

        <motion.div layout>
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hidden md:inline-flex bg-theme-gold text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-theme-goldMuted transition-colors duration-300 items-center gap-2.5 ml-2 cursor-pointer"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Let's Talk
          </a>
        </motion.div>

        {/* Mobile menu button */}
        <motion.button 
          layout 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-stone-50 p-2 pr-4 ml-2 z-50 relative pointer-events-auto"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </motion.nav>
    </div>

    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 pointer-events-auto"
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                if (link.href.startsWith("#")) {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-3xl text-stone-50 font-serif hover:text-theme-gold transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
          
          <a 
            href="#contact"
            onClick={(e) => {
              setIsMobileMenuOpen(false);
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-theme-gold text-white px-8 py-4 rounded-full text-xl font-medium hover:bg-theme-goldMuted transition-colors duration-300 flex items-center gap-3 mt-4"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            Let's Talk
          </a>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
