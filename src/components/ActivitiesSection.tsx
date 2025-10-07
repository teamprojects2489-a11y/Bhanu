import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ActivitiesSection: React.FC = () => {
  const navigate = useNavigate();
  const activities = [
    {
      name: "Face Painting",
      icon: "🎨",
      color: "from-red-400 to-pink-500",
      slug: "face-painting",
    },
    {
      name: "Caricatures",
      icon: "✏️",
      color: "from-blue-400 to-cyan-500",
      slug: "caricatures",
    },
    {
      name: "Bracelet Making",
      icon: "📿",
      color: "from-purple-400 to-indigo-500",
      slug: "bracelet-making",
    },
    {
      name: "Key Chain Making",
      icon: "🔑",
      color: "from-yellow-400 to-orange-500",
      slug: "key-chain-making",
    },
    {
      name: "Jewelry",
      icon: "💎",
      color: "from-pink-400 to-rose-500",
      slug: "jewelry",
    },
    {
      name: "Pebble Art",
      icon: "🎪",
      color: "from-green-400 to-teal-500",
      slug: "pebble-art",
    },
    {
      name: "Hair Braiding",
      icon: "💇",
      color: "from-purple-400 to-pink-500",
      slug: "hair-braiding",
    },
    {
      name: "Pot Making",
      icon: "🏺",
      color: "from-orange-400 to-red-500",
      slug: "pot-making",
    },
    {
      name: "Canvas Painting",
      icon: "🖼️",
      color: "from-blue-400 to-purple-500",
      slug: "canvas-painting",
    },
    {
      name: "Sand Activity",
      icon: "🏖️",
      color: "from-yellow-400 to-amber-500",
      slug: "sand-activity",
    },
    {
      name: "Mehandi",
      icon: "✋",
      color: "from-green-400 to-emerald-500",
      slug: "mehandi",
    },
    {
      name: "Cartoon Characters",
      icon: "🎭",
      color: "from-indigo-400 to-purple-500",
      slug: "cartoon-characters",
    },
    {
      name: "Bottle Art",
      icon: "🍾",
      color: "from-cyan-400 to-blue-500",
      slug: "bottle-art",
    },
    {
      name: "Paper Craft",
      icon: "📄",
      color: "from-pink-400 to-purple-500",
      slug: "paper-craft",
    },
    {
      name: "Nail Art",
      icon: "💅",
      color: "from-rose-400 to-pink-500",
      slug: "nail-art",
    },
  ];

  return (
    <section
      id="fun-activities"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
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
          Engaging activities to keep everyone entertained and create lasting
          memories
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
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setTimeout(() => {
                  navigate(`/activities/${activity.slug}`);
                }, 300);
              }}
            >
              <div
                className={`bg-gradient-to-br ${activity.color} p-6 rounded-2xl shadow-lg transform transition-all duration-300 group-hover:shadow-xl`}
              >
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
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
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
