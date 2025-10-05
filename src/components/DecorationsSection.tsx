import React from 'react';
import { motion } from 'framer-motion';
  import { useNavigate } from 'react-router-dom';
const DecorationsSection: React.FC = () => {
  const navigate = useNavigate();
  const decorations = [
  { name: "Balloons Decorations", icon: "🎈", color: "from-red-400 to-pink-500", slug: "balloons" },
  { name: "Flower Decorations", icon: "🌸", color: "from-pink-400 to-rose-500", slug: "flowers" },
  { name: "Ribbons", icon: "🎀", color: "from-purple-400 to-indigo-500", slug: "ribbons" },
  { name: "Lights", icon: "💡", color: "from-yellow-400 to-orange-500", slug: "lights" },
  { name: "Stage Backdrop", icon: "🎭", color: "from-blue-400 to-cyan-500", slug: "stage-backdrop" },
  { name: "Entry Arches", icon: "🌉", color: "from-green-400 to-teal-500", slug: "entry-arches" }
];


  return (
    <section id="decoration" className="py-20 bg-white">
      <div className="container mx-auto px-4" >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Decorations
        </motion.h2>
        
        <motion.p
          className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Transform your event space with our stunning decoration services
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {decorations.map((item, index) => (
            
            <motion.div
              key={item.name}
            onClick={() => navigate(`/decorations/${item.slug}`)}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >  
              <div className={`bg-gradient-to-br ${item.color} p-6 rounded-2xl shadow-lg transform transition-all duration-300 group-hover:shadow-xl`}>
                <div className="text-center text-white">
                  <div className="text-4xl mb-4 group-hover:animate-bounce">
                    {item.icon}
                  </div>
                  <h3 className="text-sm md:text-base font-semibold leading-tight">
                    {item.name}
                  </h3>
                </div>
              </div>

              {/* Hover effect sparkle */}
              <motion.div
                className="absolute -top-2 -right-2 text-yellow-400 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                ✨
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DecorationsSection;