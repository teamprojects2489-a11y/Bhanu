import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Gallery: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  // Extended gallery with more images
  const allGalleryImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "birthday",
      title: "Magical Birthday Celebration",
      description: "Colorful balloon decorations with themed setup",
      size: "large",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "wedding",
      title: "Elegant Wedding Ceremony",
      description: "Beautiful floral arrangements and romantic ambiance",
      size: "medium",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "corporate",
      title: "Corporate Event Excellence",
      description: "Professional setup with modern staging",
      size: "small",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "festival",
      title: "Vibrant Festival Celebration",
      description: "Traditional decorations with cultural elements",
      size: "tall",
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "birthday",
      title: "Kids Party Wonderland",
      description: "Fun activities and colorful decorations",
      size: "medium",
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/1024969/pexels-photo-1024969.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "wedding",
      title: "Dream Wedding Setup",
      description: "Luxury wedding with premium decorations",
      size: "large",
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "corporate",
      title: "Business Conference",
      description: "Professional event management and coordination",
      size: "medium",
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/3621225/pexels-photo-3621225.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "festival",
      title: "Cultural Festival",
      description: "Traditional celebration with authentic decorations",
      size: "small",
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "birthday",
      title: "Princess Theme Party",
      description: "Magical princess decorations and activities",
      size: "tall",
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "wedding",
      title: "Garden Wedding",
      description: "Outdoor wedding with natural beauty",
      size: "medium",
    },
    {
      id: 11,
      src: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "corporate",
      title: "Product Launch Event",
      description: "Modern corporate event with tech setup",
      size: "large",
    },
    {
      id: 12,
      src: "https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "festival",
      title: "Diwali Celebration",
      description: "Traditional Indian festival decorations",
      size: "medium",
    },
    // Additional images for the gallery page
    {
      id: 13,
      src: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "wedding",
      title: "Romantic Beach Wedding",
      description: "Seaside ceremony with ocean breeze",
      size: "large",
    },
    {
      id: 14,
      src: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "birthday",
      title: "Superhero Birthday Bash",
      description: "Action-packed superhero themed party",
      size: "medium",
    },
    {
      id: 15,
      src: "https://images.pexels.com/photos/2608514/pexels-photo-2608514.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "corporate",
      title: "Annual Gala Dinner",
      description: "Elegant corporate celebration",
      size: "tall",
    },
    {
      id: 16,
      src: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "festival",
      title: "Holi Color Festival",
      description: "Vibrant colors and joyful celebrations",
      size: "medium",
    },
    {
      id: 17,
      src: "https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "birthday",
      title: "Fairy Tale Birthday",
      description: "Enchanted forest theme party",
      size: "small",
    },
    {
      id: 18,
      src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "wedding",
      title: "Vintage Wedding Theme",
      description: "Classic elegance with vintage touches",
      size: "large",
    },
  ];

  const categories = [
    { id: "all", name: "All Events", emoji: "🎉" },
    { id: "birthday", name: "Birthdays", emoji: "🎂" },
    { id: "wedding", name: "Weddings", emoji: "💒" },
    { id: "corporate", name: "Corporate", emoji: "🏢" },
    { id: "festival", name: "Festivals", emoji: "🎊" },
  ];

  const filteredImages =
    currentCategory === "all"
      ? allGalleryImages
      : allGalleryImages.filter((img) => img.category === currentCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        (selectedImage - 1 + filteredImages.length) % filteredImages.length
      );
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.button
            onClick={() => navigate(-1)}
            className="mb-8 flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </motion.button>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
              Our <span className="text-pink-600">Complete</span> Gallery 📸
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our complete collection of memorable events and
              celebrations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Content */}
      <section ref={sectionRef} className="py-12">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setCurrentCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  currentCategory === category.id
                    ? "bg-pink-500 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-pink-100 hover:text-pink-600"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{category.emoji}</span>
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <div
            ref={galleryRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[300px]"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  className={`gallery-item relative group cursor-pointer overflow-hidden shadow-lg rounded-2xl
                    ${image.size === "large" ? "md:col-span-2" : ""}
                    ${image.size === "tall" ? "md:row-span-2" : ""}
                    ${image.size === "small" ? "row-span-1" : ""}
                    ${image.size === "medium" ? "md:row-span-1" : ""}
                  `}
                  onClick={() => openLightbox(index)}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                    damping: 20,
                    stiffness: 100,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm text-white/90">{image.description}</p>
                  </div>

                  {/* Floating Sparkle */}
                  <motion.div
                    className="absolute -top-2 -right-2 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      rotate: [0, 15, 0, -15, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  >
                    ✨
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Gallery Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { number: "500+", label: "Events Captured", icon: "📸" },
              { number: "1000+", label: "Happy Moments", icon: "😊" },
              { number: "50+", label: "Different Themes", icon: "🎨" },
              { number: "5★", label: "Average Rating", icon: "⭐" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-1">
                  {stat.number}
                </h3>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <motion.div
                className="relative max-w-4xl max-h-full"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].title}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {filteredImages[selectedImage].title}
                  </h3>
                  <p className="text-white/90">
                    {filteredImages[selectedImage].description}
                  </p>
                </div>

                {/* Navigation */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Close button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Gallery;
