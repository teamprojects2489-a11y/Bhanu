import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GallerySection: React.FC = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentCategory, setCurrentCategory] = useState("all");

  const galleryImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "birthday",
      title: "Magical Birthday Celebration",
      description: "Colorful balloon decorations with themed setup",
      size: "large", // Takes 2 columns
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
      size: "small",
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "corporate",
      title: "Business Conference",
      description: "Professional event management and coordination",
      size: "large",
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/3621225/pexels-photo-3621225.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "festival",
      title: "Cultural Festival",
      description: "Traditional celebration with authentic decorations",
      size: "small",
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
      ? galleryImages
      : galleryImages.filter((img) => img.category === currentCategory);

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
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 text-4xl opacity-20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          📸
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-20 text-5xl opacity-15"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          🌟
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
            Our <span className="text-pink-600">Amazing</span> Gallery 📸
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take a peek at some of our most memorable events and celebrations
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[385px]"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                className={`gallery-item relative group cursor-pointer overflow-hidden shadow-lg 
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
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-100 transition-transform duration-500"
                />

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

        {/* Load More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => {
              console.log("Button clicked!");
              console.log("Current location:", window.location.href);
              try {
                navigate("/gallery");
                console.log("Navigation called successfully");
              } catch (error) {
                console.error("Navigation error:", error);
              }
            }}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-bold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            📸 View More Photos
          </motion.button>
        </motion.div>

        {/* Gallery Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { number: "500+", label: "Events Captured", icon: "📸" },
            { number: "1000+", label: "Happy Moments", icon: "😊" },
            { number: "50+", label: "Different Themes", icon: "🎨" },
            { number: "5★", label: "Average Rating", icon: "⭐" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
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

        {/* Instagram-style Grid Preview */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 rounded-3xl p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              📱 Follow Us on Social Media
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get daily inspiration and behind-the-scenes content from our
              latest events
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 max-w-2xl mx-auto mb-6">
            {filteredImages.slice(0, 6).map((image) => (
              <motion.div
                key={`social-${image.id}`}
                className="aspect-square rounded-lg overflow-hidden shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center space-x-4">
            <motion.a
              href="#"
              className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-red-600 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📷 Instagram
            </motion.a>
            <motion.a
              href="#"
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📘 Facebook
            </motion.a>
          </div>
        </motion.div>

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
      </div>
    </section>
  );
};

export default GallerySection;
