import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Award, CheckCircle } from 'lucide-react';

import ab1 from '../assets/About/ab1.webp';
import ab2 from '../assets/About/ab2.webp';
import ab3 from '../assets/About/ab3.webp';
import ab4 from '../assets/About/ab4.webp';

// ✅ Reusable Lazy Image component
const LazyImage: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imgRef = React.useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className="w-full h-48 md:h-56 rounded-xl overflow-hidden shadow-md bg-gray-100">
      {isVisible && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
    </div>
  );
};

const EventDevelopmentProcess: React.FC = () => {
  const phases = [
    {
      year: "Phase 1",
      title: "Foundation & Planning",
      description:
        "Initial consultation, requirements analysis, and event architecture planning from day one.",
      image: ab1,
      bgColor: "bg-yellow-100",
      icon: <Calendar className="w-4 h-4 mr-1" />
    },
    {
      year: "Phase 2",
      title: "Design & Development",
      description:
        "Creative event design, theme development, and comprehensive decoration planning with expert guidance.",
      image: ab2,
      bgColor: "bg-purple-100",
      icon: <Award className="w-4 h-4 mr-1" />
    },
    {
      year: "Phase 3",
      title: "Coordination & Testing",
      description:
        "Vendor coordination, timeline management, and comprehensive testing of all event elements.",
      image: ab3,
      bgColor: "bg-blue-100",
      icon: <Users className="w-4 h-4 mr-1" />
    },
    {
      year: "Phase 4",
      title: "Execution & Support",
      description:
        "Final event execution, on-site management, and ongoing support to ensure perfect celebration.",
      image: ab4,
      bgColor: "bg-green-100",
      icon: <CheckCircle className="w-4 h-4 mr-1" />
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* LEFT SIDE */}
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-snug">
                Our <span className="text-yellow-600">4-Phase</span> <br />
                <span className="text-red-500">Event Planning</span> <br />
                <span className="text-gray-800">Process</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                SB EVENTS' comprehensive planning process takes you from concept
                to celebration-ready events with elegance and precision.
              </p>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`${phase.bgColor} rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                {/* Header */}
                <div className="flex items-center mb-2">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold mr-2 flex items-center">
                    {phase.icon}
                    {phase.year}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 flex-1 truncate">
                    {phase.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-4 md:mb-6 leading-relaxed text-base md:text-lg">
                  {phase.description}
                </p>

                {/* Image */}
                <LazyImage
                  src={phase.image}
                  alt={phase.title}
                  className="w-full h-48 md:h-56 object-cover object-top hover:scale-105 -translate-y-[15px]"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDevelopmentProcess;
