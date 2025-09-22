import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Lightbulb, Calendar, CheckCircle } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Consultation",
      description: "We discuss your vision, requirements, and budget to understand your perfect event",
      color: "from-blue-500 to-cyan-500",
      delay: 0
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Planning",
      description: "Our creative team designs a comprehensive plan tailored to your unique needs",
      color: "from-purple-500 to-pink-500",
      delay: 0.2
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Execution",
      description: "We handle all the details and coordinate every aspect of your special day",
      color: "from-orange-500 to-red-500",
      delay: 0.4
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Celebration",
      description: "You enjoy your perfect event while we ensure everything runs smoothly",
      color: "from-green-500 to-teal-500",
      delay: 0.6
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 4-step process ensures your event is perfectly planned and flawlessly executed
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: step.delay }}
                viewport={{ once: true }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center z-10">
                  <span className="text-sm font-bold text-gray-800">{index + 1}</span>
                </div>

                {/* Card */}
                <motion.div
                  className={`bg-gradient-to-br ${step.color} p-8 rounded-2xl shadow-xl text-white relative overflow-hidden group`}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>

                  <div className="relative z-10">
                    <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-white/90 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.div>

                {/* Connecting Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300 z-0"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;