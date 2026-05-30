"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Dot: Fast, almost instant
  const dotX = useSpring(mouseX, { stiffness: 800, damping: 20 });
  const dotY = useSpring(mouseY, { stiffness: 800, damping: 20 });

  // Ring: Slightly slower, trailing effect
  const ringX = useSpring(mouseX, { stiffness: 300, damping: 25 });
  const ringY = useSpring(mouseY, { stiffness: 300, damping: 25 });

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
    };
    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]')
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full border border-slate-900/50"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        initial={{
          width: "2rem", // w-8
          height: "2rem", // h-8
          backgroundColor: "transparent",
        }}
        animate={{
          width: isHovering ? "3.5rem" : "2rem", // w-14 : w-8
          height: isHovering ? "3.5rem" : "2rem", // h-14 : h-8
          backgroundColor: isHovering
            ? "rgba(184, 134, 11, 0.1)" // bg-[#B8860B]/10
            : "transparent",
          borderColor: isHovering
            ? "#B8860B" // border-[#B8860B]
            : "rgba(15, 23, 42, 0.5)",
          backdropFilter: isHovering ? "blur(4px)" : "blur(0px)",
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />

      {/* Inner Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-[#B8860B]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        initial={{
          width: "0.5rem", // w-2
          height: "0.5rem", // h-2
          scale: 1,
          opacity: 1,
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />
    </>
  );
}
