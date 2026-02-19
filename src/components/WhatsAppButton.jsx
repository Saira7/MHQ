import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

const WhatsAppButton = () => {
  const phoneNumber = "447307397818"; // 👉 replace with your WhatsApp number (no +, no spaces)
  const message = "Hello! I would like to know more about your services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed bottom-6 right-20 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 focus:outline-none"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp  className="w-5 h-5" />
    </motion.a>
  );
};

export default WhatsAppButton;
