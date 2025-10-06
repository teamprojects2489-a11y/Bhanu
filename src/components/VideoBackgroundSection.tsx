import React from 'react';
import { motion } from 'framer-motion';

const VideoBackgroundSection: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero/herovid.webm"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
            We look forward
            <br />
            to celebrating with you!
          </h1>

          <p className="text-lg md:text-xl text-sky-100 leading-relaxed max-w-3xl mx-auto mb-12">
            Your celebration wouldn't be the same without you.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="tel:+918310124421"
              className="w-32 h-32 rounded-full border-2 border-yellow-400/60 flex items-center justify-center text-yellow-400 hover:border-yellow-400 hover:bg-yellow-400/10 transition-all duration-300 backdrop-blur-sm"
            >
              CALL US
            </a>
            <a
              href="https://wa.me/918310124421?text=Hi%20Bhanu%20Events%2C%20I'm%20interested%20in%20planning%20an%20event!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-32 h-32 rounded-full border-2 border-green-400/60 flex items-center justify-center text-green-400 hover:border-green-400 hover:bg-green-400/10 transition-all duration-300 backdrop-blur-sm"
            >
              CHAT
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoBackgroundSection;
