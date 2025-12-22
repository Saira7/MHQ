import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  UserCheck,
  Map,
  ClipboardList,
  FileText,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    title: "Prospect",
    desc: "Initial enquiry and understanding your business requirements.",
    icon: UserCheck,
  },
  {
    title: "Assessment",
    desc: "Review of compliance obligations and business structure.",
    icon: Map,
  },
  {
    title: "Consultation",
    desc: "Detailed discussion with our expert consultants.",
    icon: ClipboardList,
  },
  {
    title: "Agreement",
    desc: "Confirmation of scope, timelines, and deliverables.",
    icon: FileText,
  },
  {
    title: "Ongoing Support",
    desc: "Continuous consultancy and regulatory assistance.",
    icon: CheckCircle,
  },
];

export default function ModernTimeline() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Process</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A smooth, step-by-step approach to delivering excellence in every project.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto flex items-center justify-between">
        {/* Static Gray Line */}
        <div className="absolute top-8 left-0 right-0 h-1 bg-gray-300 rounded-full z-0"></div>

        {steps.map((step, index) => {
          const Icon = step.icon;
          const isHovered = hovered === index;
          const isLast = index === steps.length - 1;

          return (
            <div
              key={index}
              className="relative z-10 flex flex-col items-center cursor-pointer"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Dynamic Blue Progress Line */}
              {/* {!isLast && (
                <motion.div
                  className="absolute top-8 left-1/2 h-1 bg-blue-600 rounded-full z-0"
                  style={{ width: "0%", transformOrigin: "left" }}
                  animate={{ width: isHovered ? "120%" : "0%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              )} */}

              {/* Circle Icon */}
              <motion.div
                className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  isHovered
                    ? "bg-blue-600 border-blue-600 text-white shadow-lg"
                    : "bg-white border-gray-300 text-gray-400"
                }`}
                whileHover={{ scale: 1.2, boxShadow: "0px 12px 25px rgba(0,0,0,0.15)" }}
              >
                <Icon size={28} />
              </motion.div>

              {/* Tooltip */}
              <motion.div
                className="absolute -top-24 w-56 bg-white rounded-lg shadow-xl p-4 text-center pointer-events-none"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="font-semibold mb-1">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </motion.div>

              {/* Step Title */}
              <p
                className={`mt-6 text-sm font-semibold transition-colors duration-300 ${
                  isHovered ? "text-blue-600" : "text-gray-400"
                }`}
              >
                {step.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
