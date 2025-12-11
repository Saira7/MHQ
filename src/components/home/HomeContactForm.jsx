import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HomeContactCTA = () => {
  return (
    <section
      className="py-24 px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/wave-bg-infosection3.jpg')", // <-- change path
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="
          max-w-6xl mx-auto 
          rounded-3xl 
          px-10 py-20 
          relative 
          overflow-hidden
          shadow-[0_20px_60px_rgba(0,0,0,0.15)] 
          bg-gradient-to-bl from-blue-900 via-black/90 to-blue-900
          backdrop-blur-lg
          border border-white/20
        "
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{  duration: 0.2, ease: "easeOut" }} 
          whileHover={{
            scale: 1.06,
            boxShadow:
              "0 0 20px rgba(100, 149, 255, 0.6), 0 0 40px rgba(100, 149, 255, 0.3)",
          }}
          className="
    inline-block mx-auto mb-6 px-6 py-3
    rounded-full cursor-pointer
    bg-white/20 backdrop-blur-lg
    border border-white/30
    transition-all duration-300
  "
        >
          <span className="bg-white bg-clip-text text-transparent font-semibold">
            Ready To Connect With Us?
          </span>
        </motion.div>

        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-white text-center mb-3">
          Start Your Journey{" "}
          <span className="bg-gradient-to-tr from-black via-white to-black bg-clip-text text-transparent">
            Today
          </span>
        </h2>

        {/* Subheading */}
        <p className="text-center text-white/90 max-w-2xl mx-auto mb-10 text-lg">
          Whether you're launching, scaling, or need professional guidance — our
          expert team is here to support every step of your business growth.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <Link
            to="/contact"
            className="
              bg-white text-blue-900 
              hover:bg-blue-900 hover:text-white
              px-8 py-3 rounded-xl font-semibold 
              shadow-lg hover:shadow-xl 
              transition-all
            "
          >
            Contact Us
          </Link>

          <Link
            to="/about"
            className="
              border border-white/40 
              text-white 
              px-8 py-3 rounded-xl font-semibold 
              hover:bg-white
              hover:text-blue-900 
              transition-all
            "
          >
            Explore Our Company
          </Link>
        </div>

        {/* Bottom Feature Badges */}
        <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm mt-10">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <span>⚡</span> Fast Response Team
          </div>
          <div className="flex items-center gap-2 text-lg font-semibold">
            <span>🔒</span> Secure & Confidential
          </div>
          <div className="flex items-center gap-2 text-lg font-semibold">
            <span>⭐</span> Trusted by 500+ Clients
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeContactCTA;
