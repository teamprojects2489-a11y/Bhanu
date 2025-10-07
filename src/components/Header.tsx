import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { logo } from "../assets/index";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCallPopup, setShowCallPopup] = useState(false);
  const location = useLocation();

  // handle scroll background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // disable background scroll when popup is open
  useEffect(() => {
    if (showCallPopup) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
    };
  }, [showCallPopup]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  const handleCallClick = (e: React.MouseEvent) => {
    if (!isMobile) {
      e.preventDefault();
      setShowCallPopup(true);
    }
  };

  return (
    <>
      {/* Header */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-x-hidden
        ${isScrolled ? "bg-sky-950/95 backdrop-blur-lg shadow-2xl" : "bg-transparent"}`}
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
                <img src={logo} alt="Logo" className="w-10 h-10 drop-shadow-lg rounded-full" />
                <div>
                  <h1 className="text-xl md:text-2xl font-extrabold tracking-wide bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
                    SB EVENTS
                  </h1>
                  <p className={`text-xs tracking-wide ${isScrolled ? "text-yellow-200" : "text-yellow-200/90"}`}>
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
                  className={`relative font-semibold text-lg tracking-wide transition-all duration-300 ${
                    location.pathname === item.path ? "text-pink-400" : "text-yellow-200"
                  } hover:text-orange-400
                  after:content-[''] after:absolute after:w-0 after:h-[2px]
                  after:bg-gradient-to-r from-pink-500 to-orange-400
                  after:left-0 after:-bottom-1 after:transition-all
                  after:duration-300 hover:after:w-full`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Contact Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+918310124421"
                onClick={handleCallClick}
                className={`flex items-center space-x-2 px-5 py-2 rounded-full font-semibold shadow-lg transform transition-all duration-300 ${
                  isScrolled
                    ? "bg-gradient-to-r from-pink-600 to-red-400 text-white hover:scale-105 hover:shadow-pink-500/50"
                    : "bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:scale-105 hover:shadow-yellow-400/50"
                }`}
              >
                <Phone size={18} className="animate-pulse" />
                <span className="text-sm tracking-wide">Call Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${isScrolled ? "text-yellow-300" : "text-yellow-300"}`}
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            className={`md:hidden overflow-hidden ${isMenuOpen ? "max-h-96" : "max-h-0"}`}
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

      {/* 📞 Call Now Popup */}
      <AnimatePresence>
        {showCallPopup && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Click outside closes popup */}
            <div className="absolute inset-0" onClick={() => setShowCallPopup(false)} />
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-[90%] text-center relative z-[110]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setShowCallPopup(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
              <div className="flex flex-col items-center space-y-3">
                <Phone size={40} className="text-pink-500 animate-pulse" />
                <h2 className="text-xl font-bold text-gray-800">Thanks for reaching out! 💬</h2>
                <p className="text-gray-600">Please call us at:</p>
                <p className="text-2xl font-semibold text-pink-600">88973&nbsp;99259</p>
                <button
                  onClick={() => setShowCallPopup(false)}
                  className="mt-4 px-5 py-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-full font-medium shadow-lg hover:scale-105 transition-transform"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
