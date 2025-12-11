import React from "react";
import { FaQuoteLeft } from "react-icons/fa"; // Importing the quote icon

const QuoteCard = ({ quote, author, category }) => {
  return (
    <div
      className="flex p-6 rounded-xl shadow-lg hover:shadow-xl transition-all h-40 border-2 border-black"
      style={{
        backgroundImage: 'url("/assets/wave-bg-infosection3.jpg")', // Ensure image is in 'public' folder
        // Centers the image within the card
      }}
    >
      {/* Left side - Quote icon */}
      <div className="flex items-center justify-center w-40 h-45 bg-blue-200 rounded-sm relative bottom-9">
        <FaQuoteLeft className="text-blue-900 text-4xl" />
      </div>

      {/* Right side - Content */}
      <div className="flex flex-col justify-between pl-6 pr-4 w-full">
        <p className="text-gray-700 text-lg mb-4 font-bold">{quote}</p>
        <p className="text-blue-900 text-xl font-bold">- {author}</p>
        <p className="text-xs text-gray-500 font-bold">{category}</p>
      </div>
    </div>
  );
};

export default QuoteCard;
