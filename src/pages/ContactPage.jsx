import React from "react";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import MapSection from "../components/contact/MapSection";
import FAQSection from "../components/contact/FaqSection";
import ContactCTA from "../components/contact/ContactCTA";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <motion.section
      className="relative py-24 px-6 text-center text-white overflow-hidden bg-gradient-to-bl from-blue-900 via-black to-blue-900"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative lines / subtle shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 800 800" fill="none">
          <circle cx="400" cy="400" r="200" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
          <circle cx="200" cy="600" r="100" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
          <circle cx="600" cy="200" r="150" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
          <circle cx="500" cy="200" r="150" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
          <circle cx="100" cy="600" r="100" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
          <circle cx="300" cy="400" r="200" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
        </svg>
      </div>

      <div className="relative max-w-3xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch with MHQ UK Consultants
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 leading-relaxed drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We are here to help your business grow and succeed in the UK. Reach out to discuss your requirements, queries, or for expert guidance.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="/get-quote"
            className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-md hover:bg-gray-100 transition"
          >
            Get a Quote
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-white text-white rounded-md font-semibold hover:bg-white hover:text-blue-900 transition"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </motion.section>

      {/* Contact Info + Form */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ContactInfo />
        <ContactForm />
      </section>

      {/* Map Section */}
      <MapSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <ContactCTA />
    </div>
  );
};

export default ContactPage;
