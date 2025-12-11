// components/about/CompanyStory.jsx
import React from "react";
import { motion } from "framer-motion";

const CompanyStory = () => {
  return (
    <section
  className="flex justify-center py-20 px-4 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/assets/our-story-bg-whole.jpg')",
  }}
>
      <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                      max-w-6xl w-full flex flex-col md:flex-row items-center
                      p-10 md:p-16 gap-10 relative overflow-hidden">
        
        {/* LEFT: Circular image that is cut on the left side */}
        <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="w-full md:w-1/2 flex justify-start"
>
  <div
    className="w-[500px] h-[500px] overflow-hidden 
               bg-gray-200 
               rounded-r-full rounded-l-none"
  >
    <img
      src="/assets/our-story-bg.jpg"
      alt="Company Story"
      className="w-full h-full object-cover"
    />
  </div>
</motion.div>


        {/* RIGHT: Text content */}
<motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="w-full md:w-1/2 space-y-5 z-10"
>
  <h3 className="text-blue-900 font-bold text-2xl">Our Story</h3>

  <h2 className="text-4xl font-bold text-gray-900 leading-tight">
    MHQ UK Consultants — Building Global Business Success Since 2015.
  </h2>

  <p className="text-gray-600 leading-relaxed font-semibold">
    MHQ UK Consultants was founded with a mission to simplify business setup,
    compliance, and consultancy services for companies across the UK and
    worldwide. Over the years, we have grown from a small advisory unit into a
    trusted consultancy partner serving entrepreneurs, corporations, and global
    investors.  
    <br /><br />
    Our expertise spans business incorporation, legal compliance, financial
    advisory, corporate structuring, and strategic consulting — enabling
    businesses to operate confidently and compliantly in an ever-evolving
    market.
  </p>

  <motion.button
    whileHover={{ scale: 1.05 }}
    className="px-6 py-3 mt-4 rounded-full text-white font-medium 
               bg-blue-900
               shadow-md hover:shadow-lg transition-all"
  >
    Explore Services
  </motion.button>
</motion.div>


      </div>
    </section>
  );
};

export default CompanyStory;
