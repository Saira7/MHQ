import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { officeLocation } from "./ContactInfo"; // Import shared location data

const MapSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-16 px-6 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
          Our Office Location
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          {officeLocation.address}
        </p>
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="MHQ UK Consultants Location"
            src={officeLocation.mapsEmbedUrl}
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="text-center mt-4">
          <a 
            href={officeLocation.mapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-2"
          >
            <MapPin size={16} />
            Open in Google Maps
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default MapSection;