import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import ServiceCard from "../components/services/ServiceCard";
import CTASection from "../components/services/CTASection";
import WhyChooseUs from "../components/services/WhyChooseUs";
import { IoMdCloseCircleOutline } from "react-icons/io";

// Services data
export const services = [
  {
    title: "Company Formation",
    desc: "Register your UK business effortlessly with expert-guided formation services, documentation support, and compliance setup.",
    img: "/assets/company-formations.webp",
    price: "£99",
    features: [
      "Companies House registration",
      "Director & shareholder setup",
      "Digital incorporation certificate",
      "Compliance guidance",
    ],
  },
  {
    title: "Business Consultancy",
    desc: "Strategic consultancy to strengthen operations, optimise growth, and build a sustainable business framework.",
    img: "/assets/consultancy.webp",
    price: "£199",
    features: [
      "Growth strategy session",
      "Operational improvement",
      "Risk & compliance advice",
      "Clear action roadmap",
    ],
  },
  {
    title: "UK Compliance & Regulations",
    desc: "End-to-end compliance support to meet HMRC, Companies House, and FCA requirements.",
    img: "/assets/complaince.jpg",
    price: "£149",
    features: [
      "Companies House filings",
      "HMRC compliance support",
      "Annual confirmation statements",
      "Regulatory guidance",
    ],
  },
  {
    title: "Accounting & Tax Services",
    desc: "Professional accounting, VAT returns, bookkeeping, and tax planning tailored for SMEs.",
    img: "/assets/accountand tax.webp",
    price: "£149 / month",
    features: [
      "Monthly bookkeeping",
      "VAT returns",
      "HMRC submissions",
      "Year-end accounts",
    ],
  },
  {
    title: "Business Funding Assistance",
    desc: "Expert guidance to help you secure loans, grants, and funding solutions for growth.",
    img: "/assets/funding.jpg",
    price: "From £299",
    features: [
      "Funding eligibility assessment",
      "Loan & grant guidance",
      "Investor-ready documentation",
      "Application support",
    ],
  },
  {
    title: "Digital Presence & Branding",
    desc: "Build a strong online identity with branding, websites, and digital growth solutions.",
    img: "/assets/branding.jpg",
    price: "From £399",
    features: [
      "Brand identity design",
      "Website setup",
      "SEO & optimisation",
      "Digital growth strategy",
    ],
  },
  {
    title: "HR & Workforce Support",
    desc: "Comprehensive HR support including onboarding, documentation, and employment compliance.",
    img: "/assets/hr.png",
    price: "£129",
    features: [
      "HR policies & contracts",
      "Employee onboarding",
      "Compliance guidance",
      "Workforce best practices",
    ],
  },
  {
    title: "Document Preparation",
    desc: "Professionally drafted business documents tailored to your needs.",
    img: "/assets/document.avif",
    price: "From £79",
    features: [
      "Contracts & agreements",
      "Company policies",
      "Business proposals",
      "Custom documentation",
    ],
  },
  {
    title: "Virtual Office Address",
    desc: "Get a prestigious UK business address with mail handling and forwarding services.",
    img: "/assets/Virtual-Office-Service.webp",
    price: "£39 / month",
    features: [
      "UK registered address",
      "Mail handling & forwarding",
      "Privacy protection",
      "Companies House use",
    ],
  },
  {
    title: "Business Bank Account Assistance",
    desc: "Guidance to open UK business bank accounts quickly and smoothly.",
    img: "/assets/bussiness-bank-assistance.jpg",
    price: "£99",
    features: [
      "Bank selection guidance",
      "Application support",
      "Documentation preparation",
      "Faster approval process",
    ],
  },
];

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to card if URL has #id
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
      }
    }
  }, [location]);

  const handleBookNow = () => {
    navigate("/contact", { state: { scrollToBookAppointment: true } });
    setActiveService(null);
  };

  return (
    <div className="bg-gray-50 relative overflow-hidden">

      {/* HERO SECTION */}
      <section
      className="relative bg-cover bg-center py-28 px-6 text-center text-white overflow-hidden"
      style={{ backgroundImage: "url('/assets/service-hero-bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Fade Container */}
      <motion.div
        className="relative max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.4 }}
      >
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Our Services
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl mb-8 leading-relaxed drop-shadow-md"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Explore our comprehensive UK business services designed to help your company grow, stay compliant, and succeed.
        </motion.p>
      </motion.div>
    </section>


      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.title}
              id={service.title.replace(/\s+/g, "-").toLowerCase()} // ID for navbar scroll
            >
              <ServiceCard {...service} openModal={() => setActiveService(service)} />
            </div>
          ))}
        </div>
      </section>

      <WhyChooseUs />
      <CTASection />

      {/* RIGHT DRAWER MODAL */}
      <AnimatePresence>
        {activeService && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveService(null)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-full md:w-[480px] bg-white z-50 shadow-2xl flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
            >
              <div className="relative h-48">
                <img
                  src={activeService.img}
                  alt={activeService.title}
                  className="w-full h-full object-cover"
                />
                <button
  onClick={() => setActiveService(null)}
  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white shadow-lg transition-all duration-300 focus:outline-none"
>
  <IoMdCloseCircleOutline className="w-6 h-6 hover:text-blue-500" />
</button>

              </div>
              <div className="flex-1 overflow-y-auto p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{activeService.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{activeService.desc}</p>
                {/* <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-6">
                  <p className="text-sm text-blue-900 font-semibold">Starting from</p>
                  <p className="text-3xl font-extrabold text-blue-900">{activeService.price}</p>
                </div> */}
                <ul className="space-y-3 mb-8">
                  {activeService.features.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <span className="mt-1 h-2 w-2 rounded-full bg-blue-900" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border-t">
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={handleBookNow}
                  className="w-full bg-blue-900 text-white py-3 rounded-md font-semibold hover:bg-blue-800 transition"
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesPage;
