import React from 'react';
import { motion } from 'framer-motion';

const VideoBackgroundSection: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://video.wixstatic.com/video/ac4509_e2e9678a88e04202ab38da85e5fca299/1080p/mp4/file.mp4"
            type="video/mp4"
          />
          {/* Fallback for browsers that don't support video */}
          <div className="w-full h-full bg-gradient-to-br from-sky-600 via-sky-700 to-sky-800"></div>
        </video>
        
        {/* Video Overlay for better text readability */}
        <div className="absolute inset-0 bg-gray-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex items-center justify-center">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We look forward
            <br />
            to celebrating with you!
          </motion.h1>
          
          <motion.div
            className="space-y-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl text-sky-100 leading-relaxed max-w-3xl mx-auto">
              Your celebration wouldn't be the same without you.
            </p>
            <p className="text-lg md:text-xl text-sky-100 leading-relaxed max-w-3xl mx-auto">
              Please let us know if you plan to join us by contacting us below, 
              and make note of any special requests or requirements.
            </p>
          </motion.div>

          <motion.p
            className="text-lg text-yellow-200 mb-12 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to plan your dream event?
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Contact Button */}
            <motion.a
              href="tel:+919876543210"
              className="group relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-32 h-32 rounded-full border-2 border-yellow-400/60 flex items-center justify-center text-yellow-400 hover:border-yellow-400 hover:bg-yellow-400/10 transition-all duration-300 backdrop-blur-sm">
                <span className="text-lg font-light tracking-wider">CALL US</span>
              </div>
              
              {/* Pulse animation ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-yellow-400/30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 0, 0.6]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/919876543210?text=Hi%20Bhanu%20Events%2C%20I'm%20interested%20in%20planning%20an%20event!"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-32 h-32 rounded-full border-2 border-green-400/60 flex items-center justify-center text-green-400 hover:border-green-400 hover:bg-green-400/10 transition-all duration-300 backdrop-blur-sm">
                <span className="text-lg font-light tracking-wider">CHAT</span>
              </div>
              
              {/* Pulse animation ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-green-400/30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 0, 0.6]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.a>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-yellow-200 text-sm font-light">
              Available 7 days a week • Quick response guaranteed
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 text-4xl opacity-40"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        ☁️
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-20 text-3xl opacity-30"
        animate={{ 
          y: [0, -15, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
      >
        ⭐
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-1/4 text-2xl opacity-25"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      >
        ✨
      </motion.div>
    </section>
  );
};

export default VideoBackgroundSection;