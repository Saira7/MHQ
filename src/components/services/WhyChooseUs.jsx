// src/components/services/WhyChooseUs.jsx
import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

const featureData = [
  {
    icon: "💳",
    title: "Fast Merchant Onboarding",
    desc: "Get verified and approved swiftly with streamlined onboarding for top payment providers."
  },
  {
    icon: "🔒",
    title: "Secure Payment Solutions",
    desc: "PCI‑compliant, fraud‑resistant, industry‑approved payment systems for complete peace of mind."
  },
  {
    icon: "📞",
    title: "Dedicated UK Support",
    desc: "Personalised guidance for setup, compliance and integration from expert consultants."
  },
  {
    icon: "⚡",
    title: "High Approval Rates",
    desc: "We specialise in startups, SMEs, and high‑risk industries — boosting merchant account approval success."
  },
  {
    icon: "📈",
    title: "Optimised Processing Fees",
    desc: "Transparent fee structures and negotiable rates designed for long‑term business growth."
  },
  {
    icon: "🤝",
    title: "Trusted Industry Partners",
    desc: "We partner with leading UK & international payment processors — scalable, reliable solutions."
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,  // each child (FeatureCard) appears 0.2s after previous
      delayChildren: 0.1
    }
  }
};

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">WHY CHOOSE US</h2>
      </div>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6 px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {featureData.map((item, idx) => (
          <FeatureCard
            key={idx}
            icon={item.icon}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
