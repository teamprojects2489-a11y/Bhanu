import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How far in advance should I book your services?",
    answer:
      "We recommend booking at least 2-4 weeks in advance for smaller events and 6-8 weeks for larger celebrations like weddings. This ensures we have adequate time for planning and securing the best vendors. However, we can accommodate last-minute requests based on availability.",
  },
  {
    question: "What's included in your event planning packages?",
    answer:
      "Our packages include venue decoration, activity coordination, entertainment arrangements, vendor management, timeline planning, and on-site event coordination. We customize each package based on your specific needs and budget requirements.",
  },
  {
    question: "Do you provide services outside Banglore?",
    answer:
      "Yes, we provide services in Banglore and surrounding areas. For locations outside our standard service area, additional travel charges may apply. We're happy to discuss destination events on a case-by-case basis.",
  },
  {
    question: "Can you work within my budget?",
    answer:
      "Absolutely! We offer flexible packages and can customize our services to fit various budgets. During our initial consultation, we'll discuss your requirements and create a plan that maximizes value within your budget constraints.",
  },
  {
    question: "What types of events do you specialize in?",
    answer:
      "We specialize in birthday parties, weddings, corporate events, anniversaries, baby showers, festivals, and family celebrations. Our team has experience with events ranging from intimate gatherings of 20 people to large celebrations with 500+ guests.",
  },
  {
    question: "Do you handle catering arrangements?",
    answer:
      "While we don't provide catering directly, we coordinate with trusted catering partners and can help you select the perfect menu for your event. We handle all vendor coordination to ensure seamless service on your special day.",
  },
  {
    question: "What happens if there's bad weather on my event day?",
    answer:
      "We always have contingency plans for outdoor events. This includes backup indoor venues, weather-resistant decorations, and flexible timing arrangements. We monitor weather forecasts closely and communicate any necessary changes well in advance.",
  },
  {
    question: "Can I make changes to my event plan after booking?",
    answer:
      "Yes, we understand that plans can change. Minor modifications can usually be accommodated up to 1 week before the event. Major changes may require additional fees and are subject to vendor availability. We'll work with you to make necessary adjustments.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const ThisisOnclick = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 text-4xl opacity-15"
          animate={{ rotate: [0, 360], scale: [1, 1.3, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          ❓
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-20 text-5xl opacity-10"
          animate={{ y: [0, -25, 0], rotate: [0, 15, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        >
          💡
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
            Frequently Asked <span className="text-purple-600">Questions</span>{" "}
            ❓
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Got questions? We've got answers! Here are the most common questions
            our clients ask.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-purple-100 hover:shadow-xl transition-all duration-300">
                <button
                  type="button"
                  onClick={() => ThisisOnclick(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-purple-50 transition-all duration-300 group"
                >
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 pr-4 group-hover:text-purple-700 transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <div className="bg-purple-100 p-2 rounded-full">
                        <Minus className="w-5 h-5 text-purple-600" />
                      </div>
                    ) : (
                      <div className="bg-purple-100 p-2 rounded-full group-hover:bg-purple-200 transition-colors duration-300">
                        <Plus className="w-5 h-5 text-purple-600" />
                      </div>
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <div className="w-full h-px bg-gradient-to-r from-purple-200 to-transparent mb-4"></div>
                        <p className="text-gray-600 leading-relaxed font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
