// components/about/CoreValues.jsx
import React from "react";
import { motion } from "framer-motion";

const values = [
  {
    icon: "🎯",
    title: "Client-Centric",
    desc: "We prioritize our clients’ growth, tailoring every strategy to meet their unique goals.",
    variant: "blue",
  },
  {
    icon: "⚖️",
    title: "Integrity & Compliance",
    desc: "Every service we provide is aligned with UK standards, ensuring transparency and trust.",
    variant: "white",
  },
  {
    icon: "🚀",
    title: "Growth-Focused",
    desc: "We help businesses scale quickly with structured planning and forward-thinking solutions.",
    variant: "blue",
  },
  {
    icon: "💡",
    title: "Innovative Solutions",
    desc: "We combine creativity, technology, and expertise to solve complex business challenges.",
    variant: "white",
  },
];

const CoreValues = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-bl from-blue-100 to-blue-950">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Our Core Values
        </h2>
        <p className="text-gray-100 font-bold max-w-2xl mx-auto mt-4 text-lg">
          These principles guide our mission and the quality of service we deliver.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {values.map((value, i) => {
          const isBlue = value.variant === "blue";

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative mt-10"
            >
              {/* Floating Icon */}
              <motion.div
                className={`w-24 h-24 rounded-full flex items-center justify-center text-4xl mx-auto
                  absolute -top-12 left-1/2 -translate-x-1/2 z-20 shadow-xl
                  ${isBlue ? "bg-blue-500" : "bg-white text-blue-900"}
                `}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {value.icon}
              </motion.div>

              {/* Card */}
<div
  className="relative bg-blue-900 rounded-2xl overflow-hidden shadow-2xl pt-16 pb-10 px-8 border border-white/10"
>
  {/* Black Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative z-10 text-center flex flex-col items-center">
    <h3 className="text-xl font-semibold mb-2 text-white">
      {value.title}
    </h3>
    <p className="text-gray-300 text-sm leading-relaxed mb-6">
      {value.desc}
    </p>

    {/* Blended Button */}
    <button
      className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300
        ${isBlue
          ? "bg-blue-700 text-white hover:bg-blue-600/80 shadow-md"
          : "bg-white/20 text-white hover:bg-white/30 shadow-md"
        }`}
    >
      Learn More
    </button>
  </div>

  {/* Bottom Wave Gradient */}
  <div
    className={`absolute bottom-0 left-0 w-full h-24
      ${isBlue ? "bg-gradient-to-t from-blue-500/60 to-transparent" 
               : "bg-gradient-to-t from-white/40 to-transparent"}`}
  ></div>
</div>



            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default CoreValues;
