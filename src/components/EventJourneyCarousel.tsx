import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Lightbulb, Calendar, CheckCircle, Users, Star } from 'lucide-react';
import cevent from "../assets/indiancorporateevent/icv.webp";
import festival from "../assets/festival/indfes.webp";
import eve from '../assets/eventcons/eve1.webp';
import eve1 from '../assets/eventcons/ev2.webp';
import eve2 from '../assets/eventcons/eve2.webp';
import eve4 from '../assets/eventcons/eve4.webp';

const EventJourneyCarousel: React.FC = () => {
  const [activeStep, setActiveStep] = useState(3);

  const journeySteps = [
    {
      id: 1,
      title: "Initial Consultation",
      description: "Advanced event consultation and project requirements analysis",
      icon: <MessageCircle className="w-6 h-6" />,
      image: eve,
      step: "Step 1 of 6"
    },
    {
      id: 2,
      title: "Design & Development",
      description: "Custom event design and architecture development with expert guidance",
      icon: <Lightbulb className="w-6 h-6" />,
      image: eve2,
      step: "Step 2 of 6"
    },
    {
      id: 3,
      title: "Planning & Coordination",
      description: "Real-world event planning and comprehensive coordination phases",
      icon: <Calendar className="w-6 h-6" />,
      image: eve1,
      step: "Step 3 of 6"
    },
    {
      id: 4,
      title: "Verification & Validation",
      description: "Complete verification process and performance validation",
      icon: <CheckCircle className="w-6 h-6" />,
      image: cevent,
      step: "Step 4 of 6"
    },
    {
      id: 5,
      title: "Event Support",
      description: "Production planning and event execution process optimization",
      icon: <Users className="w-6 h-6" />,
      image: festival,
      step: "Step 5 of 6"
    },
    {
      id: 6,
      title: "Follow-up & Support",
      description: "Final event assistance and ongoing technical support",
      icon: <Star className="w-6 h-6" />,
      image: eve4,
      step: "Step 6 of 6"
    }
  ];

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev % journeySteps.length) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [journeySteps.length]);

  const activeStepData = journeySteps.find(step => step.id === activeStep);

  const handleStepClick = (id: number) => setActiveStep(id);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Your Journey At <span className="text-yellow-600">SB EVENTS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive event solutions, expert guidance, and consistent innovation – your 
            success depends on the expertise and dedication we bring to every project.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left - Image */}
            <motion.div
              className="relative w-full h-72 sm:h-96 lg:h-full rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.img
                  key={activeStep}
                  src={activeStepData?.image}
                  alt={activeStepData?.title}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>

              {/* Overlay Step Info */}
              <div className="absolute bottom-6 left-6 right-6">
                <motion.div
                  className="bg-yellow-600 text-white px-4 py-2 rounded-full inline-flex items-center space-x-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="bg-white text-yellow-600 p-1 rounded-full">
                    {activeStepData?.icon}
                  </div>
                  <span className="font-semibold">{activeStepData?.title}</span>
                </motion.div>
                <p className="text-white text-sm mt-2 bg-black/20 backdrop-blur-sm rounded px-3 py-1 inline-block">
                  {activeStepData?.step}
                </p>
              </div>
            </motion.div>

            {/* Right - Steps */}
            <motion.div
              className="space-y-4 max-h-[480px] lg:max-h-full overflow-auto"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {journeySteps.map(step => (
                <motion.div
                  key={step.id}
                  id={`step-${step.id}`}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    activeStep === step.id
                      ? 'bg-yellow-50 border-l-4 border-yellow-600'
                      : 'bg-gray-50 border-l-4 border-gray-200 hover:border-yellow-300'
                  }`}
                  onClick={() => handleStepClick(step.id)}
                  whileHover={{ x: 5 }}
                >
                  <div className="p-4 sm:p-6 flex items-start space-x-4">
                    <div className={`p-3 rounded-full ${
                      activeStep === step.id
                        ? 'bg-yellow-600 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}>
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold mb-2 ${
                        activeStep === step.id ? 'text-yellow-800' : 'text-gray-700'
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${
                        activeStep === step.id ? 'text-yellow-600' : 'text-gray-500'
                      }`}>
                        {step.description}
                      </p>
                    </div>
                    {activeStep === step.id && (
                      <motion.div
                        className="w-3 h-3 bg-yellow-600 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Progress Dots */}
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex space-x-2">
              {journeySteps.map(step => (
                <motion.button
                  key={step.id}
                  onClick={() => handleStepClick(step.id)}
                  className={`h-3 rounded-full bg-yellow-600`}
                  initial={{ width: 12 }}
                  animate={{ width: activeStep === step.id ? 32 : 12 }}
                  transition={{ duration: 0.4 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventJourneyCarousel;
