import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import eve4 from '../assets/eventcons/ev4y.jpg'
import eve5 from '../assets/eventcons/eve5.jpg';
import eve6 from '../assets/eventcons/eve6.jpg';
gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const [currentReview, setCurrentReview] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      review: "SB EVENTS made our daughter's birthday absolutely magical! The decorations were stunning and the kids had so much fun with all the activities.",
      rating: 5,
      event: "Birthday Party",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      review: "Professional service from start to finish. Our wedding ceremony was beautifully organized and all guests were thoroughly impressed.",
      rating: 5,
      event: "Wedding Ceremony",
      avatar: eve6
    },
    {
      id: 3,
      name: "Anita Patel",
      review: "The team is creative, punctual, and professional. They transformed our corporate event space into something truly spectacular!",
      rating: 5,
      event: "Corporate Event",
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      id: 4,
      name: "Chandra Giri",
      review: "Excellent attention to detail and wonderful service. Our family function was memorable thanks to their creative decorations and planning.",
      rating: 5,
      event: "Family Function",
      avatar: eve4
    },
    {
      id: 5,
      name: "Sunita Gupta",
      review: "Amazing experience! The dance performances were outstanding and the kids' activities kept everyone engaged throughout the event.",
      rating: 5,
      event: "Festival Celebration",
      avatar: eve5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % testimonials.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Testimonial card entrance animation
      gsap.fromTo(testimonialRef.current,
        {
          opacity: 0,
          scale: 0.8,
          y: 50
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: testimonialRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating animation for testimonial card
      gsap.to(testimonialRef.current, {
        y: -10,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // GSAP animation for testimonial changes
  useEffect(() => {
    if (testimonialRef.current) {
      gsap.fromTo(testimonialRef.current,
        {
          opacity: 0,
          x: 50,
          scale: 0.95
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.5,
          ease: "power2.out"
        }
      );
    }
  }, [currentReview]);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 text-4xl opacity-15"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          ⭐
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-20 text-5xl opacity-10"
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 20, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        >
          💝
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center text-gray-800 mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What Our <span className="text-yellow-600">Happy</span> Clients Say ❤️
        </motion.h2>

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center space-x-1">
            {renderStars(5)}
          </div>
          <p className="text-lg text-gray-600 mt-2 font-medium">⭐ Trusted by 500+ happy families ⭐</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div
              ref={testimonialRef}
              key={currentReview}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden border border-yellow-100"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-100 to-purple-100 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
              
              {/* Quote marks */}
              <div className="absolute top-4 left-4 text-6xl text-yellow-200 font-serif">
                "
              </div>
              <div className="absolute bottom-4 right-4 text-6xl text-yellow-200 font-serif rotate-180">
                "
              </div>

              <div className="text-center">
                <motion.div 
                  className="flex justify-center mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative">
                    <img
                      src={testimonials[currentReview].avatar}
                      alt={testimonials[currentReview].name}
                      className="w-24 h-24 rounded-full object-cover ring-4 ring-yellow-200 shadow-lg"
                    />
                    <motion.div
                      className="absolute -top-2 -right-2 text-2xl"
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    >
                      ⭐
                    </motion.div>
                  </div>
                </motion.div>

                <p className="text-lg md:text-xl text-gray-700 mb-6 italic leading-relaxed font-medium">
                  {testimonials[currentReview].review}
                </p>

                <motion.div 
                  className="flex justify-center mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  {renderStars(testimonials[currentReview].rating)}
                </motion.div>

                <h4 className="text-xl font-bold text-gray-800 mb-2 relative">
                  {testimonials[currentReview].name}
                </h4>
                <p className="text-yellow-600 font-semibold bg-yellow-50 px-4 py-1 rounded-full inline-block">
                  {testimonials[currentReview].event}
                </p>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-yellow-400 hover:bg-yellow-500 text-white shadow-lg rounded-full p-4 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-yellow-400 hover:bg-yellow-500 text-white shadow-lg rounded-full p-4 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentReview
                    ? 'bg-yellow-500 w-8 shadow-lg'
                    : 'bg-gray-300 hover:bg-yellow-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;