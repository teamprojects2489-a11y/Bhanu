import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ChevronLeft, ChevronRight, Star, Calendar, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import bday from "../assets/Birthday/bd1_result.webp";
import wed from "../assets/weddingcermony/wdc.webp";
import kids from '../assets/indiankids/kito1.webp';
import ind from '../assets/indiancorporateevent/icv.webp';
import lit from '../assets/lightdecoration/lt2.webp';

const Card3DCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const navigate = useNavigate();

  const eventCards = [
    { id: 1, title: "MAGICAL BIRTHDAY", subtitle: "Princess Theme Party", image: bday, rating: 5.0, guests: "50+", duration: "6 Hours", color: "from-pink-500 to-purple-600", badge: "POPULAR" },
    { id: 2, title: "ELEGANT WEDDING", subtitle: "Dream Ceremony", image: wed, rating: 4.9, guests: "200+", duration: "Full Day", color: "from-rose-500 to-pink-600", badge: "PREMIUM" },
    { id: 3, title: "CORPORATE EVENT", subtitle: "Professional Excellence", image: ind, rating: 4.8, guests: "100+", duration: "8 Hours", color: "from-blue-500 to-indigo-600", badge: "BUSINESS" },
    { id: 4, title: "FESTIVAL CELEBRATION", subtitle: "Cultural Extravaganza", image: lit, rating: 4.9, guests: "300+", duration: "2 Days", color: "from-orange-500 to-red-600", badge: "CULTURAL" },
    { id: 5, title: "KIDS PARTY", subtitle: "Fun & Games", image: kids, rating: 5.0, guests: "30+", duration: "4 Hours", color: "from-green-500 to-teal-600", badge: "FAMILY" }
  ];

  useEffect(() => {
    const interval = setInterval(() => setCurrentIndex((prev) => (prev + 1) % eventCards.length), 4000);
    return () => clearInterval(interval);
  }, []);

  // GSAP 3D positioning for all cards
  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      const offset = index - currentIndex;
      const angle = offset * 25;
      const radius = 120;
      const depth = Math.abs(offset) * 100;
      const x = Math.sin((angle * Math.PI) / 180) * radius;
      const y = Math.cos((angle * Math.PI) / 180) * 20;
      const z = -depth;
      const scale = offset === 0 ? 1 : Math.max(0.7, 1 - Math.abs(offset) * 0.15);
      const opacity = offset === 0 ? 1 : Math.max(0.4, 1 - Math.abs(offset) * 0.2);
      const rotateY = angle;
      const rotateX = Math.abs(offset) * 5;

      gsap.set(card, { willChange: "transform, opacity" });
      gsap.to(card, {
        duration: 0.8,
        ease: "power2.out",
        x, y, z,
        rotationY: rotateY,
        rotationX: rotateX,
        scale,
        opacity,
        zIndex: 10 - Math.abs(offset),
        force3D: true
      });
    });
  }, [currentIndex]);

  const nextCard = () => setCurrentIndex((prev) => (prev + 1) % eventCards.length);
  const prevCard = () => setCurrentIndex((prev) => (prev - 1 + eventCards.length) % eventCards.length);
  const goToCard = (index: number) => setCurrentIndex(index);
  const handleClick = () => navigate(`/services#decoration`);

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Signature</span> Events
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Experience our most spectacular celebrations in an immersive 3D showcase</p>
        </motion.div>

        <div className="relative h-[600px] flex items-center justify-center" style={{ perspective: '1500px', perspectiveOrigin: 'center center' }}>
          {eventCards.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => { if (el) cardsRef.current[index] = el; }}
              className="absolute w-80 h-96 cursor-pointer"
              onClick={() => goToCard(index)}
              style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', willChange: 'transform, opacity' }}
            >
              <motion.div
                className="w-full h-full rounded-3xl overflow-hidden shadow-2xl relative border-2 border-white/20"
                whileHover={{ scale: index === currentIndex ? 1.05 : 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <img src={card.image} alt={card.title} className="w-full h-full object-cover" loading="lazy"/>
                <div className={`absolute inset-0 bg-gradient-to-t ${card.color} opacity-80`} />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold border border-white/30">
                    {card.badge}
                  </span>
                </div>

                {/* Content only on active card */}
                {index === currentIndex && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="absolute inset-0 p-6 text-white flex flex-col justify-end">
                    <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                    <p className="text-white/90 text-lg mb-4">{card.subtitle}</p>

                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-1"><Star className="w-4 h-4 text-yellow-400" /><span className="text-sm font-semibold">{card.rating}</span></div>
                      <div className="flex items-center space-x-1"><Users className="w-4 h-4" /><span className="text-sm">{card.guests}</span></div>
                      <div className="flex items-center space-x-1"><Calendar className="w-4 h-4" /><span className="text-sm">{card.duration}</span></div>
                    </div>

                    <motion.button
                      className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white py-3 rounded-full font-semibold transition-all duration-300 border border-white/30"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleClick}
                    >
                      View Details
                    </motion.button>
                  </motion.div>
                )}
              </motion.div>
            </div>
          ))}

          {/* Navigation */}
          <button onClick={prevCard} className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-4 rounded-full z-20 border border-white/20"><ChevronLeft className="w-6 h-6"/></button>
          <button onClick={nextCard} className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-4 rounded-full z-20 border border-white/20"><ChevronRight className="w-6 h-6"/></button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-12 space-x-3">
          {eventCards.map((_, index) => (
            <button key={index} onClick={() => goToCard(index)} className={`transition-all duration-300 border border-white/30 ${index === currentIndex ? 'w-8 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full' : 'w-3 h-3 bg-white/20 rounded-full hover:bg-white/40'}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card3DCarousel;
