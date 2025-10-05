import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Award, CheckCircle } from 'lucide-react';

const EventDevelopmentProcess: React.FC = () => {
  const phases = [
    {
      year: "Phase 1",
      title: "Foundation & Planning",
      description: "Initial consultation, requirements analysis, and event architecture planning from day one.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      bgColor: "bg-yellow-100",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      year: "Phase 2", 
      title: "Design & Development",
      description: "Creative event design, theme development, and comprehensive decoration planning with expert guidance.",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
      bgColor: "bg-purple-100",
      icon: <Award className="w-6 h-6" />
    },
    {
      year: "Phase 3",
      title: "Coordination & Testing",
      description: "Vendor coordination, timeline management, and comprehensive testing of all event elements.",
      image: "https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=800",
      bgColor: "bg-blue-100",
      icon: <Users className="w-6 h-6" />
    },
    {
      year: "Phase 4",
      title: "Execution & Support",
      description: "Final event execution, on-site management, and ongoing support to ensure perfect celebration.",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
      bgColor: "bg-green-100",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Side - Sticky Content */}
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Our <span className="text-yellow-600">4-Phase</span>
                <br />
                <span className="text-red-500">Event Planning</span>
                <br />
                <span className="text-gray-800">Process</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                SB EVENTS' comprehensive planning process takes you from concept to celebration-ready events.
              </p>
            </motion.div>
          </div>

          {/* Right Side - Scrollable Boxes */}
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Year Badge */}
                <div className="absolute -left-20 top-20
                 z-10">
                  <div className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold text-sm flex items-center space-x-2">
                    <div className="bg-white text-red-500 p-1 rounded">
                      {phase.icon}
                    </div>
                    <span>{phase.year}</span>
                  </div>
                </div>

                {/* Content Box */}
                <div className={`${phase.bgColor} rounded-2xl p-8 ml-8 shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {phase.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {phase.description}
                  </p>
                  
                  {/* Image */}
                  <div className="rounded-xl overflow-hidden shadow-md">
                    <img
                      src={phase.image}
                      alt={phase.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Connecting Line (except for last item) */}
                {index < phases.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-16 bg-gray-300 z-0"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDevelopmentProcess;