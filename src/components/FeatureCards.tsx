import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const FeatureCards: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  const features = [
    { id: 1, title: "Decoration", icon: "🎈", description: "Balloons, flowers, ribbons, fairy lights & more", buttonText: "Explore Decorations", gradient: "from-pink-400 via-rose-400 to-pink-500", slug: "/services#decoration" },
    { id: 2, title: "Activities", icon: "🎨", description: "Face painting, crafts, games & entertainment", buttonText: "See Activities", gradient: "from-blue-400 via-cyan-400 to-blue-500", slug: "/services#fun-activities" },
  ];

  const handleClick = (e:any, slug:string) => {
    e.preventDefault();
    navigate(slug);
  };

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute top-20 left-10 text-6xl opacity-20" animate={{ rotate: [0, 20, 0], scale: [1, 1.05, 1] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}>✨</motion.div>
        <motion.div className="absolute bottom-20 right-10 text-5xl opacity-20" animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}>🎈</motion.div>
        <motion.div className="absolute top-1/2 right-1/4 text-4xl opacity-15" animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.25, 0.15] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}>🌟</motion.div>
      </div>

      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-center text-gray-800 mb-4"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, type: "spring", damping: 20, stiffness: 100 }}
          viewport={{ once: true }}
        >
          Our <span className="text-yellow-600">Amazing</span> Services ✨
        </motion.h2>

        <motion.p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
          From magical decorations to fun activities, we create unforgettable experiences
        </motion.p>

        {/* Cards Container */}
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div key={feature.id} className="flex justify-center w-full md:w-[30%]">
              <motion.div 
                initial={{ opacity: 0, y: 50, rotate: -5, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                transition={{ duration: 0.8, type: "spring", damping: 20, stiffness: 100 }}
                viewport={{ once: true }}
                className={`feature-card relative group cursor-pointer w-full bg-gradient-to-br ${feature.gradient} p-8 rounded-3xl shadow-xl transform transition-all duration-500 group-hover:shadow-2xl overflow-hidden`}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>

                <div className="text-center text-white" onClick={(e) => handleClick(e, feature.slug)}>
                  <motion.div 
                    className="floating-icon text-6xl mb-6" 
                    animate={{ 
                      scale: [1, 1.1, 1], 
                      rotate: [0, 5, 0],
                      y: [0, -5, 0]
                    }} 
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300">{feature.title}</h3>
                  <p className="text-lg mb-8 opacity-90 leading-relaxed">{feature.description}</p>
                  <motion.button onClick={() => handleClick(null, feature.slug)} className="bg-white text-gray-800 px-6 py-3 rounded-full font-bold hover:bg-yellow-100 transition-all duration-300 transform hover:scale-105 shadow-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>{feature.buttonText}</motion.button>
                </div>

                {/* Hover decorations */}
                <motion.div className="absolute -top-4 -right-4 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" animate={{ rotate: [0, 10, 0, -10, 0], scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>✨</motion.div>
                <motion.div className="absolute -bottom-2 -left-2 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" animate={{ y: [0, -5, 0], rotate: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>🌟</motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
