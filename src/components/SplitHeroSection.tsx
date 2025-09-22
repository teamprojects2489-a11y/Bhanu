import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SplitHeroSection: React.FC = () => {
  return (
    <section className="h-screen flex">
      {/* Left Side - Content */}
      <motion.div 
        className="w-1/2 bg-gray-800 flex flex-col justify-center items-center text-white relative overflow-hidden"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="text-center z-10 px-8">
          <motion.h1 
            className="text-6xl md:text-7xl font-light tracking-[0.3em] mb-8 text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            SERVICES
          </motion.h1>

          {/* Decorative Element */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <svg 
              width="60" 
              height="60" 
              viewBox="0 0 60 60" 
              fill="none" 
              className="text-sky-400"
            >
              <path 
                d="M30 5L35 20H50L38.5 30L43.5 45L30 37L16.5 45L21.5 30L10 20H25L30 5Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none"
              />
            </svg>
          </motion.div>

          <motion.p 
            className="text-2xl md:text-3xl font-light mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Turn your dream into
          </motion.p>
          
          <motion.p 
            className="text-2xl md:text-3xl font-light mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            a reality
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Link
              to="/services"
              className="inline-block border-2 border-yellow-400 text-yellow-400 px-12 py-4 text-lg font-light tracking-widest hover:bg-yellow-400 hover:text-gray-800 transition-all duration-500 transform hover:scale-105"
            >
              DISCOVER
            </Link>
          </motion.div>
        </div>

        {/* Floating Cloud Elements */}
        <motion.div
          className="absolute top-20 right-20 text-3xl opacity-30"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          ☁️
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-16 text-2xl opacity-20"
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        >
          ⭐
        </motion.div>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div 
        className="w-1/2 relative overflow-hidden"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-800/20 z-10"></div>
        <img
          src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Elegant event celebration"
          className="w-full h-full object-cover"
        />
        
        {/* Overlay Pattern */}
        <motion.div
          className="absolute inset-0 bg-black/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />

        {/* Floating Elements on Image */}
        <motion.div
          className="absolute top-1/4 right-1/4 text-4xl opacity-60"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          ✨
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 right-1/3 text-3xl opacity-50"
          animate={{ 
            y: [0, -25, 0],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        >
          🎉
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SplitHeroSection;