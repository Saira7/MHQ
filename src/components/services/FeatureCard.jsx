// src/components/services/FeatureCard.jsx
import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" }
  }
};

const FeatureCard = ({ icon, title, desc }) => {
  return (
    <motion.div
      className="flex items-start gap-4 p-4 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow"
      variants={cardVariants}
      whileHover={{ scale: 1.02 }}
    >
      {/* Icon */}
      <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center border border-gray-300">
        <span className="text-3xl text-gray-700">{icon}</span>
      </div>

      {/* Text */}
      <div className="text-left">
        <h4 className="text-lg font-semibold text-gray-900 mb-1">{title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">
          {desc}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
