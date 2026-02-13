import React from 'react';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Calendar, Award, Heart, Star, Trophy } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const StatsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    { 
      icon: <Calendar className="w-8 h-8" />, 
      number: "500+", 
      label: "Events Organized",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: <Users className="w-8 h-8" />, 
      number: "1000+", 
      label: "Happy Clients",
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: <Award className="w-8 h-8" />, 
      number: "5+", 
      label: "Years Experience",
      color: "from-orange-500 to-red-500"
    },
    { 
      icon: <Star className="w-8 h-8" />, 
      number: "4.9/5", 
      label: "Average Rating",
      color: "from-yellow-500 to-orange-500"
    },
    { 
      icon: <Trophy className="w-8 h-8" />, 
      number: "50+", 
      label: "Awards Won",
      color: "from-green-500 to-teal-500"
    },
    { 
      icon: <Heart className="w-8 h-8" />, 
      number: "100%", 
      label: "Satisfaction Rate",
      color: "from-pink-500 to-rose-500"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stats counter animation
      gsap.fromTo(".stat-card",
        {
          opacity: 0,
          y: 50,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Number counting animation
      const numbers = document.querySelectorAll('.stat-number');
      numbers.forEach((number) => {
        const finalValue = number.textContent;
        const numericValue = parseInt(finalValue?.replace(/[^\d]/g, '') || '0');
        
        gsap.fromTo(number, 
          { textContent: 0 },
          {
            textContent: numericValue,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: number,
              start: "top 80%",
              toggleActions: "play none none reverse"
            },
            onUpdate: function() {
              if (finalValue?.includes('/')) {
                number.textContent = `${Math.round(this.targets()[0].textContent * 4.9 / numericValue)}/5`;
              } else if (finalValue?.includes('%')) {
                number.textContent = `${Math.round(this.targets()[0].textContent)}%`;
              } else if (finalValue?.includes('+')) {
                number.textContent = `${Math.round(this.targets()[0].textContent)}+`;
              } else {
                number.textContent = Math.round(this.targets()[0].textContent).toString();
              }
            }
          }
        );
      });

      // Floating animation for stats
      gsap.to(".stat-card", {
        y: -5,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.2
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our Success in Numbers
          </h2>
          <p className="text-xl text-yellow-200 max-w-3xl mx-auto">
            These numbers represent the trust our clients place in us and the joy we've helped create
          </p>
        </motion.div>

        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card relative group"
            >
              <div className={`bg-gradient-to-br ${stat.color} p-6 rounded-2xl shadow-xl transform transition-all duration-300 group-hover:shadow-2xl`}>
                <div className="text-center text-white">
                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <h3 className="stat-number text-2xl md:text-3xl font-bold mb-2">{stat.number}</h3>
                  <p className="text-sm opacity-90 leading-tight">{stat.label}</p>
                </div>
              </div>

              {/* Floating sparkle */}
              <motion.div
                className="absolute -top-2 -right-2 text-yellow-300 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                ✨
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;