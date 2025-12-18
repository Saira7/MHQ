import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Briefcase, Headphones } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted & Secure",
    desc: "Industry-standard compliance and security practices to protect your business at every step."
  },
  {
    icon: Briefcase,
    title: "Proven Expertise",
    desc: "Deep knowledge of the UK payment landscape with solutions tailored to your business goals."
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    desc: "Hands-on guidance and long-term support focused on your growth and success."
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const WhyChooseUs = () => {
  return (
    <section className="py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="uppercase text-xs tracking-widest text-blue-900 font-semibold mb-4">
            Why Choose MHQ UK
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Built on Trust.<br />Driven by Expertise.
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            We partner with businesses to deliver secure, reliable, and results-focused
            payment consulting solutions across the UK.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group rounded-2xl border border-gray-200 p-10 transition-all duration-300 hover:border-blue-900 hover:shadow-xl"
            >
              <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-blue-900/5 group-hover:bg-blue-900 transition-colors duration-300">
                <item.icon className="w-7 h-7 text-blue-900 group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
