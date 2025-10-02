import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, Calendar } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-950 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-200/30 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/25 rounded-full blur-2xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to Create Magic?
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl mb-12 text-yellow-200 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Let's turn your dream event into reality. Contact us today for a free consultation 
            and discover how we can make your celebration unforgettable!
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="tel:+919876543210"
              className="bg-yellow-400 text-gray-800 px-8 py-4 rounded-full font-bold text-lg flex items-center space-x-3 hover:bg-yellow-300 transition-all duration-300 shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-6 h-6" />
              <span>Call Now</span>
            </motion.a>

            <motion.a
              href="https://wa.me/919876543210?text=Hi%20Bhanu%20Events%2C%20I'm%20interested%20in%20your%20services!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full font-bold text-lg flex items-center space-x-3 transition-all duration-300 shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-6 h-6" />
              <span>WhatsApp</span>
            </motion.a>

            <motion.a
              href="mailto: srilekhanac@gmail.com?subject=Event%20Planning%20Inquiry"
              className="bg-gray-600 hover:bg-gray-500 px-8 py-4 rounded-full font-bold text-lg flex items-center space-x-3 transition-all duration-300 shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-6 h-6" />
              <span>Email Us</span>
            </motion.a>
          </motion.div>

          {/* Special Offer */}
          <motion.div
            className="bg-yellow-400/20 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-yellow-400/30"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Calendar className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-bold text-white">Limited Time Offer!</h3>
            </div>
            <p className="text-lg mb-4">
              Book your event this month and get <span className="font-bold text-yellow-200">20% OFF</span> on decoration services!
            </p>
            <p className="text-sm text-yellow-200">
              *Valid for new bookings only. Terms and conditions apply.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-10 text-4xl opacity-60"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        ☁️
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-10 text-3xl opacity-60"
        animate={{ 
          y: [0, -15, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
      >
        ☁️
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-20 text-2xl opacity-60"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      >
        ⭐
      </motion.div>
    </section>
  );
};

export default CTASection;