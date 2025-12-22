import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, desc, img, openModal }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 flex flex-col overflow-hidden relative">
      {/* Blinking Blue Dot */}
      <div className="absolute mt-4 ml-4 z-10">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-900 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-blue-900"></span>
        </span>
      </div>

      {/* Image */}
      <div className="w-full h-52 bg-gradient-to-tr from-blue-50 to-blue-100 flex justify-center items-center p-4 relative">
        <img
          src={img}
          alt={title}
          className="h-40 md:h-44 object-contain transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900">
          {title}
        </h3>
        <p className="text-gray-600 flex-1 mb-5 leading-relaxed line-clamp-2">
          {desc}
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-auto">
          <Link
            to="/contact"
            state={{ scrollToBookAppointment: true }}
            className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition font-medium"
          >
            Book Now
          </Link>

          <button
            onClick={() => openModal(title, desc)} // Trigger modal with title and desc
            className="text-blue-900 font-medium hover:border p-2 rounded-lg hover:text-blue-700 transition-colors duration-200"
          >
            Learn More →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
