import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Heart, Star } from 'lucide-react';
import admin from '../assets/admin.jpg';

const TeamSection: React.FC = () => {
  const leader = {
    name: "SRI _ Lekhana",
    role: "Founder & Event Director",
    image: admin,
    description:
      "With a passion for perfection and creativity, Lekhana leads every event with precision and heart. Her attention to detail and leadership ensure that each celebration becomes a cherished memory.",
    achievements: "500+ Successful Events",
    specialties: ["Creative Direction", "Event Planning", "Client Relations"],
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 text-5xl opacity-15"
          animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        >
          💫
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-10 text-6xl opacity-10"
          animate={{ y: [0, -30, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          🌸
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            Meet <span className="text-indigo-600">Lekhana</span> 👑
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The heart and mind behind every unforgettable celebration
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          className="bg-white rounded-3xl shadow-2xl max-w-4xl mx-auto overflow-hidden group relative"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Background Glow */}
          <motion.div
            className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-100 via-purple-100 to-yellow-100 opacity-0"
            whileHover={{ opacity: 0.2, scale: 1.02 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          {/* Image */}
          <div className="relative z-10 ">
            <img
              src={leader.image}
              alt={leader.name}
              className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105 rounded-t-3xl"
                style={{ objectPosition: 'center 30%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-t-3xl" />

            {/* Floating Achievement Badge */}
            <motion.div
              className="absolute top-6 right-6 bg-yellow-400 text-gray-800 px-4 py-1 rounded-full text-sm font-semibold shadow-md"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Award className="w-4 h-4 inline mr-1" />
              {leader.achievements}
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-8 text-center relative z-20">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">
              <motion.span
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text text-transparent transition-all duration-500"
                whileHover={{
                  backgroundPosition: "200% center",
                  scale: 1.1,
                  rotate: [0, 2, -2, 0],
                }}
                style={{ backgroundSize: "200% auto", display: "inline-block" }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                {leader.name}
              </motion.span>
            </h3>

            <p className="text-indigo-600 font-semibold mb-4 text-lg">{leader.role}</p>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">{leader.description}</p>

            {/* Specialties */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {leader.specialties.map((specialty, i) => (
                <span
                  key={i}
                  className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {specialty}
                </span>
              ))}
            </div>

            {/* Rating */}
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team Support Stats */}
        <motion.div
          className="mt-20 bg-white rounded-3xl shadow-xl p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-10">
            Supported by an <span className="text-indigo-600">Outstanding Team</span> 🌟
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">15+</h3>
              <p className="text-gray-600 text-sm">Team Members</p>
            </div>
            <div>
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">50+</h3>
              <p className="text-gray-600 text-sm">Awards Won</p>
            </div>
            <div>
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">4.9/5</h3>
              <p className="text-gray-600 text-sm">Client Rating</p>
            </div>
            <div>
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">1000+</h3>
              <p className="text-gray-600 text-sm">Happy Clients</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
