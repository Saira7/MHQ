import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How can I start a UK business?",
    answer:
      "You can start a UK business with our company formation services. We guide you through registration, documentation, and compliance setup.",
  },
  {
    question: "Do you offer remote consultancy?",
    answer:
      "Yes, our consultancy services are available online to assist businesses anywhere in the UK.",
  },
  {
    question: "How do I get funding for my business?",
    answer:
      "We help you identify grants, loans, and other funding solutions suitable for your business needs.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gray-100 py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow p-6 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <h4 className="font-semibold text-lg text-blue-900 flex justify-between items-center">
              {faq.question}
              <span>{openIndex === index ? "-" : "+"}</span>
            </h4>
            {openIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
