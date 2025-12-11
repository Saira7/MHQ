import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    title: "Company Formation",
    desc: "Register your UK business with expert-guided setup, fast processing, and seamless documentation.",
    img: "/assets/company-formations.webp",
  },
  {
    title: "Business Consultancy",
    desc: "Strategic expert guidance to optimise your operations, growth, and long-term sustainability.",
    img: "/assets/consultancy.webp",
  },
  {
    title: "UK Compliance & Regulations",
    desc: "Stay compliant with HMRC, Companies House, FCA, and UK legal frameworks effortlessly.",
    img: "/assets/complaince.jpg",
  },
  {
    title: "Accounting & Tax Services",
    desc: "Accurate accounting, bookkeeping, VAT returns, and tax planning tailored for SMEs.",
    img: "/assets/accountand tax.webp",
  },
];

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const ServicesGrid = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
      {/* Heading */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl md:text-4xl font-extrabold text-blue-900 mb-14"
      >
        Professional Services Tailored to Your Business
      </motion.h2>

      <div className="max-w-7xl mx-auto px-6">
        {/* ------- SERVICES GRID ------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }} // stagger effect
              className="
                group relative rounded-2xl bg-white shadow-lg 
                border border-gray-200 overflow-hidden flex flex-col h-full
                transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
              "
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-300 to-blue-800 opacity-0 group-hover:opacity-10 transition-all duration-300 pointer-events-none"></div>

              {/* Image */}
              <div className="w-full h-48 bg-white flex justify-center items-center p-6 border-b border-gray-100">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 text-center">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {item.desc}
                </p>

                <Link
                  to="/services"
                  className="
                    mt-6 w-full py-2.5 rounded-lg
                    bg-blue-900 text-white font-medium text-sm
                    hover:bg-blue-600 transition shadow
                  "
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ------- CTA SECTION ------- */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="
            mt-16 relative overflow-hidden
            rounded-2xl shadow-2xl border border-blue-200 
            p-12 text-center text-white
          "
          style={{
            backgroundImage: "url('/assets/wave-bg-infosection.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.9,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
              Want to Explore All Our Services?
            </h3>

            <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
              From business setup to compliance, documentation, branding, HR
              support and more — we offer a complete suite of consultancy
              services tailored for UK businesses.
            </p>

            <Link
              to="/services"
              className="
                px-10 py-3 rounded-xl font-semibold text-lg
                bg-white text-blue-900
                hover:bg-blue-900 hover:text-white transition
                shadow-lg hover:shadow-xl
                inline-block
              "
            >
              View All Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
