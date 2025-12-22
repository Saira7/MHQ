import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/MHG-FINAL-LOGO-finaal-and-last.png";

const services = [
  { title: "Company Formation" },
  { title: "Business Consultancy" },
  { title: "UK Compliance & Regulations" },
  { title: "Accounting & Tax Services" },
  { title: "Business Funding Assistance" },
  { title: "Digital Presence & Branding" },
  { title: "HR & Workforce Support" },
  { title: "Document Preparation" },
  { title: "Virtual Office Address" },
  { title: "Business Bank Account Assistance" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();

  const linkClasses = ({ isActive }) =>
    `font-medium px-2 py-1 border-b-2 ${
      isActive
        ? "border-blue-900 text-blue-900"
        : "border-transparent text-blue-900 hover:border-blue-500 hover:text-blue-700 transition-colors duration-200"
    }`;

  const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  const scrollToCard = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

 const handleServiceClick = (id) => {
  setOpen(false);
  setServicesOpen(false);

  if (window.location.pathname !== "/services") {
    navigate(`/services#${id}`);
  } else {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};


  return (
    <nav className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2" onClick={scrollToTop}>
          <img src={logo} alt="MHQ UK Consultants Logo" className="h-12 w-auto" />
          <span className="text-lg font-bold text-blue-900 relative top-3.5">
            <span className="text-black">UK</span> Consultants
          </span>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center relative">
          <li>
            <NavLink to="/" className={linkClasses} onClick={scrollToTop}>Home</NavLink>
          </li>

          {/* Services dropdown */}
          <li className="relative group cursor-pointer">
            <NavLink
              to="/services"
              className="flex items-center gap-1 font-medium px-2 py-1 text-blue-900 hover:text-blue-700 transition-colors duration-200"
              onClick={scrollToTop}
            >
              Services
              <span className="text-xs">&#9662;</span>
            </NavLink>

            {/* Dropdown */}
            <ul className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg w-64 border border-gray-200 z-50 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto transition-all duration-200">
              {services.map((service) => (
                <li key={service.title}>
                  <button
                    className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors duration-200 cursor-pointer"
                    onClick={() => handleServiceClick(service.title.replace(/\s+/g, "-").toLowerCase())}
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </li>

          <li><NavLink to="/about" className={linkClasses} onClick={scrollToTop}>About</NavLink></li>
          <li><NavLink to="/testimonials" className={linkClasses} onClick={scrollToTop}>Testimonials</NavLink></li>
          <li><NavLink to="/blog" className={linkClasses} onClick={scrollToTop}>Blog</NavLink></li>
          <li><NavLink to="/contact" className={linkClasses} onClick={scrollToTop}>Contact</NavLink></li>
          <li><NavLink to="/career" className={linkClasses} onClick={scrollToTop}>Careers</NavLink></li>
          <li>
            <NavLink
              to="/quote"
              className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors duration-200"
              onClick={scrollToTop}
            >
              Get a Quote
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-blue-900 font-semibold"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md flex flex-col gap-4 py-4 text-center text-blue-900 font-medium">
          <NavLink to="/" onClick={() => { setOpen(false); scrollToTop(); }} className={linkClasses}>Home</NavLink>

          {/* Mobile Services dropdown */}
          <div className="flex flex-col">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="font-medium py-1 text-blue-900 hover:text-blue-700 transition-colors duration-200"
            >
              Services
            </button>
            {servicesOpen && (
              <ul className="flex flex-col bg-white border-t border-gray-200 mt-1">
                {services.map((service) => (
                  <li key={service.title}>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors duration-200 cursor-pointer"
                      onClick={() => handleServiceClick(service.title.replace(/\s+/g, "-").toLowerCase())}
                    >
                      {service.title}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <NavLink to="/about" onClick={() => { setOpen(false); scrollToTop(); }} className={linkClasses}>About</NavLink>
          <NavLink to="/testimonials" onClick={() => { setOpen(false); scrollToTop(); }} className={linkClasses}>Testimonials</NavLink>
          <NavLink to="/blog" onClick={() => { setOpen(false); scrollToTop(); }} className={linkClasses}>Blog</NavLink>
          <NavLink to="/contact" onClick={() => { setOpen(false); scrollToTop(); }} className={linkClasses}>Contact</NavLink>
          <NavLink to="/career" onClick={() => { setOpen(false); scrollToTop(); }} className={linkClasses}>Careers</NavLink>
          <NavLink
            to="/quote"
            onClick={() => { setOpen(false); scrollToTop(); }}
            className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors duration-200"
          >
            Get a Quote
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
