import React from "react";
import { motion } from "framer-motion";
import { FiBookOpen, FiBriefcase, FiThumbsUp } from "react-icons/fi";

const steps = [
  {
    number: "1",
    title: "Consultation & Requirement Assessment",
    desc: "We begin by understanding your business, goals, and requirements. Whether you're forming a company, improving compliance, or seeking consultancy, we guide you through the right approach.",
    icon: FiBookOpen,
  },
  {
    number: "2",
    title: "Documentation & Process Handling",
    desc: "Our experts prepare and manage all necessary documentation—company formation, compliance setup, HMRC filings, and more—ensuring everything is handled accurately and efficiently.",
    icon: FiBriefcase,
  },
  {
    number: "3",
    title: "Execution & Continuous Support",
    desc: "Once everything is approved and set up, we continue supporting your business through accounting, compliance updates, consultations, and long-term guidance.",
    icon: FiThumbsUp,
  },
];

// Animation Variants
const textVariant = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const iconVariant = {
  hidden: { opacity: 0, x: 40, scale: 0.9 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6 } },
};

const dividerVariant = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "100%",
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const HowWeWork = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-16"
        >
          How We Work
        </motion.h2>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT COLUMN — TEXT */}
          <div className="flex flex-col gap-24 md:pr-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-semibold shadow-md">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
          {/* CENTER DIVIDER WITH ANIMATION */}
<motion.div
  className="hidden md:block absolute left-155 top-0 bottom-0 w-[2px] rounded"
  style={{
    background: "linear-gradient(to bottom, #3b82f6, #1e3a8a, #3b82f6)", // blue gradient
    backgroundSize: "100% 200%", // for animation
    backgroundPositionY: "0%",
  }}
  animate={{
    backgroundPositionY: ["0%", "100%", "0%"], // moves gradient up and down
    opacity: [0.6, 1, 0.6], // subtle glow effect
  }}
  transition={{
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>



          {/* RIGHT COLUMN — ICONS */}
          <div className="flex flex-col gap-35 md:pl-16 relative right-70">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  variants={iconVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex justify-start md:justify-end"
                >
                  <div
                    className="
            p-4 rounded-full border-2 border-blue-100 bg-blue-50 shadow-sm
            transition-all duration-300
            hover:scale-110 hover:shadow-xl hover:border-blue-400 hover:bg-blue-100
          "
                  >
                    <Icon className="w-14 h-14 text-blue-700 transition-colors duration-300 hover:text-blue-900" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
