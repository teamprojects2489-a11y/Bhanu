import React, { useState } from "react";
import { motion } from "framer-motion";
import { Ballonimages } from "../assets/index"; // Array of image URLs

const BalloonGallery: React.FC = () => {
  const [fullscreenImg, setFullscreenImg] = useState<string | null>(null);

  const handleImageClick = (img: string) => {
    if (window.innerWidth < 768) {
      setFullscreenImg(img);
    }
  };

  const closeFullscreen = () => setFullscreenImg(null);
  return (
    <section className="py-40 min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-purple-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-pink-700 mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Balloon Decorations Gallery
        </motion.h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our vibrant and creative balloon decoration ideas for every
          occasion!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Ballonimages.map((img: string, idx: number) => (
            <motion.div
              key={idx}
              className="rounded-3xl overflow-hidden shadow-xl bg-white group relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              onClick={() => handleImageClick(img)}
            >
              <img
                src={img}
                alt={`Balloon Decoration ${idx + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-semibold text-lg drop-shadow-lg">
                  Balloon Decor {idx + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {fullscreenImg && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 md:hidden">
          <img
            src={fullscreenImg}
            alt="Full"
            className="w-full h-full object-contain" // <-- updated style
          />
          {/* Cross button */}
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 text-white text-3xl bg-black bg-opacity-50 rounded-full p-2"
            aria-label="Close"
          >
            &#10005;
          </button>
          {/* Back button */}
          <button
            onClick={closeFullscreen}
            className="absolute top-4 left-4 text-white text-2xl bg-black bg-opacity-50 rounded-full p-2"
            aria-label="Back"
          >
            &#8592;
          </button>
        </div>
      )}
    </section>
  );
};

export default BalloonGallery;
