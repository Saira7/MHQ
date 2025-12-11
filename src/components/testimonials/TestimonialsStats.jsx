import React from "react";
import { motion } from "framer-motion";

const stats = [
  { number: "250+", label: "SUBSCRIBERS TRUST US" },
  { number: "60+", label: "PRODUCTS HIGH-QUALITY" },
  { number: "5+", label: "EXPERIENCE YEARS" },
];

const TestimonialsStats = () => {
  return (
   <section
  className=" p-10 rounded-2xl md:px-16 mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 bg-cover bg-center relative"
  style={{ backgroundImage: "url('/assets/wave-bg-infosection3.jpg')" }}
>
      {/* Left side text */}
      <div className="md:w-1/2">
        <div className="flex items-center mb-4">
          <motion.span
              className="w-2 h-2 rounded-full bg-blue-700 mr-2"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          <p className="uppercase text-xs text-gray-500 tracking-widest font-semibold">
            Achievements at a Glance
          </p>
        </div>
        <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          Our Edge <br /> in Excellence
        </h2>
        <p className="text-gray-600 max-w-md">
          With decades of industry experience, a diverse range of products, and a dedicated team, we are committed to delivering exceptional quality chemicals.
        </p>
        {/* <hr className="border-gray-300 mt-6" /> */}
      </div>

      {/* Right side stats */}
      <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {stats.map((item, idx) => (
          <motion.div
            key={idx}
            className="relative bg-blue-900 text-white rounded-md shadow-lg p-8 w-40 h-40 flex flex-col justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            {/* Blue 3D side */}
            <div className="absolute top-0 right-0 w-6 h-full bg-blue-600 rounded-tr-md rounded-br-md shadow-inner"></div>
            <p className="text-xs uppercase tracking-widest mb-1 opacity-70">{item.label}</p>
            <h3 className="text-4xl font-bold">{item.number}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsStats;
