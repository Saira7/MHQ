// components/blog/Filter.jsx
import React from "react";

const Filter = ({ categories, selectedCategory, onSelect }) => {
  return (
    <div className="flex justify-center space-x-4 mb-8">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 rounded ${
            selectedCategory === cat ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Filter;
