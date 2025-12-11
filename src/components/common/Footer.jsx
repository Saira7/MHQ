import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative text-white overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-blue-900 to-black/80"></div>
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-6 py-16">
        {/* Logo & About */}
        <div>
          <h2 className="font-bold text-2xl mb-3">MHQUK</h2>
          <p className="text-gray-200 leading-relaxed">
            Secure & reliable payment consulting services. Helping UK businesses grow with confidence.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Company</h4>
          <ul className="space-y-2 text-gray-200">
            <li className="hover:text-blue-300 transition-colors">
              <NavLink to="/about" smooth onClick={scrollToTop}>About</NavLink>
            </li>
            <li className="hover:text-blue-300 transition-colors">
              <NavLink to="/services" smooth onClick={scrollToTop}>Services</NavLink>
            </li>
            <li className="hover:text-blue-300 transition-colors">
              <NavLink to="/contact" smooth onClick={scrollToTop}>Contact</NavLink>
            </li>
            <li className="hover:text-blue-300 transition-colors">
              <NavLink to="/blog" smooth onClick={scrollToTop}>Blog</NavLink>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Support</h4>
          <ul className="space-y-2 text-gray-200">
            <li className="hover:text-blue-300 transition-colors">
              <NavLink to="/contact#faq" smooth onClick={scrollToTop}>FAQ</NavLink>
            </li>
            <li className="hover:text-blue-300 transition-colors">
              <NavLink to="/privacy-policy" smooth onClick={scrollToTop}>Privacy Policy</NavLink>
            </li>
            <li className="hover:text-blue-300 transition-colors">
              <NavLink to="/terms" smooth onClick={scrollToTop}>Terms & Conditions</NavLink>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Get In Touch</h4>
          <p className="text-gray-200 mb-2">info@mhquk.com</p>
          <p className="text-gray-200 mb-4">+44 000 000 0000</p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="p-2 bg-blue-800 rounded-full hover:bg-blue-600 transition-colors"><FaFacebookF /></a>
            <a href="#" className="p-2 bg-blue-800 rounded-full hover:bg-blue-600 transition-colors"><FaTwitter /></a>
            <a href="#" className="p-2 bg-blue-800 rounded-full hover:bg-blue-600 transition-colors"><FaLinkedinIn /></a>
            <a href="#" className="p-2 bg-blue-800 rounded-full hover:bg-blue-600 transition-colors"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-blue-700 mt-10 pt-6 text-center text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} MHQUK. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
