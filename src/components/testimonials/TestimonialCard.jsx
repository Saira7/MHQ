import React from "react";
import { motion } from "framer-motion";

const TestimonialCard = ({ avatar, name, role, feedback }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-8 text-left hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col justify-between h-72"
      whileHover={{ scale: 1.03 }}
    >
      {/* Avatar & Info */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border border-gray-300"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>

      {/* Feedback */}
      <p className="text-gray-700 leading-relaxed line-clamp-3">
        “{feedback}”
      </p>
    </motion.div>
  );
};

export default TestimonialCard;
