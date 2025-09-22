import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Users, Heart } from 'lucide-react';

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Bhanu Sharma",
      role: "Founder & Creative Director",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "With 8+ years of experience in event management, Bhanu brings creativity and passion to every celebration.",
      specialties: ["Event Planning", "Creative Design", "Team Leadership"],
      achievements: "500+ Events Organized"
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Decoration Specialist",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Expert in transforming spaces with beautiful decorations and themed setups that create magical atmospheres.",
      specialties: ["Balloon Art", "Floral Design", "Theme Creation"],
      achievements: "300+ Decoration Projects"
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      role: "Event Coordinator",
      image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Ensures seamless execution of events with meticulous planning and coordination of all event elements.",
      specialties: ["Timeline Management", "Vendor Coordination", "Quality Control"],
      achievements: "200+ Events Coordinated"
    },
    {
      id: 4,
      name: "Anita Singh",
      role: "Activity Coordinator",
      image: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Specializes in organizing fun activities and entertainment that keep guests engaged throughout the event.",
      specialties: ["Kids Activities", "Entertainment", "Games & Crafts"],
      achievements: "1000+ Happy Kids"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 text-4xl opacity-20"
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
          👥
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
          ⭐
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Meet Our <span className="text-indigo-600">Amazing</span> Team 👥
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The passionate professionals behind every successful celebration
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -15 }}
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 group-hover:shadow-2xl">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Floating Achievement Badge */}
                  <motion.div
                    className="absolute top-4 right-4 bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <Award className="w-3 h-3 inline mr-1" />
                    {member.achievements}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 font-semibold mb-3 text-sm">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Specialties */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">
                      Specialties
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-3 -right-3 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ 
                  rotate: [0, 15, 0, -15, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
              >
                ✨
              </motion.div>
              
              <motion.div
                className="absolute -bottom-2 -left-2 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: index * 0.3 + 1
                }}
              >
                🌟
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          className="mt-16 bg-white rounded-3xl shadow-xl p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">15+</h3>
              <p className="text-gray-600 text-sm">Team Members</p>
            </div>
            <div>
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">50+</h3>
              <p className="text-gray-600 text-sm">Awards Won</p>
            </div>
            <div>
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">4.9/5</h3>
              <p className="text-gray-600 text-sm">Client Rating</p>
            </div>
            <div>
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
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