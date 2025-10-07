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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-x-hidden
    ${
      location.pathname === "/"
        ? isScrolled
          ? "bg-sky-800 backdrop-blur-lg shadow-2xl"
          : "bg-transparent"
        : "bg-sky-800 backdrop-blur-lg shadow-2xl"
    }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-2 sm:px-4 overflow-x-hidden">
        <div className="flex items-center justify-between h-16 md:h-20 w-full">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Logo"
                className="w-10 h-10 drop-shadow-lg rounded-full"
              />
              <div>
                <h1
                  className={`text-xl md:text-2xl font-extrabold tracking-wide bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent`}
                >
                  SB EVENTS
                </h1>
                <p
                  className={`text-xs tracking-wide ${
                    isScrolled ? "text-yellow-200" : "text-yellow-200/90"
                  }`}
                >
                  Where Joy Meets the Sky ✨
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
                className={`
                  relative font-semibold text-lg tracking-wide
                  transition-all duration-300
                  ${
                    location.pathname === item.path
                      ? "text-pink-400"
                      : "text-yellow-200"
                  }
                  hover:text-orange-400
                  after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-gradient-to-r from-pink-500 to-orange-400 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full
                `}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+918310124421"
              className={`
                flex items-center space-x-2 px-5 py-2 rounded-full font-semibold shadow-lg transform transition-all duration-300
                ${
                  isScrolled
                    ? "bg-gradient-to-r from-pink-600 to-red-400 text-white hover:scale-105 hover:shadow-pink-500/50"
                    : "bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:scale-105 hover:shadow-yellow-400/50"
                }
              `}
            >
              <Phone size={18} className="animate-pulse" />
              <span className="text-sm tracking-wide">Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? "text-yellow-300" : "text-yellow-300"
            }`}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden ${
            isMenuOpen ? "max-h-96" : "max-h-0"
          }`}
          initial={false}
          animate={{ maxHeight: isMenuOpen ? 384 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="py-4 space-y-2 bg-gradient-to-br from-sky-900 via-purple-900 to-indigo-900 text-white backdrop-blur-lg rounded-xl mt-2 shadow-xl">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-6 py-3 rounded-lg transition-all duration-300 ${
                  location.pathname === item.path
                    ? "bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold"
                    : "hover:bg-white/10 text-yellow-200"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-6 py-3 border-t border-white/20">
              <a
                href="tel:+918310124421"
                className="flex items-center space-x-2 font-semibold text-pink-300 hover:text-pink-400 transition-colors"
              >
                <Phone size={16} className="animate-pulse" />
                <span>+91 8310124421</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
