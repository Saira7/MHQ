import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FiCode, FiClock, FiTool, FiGlobe } from "react-icons/fi";

const testimonials = [
  {
    text: "MHQ UK Consultants helped our business establish in the UK seamlessly. Amazing professionalism.",
    name: "Sarah Williams",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    text: "Their support with company formation and compliance was excellent. Highly recommended.",
    name: "Michael Brown",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    text: "Very cooperative team with great consultancy expertise. Smooth onboarding!",
    name: "Emily Carter",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    text: "Exceptional consultancy. They guided us through business setup, banking, and branding with complete clarity.",
    name: "Daniel Thompson",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
];


const faqs = [
  {
    q: "What services does MHQ UK Consultants offer?",
    a: "We help with UK company formation, business consultancy, digital branding, and compliance services.",
    icon: FiCode,
  },
  {
    q: "How long does company formation take?",
    a: "Most UK companies are formed within 24–48 hours depending on verification and requirements.",
    icon: FiClock,
  },
  {
    q: "Do you offer after-service support?",
    a: "Yes, we provide ongoing UK compliance support, accounting help, and business advisory.",
    icon: FiTool,
  },
  
];

export default function HomeTestimonialsFaqs() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const toggleFAQ = (i) => setOpenFAQ(openFAQ === i ? null : i);

  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* -------------------- Title -------------------- */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-16"
        >
          What Our Clients Says
        </motion.h2>

        {/* -------------------- Testimonials Section -------------------- */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-blue-900 mb-8">Testimonials</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
              >
                <p className="text-gray-700 leading-relaxed text-base mb-4">
                  “{t.text}”
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border"
                  />
                  <h4 className="font-semibold text-blue-800">{t.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ----------------------- FAQs Section (Vertical) ----------------------- */}
        <div>
          <h3 className="text-3xl font-bold text-blue-900 mb-8">FAQs</h3>

          <div className="flex flex-col gap-4">
            {faqs.map((item, i) => {
              const Icon = item.icon;
              const isOpen = openFAQ === i;

              return (
                <motion.div
                  key={i}
                  layout
                  onClick={() => toggleFAQ(i)}
                  className="bg-white border border-gray-200 rounded-xl p-5 shadow-md cursor-pointer hover:shadow-lg transition"
                >
                  <div className="flex items-center gap-3">
                    <span className="p-3 bg-blue-100 text-blue-700 rounded-lg">
                      <Icon />
                    </span>

                    <h4 className="font-semibold text-blue-900 text-lg flex-1">
                      {item.q}
                    </h4>

                    {isOpen ? (
                      <FiChevronUp className="text-blue-900 text-xl" />
                    ) : (
                      <FiChevronDown className="text-blue-900 text-xl" />
                    )}
                  </div>

                  {/* ----------------------- Animated Answer ----------------------- */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={
                      isOpen
                        ? { height: "auto", opacity: 1 }
                        : { height: 0, opacity: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-3"
                  >
                    <p className="text-gray-700 leading-relaxed pl-1">{item.a}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
