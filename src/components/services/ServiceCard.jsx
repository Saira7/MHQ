import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, desc, img, tag }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 flex flex-col overflow-hidden">
      
      {/* Optional Tag */}
      {tag && (
        <div className="absolute mt-4 ml-4 bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
          {tag}
        </div>
      )}

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
        <p className="text-gray-600 flex-1 mb-5 leading-relaxed">{desc}</p>
        <Link
          to={`/services/${title.toLowerCase().replace(/ /g, "-")}`}
          className="mt-auto text-blue-900 font-medium hover:underline hover:text-blue-700 transition-colors duration-200"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
