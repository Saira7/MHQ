import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const infoItems = [
  { 
    title: "Email", 
    value: "info@mhqukconsultants.com", 
    icon: <Mail size={22} />,
    link: "mailto:info@mhqukconsultants.com?subject=Inquiry%20from%20Website"
  },
  { 
    title: "Phone", 
    value: "+44 7307 397818", 
    icon: <Phone size={22} />,
    link: "tel:+447307397818"
  },
  { 
    title: "WhatsApp", 
    value: "+44 7307 397818", 
    icon: <FaWhatsapp size={22} />,
    link: "https://wa.me/447307397818?text=Hello%2C%20I%27m%20interested%20in%20your%20services"
  },
  { 
    title: "Address", 
    value: "London, UK", 
    icon: <MapPin size={22} />,
    link: null
  },
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
        {infoItems.map((item, idx) => {
          const CardContent = (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`
                p-6 rounded-xl backdrop-blur-md
                bg-white/70 border border-white/40 shadow-lg 
                flex items-center gap-4 transition-all
                ${item.link ? 'cursor-pointer hover:bg-white/90' : ''}
              `}
            >
              <div className={`p-3 rounded-full shadow-sm ${
                idx === 2 ? 'bg-blue-100 text-blue-900' : 'bg-blue-100 text-blue-900'
              }`}>
                {item.icon}
              </div>

              <div>
                <h4 className="font-semibold text-lg text-blue-900">
                  {item.title}
                </h4>
                <p className="text-gray-700">{item.value}</p>
              </div>
            </motion.div>
          );

          // Wrap with link if available
          return item.link ? (
            <a 
              key={idx}
              href={item.link}
              target={item.link.startsWith('http') ? '_blank' : undefined}
              rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="block no-underline"
              title=""
            >
              {CardContent}
            </a>
          ) : (
            <div key={idx}>{CardContent}</div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ContactInfo;