import React, { useEffect } from 'react';
import DecorationsSection from '../components/DecorationsSection';
import ActivitiesSection from '../components/ActivitiesSection';
import DanceSection from '../components/DanceSection';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  useEffect(() => {
  if (location.hash) {
    const element = document.querySelector(location.hash);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100); // slight delay for rendering
    }
  }
}, [location]);

  const serviceCategories = [
    {
      title: "Event Planning",
      description: "Complete event planning from concept to execution",
      features: ["Venue Selection", "Timeline Management", "Vendor Coordination", "Budget Planning"]
    },
    {
      title: "Decoration Services",
      description: "Beautiful decorations to transform your venue",
      features: ["Balloon Arrangements", "Floral Decorations", "Lighting Setup", "Theme Design"]
    },
    {
      title: "Entertainment",
      description: "Engaging entertainment for all age groups",
      features: ["Dance Performances", "Live Music", "Games & Activities", "Photo Booths"]
    },
    {
      title: "Catering Coordination",
      description: "Delicious food arrangements for your guests",
      features: ["Menu Planning", "Vendor Selection", "Service Coordination", "Special Dietary Needs"]
    }
  ];


  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-40 h-40 bg-yellow-200/30 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute top-1/3 right-1/3 w-24 h-24 bg-white/25 rounded-full blur-2xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, delay: 2 }}
          />
        </div>

        {/* Floating Service Icons */}
        <motion.div
          className="absolute top-20 left-10 text-4xl opacity-60"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 15, 0]
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
          className="absolute bottom-20 right-10 text-3xl opacity-60"
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
          className="absolute top-1/2 left-10 text-2xl opacity-60"
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

        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto relative z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block bg-yellow-400/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-white font-semibold">🎯 What We Offer</span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-yellow-200 leading-relaxed">
              From intimate gatherings to grand celebrations, we offer comprehensive event management services 
              tailored to make your special day unforgettable.
            </p>
            
            {/* Service Highlights */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {['🎈 Decorations', '🎨 Activities', '💃 Entertainment', '🍽️ Catering'].map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-yellow-400/10 backdrop-blur-sm border border-yellow-400/30 rounded-xl p-4"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-white font-semibold text-sm">{service}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
            onClick={() => {
    const phoneNumber = "+918310124421";
    const message = encodeURIComponent("Hello! I want a custom event quote."); // your pre-filled message
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank"); // opens WhatsApp in new tab/app
    
  }}
   className="cursor-pointer bg-yellow-400 text-gray-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-xl"
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.95 }}
              >
                Get Custom Quote
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <ul className="space-y-2">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <DecorationsSection />
      <ActivitiesSection />
      {/* <DanceSection /> */}
    </div>
  );
};

export default Services;