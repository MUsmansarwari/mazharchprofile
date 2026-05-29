"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800&h=1000",
    title: "Community Center Inauguration",
    width: 800,
    height: 1000,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=800&h=533",
    title: "Healthcare Leadership Summit",
    width: 800,
    height: 533,
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800&h=1200",
    title: "PMP Award Ceremony",
    width: 800,
    height: 1200,
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800&h=800",
    title: "Corporate Strategy Review",
    width: 800,
    height: 800,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=800&h=600",
    title: "Philanthropic Board Meeting",
    width: 800,
    height: 600,
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1593113580332-ceb4b8f152d1?auto=format&fit=crop&q=80&w=800&h=1000",
    title: "Orphanage Support Drive",
    width: 800,
    height: 1000,
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800&h=500",
    title: "International Trade Forum",
    width: 800,
    height: 500,
  },
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

        {/* Smart Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="break-inside-avoid mb-4 relative rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              {/* Image using auto-height styling based on intrinsic dimensions */}
              <Image
                src={item.src}
                alt={item.title}
                width={item.width}
                height={item.height}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center backdrop-blur-[2px]">
                <span className="text-theme-gold text-lg md:text-xl font-serif translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-out drop-shadow-md">
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
