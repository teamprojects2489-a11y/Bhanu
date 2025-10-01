import React from 'react';
import { motion } from 'framer-motion';
import { HairBraidingImages } from '../../assets/index';

const HairBraiding: React.FC = () => {
  return (
    <section className="py-20 min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-purple-700 mb-4 tracking-tight drop-shadow"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hair Braiding Gallery
        </motion.h2>
        <p className="text-xl text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Explore our stylish and creative hair braiding activities!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {HairBraidingImages.map((img: string, idx: number) => (
            <motion.div
              key={idx}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.09 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(168, 85, 247, 0.25)" }}
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-white/60 backdrop-blur-lg border border-white/30 transition-all duration-300 group-hover:shadow-purple-200">
                <img
                  src={img}
                  alt={`Hair Braiding ${idx + 1}`}
                  className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-bold text-lg drop-shadow-lg tracking-wide">
                    Hair Braiding {idx + 1}
                  </span>
                </div>
                {/* Stylish badge */}
                <span className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-400 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm">
                  Trending
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HairBraiding;