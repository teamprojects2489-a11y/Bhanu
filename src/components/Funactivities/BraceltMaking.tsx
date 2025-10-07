import React, { useState } from "react";
import { motion } from "framer-motion";
import { BraceletMakingImages } from "../../assets/index";

const BraceltMaking: React.FC = () => {
  const [bgImg, setBgImg] = useState<string | null>(null);
  const [fullscreenImg, setFullscreenImg] = useState<string | null>(null);

  const handleImageClick = (img: string) => {
    // Only open fullscreen on mobile
    if (window.innerWidth < 768) {
      setFullscreenImg(img);
    }
  };

  const closeFullscreen = () => setFullscreenImg(null);

  return (
    <section className="py-40 min-h-screen bg-gradient-to-br from-fuchsia-100 via-rose-100 to-amber-100">
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
          className="text-4xl md:text-5xl font-extrabold text-center text-fuchsia-700 mb-4 tracking-tight drop-shadow relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Bracelet Making Gallery
        </motion.h2>
        <p className="text-xl text-center text-gray-700 mb-12 max-w-2xl mx-auto relative z-10">
          Dive into our creative and colorful bracelet making activities!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
          {BraceletMakingImages.map((img: string, idx: number) => (
            <motion.div
              key={idx}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.09 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
              onMouseEnter={() => setBgImg(img)}
              onMouseLeave={() => setBgImg(null)}
              onClick={() => handleImageClick(img)}
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-white/60 backdrop-blur-lg border border-white/30 transition-all duration-300 group-hover:shadow-fuchsia-200">
                <img
                  src={img}
                  alt={`Bracelet Making ${idx + 1}`}
                  className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-bold text-lg drop-shadow-lg tracking-wide">
                    Bracelet {idx + 1}
                  </span>
                </div>
                {/* Stylish badge */}
                <span className="absolute top-4 right-4 bg-gradient-to-r from-fuchsia-500 to-amber-400 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm">
                  Trending
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen image modal for mobile */}
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
        </div>
      )}
    </section>
  );
};

export default BraceltMaking;
