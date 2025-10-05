import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import birthday from "../assets/Birthday/bd1.jpeg";
import wedding from "../assets/weddingcermony/wdc.jpg";
import cevent from "../assets/indiancorporateevent/icv.jpg";
import festival from "../assets/festival/indfes.jpeg";
import kids from "../assets/indiankids/kito1.jpeg";

const EventCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const events = [
    {
      id: 1,
      title: "Birthday Celebration 🎉",
      quote: "Every birthday deserves a touch of magic and joy!",
      image: birthday,
    },
    {
      id: 2,
      title: "Wedding Ceremony 💍",
      quote: "Where two hearts unite and dreams come alive.",
      image: wedding,
    },
    {
      id: 3,
      title: "Corporate Event 💼",
      quote: "Creating memorable experiences that inspire teamwork and success.",
      image: cevent,
    },
    {
      id: 4,
      title: "Kids Party Fun 🎈",
      quote: "A world of colors, laughter, and endless giggles.",
      image: kids,
    },
    {
      id: 5,
      title: "Festival Celebration 🎊",
      quote: "Celebrating culture, colors, and togetherness in every moment.",
      image: festival,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [events.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % events.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-center mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-transparent bg-clip-text drop-shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Event Highlights 
        </motion.h2>

        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-[480px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <img
                  src={events[currentSlide].image}
                  alt={events[currentSlide].title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Floating title and quote */}
                <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <h3 className="text-3xl md:text-5xl font-extrabold mb-3 tracking-wide bg-gradient-to-r from-yellow-300 via-pink-400 to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
                    {events[currentSlide].title}
                  </h3>
                  <p className="text-lg md:text-2xl italic text-white/90 drop-shadow-md font-light max-w-3xl mx-auto">
                    “{events[currentSlide].quote}”
                  </p>
                  <motion.p
                    className="mt-6 text-sm md:text-base text-yellow-300/80"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    — SB Events Team 💫
                  </motion.p>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-md"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-md"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-gradient-to-r from-pink-500 to-yellow-400 w-8 shadow-md"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventCarousel;
