import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/MHG-FINAL-LOGO-finaal-and-last.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Tailwind classes for active and inactive links
  const linkClasses = ({ isActive }) =>
    `font-medium px-2 py-1 border-b-2 ${
      isActive
        ? "border-blue-900 text-blue-900"
        : "border-transparent text-blue-900 hover:border-blue-500 hover:text-blue-700 transition-colors duration-200"
    }`;

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 w-full z-50 bg-black/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <NavLink
  to="/"
  className="flex items-center gap-2"
  onClick={scrollToTop}
>
  <img
    src={logo}
    alt="MHQ UK Consultants Logo"
    className="h-10 w-auto"
  />
  <span className="text-lg font-bold text-blue-900 relative top-2.5">
  UK Consultants
  </span>
</NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <NavLink to="/" className={linkClasses} onClick={scrollToTop}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={linkClasses} onClick={scrollToTop}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkClasses} onClick={scrollToTop}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/testimonials" className={linkClasses} onClick={scrollToTop}>
              Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={linkClasses} onClick={scrollToTop}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkClasses} onClick={scrollToTop}>
              Contact
            </NavLink>
          </li>
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
          <NavLink to="/" onClick={() => { setOpen(false); scrollToTop(); }} className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/services" onClick={() => { setOpen(false); scrollToTop(); }} className={linkClasses}>
            Services
          </NavLink>
          <NavLink to="/about" onClick={() => { setOpen(false); scrollToTop(); }} className={linkClasses}>
            About
          </NavLink>
          <NavLink to="/testimonials" onClick={() => { setOpen(false); scrollToTop(); }} className={linkClasses}>
            Testimonials
          </NavLink>
          <NavLink to="/blog" onClick={() => { setOpen(false); scrollToTop(); }} className={linkClasses}>
            Blog
          </NavLink>
          <NavLink to="/contact" onClick={() => { setOpen(false); scrollToTop(); }} className={linkClasses}>
            Contact
          </NavLink>
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
