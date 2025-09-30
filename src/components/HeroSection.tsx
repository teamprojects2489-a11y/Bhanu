import React from "react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CloudElements from "./CloudElements";

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title animation with typing effect
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: "back.out(1.7)",
          delay: 0.5,
        }
      );

      // Tagline animation
      gsap.fromTo(
        taglineRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: 1.2,
        }
      );

      // Button animation with bounce
      gsap.fromTo(
        buttonRef.current,
        {
          opacity: 0,
          scale: 0,
          rotation: -180,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(2)",
          delay: 1.8,
        }
      );

      // Continuous floating animation for the entire hero
      gsap.to(heroRef.current, {
        y: -20,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen overflow-hidden"
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
            src="https://video.wixstatic.com/video/ac4509_e2e9678a88e04202ab38da85e5fca299/1080p/mp4/file.mp4"
            type="video/mp4"
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

          <h1
            ref={titleRef}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white drop-shadow-lg mb-6"
          >
            SB <span className="text-yellow-300">Events</span>
          </h1>

          <p
            ref={taglineRef}
            className="text-2xl md:text-4xl text-yellow-200 drop-shadow-md font-medium italic mb-8"
          >
            Where the Joy Meets the Sky
          </p>

          {/* Get Started Button */}
          <button
            ref={buttonRef}
            className="bg-yellow-400 hover:bg-yellow-300 text-gray-800 px-8 py-4 rounded-full font-bold text-lg shadow-xl transform transition-all duration-300 hover:scale-105"
            onClick={() => {
              const element = document.getElementById("services");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            🚀 Get Started
          </button>

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
    </section>
  );
};

export default HeroSection;
