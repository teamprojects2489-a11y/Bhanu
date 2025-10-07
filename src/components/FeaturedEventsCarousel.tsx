import React, { useState, useEffect, useRef, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Users,
  MapPin,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

type FeaturedEvent = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: () => Promise<{ default: string }>;
  details: { guests: string; duration: string; location: string };
  category: string;
};

// Your featured events array (dynamic imports)
const featuredEvents: FeaturedEvent[] = [
  {
    id: 1,
    title: "Royal Wedding Celebration 💍",
    subtitle: "Luxury Wedding Planning",
    description:
      "A magnificent 3-day wedding celebration with traditional and modern elements, featuring 500+ guests and world-class entertainment.",
    image: () => import("../assets/weddingcermony/wdc.webp"),
    details: {
      guests: "500+",
      duration: "3 Days",
      location: "Banglore Palace",
    },
    category: "Wedding",
  },
  {
    id: 2,
    title: "Corporate Innovation Summit",
    subtitle: "Professional Event Management",
    description:
      "A high-profile corporate event bringing together industry leaders, featuring keynote speakers, networking sessions, and product launches.",
    image: () => import("../assets/indiancorporateevent/icv.webp"),
    details: {
      guests: "300+",
      duration: "2 Days",
      location: "Convention Center",
    },
    category: "Corporate",
  },
  {
    id: 3,
    title: "Birthday Extravaganza 🎁",
    subtitle: "Magical Children's Party",
    description:
      "A fairy-tale themed birthday party complete with castle decorations, princess entertainment, and magical activities for kids.",
    image: () => import("../assets/Birthday/bd1_result.webp"),
    details: { guests: "50+", duration: "6 Hours", location: "Garden Venue" },
    category: "Birthday",
  },
  {
    id: 4,
    title: "Festival of Colors",
    subtitle: "Cultural Celebration",
    description:
      "A vibrant cultural festival celebrating traditions with authentic decorations, cultural performances, and traditional cuisine.",
    image: () => import("../assets/festival/indfes.webp"),
    details: { guests: "800+", duration: "3 Days", location: "Open Grounds" },
    category: "Festival",
  },
  {
    id: 5,
    title: "Kids Party Fun",
    subtitle: "Joyful Children's Celebration",
    description:
      "A fun-filled kids party with games, activities, and entertainment that brings smiles to every child.",
    image: () => import("../assets/indiankids/kito1.webp"),
    details: {
      guests: "100+",
      duration: "4 Hours",
      location: "Community Hall",
    },
    category: "Kids",
  },
];

// Memoized Slide Component
const Slide = memo(
  ({ event, imageSrc }: { event: FeaturedEvent; imageSrc: string | null }) => {
    const navigate = useNavigate();
    if (!imageSrc)
      return <div className="w-full h-full bg-gray-200 rounded-3xl" />;

    const endsWithEmoji = /[\u{1F48D}\u{1F381}]$/u.test(event.title);

    return (
      <motion.div
        key={event.id}
        className="absolute inset-0"
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -300 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <div className="grid lg:grid-cols-2 h-full">
          {/* Image */}
          <div className="relative overflow-hidden h-64 sm:h-96 lg:h-full">
            <img
              src={imageSrc}
              alt={event.title}
              className="w-full h-full object-cover rounded-l-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent rounded-l-3xl" />
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="bg-yellow-400 text-red-900 px-4 py-2 rounded-full text-sm font-semibold">
                {event.category}
              </span>
            </div>
            {/* Elegant Title */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center">
              <span
                className={`inline-block px-4 py-2 rounded-xl font-bold text-lg shadow-lg
                ${
                  endsWithEmoji
                    ? "bg-white/80 text-fuchsia-700"
                    : "bg-black/60 text-white"
                }`}
                style={{ backdropFilter: "blur(4px)" }}
              >
                {event.title}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="bg-white p-6 sm:p-10 lg:p-12 flex flex-col justify-center rounded-r-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-lg text-yellow-600 font-semibold mb-4 sm:mb-6">
                {event.subtitle}
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                {event.description}
              </p>

              {/* Event Details */}
              <div className="grid grid-cols-3 gap-4 text-center mb-6">
                <div>
                  <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="w-5 h-5 text-red-600" />
                  </div>
                  <p className="text-sm text-gray-500">Guests</p>
                  <p className="font-semibold text-red-900">
                    {event.details.guests}
                  </p>
                </div>
                <div>
                  <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Calendar className="w-5 h-5 text-red-600" />
                  </div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-semibold text-red-900">
                    {event.details.duration}
                  </p>
                </div>
                <div>
                  <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <MapPin className="w-5 h-5 text-red-600" />
                  </div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-semibold text-red-900">
                    {event.details.location}
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  navigate("/services");
                }}
                className="px-4 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition"
              >
                View Detail
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  }
);

// Main Carousel Component
const FeaturedEventsCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState<(string | null)[]>(
    Array(featuredEvents.length).fill(null)
  );
  const carouselRef = useRef<HTMLDivElement>(null);

  // Load current and next images dynamically
  useEffect(() => {
    let isMounted = true;
    featuredEvents[currentSlide].image().then((module) => {
      if (isMounted)
        setImages((prev) => {
          const arr = [...prev];
          arr[currentSlide] = module.default;
          return arr;
        });
    });
    const nextIndex = (currentSlide + 1) % featuredEvents.length;
    featuredEvents[nextIndex].image().then((module) =>
      setImages((prev) => {
        const arr = [...prev];
        arr[nextIndex] = module.default;
        return arr;
      })
    );
    return () => {
      isMounted = false;
    };
  }, [currentSlide]);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % featuredEvents.length),
      6000
    );
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % featuredEvents.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + featuredEvents.length) % featuredEvents.length
    );

  return (
    <section
      ref={carouselRef}
      className="py-20 bg-gradient-to-br from-red-50 to-red-100"
    >
      <div className="container mx-auto px-4">
        {/* Title */}
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
            Discover our most spectacular celebrations and see how we bring
            dreams to life
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div className="relative h-[600px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <Slide
                event={featuredEvents[currentSlide]}
                imageSrc={images[currentSlide]}
              />
            </AnimatePresence>

            {/* Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm text-red-900 p-2 rounded-full shadow-lg transition-all duration-300 z-10"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm text-red-900 p-2 rounded-full shadow-lg transition-all duration-300 z-10"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {featuredEvents.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? "w-10 h-2 bg-red-800"
                    : "w-2 h-2 bg-red-300 hover:bg-red-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEventsCarousel;
