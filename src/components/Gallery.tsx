"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryItems = [
  { id: 1, src: "/images/Vertical 1.webp", alt: "Vertical 1", width: 800, height: 1200 },
  { id: 2, src: "/images/Horizontal 1.webp", alt: "Horizontal 1", width: 1200, height: 800 },
  { id: 3, src: "/images/Vertical 2.webp", alt: "Vertical 2", width: 800, height: 1200 },
  { id: 4, src: "/images/Horizontal 2.webp", alt: "Horizontal 2", width: 1200, height: 800 },
  { id: 5, src: "/images/Vertical 3.webp", alt: "Vertical 3", width: 800, height: 1200 },
  { id: 6, src: "/images/Horizontal 3.webp", alt: "Horizontal 3", width: 1200, height: 800 },
  { id: 7, src: "/images/Vertical 4.webp", alt: "Vertical 4", width: 800, height: 1200 },
  { id: 8, src: "/images/Horizontal 4.webp", alt: "Horizontal 4", width: 1200, height: 800 },
  { id: 9, src: "/images/Vertical 5.webp", alt: "Vertical 5", width: 800, height: 1200 },
  { id: 10, src: "/images/Horizontal 5.webp", alt: "Horizontal 5", width: 1200, height: 800 },
];

export default function Gallery() {
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
    </section>
  );
}
