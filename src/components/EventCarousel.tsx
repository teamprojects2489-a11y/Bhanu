import React, { useState, useEffect, useRef, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Event = {
  id: number;
  title: string;
  quote: string;
  image: () => Promise<{ default: string }>;
};

// Lazy import images
const events: Event[] = [
  { id: 1, title: "Birthday Celebration 🎉", quote: "Every birthday deserves a touch of magic and joy!", image: () => import("../assets/Birthday/bd1_result.webp") },
  { id: 2, title: "Wedding Ceremony 💍", quote: "Where two hearts unite and dreams come alive.", image: () => import("../assets/weddingcermony/wdc.webp") },
  { id: 3, title: "Corporate Event 💼", quote: "Creating memorable experiences that inspire teamwork and success.", image: () => import("../assets/indiancorporateevent/icv.webp") },
  { id: 4, title: "Kids Party Fun 🎈", quote: "A world of colors, laughter, and endless giggles.", image: () => import("../assets/indiankids/kito1.webp") },
  { id: 5, title: "Festival Celebration 🎊", quote: "Celebrating culture, colors, and togetherness in every moment.", image: () => import("../assets/festival/indfes.webp") },
];

// Memoized Slide
const Slide = memo(({ slide, imageSrc }: { slide: Event; imageSrc: string | null }) => {
  if (!imageSrc) return <div className="w-full h-full bg-gray-200 rounded-3xl" />; // placeholder

  const endsWithEmoji = /[\u{1F48D}\u{1F381}\u{1F38A}\u{1F389}\u{1F973}]$/u.test(slide.title);

  return (
    <motion.div
      key={slide.id}
      className="absolute inset-0"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <img src={imageSrc} alt={slide.title} className="w-full h-full object-cover rounded-3xl" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-3xl" />
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Elegant Title Background */}
        <span
          className={`inline-block px-6 py-2 rounded-xl font-bold text-lg shadow-lg mb-3
            ${endsWithEmoji ? "bg-white/80 text-fuchsia-700" : "bg-black/60 text-white"}`}
          style={{ backdropFilter: "blur(4px)" }}
        >
          {slide.title}
        </span>

        <p className="text-lg md:text-2xl italic text-white/90 drop-shadow-md font-light max-w-3xl mx-auto">
          “{slide.quote}”
        </p>
        <motion.p
          className="mt-6 text-sm md:text-base text-yellow-300/80"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          — SB Events Team 💫
        </motion.p>
      </motion.div>
    </motion.div>
  );
});

const EventCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState<(string | null)[]>(Array(events.length).fill(null));
  const [isVisible, setIsVisible] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Load current slide image dynamically
  useEffect(() => {
    let isMounted = true;
    events[currentSlide].image().then(module => {
      if (isMounted) {
        setImages(prev => {
          const newArr = [...prev];
          newArr[currentSlide] = module.default;
          return newArr;
        });
      }
    });
    return () => { isMounted = false; };
  }, [currentSlide]);

  // Preload next slide image
  useEffect(() => {
    const nextIndex = (currentSlide + 1) % events.length;
    events[nextIndex].image().then(module => {
      setImages(prev => {
        const newArr = [...prev];
        newArr[nextIndex] = module.default;
        return newArr;
      });
    });
  }, [currentSlide]);

  // Intersection Observer to pause carousel when offscreen
  useEffect(() => {
    if (!carouselRef.current) return;
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.5 });
    observer.observe(carouselRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-slide
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % events.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isVisible]);

  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % events.length);
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + events.length) % events.length);

  return (
    <section ref={carouselRef} className="py-20 bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-center mb-12 text-red-900 drop-shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Event Highlights
        </motion.h2>

        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-[480px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <Slide slide={events[currentSlide]} imageSrc={images[currentSlide]} />
            </AnimatePresence>

            {/* Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-md"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-md"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-gradient-to-r from-pink-500 to-yellow-400 w-8 shadow-md" : "bg-gray-300 hover:bg-gray-400"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventCarousel;
