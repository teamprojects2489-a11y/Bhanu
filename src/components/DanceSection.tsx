import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const DanceSection: React.FC = () => {
  const danceVideos = [
    {
      id: 1,
      title: "Classical Dance Performance",
      thumbnail: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Classical"
    },
    {
      id: 2,
      title: "Western Group Dance",
      thumbnail: "https://images.pexels.com/photos/3621225/pexels-photo-3621225.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Western"
    },
    {
      id: 3,
      title: "Bollywood Dance Show",
      thumbnail: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Bollywood"
    }
  ];

  return (
    <section id="dance" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 right-20 text-4xl opacity-20"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          💃
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-10 text-5xl opacity-15"
          animate={{ 
            y: [0, -40, 0],
            rotate: [0, 20, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        >
          🎵
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center text-gray-800 mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Let the <span className="text-pink-600">Rhythm</span> Speak 💃
        </motion.h2>
        
        <motion.p
          className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Professional dance performances featuring classical and western group dances that bring energy and joy to your celebration
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {danceVideos.map((video, index) => (
            <motion.div
              key={video.id}
              className="relative group cursor-pointer transform-gpu"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -15, scale: 1.02 }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" />
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="bg-white/25 backdrop-blur-sm rounded-full p-6 group-hover:bg-white/35 transition-all duration-300 border-2 border-white/30"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <Play className="text-white w-10 h-10 ml-1" fill="white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <motion.span 
                    className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-xs px-4 py-2 rounded-full mb-3 font-semibold shadow-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    {video.type}
                  </motion.span>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-yellow-300 transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-sm text-white/80">Click to watch performance</p>
                </div>
              </div>

              {/* Floating musical notes */}
              <motion.div
                className="absolute -top-3 -right-3 text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 15, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
              >
                🎵
              </motion.div>
              
              <motion.div
                className="absolute -bottom-2 -left-2 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ 
                  rotate: [0, -15, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: index * 0.3 + 1
                }}
              >
                ✨
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DanceSection;