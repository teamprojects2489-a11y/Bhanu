import React from 'react';
import { motion } from 'framer-motion';

const CloudElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Cloud 1 */}
      <motion.div
        className="absolute top-20 left-0 text-white text-8xl opacity-70"
        animate={{ x: ['0vw', '100vw'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        ☁️
      </motion.div>

      {/* Cloud 2 */}
      <motion.div
        className="absolute top-40 left-0 text-white text-6xl opacity-60"
        animate={{ x: ['0vw', '100vw'] }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear', delay: 5 }}
      >
        ☁️
      </motion.div>

      {/* Cloud 3 */}
      <motion.div
        className="absolute top-60 left-0 text-white text-7xl opacity-50"
        animate={{ x: ['0vw', '100vw'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear', delay: 10 }}
      >
        ☁️
      </motion.div>

      {/* Cloud 4 */}
      <motion.div
        className="absolute top-80 left-0 text-white text-5xl opacity-40"
        animate={{ x: ['0vw', '100vw'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear', delay: 15 }}
      >
        ☁️
      </motion.div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 text-yellow-200 text-4xl"
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        ⭐
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-1/4 text-pink-200 text-3xl"
        animate={{ 
          y: [0, -20, 0],
          x: [0, 15, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      >
        🎀
      </motion.div>
    </div>
  );
};

export default CloudElements;