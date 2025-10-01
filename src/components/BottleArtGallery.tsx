import React from 'react';
import { motion } from 'framer-motion';
import { BottleArtImages } from '../assets/index'; // Array of image URLs

const BottleArtGallery: React.FC = () => {
  return (
    <section className="py-20 min-h-screen bg-gradient-to-br from-blue-100 via-emerald-100 to-indigo-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-indigo-700 mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Bottle Art Gallery
        </motion.h2>
        <p className="text-xl text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Discover our elegant and trending bottle art creations, perfect for modern celebrations and décor.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {BottleArtImages.map((img: string, idx: number) => (
            <motion.div
              key={idx}
              className="rounded-3xl overflow-hidden shadow-xl bg-white group relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={img}
                alt={`Bottle Art ${idx + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-semibold text-lg drop-shadow-lg">Bottle Art {idx + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BottleArtGallery;