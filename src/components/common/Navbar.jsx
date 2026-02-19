import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
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
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  // Close mobile menu on window resize to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  const linkClasses = ({ isActive }) =>
    `font-medium px-2 py-1 border-b-2 ${
      isActive
        ? "border-blue-900 text-blue-900"
        : "border-transparent text-blue-900 hover:border-blue-500 hover:text-blue-700 transition-colors duration-200"
    }`;

  const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  const handleServiceClick = (id) => {
    setOpen(false);
    setServicesOpen(false);

    if (window.location.pathname !== "/services") {
      navigate(`/services#${id}`);
      // Wait for navigation then scroll
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleServicesLinkClick = (e) => {
    // On mobile, toggle dropdown instead of navigating
    if (window.innerWidth < 768) {
      e.preventDefault();
      setServicesOpen(!servicesOpen);
    } else {
      scrollToTop();
    }
  };

  return (
    <nav className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm">
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
              <span className="text-xs transition-transform duration-200 group-hover:rotate-180">&#9662;</span>
            </NavLink>

            {/* Dropdown */}
            <ul className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg w-64 border border-gray-200 z-50 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 max-h-[80vh] overflow-y-auto">
              {services.map((service, index) => (
                <li key={service.title} className={index === 0 ? 'rounded-t-lg' : index === services.length - 1 ? 'rounded-b-lg' : ''}>
                  <button
                    className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors duration-200 cursor-pointer first:rounded-t-lg last:rounded-b-lg"
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
          {/* <li><NavLink to="/career" className={linkClasses} onClick={scrollToTop}>Careers</NavLink></li> */}
          <li>
            <NavLink
              to="/quote"
              className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors duration-200 font-medium"
              onClick={scrollToTop}
            >
              Get a Quote
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-blue-900 font-semibold text-sm px-3 py-2 border border-blue-900 rounded-md hover:bg-blue-50 transition-colors duration-200"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? "✕ Close" : "☰ Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200 max-h-[calc(100vh-80px)] overflow-y-auto">
          <ul className="flex flex-col py-2">
            <li>
              <NavLink 
                to="/" 
                onClick={() => { setOpen(false); scrollToTop(); }} 
                className={({ isActive }) => `block px-6 py-3 font-medium ${isActive ? 'bg-blue-50 text-blue-900 border-l-4 border-blue-900' : 'text-gray-700 hover:bg-gray-50'} transition-colors duration-200`}
              >
                Home
              </NavLink>
            </li>

            {/* Mobile Services dropdown */}
            <li className="flex flex-col">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between px-6 py-3 font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200 text-left"
              >
                <span>Services</span>
                <span className={`text-xs transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}>&#9662;</span>
              </button>
              
              {/* Mobile Services Submenu */}
              <div 
                className={`overflow-hidden transition-all duration-300 ${servicesOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <ul className="bg-gray-50 border-l-2 border-blue-200">
                  {services.map((service) => (
                    <li key={service.title}>
                      <button
                        className="block w-full text-left px-8 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-900 transition-colors duration-200 cursor-pointer"
                        onClick={() => handleServiceClick(service.title.replace(/\s+/g, "-").toLowerCase())}
                      >
                        {service.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li>
              <NavLink 
                to="/about" 
                onClick={() => { setOpen(false); scrollToTop(); }} 
                className={({ isActive }) => `block px-6 py-3 font-medium ${isActive ? 'bg-blue-50 text-blue-900 border-l-4 border-blue-900' : 'text-gray-700 hover:bg-gray-50'} transition-colors duration-200`}
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/testimonials" 
                onClick={() => { setOpen(false); scrollToTop(); }} 
                className={({ isActive }) => `block px-6 py-3 font-medium ${isActive ? 'bg-blue-50 text-blue-900 border-l-4 border-blue-900' : 'text-gray-700 hover:bg-gray-50'} transition-colors duration-200`}
              >
                Testimonials
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/blog" 
                onClick={() => { setOpen(false); scrollToTop(); }} 
                className={({ isActive }) => `block px-6 py-3 font-medium ${isActive ? 'bg-blue-50 text-blue-900 border-l-4 border-blue-900' : 'text-gray-700 hover:bg-gray-50'} transition-colors duration-200`}
              >
                Blog
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/contact" 
                onClick={() => { setOpen(false); scrollToTop(); }} 
                className={({ isActive }) => `block px-6 py-3 font-medium ${isActive ? 'bg-blue-50 text-blue-900 border-l-4 border-blue-900' : 'text-gray-700 hover:bg-gray-50'} transition-colors duration-200`}
              >
                Contact
              </NavLink>
            </li>

            {/* <li>
              <NavLink 
                to="/career" 
                onClick={() => { setOpen(false); scrollToTop(); }} 
                className={({ isActive }) => `block px-6 py-3 font-medium ${isActive ? 'bg-blue-50 text-blue-900 border-l-4 border-blue-900' : 'text-gray-700 hover:bg-gray-50'} transition-colors duration-200`}
              >
                Careers
              </NavLink>
            </li> */}

            <li className="px-6 py-3">
              <NavLink
                to="/quote"
                onClick={() => { setOpen(false); scrollToTop(); }}
                className="block text-center px-4 py-2.5 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors duration-200 font-medium"
              >
                Get a Quote
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;