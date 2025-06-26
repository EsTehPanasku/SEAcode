import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Subscription", path: "/subscription" },
  ];

  const scrollToFooter = () => {
    const footerElement = document.getElementById("footer-contact");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-700">SEA Catering</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-lg font-medium transition-colors duration-300 ${
                location.pathname === link.path
                  ? "text-green-700 underline"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Tombol Contact Scroll (desktop) */}
          <button
            onClick={scrollToFooter}
            className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors duration-300"
          >
            Contact
          </button>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-green-700 text-2xl transition-transform duration-150 delay-100 hover:scale-125 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-white space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block text-base font-medium ${
                location.pathname === link.path
                  ? "text-green-700 underline"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Tombol Contact Scroll (mobile) */}
          <button
            onClick={() => {
              scrollToFooter();
              setIsOpen(false);
            }}
            className="block text-base font-medium text-gray-700 hover:text-green-600"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
