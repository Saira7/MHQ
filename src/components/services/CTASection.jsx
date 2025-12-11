import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ctaImage from "/assets/cta-bg.jpg"; // Add your background image here

const CTASection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24"
      style={{
        backgroundImage: `url(${ctaImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-4xl mx-auto text-center px-6">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Grow Your Business in the UK?
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          MHQ UK Consultants provides end-to-end solutions for company formation, compliance, accounting, and digital presence. Start your journey today.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Primary Button */}
          <Link
            to="/get-quote"
            className="px-6 py-3 bg-blue-900 text-white rounded-md font-semibold hover:bg-blue-800 transition-colors duration-200"
          >
            Get a Quote
          </Link>

          {/* Secondary Button */}
          <Link
            to="/contact"
            className="px-6 py-3 border border-white text-white rounded-md font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
