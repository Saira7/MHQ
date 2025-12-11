import React from "react";
import { motion } from "framer-motion";

// Testimonial Data with size property for variation
const testimonials = [
  {
    name: "James Brown",
    role: "CEO, Design Company",
    feedback:
      "Sodales ut etiam sit amet nisl. Sed semper feugiat nibh sed pulvinar proin gravida…",
    avatar: "https://randomuser.me/api/portraits/men/28.jpg",
    size: "md", // medium size
  },
  {
    name: "Hindley Earnshaw",
    role: "@Hindley.Es",
    feedback:
      "Congue mauris rhoncus aenean vel elit. Morbi non arcu risus quis varius tincidunt.",
    avatar: "https://randomuser.me/api/portraits/men/28.jpg",
    size: "lg", // large size
  },
  {
    name: "Victoria Wotton",
    role: "Fermentum Odio Co.",
    feedback:
      "Eget mauris pharetra et ultrices neque ornare…",
    avatar: "https://randomuser.me/api/portraits/men/28.jpg",
    size: "sm", // small size
  },
  {
    name: "Henry Vane",
    role: "Fermentum Co.",
    feedback:
      "Cras fermentum odio eu feugiat pretium nibh…",
    avatar: "https://randomuser.me/api/portraits/men/28.jpg",
    size: "wide", // wide size
  },
  {
    name: "Basil Hallward",
    role: "Co-Founder Gravida.co",
    feedback:
      "Enim lobortis scelerisque fermentum dui faucibus…",
    avatar: "https://randomuser.me/api/portraits/men/28.jpg",
    size: "md", // medium size
  },
  {
    name: "Wilkins Micawber",
    role: "",
    feedback:
      "Diam maecenas ultricies mi eget. In nulla posuere sollicitudin…",
    avatar: "https://randomuser.me/api/portraits/men/28.jpg",
    size: "wide", // wide size
  },
];

// Mapping of size classes to Tailwind classes
const sizeClasses = {
  sm: "h-48 col-span-1",
  md: "h-64 col-span-1",
  lg: "h-80 col-span-1",
  wide: "h-48 col-span-2", // Wide size spans two columns
};

const TestimonialsGrid = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-auto">
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            className={`bg-white p-8 rounded-xl shadow-lg border border-gray-100 ${sizeClasses[item.size]} flex flex-col`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            {/* Avatar and Text Info */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover border border-gray-300"
              />
              <div>
                <h4 className="text-gray-900 font-semibold">{item.name}</h4>
                <p className="text-gray-500 text-sm">{item.role}</p>
              </div>
            </div>

            {/* Feedback */}
            <p className="text-gray-700 mt-auto leading-relaxed">
              “{item.feedback}”
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsGrid;
