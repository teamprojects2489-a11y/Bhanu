import React from 'react';
import { motion } from 'framer-motion';

const ActivitiesSection: React.FC = () => {
  const activities = [
    { name: "Face Painting", icon: "🎨", color: "from-red-400 to-pink-500" },
    { name: "Caricatures", icon: "✏️", color: "from-blue-400 to-cyan-500" },
    { name: "Bracelet Making", icon: "📿", color: "from-purple-400 to-indigo-500" },
    { name: "Key Chain Making", icon: "🔑", color: "from-yellow-400 to-orange-500" },
    { name: "Jewelry", icon: "💎", color: "from-pink-400 to-rose-500" },
    { name: "Pebble Art", icon: "🎪", color: "from-green-400 to-teal-500" },
    { name: "Hair Braiding", icon: "💇", color: "from-purple-400 to-pink-500" },
    { name: "Pot Making", icon: "🏺", color: "from-orange-400 to-red-500" },
    { name: "Canvas Painting", icon: "🖼️", color: "from-blue-400 to-purple-500" },
    { name: "Clay Making", icon: "🏺", color: "from-amber-400 to-orange-500" },
    { name: "Sand Activity", icon: "🏖️", color: "from-yellow-400 to-amber-500" },
    { name: "Mehandi", icon: "✋", color: "from-green-400 to-emerald-500" },
    { name: "Cartoon Characters", icon: "🎭", color: "from-indigo-400 to-purple-500" },
    { name: "Bottle Art", icon: "🍾", color: "from-cyan-400 to-blue-500" },
    { name: "Paper Craft", icon: "📄", color: "from-pink-400 to-purple-500" },
    { name: "Nail Art", icon: "💅", color: "from-rose-400 to-pink-500" }
  ];

  return (
    <section id="activities" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Fun Activities
        </motion.h2>
        
        <motion.p
          className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Engaging activities to keep everyone entertained and create lasting memories
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.name}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={`bg-gradient-to-br ${activity.color} p-6 rounded-2xl shadow-lg transform transition-all duration-300 group-hover:shadow-xl`}>
                <div className="text-center text-white">
                  <div className="text-3xl md:text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {activity.icon}
                  </div>
                  <h3 className="text-sm md:text-base font-semibold leading-tight">
                    {activity.name}
                  </h3>
                </div>
              </div>

              {/* Floating animation element */}
              <motion.div
                className="absolute -top-1 -right-1 text-yellow-300 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                ⭐
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;