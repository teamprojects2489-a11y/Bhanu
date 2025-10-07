import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import CloudElements from "./CloudElements";

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <motion.section
      ref={heroRef}
      id="home"
      className="relative min-h-screen overflow-hidden"
      animate={{ y: [0, -20, 0] }}
      transition={{ 
        duration: 3, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/hero/herovid.webm"
            type="video/webm"
          />
          {/* Fallback for browsers that don't support video */}
          <div className="w-full h-full bg-gradient-to-b from-sky-400 via-sky-500 to-sky-600"></div>
        </video>

        {/* Video Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <CloudElements />

      <div className="relative z-20 container mx-auto px-4 h-screen flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Animated Sparkles */}
          <motion.div
            className="absolute -top-10 -left-10 text-4xl"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ✨
          </motion.div>

          <motion.div
            className="absolute -top-5 -right-8 text-3xl"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            🎈
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white drop-shadow-lg mb-6"
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1.5, 
              delay: 0.5,
              type: "spring",
              damping: 20,
              stiffness: 100
            }}
          >
            SB <span className="text-yellow-300">Events</span>
          </motion.h1>

          <motion.p
            className="text-2xl md:text-4xl text-yellow-200 drop-shadow-md font-medium italic mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 1.2,
              type: "spring",
              damping: 20,
              stiffness: 100
            }}
          >
            Where the Joy Meets the Sky
          </motion.p>

          {/* Floating Balloons */}
          <motion.div
            className="absolute -bottom-8 left-1/4 text-4xl"
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            🎈
          </motion.div>

          <motion.div
            className="absolute -bottom-12 right-1/4 text-3xl"
            animate={{
              y: [0, -25, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          >
            🎉
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
