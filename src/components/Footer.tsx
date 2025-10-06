// Footer.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about#aboutsectio' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/sbe.vents/?utm_source=qr", label: "Instagram" }
  ];

const handleNavigation = (path: string) => {
  const [route, hash] = path.split('#');
  navigate(route); // navigate to the route first
  if (hash) {
    setTimeout(() => { // small delay to let route render
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

  return (
    <footer className="bg-gradient-to-br from-sky-800 via-sky-900 to-sky-950 py-16">
      <div className="container mx-auto px-4">
        {/* CTA Card */}
        <motion.div
          className="bg-sky-950 rounded-3xl p-12 mb-16 text-center text-white max-w-4xl mx-auto border border-sky-400/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Magic?
          </h2>
          <p className="text-lg text-sky-200 mb-8 max-w-2xl mx-auto">
            From concept to celebration, we've got you covered. Partner with SB EVENTS for world-class event planning and management solutions.
          </p>
          <motion.a
            href="https://wa.me/918310124421?text=Hi%20SB%20Events%2C%20please%20share%20more%20details%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-sky-400 hover:bg-sky-300 text-sky-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Consultation
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          className="flex justify-center space-x-8 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {quickLinks.map((link) => (
            <button
              key={link.name}
              className="text-yellow-200 hover:text-yellow-300 font-medium transition-colors duration-300"
              onClick={() => handleNavigation(link.path)}
            >
              {link.name}
            </button>
          ))}
        </motion.div>

        {/* Social & Contact */}
        <motion.div
          className="flex justify-center space-x-4 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target='_blank'
              className="bg-red-950 hover:bg-red-800 text-yellow-300 p-3 rounded-full transition-all duration-300 border border-yellow-600/30"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center gap-12 items-center text-yellow-200">
          <p className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-green-400" />
            <a href="tel:8897399259" className="hover:underline">8897399259</a>
          </p>
          <p>
            <a href="mailto:srilekhanac@gmail.com" className="hover:underline">
              srilekhanac@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
