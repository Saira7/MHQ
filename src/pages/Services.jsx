import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "../components/services/ServiceCard";
import CTASection from "../components/services/CTASection";
import WhyChooseUs from "../components/services/WhyChooseUs";

// Services data
const services = [
  {
    title: "Company Formation",
    desc: "Register your UK business effortlessly with expert-guided formation services, documentation support, and compliance setup.",
    img: "/assets/company-formations.webp",
  },
  {
    title: "Business Consultancy",
    desc: "Strategic consultancy to strengthen operations, optimise growth, and build a sustainable business framework.",
    img: "/assets/consultancy.webp",
  },
  {
    title: "UK Compliance & Regulations",
    desc: "Meet HMRC, Companies House, and FCA requirements with our compliance management services.",
    img: "/assets/complaince.jpg",
  },
  {
    title: "Accounting & Tax Services",
    desc: "Reliable accounting, VAT returns, bookkeeping, and tax planning for SMEs.",
    img: "/assets/accountand tax.webp",
  },
  {
    title: "Business Funding Assistance",
    desc: "Get guidance on loans, grants, and funding solutions for growth.",
    img: "/assets/funding.jpg",
  },
  {
    title: "Digital Presence & Branding",
    desc: "Branding, website creation, and digital support for modern businesses.",
    img: "/assets/branding.jpg",
  },
  {
    title: "HR & Workforce Support",
    desc: "Onboarding support, HR documentation, and employment compliance.",
    img: "/assets/hr.png",
  },
  {
    title: "Document Preparation",
    desc: "Professional business documents including policies, contracts, proposals and more.",
    img: "/assets/document.avif",
  },
];

// Framer Motion variants for grid animation
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ServicesPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
<section
  className="relative bg-cover bg-center py-28 px-6 text-center text-white overflow-hidden"
  style={{ backgroundImage: "url('/assets/service-hero-bg.jpg')" }}
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative max-w-3xl mx-auto">
    {/* Heading */}
    <motion.h1
      className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Our Services
    </motion.h1>

    {/* Subtext */}
    <motion.p
      className="text-lg md:text-xl mb-8 leading-relaxed drop-shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      Explore our professional solutions designed to help UK businesses succeed — from company formation to digital presence.
    </motion.p>

    {/* Buttons */}
    <motion.div
      className="flex flex-col sm:flex-row justify-center gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <a
        href="/get-quote"
        className="px-6 py-3 bg-blue-900 rounded-md text-white font-semibold hover:bg-blue-800 transition-colors duration-200"
      >
        Get a Quote
      </a>
      <a
        href="/contact"
        className="px-6 py-3 border border-white text-white rounded-md font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200"
      >
        Contact Us
      </a>
    </motion.div>
  </div>
</section>



     {/* Section Heading */}
<motion.div
  className="text-center px-6 mt-10"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
>
  <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
    Services that Empower Your Business
  </h3>
  <div className="w-24 h-1 bg-blue-900 mx-auto rounded-full"></div>
  <p className="text-gray-600 mt-4 max-w-xl mx-auto">
    We provide a comprehensive range of professional services to help your business thrive in the UK market.
  </p>
</motion.div>


      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Why Choose Us / Features */}
      <WhyChooseUs />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default ServicesPage;
