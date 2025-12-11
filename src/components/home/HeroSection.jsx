import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";   // ← ADD THIS
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import heroBg from "../../assets/hero-banner2.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black"
      ></motion.div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 py-24 text-center md:text-left text-white">

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-6xl font-bold leading-tight"
        >
          Secure & Reliable Solutions for Your Business
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl"
        >
          Professional consulting and payment solutions tailored for your growth.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <Link
            to="/contact"
            className="px-6 py-3 bg-blue-900 hover:bg-white hover:text-blue-900 rounded-xl font-semibold transition text-center"
          >
            Get Started
          </Link>

          <Link
            to="/about"
            className="px-6 py-3 border border-white hover:border-blue-900 hover:bg-white hover:text-blue-900 rounded-xl font-semibold transition text-center"
          >
            Learn More
          </Link>
        </motion.div>

        {/* Bullet Points */}
        <motion.ul
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-10 space-y-3 text-left max-w-md mx-auto md:mx-0"
        >
          <li className="flex items-center gap-3">
            <CheckCircleIcon className="h-6 w-6 text-blue-100" />
            <span>Trusted UK Payment & Business Consultants</span>
          </li>

          <li className="flex items-center gap-3">
            <CheckCircleIcon className="h-6 w-6 text-blue-100" />
            <span>Fast & Secure Transactions</span>
          </li>

          <li className="flex items-center gap-3">
            <CheckCircleIcon className="h-6 w-6 text-bue-100" />
            <span>24/7 Professional Support</span>
          </li>
        </motion.ul>
      </div>
    </section>
  );
};

export default HeroSection;
