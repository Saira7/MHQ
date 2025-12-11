import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const cards = [
  {
    bg: "bg-white",
    text: "Really useful system. We got an amazing service for our company hotel bookings for our upcoming events.",
    name: "Barry W.",
    role: "CEO of Techlisser",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    rotate: -10,
  },
  {
    bg: "bg-indigo-200",
    text: "Nimbus lets us launch new services in hours, not days. Total game changer for our workflow!",
    name: "Devon R.",
    role: "CTO",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    rotate: -4,
  },
  {
    bg: "bg-white",
    text: "Nimbus helped streamline our workflow in a few weeks. Our team loves how simple it is to manage tasks.",
    name: "Thomas H.",
    role: "Tech Lead",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    rotate: 2,
  },
  {
    bg: "bg-black text-white",
    text: "Integrations were quick, support was solid, and the platform is extremely reliable. We rarely need to check it.",
    name: "Jacob L.",
    role: "Senior Developer",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    rotate: 8,
  },
  {
    bg: "bg-indigo-300",
    text: "Our onboarding time dropped from weeks to days using this platform. Amazing experience.",
    name: "Sarah M.",
    role: "Operations Lead",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    rotate: -6,
  },
  {
    bg: "bg-white",
    text: "The team absolutely loves using Nimbus. It saves us hours every week and reduces coordination chaos.",
    name: "Kevin R.",
    role: "Product Manager",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    rotate: 5,
  },
  {
    bg: "bg-slate-900 text-white",
    text: "By far the most reliable tool we’ve used as a team. Excellent uptime and flawless syncing.",
    name: "Melissa J.",
    role: "Project Manager",
    avatar: "https://randomuser.me/api/portraits/women/7.jpg",
    rotate: -2,
  },
  {
    bg: "bg-indigo-100",
    text: "It just works. Customer support is great, and the system performance is outstanding.",
    name: "Leo B.",
    role: "Engineer",
    avatar: "https://randomuser.me/api/portraits/men/8.jpg",
    rotate: 12,
  },
];

const InteractiveStackedTestimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const getSpacing = () => {
    if (window.innerWidth < 480) return 60;
    if (window.innerWidth < 768) return 90;
    if (window.innerWidth < 1024) return 120;
    return 140; // default (your original)
  };

  return (
    <section className="flex justify-center ">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center">
          “Real Results, Real Impact” – highlights tangible outcomes
        </h1>
        <div className="relative right-20 w-full max-w-6xl h-[520px] flex justify-center items-center">
          {cards.map((c, i) => {
            const isHovered = hoveredIndex === i;

            return (
              <motion.div
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 30, rotate: c.rotate }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{
                  rotate: isHovered ? 0 : c.rotate,
                  scale: isHovered ? 1.15 : 1,
                  y: isHovered ? -40 : 0,
                  zIndex: isHovered ? 999 : i,
                  filter:
                    hoveredIndex !== null && !isHovered
                      ? "brightness(65%)"
                      : "brightness(100%)",
                }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1], // butter smooth, no delay
                }}
                className={`
    absolute p-8 rounded-2xl shadow-2xl w-[300px]
    cursor-pointer select-none
    ${c.bg}
  `}
                style={{
                  left: `calc(50% + ${
                    (i - (cards.length - 1) / 2) * getSpacing()
                  }px)`,
                }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4 text-blue-500">
                  {Array(5)
                    .fill(0)
                    .map((_, s) => (
                      <FaStar key={s} />
                    ))}
                </div>

                {/* Feedback */}
                <p className="leading-relaxed mb-6">{c.text}</p>

                {/* User */}
                <div className="flex items-center gap-3">
                  <img
                    src={c.avatar}
                    alt={c.name}
                    className="w-10 h-10 rounded-full object-cover border"
                  />
                  <div>
                    <h4 className="font-semibold">{c.name}</h4>
                    <p className="text-xs opacity-70">{c.role}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InteractiveStackedTestimonials;
