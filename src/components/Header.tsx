import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { logo } from "../assets/index";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-sky-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              {/* <div className="text-2xl">🎉</div> */}
              <img src={logo} alt="Logo" className="w-8 h-8" />
              <div>
                <h1
                  className={`text-xl md:text-2xl font-bold ${
                    isScrolled ? "text-yellow-300" : "text-yellow-300"
                  }`}
                >
                  SB EVENTS
                </h1>
                <p
                  className={`text-xs ${
                    isScrolled ? "text-yellow-200" : "text-yellow-200"
                  }`}
                >
                  Where Joy Meets the Sky
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-300 hover:text-orange-500 ${
                  location.pathname === item.path
                    ? "text-yellow-300"
                    : isScrolled
                    ? "text-yellow-200"
                    : "text-yellow-200"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+919876543210"
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                isScrolled
                  ? "bg-yellow-300 text-white-600 hover:bg-yellow-300"
                  : "bg-yellow-300/80 text-white-600 hover:bg-yellow-300"
              }`}
            >
              <Phone size={16} />
              <span className="text-sm font-medium">Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? "text-yellow-300" : "text-yellow-300"
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden ${
            isMenuOpen ? "max-h-96" : "max-h-0"
          }`}
          initial={false}
          animate={{ maxHeight: isMenuOpen ? 384 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-2 bg-white/95 backdrop-blur-md rounded-lg mt-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "text-orange-500 bg-orange-50"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 py-2 border-t border-gray-200">
              <a
                href="tel:+919876543210"
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
              >
                <Phone size={16} />
                <span>+91 9876543210</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
