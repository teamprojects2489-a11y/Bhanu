import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FacePaintImages } from '../../assets';

const FacePaintingGallery: React.FC = () => {
  const [bgImg, setBgImg] = useState<string | null>(null);

  return (
    <section className="py-20 min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-purple-100">
      <div className="container mx-auto px-4 relative">
        {/* Dynamic background image on hover */}
        {bgImg && (
          <img
            src={bgImg}
            alt="Background"
            className="fixed inset-0 w-full h-full object-cover z-0 transition-all duration-500 pointer-events-none"
            style={{ top: 0, left: 0 }}
          />
        )}

        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-pink-700 mb-4 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Face Painting Gallery
        </motion.h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto relative z-10">
          Explore our creative and colorful face painting ideas for all ages!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
          {FacePaintImages.map((img: string, idx: number) => (
            <motion.div
              key={idx}
              className="rounded-3xl overflow-hidden shadow-xl bg-white group relative cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              onMouseEnter={() => setBgImg(img)}
              onMouseLeave={() => setBgImg(null)}
            >
              <img
                src={img}
                alt={`Face Painting ${idx + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-semibold text-lg drop-shadow-lg">
                  Face Painting {idx + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacePaintingGallery;