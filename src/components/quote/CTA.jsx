import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      className="relative bg-cover bg-center py-28 px-6 text-center text-white overflow-hidden"
      style={{ backgroundImage: "url('/assets/service-hero-bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Fade Container */}
      <motion.div
        className="relative max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Speak to Our UK Consultants Today
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl mb-8 leading-relaxed drop-shadow-md text-gray-200"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Professional guidance, compliance support, and strategic advice tailored
          to your business.
        </motion.p>

        {/* Button */}
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-12 py-4 rounded-xl shadow-lg transition-all"
        >
          Contact Us
        </motion.a>
      </motion.div>
    </section>
  );
}
