import React from "react";
import { motion } from "framer-motion";

const MapSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-16 px-6"
    >
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
        Our Office Location
      </h2>
      <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="MHQ UK Consultants Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.804183796465!2d-0.12764748411815027!3d51.5073217796351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3331fcd2d9%3A0x1234567890abcdef!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1698723456789!5m2!1sen!2sin"
          width="100%"
          height="100%"
          className="border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </motion.section>
  );
};

export default MapSection;
