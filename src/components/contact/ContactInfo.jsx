import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react"; // icons

const infoItems = [
  { title: "Email", value: "info@mhquk.com", icon: <Mail size={22} /> },
  { title: "Phone", value: "+44 000 000 0000", icon: <Phone size={22} /> },
  { title: "Address", value: "London, UK", icon: <MapPin size={22} /> },
];

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="flex flex-col gap-6"
    >
      <h3 className="text-3xl font-bold text-blue-900 mb-4">
        Contact Information
      </h3>

      {/* Cards */}
      <div className="flex flex-col gap-5">
        {infoItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="
              p-6 rounded-xl backdrop-blur-md
              bg-white/70 border border-white/40 shadow-lg 
              flex items-center gap-4 transition-all cursor-pointer
            "
          >
            <div className="text-blue-900 bg-blue-100 p-3 rounded-full shadow-sm">
              {item.icon}
            </div>

            <div>
              <h4 className="font-semibold text-lg text-blue-900">
                {item.title}
              </h4>
              <p className="text-gray-700">{item.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ContactInfo;
