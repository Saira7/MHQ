import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react"; // optional arrow icon for the button

const ContactCTA = () => {
  return (
    <motion.section
      className=" m-5 relative py-20 px-6 md:px-20 bg-gradient-to-tr from-blue-900 via-black to-blue-900 text-white rounded-3xl overflow-hidden shadow-lg mb-5"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Optional decorative circles */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
          Ready to Take Your Business <br className="hidden md:block" /> to the Next Level?
        </h2>
        <p className="text-lg md:text-xl mb-8 text-gray-100">
          Contact MHQ UK Consultants today for expert guidance and a tailored strategy.
        </p>
        <a
          href="/quote"
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-900 font-semibold rounded-full text-lg hover:scale-105 hover:shadow-xl transition transform"
        >
          Get a Free Consultation <ArrowRight size={20} />
        </a>
      </div>
    </motion.section>
  );
};

export default ContactCTA;
