import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EntryArchesImages } from "../../assets";

const EntryArchieves: React.FC = () => {
  const [bgImg, setBgImg] = useState<string | null>(null);
  const [fullscreenImg, setFullscreenImg] = useState<string | null>(null);
  const [loaded, setLoaded] = useState<boolean[]>(() =>
    EntryArchesImages.map(() => false)
  );

  const handleImageClick = (img: string) => {
    if (window.innerWidth < 768) setFullscreenImg(img);
  };
  const closeFullscreen = () => setFullscreenImg(null);

  const handleImageLoad = (idx: number) => {
    // delay to ensure spinner renders before disappearing
    setTimeout(() => {
      setLoaded((prev) => {
        const next = [...prev];
        next[idx] = true;
        return next;
      });
    }, 300);
  };

  return (
    <section className="py-20 min-h-screen bg-gradient-to-br from-fuchsia-100 via-rose-100 to-amber-100 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Background preview on hover */}
        {bgImg && (
          <motion.img
            src={bgImg}
            alt="Background preview"
            className="fixed inset-0 w-full h-full object-cover z-0 opacity-40 blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        )}

        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-fuchsia-700 mb-4 tracking-tight drop-shadow relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ENTRY ARCHES Gallery
        </motion.h2>

        <p className="text-xl text-center text-gray-700 mb-12 max-w-2xl mx-auto relative z-10">
          Dive into our creative and colorful ENTRY ARCHES making activities!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
          {EntryArchesImages.map((img, idx) => (
            <motion.div
              key={idx}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: loaded[idx] ? 1 : 0.5, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
              onMouseEnter={() => setBgImg(img)}
              onMouseLeave={() => setBgImg(null)}
              onClick={() => handleImageClick(img)}
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-white/60 backdrop-blur-lg border border-white/30 transition-all duration-300 group-hover:shadow-fuchsia-200 min-h-[18rem] flex items-center justify-center relative">

                {/* ✨ Spinner Overlay */}
                <AnimatePresence>
                  {!loaded[idx] && (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-100"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="w-8 h-8 border-4 border-fuchsia-400 border-t-transparent rounded-full animate-spin"></div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* 🖼️ Actual Image */}
                <img
                  src={img}
                  alt={`ENTRY ARCHES ${idx + 1}`}
                  className={`w-full h-72 object-cover transition-opacity duration-700 ${
                    loaded[idx] ? "opacity-100" : "opacity-0"
                  }`}
                  loading="lazy"
                  decoding="async"
                  onLoad={() => handleImageLoad(idx)}
                />

                {/* 🩷 Overlay Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-bold text-lg drop-shadow-lg tracking-wide">
                    Entry Arches {idx + 1}
                  </span>
                </div>

                {/* 🎯 Badge */}
                <span className="absolute top-4 right-4 bg-gradient-to-r from-fuchsia-500 to-amber-400 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm">
                  Trending
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 📱 Fullscreen viewer for mobile */}
      {fullscreenImg && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 md:hidden">
          <img src={fullscreenImg} alt="Full view" className="w-full h-full object-contain" />
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 text-white text-3xl bg-black bg-opacity-50 rounded-full p-2"
            aria-label="Close"
          >
            &#10005;
          </button>
        </div>
      )}
    </section>
  );
};

export default EntryArchieves;
