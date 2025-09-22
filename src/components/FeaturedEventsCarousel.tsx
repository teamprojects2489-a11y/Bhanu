import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, Users, MapPin } from 'lucide-react';

const FeaturedEventsCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredEvents = [
    {
      id: 1,
      title: "Royal Wedding Celebration",
      subtitle: "Luxury Wedding Planning",
      description: "A magnificent 3-day wedding celebration with traditional and modern elements, featuring 500+ guests and world-class entertainment.",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200",
      details: {
        guests: "500+",
        duration: "3 Days",
        location: "Mumbai Palace"
      },
      category: "Wedding"
    },
    {
      id: 2,
      title: "Corporate Innovation Summit",
      subtitle: "Professional Event Management",
      description: "A high-profile corporate event bringing together industry leaders, featuring keynote speakers, networking sessions, and product launches.",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200",
      details: {
        guests: "300+",
        duration: "2 Days",
        location: "Convention Center"
      },
      category: "Corporate"
    },
    {
      id: 3,
      title: "Princess Birthday Extravaganza",
      subtitle: "Magical Children's Party",
      description: "A fairy-tale themed birthday party complete with castle decorations, princess entertainment, and magical activities for kids.",
      image: "https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=1200",
      details: {
        guests: "50+",
        duration: "6 Hours",
        location: "Garden Venue"
      },
      category: "Birthday"
    },
    {
      id: 4,
      title: "Festival of Colors",
      subtitle: "Cultural Celebration",
      description: "A vibrant cultural festival celebrating traditions with authentic decorations, cultural performances, and traditional cuisine.",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1200",
      details: {
        guests: "800+",
        duration: "1 Day",
        location: "Open Grounds"
      },
      category: "Festival"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredEvents.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [featuredEvents.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredEvents.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredEvents.length) % featuredEvents.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-red-100">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">
            Featured Events
          </h2>
          <p className="text-xl text-red-700 max-w-3xl mx-auto">
            Discover our most spectacular celebrations and see how we bring dreams to life
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                <div className="grid lg:grid-cols-2 h-full">
                  {/* Image Section */}
                  <div className="relative overflow-hidden">
                    <img
                      src={featuredEvents[currentSlide].image}
                      alt={featuredEvents[currentSlide].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="bg-yellow-400 text-red-900 px-4 py-2 rounded-full text-sm font-semibold">
                        {featuredEvents[currentSlide].category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <h3 className="text-3xl lg:text-4xl font-bold text-red-900 mb-3">
                        {featuredEvents[currentSlide].title}
                      </h3>
                      <p className="text-lg text-yellow-600 font-semibold mb-6">
                        {featuredEvents[currentSlide].subtitle}
                      </p>
                      <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        {featuredEvents[currentSlide].description}
                      </p>

                      {/* Event Details */}
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="text-center">
                          <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Users className="w-6 h-6 text-red-600" />
                          </div>
                          <p className="text-sm text-gray-500">Guests</p>
                          <p className="font-semibold text-red-900">
                            {featuredEvents[currentSlide].details.guests}
                          </p>
                        </div>
                        <div className="text-center">
                          <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Calendar className="w-6 h-6 text-red-600" />
                          </div>
                          <p className="text-sm text-gray-500">Duration</p>
                          <p className="font-semibold text-red-900">
                            {featuredEvents[currentSlide].details.duration}
                          </p>
                        </div>
                        <div className="text-center">
                          <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                            <MapPin className="w-6 h-6 text-red-600" />
                          </div>
                          <p className="text-sm text-gray-500">Location</p>
                          <p className="font-semibold text-red-900">
                            {featuredEvents[currentSlide].details.location}
                          </p>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <motion.button
                        className="bg-red-800 hover:bg-red-900 text-yellow-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Plan Similar Event
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm text-red-900 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm text-red-900 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-3">
            {featuredEvents.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-12 h-3 bg-red-800 rounded-full'
                    : 'w-3 h-3 bg-red-300 rounded-full hover:bg-red-500'
                }`}
              />
            ))}
          </div>

          {/* Thumbnail Navigation */}
          <div className="grid grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
            {featuredEvents.map((event, index) => (
              <motion.button
                key={event.id}
                onClick={() => goToSlide(index)}
                className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                  index === currentSlide
                    ? 'ring-4 ring-red-800 scale-105'
                    : 'hover:scale-105 opacity-70 hover:opacity-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-20 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-xs font-semibold truncate">
                    {event.title}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEventsCarousel;