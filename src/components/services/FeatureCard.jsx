// src/components/services/FeatureCard.jsx
import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const FeatureCard = ({ icon: Icon, title, desc }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="flex gap-4 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 border border-gray-100"
    >
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-blue-500" />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;