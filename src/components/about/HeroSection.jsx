// components/about/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.4 }}
      >
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          About MHQ UK Consultants
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl mb-8 leading-relaxed drop-shadow-md"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          We help UK businesses succeed through professional consultancy,
          compliance management, and strategic support.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
