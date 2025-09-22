import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ChevronLeft, ChevronRight, Star, Calendar, Users } from 'lucide-react';

const Card3DCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with middle card active
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const eventCards = [
    {
      id: 1,
      title: "MAGICAL BIRTHDAY",
      subtitle: "Princess Theme Party",
      image: "https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 5.0,
      guests: "50+",
      duration: "6 Hours",
      color: "from-pink-500 to-purple-600",
      badge: "POPULAR"
    },
    {
      id: 2,
      title: "ELEGANT WEDDING",
      subtitle: "Dream Ceremony",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.9,
      guests: "200+",
      duration: "Full Day",
      color: "from-rose-500 to-pink-600",
      badge: "PREMIUM"
    },
    {
      id: 3,
      title: "CORPORATE EVENT",
      subtitle: "Professional Excellence",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      guests: "100+",
      duration: "8 Hours",
      color: "from-blue-500 to-indigo-600",
      badge: "BUSINESS"
    },
    {
      id: 4,
      title: "FESTIVAL CELEBRATION",
      subtitle: "Cultural Extravaganza",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.9,
      guests: "300+",
      duration: "2 Days",
      color: "from-orange-500 to-red-600",
      badge: "CULTURAL"
    },
    {
      id: 5,
      title: "KIDS PARTY",
      subtitle: "Fun & Games",
      image: "https://images.pexels.com/photos/1024969/pexels-photo-1024969.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 5.0,
      guests: "30+",
      duration: "4 Hours",
      color: "from-green-500 to-teal-600",
      badge: "FAMILY"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % eventCards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [eventCards.length]);

  useEffect(() => {
    if (cardsRef.current.length > 0) {
      gsap.killTweensOf(cardsRef.current);
      
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        const offset = index - currentIndex;
        const totalCards = eventCards.length;
        
        // Calculate circular positioning
        const angle = (offset * 25); // Degrees between cards
        const radius = 120; // Distance from center
        const depth = Math.abs(offset) * 100; // Z-depth
        
        // Calculate X and Y positions for circular arrangement
        const x = Math.sin((angle * Math.PI) / 180) * radius;
        const y = Math.cos((angle * Math.PI) / 180) * 20; // Slight vertical offset
        const z = -depth;
        
        // Scale and opacity based on position
        const scale = offset === 0 ? 1 : Math.max(0.7, 1 - Math.abs(offset) * 0.15);
        const opacity = offset === 0 ? 1 : Math.max(0.4, 1 - Math.abs(offset) * 0.2);
        const rotateY = angle;
        const rotateX = Math.abs(offset) * 5;
        
        gsap.set(card, {
          transformOrigin: "center center",
          transformStyle: "preserve-3d"
        });
        
        gsap.to(card, {
          duration: 0.8,
          ease: "power2.out",
          x: x,
          y: y,
          z: z,
          rotationY: rotateY,
          rotationX: rotateX,
          scale: scale,
          opacity: opacity,
          zIndex: 10 - Math.abs(offset),
          force3D: true
        });
      });
    }
  }, [currentIndex, eventCards.length]);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % eventCards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + eventCards.length) % eventCards.length);
  };

  const goToCard = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        
        {/* Decorative curved lines like in the reference */}
        <svg className="absolute top-10 left-10 w-64 h-64 opacity-20" viewBox="0 0 200 200">
          <path
            d="M20,100 Q60,20 100,100 T180,100"
            stroke="white"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M20,120 Q60,40 100,120 T180,120"
            stroke="white"
            strokeWidth="1"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </svg>
        
        <svg className="absolute bottom-10 right-10 w-48 h-48 opacity-15" viewBox="0 0 200 200">
          <path
            d="M180,100 Q140,180 100,100 T20,100"
            stroke="white"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Signature</span> Events
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience our most spectacular celebrations in an immersive 3D showcase
          </p>
        </motion.div>

        {/* 3D Card Carousel Container */}
        <div 
          ref={carouselRef}
          className="relative h-[600px] flex items-center justify-center"
          style={{ 
            perspective: '1500px',
            perspectiveOrigin: 'center center'
          }}
        >
          {eventCards.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="absolute w-80 h-96 cursor-pointer"
              onClick={() => goToCard(index)}
              style={{ 
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden'
              }}
            >
              <motion.div
                className="w-full h-full rounded-3xl overflow-hidden shadow-2xl relative border-2 border-white/20"
                whileHover={{ 
                  scale: index === currentIndex ? 1.05 : 1.02,
                  rotateY: index === currentIndex ? 5 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Card Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${card.color} opacity-80`} />
                </div>

                {/* 360 Badge - only show on active card */}
                {index === currentIndex && (
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 border border-white/30">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity, 
                        ease: "linear" 
                      }}
                      className="flex items-center space-x-1"
                    >
                      <span className="text-white text-sm font-bold">360°</span>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </motion.div>
                  </div>
                )}

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold border border-white/30">
                    {card.badge}
                  </span>
                </div>

                {/* Camera Icon - like in reference */}
                <div className="absolute bottom-6 left-6">
                  <motion.div
                    className="text-white/60"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                      <circle cx="12" cy="13" r="4"></circle>
                    </svg>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                    <p className="text-white/90 text-lg">{card.subtitle}</p>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold">{card.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">{card.guests}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{card.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button - only show on active card */}
                  {index === currentIndex && (
                    <motion.button
                      className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white py-3 rounded-full font-semibold transition-all duration-300 border border-white/30"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      View Details
                    </motion.button>
                  )}
                </div>
              </motion.div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevCard}
            className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 z-20 border border-white/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextCard}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 z-20 border border-white/20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-12 space-x-3">
          {eventCards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToCard(index)}
              className={`transition-all duration-300 border border-white/30 ${
                index === currentIndex
                  ? 'w-8 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full'
                  : 'w-3 h-3 bg-white/20 rounded-full hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Current Card Info */}
        <motion.div
          className="text-center mt-8"
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            {eventCards[currentIndex].title}
          </h3>
          <p className="text-gray-300 text-lg">
            {eventCards[currentIndex].subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Card3DCarousel;