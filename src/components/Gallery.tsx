"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
};

const galleryItems: GalleryItem[] = [
  { id: 1, src: "/Images/Vertical 1.webp", alt: "Vertical 1", width: 800, height: 1200 },
  { id: 2, src: "/Images/Horizontal 1.webp", alt: "Horizontal 1", width: 1200, height: 800 },
  { id: 3, src: "/Images/Vertical 2.webp", alt: "Vertical 2", width: 800, height: 1200 },
  { id: 4, src: "/Images/Horizontal 2.webp", alt: "Horizontal 2", width: 1200, height: 800 },
  { id: 5, src: "/Images/Vertical 3.webp", alt: "Vertical 3", width: 800, height: 1200 },
  { id: 6, src: "/Images/Horizontal 3.webp", alt: "Horizontal 3", width: 1200, height: 800 },
  { id: 7, src: "/Images/Vertical 4.webp", alt: "Vertical 4", width: 800, height: 1200 },
  { id: 8, src: "/Images/Horizontal 4.webp", alt: "Horizontal 4", width: 1200, height: 800 },
  { id: 9, src: "/Images/Vertical 5.webp", alt: "Vertical 5", width: 800, height: 1200 },
  { id: 10, src: "/Images/Horizontal 5.webp", alt: "Horizontal 5", width: 1200, height: 800 },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="bg-theme-ivory py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header with reveal animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-theme-navy mb-4">
            Impact & Recognition
          </h2>
          <p className="text-theme-navy/60 font-light text-lg max-w-2xl mx-auto">
            A visual journey through key milestones, awards, and the lasting impact driven across global communities.
          </p>
        </motion.div>

        {/* Pure CSS Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.1, ease: "easeOut" }}
              onClick={() => setSelectedImage(item)}
              className="break-inside-avoid mb-6 relative rounded-[2rem] overflow-hidden group cursor-pointer bg-stone-50/10 hover:scale-[1.02] hover:shadow-[0_0_25px_#C59B2740] transition-all duration-300"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="w-full h-auto object-cover rounded-[2rem]"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-50 p-2 text-theme-gold hover:text-theme-goldMuted hover:scale-110 transition-all duration-200"
              aria-label="Close lightbox"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center rounded-[2rem] overflow-hidden shadow-[0_0_40px_#C59B2740]"
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={selectedImage.width}
                height={selectedImage.height}
                className="w-full h-auto max-h-[85vh] object-contain rounded-[2rem]"
                sizes="100vw"
                priority
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-theme-ivory font-serif text-xl md:text-2xl text-center drop-shadow-md">
                  {selectedImage.alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
