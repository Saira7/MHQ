// pages/TestimonialsPage.jsx
import React from "react";
import { testimonials } from "../data/testimonialsData";
import TestimonialCard from "../components/testimonials/TestimonialCard";
import { motion } from "framer-motion";
import { FaGoogle, FaStripe, FaSlack, FaMicrosoft, FaAirbnb } from "react-icons/fa";
import TestimonialsStats from "../components/testimonials/TestimonialsStats";
import SubmitTestimonialForm from "../components/testimonials/SubmitTestimonialForm";
import StackedTestimonials from "../components/testimonials/StackedTestimonials";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const TestimonialsPage = () => {
  const featured = testimonials[0];
  const otherTestimonials = testimonials.slice(1);

  return (
    <main className="w-full py-20 px-4 md:px-10">
      {/* Section Header */}
      <motion.header
        className="max-w-5xl mx-auto text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <span className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-3">
          <motion.span
            className="w-2 h-2 rounded-full bg-blue-700 mr-2"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          Customer Success Stories
        </span>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Trusted by Industry <br />
          <span className="text-blue-600">Leaders Worldwide</span>
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Real experiences from businesses that scaled faster with our consultancy.
        </p>
      </motion.header>

      {/* Stacked Testimonials */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-7xl mx-auto mb-20"
      >
        <StackedTestimonials />
      </motion.section>

      {/* Customer Success Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto mb-20"
      >
        <TestimonialsStats />
      </motion.div>

      {/* Submit Testimonial Form */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto mb-20"
      >
        <SubmitTestimonialForm />
      </motion.section>

      {/* Trusted Logos */}
      <motion.section
        className="mt-24 border-t border-gray-200 pt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-center text-gray-500 text-sm mb-6">
          Trusted by companies worldwide
        </p>
        <motion.div
          className="flex flex-wrap justify-center gap-10 opacity-70 text-gray-600 text-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          <FaGoogle title="Google" />
          <FaStripe title="Stripe" />
          <FaSlack title="Slack" />
          <FaMicrosoft title="Microsoft" />
          <FaAirbnb title="Airbnb" />
        </motion.div>
      </motion.section>
    </main>
  );
};

export default TestimonialsPage;
