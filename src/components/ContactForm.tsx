"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section id="contact" className="relative w-full">
      {/* Split Background Logic */}
      <div className="absolute inset-0 flex flex-col z-0">
        <div className="h-[75%] w-full bg-stone-50"></div>
        <div className="h-[25%] w-full bg-slate-900"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Column - Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-start pt-8"
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-8 leading-tight">
              Let&apos;s Start a<br />Conversation
            </h2>
            <div className="flex flex-col space-y-6 text-slate-600">
              <div className="flex flex-col">
                <span className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-1">Location</span>
                <span className="text-lg">Sugar Land, Texas, United States</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-1">Direct</span>
                <a href="mailto:contact@example.com" className="text-lg hover:text-[#B8860B] transition-colors">
                  Send an Email
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-1">Connect</span>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-[#B8860B] transition-colors">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - The Overlapping Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 md:mt-0 md:translate-y-12 lg:translate-y-16"
          >
            <div className="bg-white rounded-3xl shadow-2xl shadow-slate-900/20 border-t-4 border-[#B8860B] p-8 md:p-12 relative z-20">
              <form className="flex flex-col space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <input 
                    type="text" 
                    id="name"
                    placeholder="Your Name" 
                    className="w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#B8860B] transition-colors duration-300"
                  />
                </div>
                
                <div className="relative">
                  <input 
                    type="email" 
                    id="email"
                    placeholder="Email Address" 
                    className="w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#B8860B] transition-colors duration-300"
                  />
                </div>

                <div className="relative">
                  <input 
                    type="text" 
                    id="subject"
                    placeholder="Subject" 
                    className="w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#B8860B] transition-colors duration-300"
                  />
                </div>

                <div className="relative">
                  <textarea 
                    id="message"
                    placeholder="Your Message" 
                    rows={4}
                    className="w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#B8860B] transition-colors duration-300 resize-none"
                  />
                </div>

                <div className="pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-[#B8860B] text-white px-8 py-4 rounded-xl tracking-wide font-medium text-sm uppercase hover:bg-[#C59B27] transition-colors duration-300"
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
