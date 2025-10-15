import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, MessageCircle, Star, Clock } from "lucide-react";

const faqs = [
  {
    id: 1,
    category: "Booking",
    question: "How far in advance should I book your services?",
    answer:
      "We recommend booking at least 2-4 weeks in advance for smaller events and 6-8 weeks for larger celebrations like weddings. This ensures we have adequate time for planning and securing the best vendors. However, we can accommodate last-minute requests based on availability.",
    icon: Clock,
    popular: true,
  },
  {
    id: 2,
    category: "Services",
    question: "What's included in your event planning packages?",
    answer:
      "Our packages include venue decoration, activity coordination, entertainment arrangements, vendor management, timeline planning, and on-site event coordination. We customize each package based on your specific needs and budget requirements.",
    icon: Star,
    popular: true,
  },
  {
    id: 3,
    category: "Location",
    question: "Do you provide services outside Bangalore?",
    answer:
      "Yes, we provide services in Bangalore and surrounding areas. For locations outside our standard service area, additional travel charges may apply. We're happy to discuss destination events on a case-by-case basis.",
    icon: MessageCircle,
    popular: false,
  },
  {
    id: 4,
    category: "Pricing",
    question: "Can you work within my budget?",
    answer:
      "Absolutely! We offer flexible packages and can customize our services to fit various budgets. During our initial consultation, we'll discuss your requirements and create a plan that maximizes value within your budget constraints.",
    icon: Star,
    popular: true,
  },
  {
    id: 5,
    category: "Services",
    question: "What types of events do you specialize in?",
    answer:
      "We specialize in birthday parties, weddings, corporate events, anniversaries, baby showers, festivals, and family celebrations. Our team has experience with events ranging from intimate gatherings of 20 people to large celebrations with 500+ guests.",
    icon: MessageCircle,
    popular: false,
  },
  {
    id: 6,
    category: "Services",
    question: "Do you handle catering arrangements?",
    answer:
      "While we don't provide catering directly, we coordinate with trusted catering partners and can help you select the perfect menu for your event. We handle all vendor coordination to ensure seamless service on your special day.",
    icon: MessageCircle,
    popular: false,
  },
  {
    id: 7,
    category: "Planning",
    question: "What happens if there's bad weather on my event day?",
    answer:
      "We always have contingency plans for outdoor events. This includes backup indoor venues, weather-resistant decorations, and flexible timing arrangements. We monitor weather forecasts closely and communicate any necessary changes well in advance.",
    icon: Clock,
    popular: false,
  },
  {
    id: 8,
    category: "Booking",
    question: "Can I make changes to my event plan after booking?",
    answer:
      "Yes, we understand that plans can change. Minor modifications can usually be accommodated up to 1 week before the event. Major changes may require additional fees and are subject to vendor availability. We'll work with you to make necessary adjustments.",
    icon: Clock,
    popular: false,
  },
];

const categories = [
  "All",
  "Booking",
  "Services",
  "Location",
  "Pricing",
  "Planning",
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularFAQs = faqs.filter((faq) => faq.popular);

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-3 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <MessageCircle className="w-5 h-5 text-purple-600" />
            <span className="text-purple-700 font-semibold">FAQ</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Got{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Questions?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to the most commonly asked questions about our event
            planning services
          </p>
        </motion.div>

        {/* Popular FAQs Preview */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            ⭐ Most Popular Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {popularFAQs.slice(0, 4).map((faq) => (
              <motion.div
                key={faq.id}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 cursor-pointer"
                whileHover={{ y: -2, scale: 1.02 }}
                onClick={() => toggleFAQ(faq.id)}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                    <faq.icon className="w-4 h-4 text-white" />
                  </div>
                  <p className="font-semibold text-gray-800 text-sm">
                    {faq.question}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                    : "bg-white/80 text-gray-600 hover:bg-purple-50 shadow-md"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence>
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="mb-4"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <motion.button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 group"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl">
                        <faq.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-semibold">
                            {faq.category}
                          </span>
                          {faq.popular && (
                            <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full font-semibold">
                              Popular
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
                          {faq.question}
                        </h3>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: openIndex === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-purple-100 p-2 rounded-full group-hover:bg-purple-200 transition-colors duration-300"
                    >
                      <ChevronDown className="w-5 h-5 text-purple-600" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {openIndex === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="w-full h-px bg-gradient-to-r from-purple-200 via-pink-200 to-transparent mb-4"></div>
                          <motion.p
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-600 leading-relaxed font-medium"
                          >
                            {faq.answer}
                          </motion.p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredFAQs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                No results found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search terms or category filter
              </p>
            </motion.div>
          )}
        </div>

        {/* Contact CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="mb-6 opacity-90">
              Can't find what you're looking for? We're here to help with any
              questions about your event planning needs.
            </p>
            <motion.button
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open(
                  "https://wa.me/918310124421?text=Hi%20SB%20Events%2C%20I%20have%20a%20question%20about%20your%20services!",
                  "_blank"
                )
              }
            >
              Contact Us on WhatsApp
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
