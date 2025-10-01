import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ClientsCarousel: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const clients = [
    {
      id: 1,
      name: "Marriott Hotels",
      logo: "🏨",
      color: "from-red-500 to-red-600",
      textColor: "text-white",
      size: "large"
    },
    {
      id: 2,
      name: "McDonald's",
      logo: "🍟",
      color: "from-yellow-400 to-yellow-500",
      textColor: "text-red-600",
      size: "medium"
    },
    {
      id: 3,
      name: "Google",
      logo: "🔍",
      color: "from-blue-500 to-blue-600",
      textColor: "text-white",
      size: "large"
    },
    {
      id: 4,
      name: "Coca Cola",
      logo: "🥤",
      color: "from-red-600 to-red-700",
      textColor: "text-white",
      size: "medium"
    },
    {
      id: 5,
      name: "Apple",
      logo: "🍎",
      color: "from-gray-800 to-gray-900",
      textColor: "text-white",
      size: "large"
    },
    {
      id: 6,
      name: "Netflix",
      logo: "🎬",
      color: "from-red-600 to-black",
      textColor: "text-white",
      size: "medium"
    },
    {
      id: 7,
      name: "Amazon",
      logo: "📦",
      color: "from-orange-400 to-orange-500",
      textColor: "text-black",
      size: "small"
    },
    {
      id: 8,
      name: "Microsoft",
      logo: "💻",
      color: "from-blue-600 to-blue-700",
      textColor: "text-white",
      size: "medium"
    },
    {
      id: 9,
      name: "Spotify",
      logo: "🎵",
      color: "from-green-500 to-green-600",
      textColor: "text-white",
      size: "small"
    },
    {
      id: 10,
      name: "Tesla",
      logo: "⚡",
      color: "from-red-500 to-red-600",
      textColor: "text-white",
      size: "large"
    },
    {
      id: 11,
      name: "Nike",
      logo: "👟",
      color: "from-black to-gray-800",
      textColor: "text-white",
      size: "medium"
    },
    {
      id: 12,
      name: "Starbucks",
      logo: "☕",
      color: "from-green-600 to-green-700",
      textColor: "text-white",
      size: "small"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation with typing effect
      gsap.fromTo(titleRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Cards stagger animation
      gsap.fromTo(".client-card",
        {
          opacity: 0,
          scale: 0.5,
          rotation: -15,
          y: 100
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: {
            amount: 1.5,
            from: "random"
          },
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Continuous floating animation
      gsap.to(".client-card", {
        y: -10,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: {
          amount: 2,
          from: "random"
        }
      });

      // Rotation animation for logos
      gsap.to(".client-logo", {
        rotation: 360,
        duration: 20,
        ease: "none",
        repeat: -1,
        stagger: {
          amount: 5,
          from: "random"
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Organic shapes like in the reference */}
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-15 blur-2xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />

        {/* Decorative curved line like in reference */}
        <svg className="absolute top-1/2 left-1/4 w-32 h-32 opacity-30" viewBox="0 0 100 100">
          <motion.path
            d="M20,50 Q50,20 80,50 Q50,80 20,50"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-purple-400"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        {/* Heart icon like in reference */}
        <motion.div
          className="absolute top-1/3 left-1/3 text-6xl opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          💖
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title Section */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex-1">
            <h2
              ref={titleRef}
              className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight"
            >
              proud to have
              <br />
              worked <span className="italic font-light relative">
                with:
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </span>
            </h2>
          </div>
        </div>

        {/* Animated Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[120px]">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              className={`client-card relative group cursor-pointer overflow-hidden rounded-3xl shadow-lg
                ${client.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${client.size === 'medium' ? 'md:row-span-1' : ''}
                ${client.size === 'small' ? 'row-span-1' : ''}
              `}
              whileHover={{ 
                scale: 1.05, 
                rotate: Math.random() * 10 - 5,
                zIndex: 10
              }}
              transition={{ duration: 0.3 }}
            >
              <div className={`w-full h-full bg-gradient-to-br ${client.color} flex flex-col items-center justify-center p-4 relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white rounded-full -translate-y-8 translate-x-8"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-white rounded-full translate-y-6 -translate-x-6"></div>
                </div>

                {/* Logo */}
                <motion.div 
                  className="client-logo text-4xl md:text-5xl mb-2 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.2
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {client.logo}
                </motion.div>

                {/* Company Name */}
                <h3 className={`${client.textColor} font-bold text-center text-sm md:text-base leading-tight group-hover:scale-105 transition-transform duration-300`}>
                  {client.name}
                </h3>

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />

                {/* Floating Sparkle */}
                <motion.div
                  className="absolute -top-2 -right-2 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ 
                    rotate: [0, 15, 0, -15, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                >
                  ✨
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: "100+", label: "Happy Clients", icon: "😊" },
              { number: "500+", label: "Events Delivered", icon: "🎉" },
              { number: "50+", label: "Corporate Partners", icon: "🤝" },
              { number: "5★", label: "Average Rating", icon: "⭐" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.number}</h3>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              🤝 Want to Join Our Client Family?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Let's create something amazing together! Join hundreds of satisfied clients who trust us with their most important events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+919876543210"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📞 Let's Talk Business
              </motion.a>
              <motion.a
                href="mailto:contact.sbevents9@gmail.com"
                className="bg-white text-purple-600 border-2 border-purple-500 px-8 py-4 rounded-full font-bold hover:bg-purple-50 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ✉️ Send Proposal
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsCarousel;