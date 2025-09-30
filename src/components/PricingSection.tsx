import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Crown, Gift, Sparkles } from 'lucide-react';

const PricingSection: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('premium');

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Celebration',
      price: '₹5,000',
      originalPrice: '₹20,000',
      icon: <Gift className="w-8 h-8" />,
      color: 'from-blue-400 to-cyan-500',
      popular: false,
      description: 'Perfect for intimate gatherings and small celebrations',
      features: [
        'Basic balloon decorations',
        'Simple backdrop setup',
        '2-3 fun activities',
        'Basic photography props',
        '4-hour event coordination',
        'Cleanup service included'
      ],
      guestCount: 'Up to 30 guests',
      duration: '4 hours'
    },
    {
      id: 'premium',
      name: 'Premium Party',
      price: '₹35,000',
      originalPrice: '₹45,000',
      icon: <Star className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      popular: true,
      description: 'Most popular choice for memorable celebrations',
      features: [
        'Premium balloon arrangements',
        'Themed decorations & backdrop',
        '5-6 engaging activities',
        'Professional photo booth',
        'Dance performance (30 mins)',
        'Full-day event coordination',
        'Catering coordination',
        'Cleanup & setup service'
      ],
      guestCount: 'Up to 80 guests',
      duration: '8 hours'
    },
    {
      id: 'luxury',
      name: 'Luxury Experience',
      price: '₹75,000',
      originalPrice: '₹95,000',
      icon: <Crown className="w-8 h-8" />,
      color: 'from-yellow-400 to-orange-500',
      popular: false,
      description: 'Ultimate celebration experience with premium services',
      features: [
        'Luxury themed decorations',
        'Custom stage & lighting setup',
        '10+ premium activities',
        'Professional photography',
        'Live entertainment shows',
        'Dedicated event manager',
        'Premium catering options',
        'VIP guest coordination',
        'Complete event planning'
      ],
      guestCount: 'Up to 150 guests',
      duration: 'Full day'
    }
  ];

  const addOns = [
    { name: 'Professional Photography', price: '₹8,000', icon: '📸' },
    { name: 'Live Music Performance', price: '₹12,000', icon: '🎵' },
    { name: 'Magic Show', price: '₹6,000', icon: '🎩' },
    { name: 'Face Painting Artist', price: '₹3,000', icon: '🎨' },
    { name: 'Balloon Twisting', price: '₹2,500', icon: '🎈' },
    { name: 'Custom Cake Design', price: '₹5,000', icon: '🎂' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 text-4xl opacity-20"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          💰
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-20 text-5xl opacity-15"
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 15, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        >
          ✨
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
            Choose Your <span className="text-purple-600">Perfect</span> Package 💎
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transparent pricing with no hidden costs. Every package includes our signature touch of magic!
          </p>
          
          {/* Special Offer Badge */}
          <motion.div
            className="inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-full mt-4 font-bold"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            🎉 Limited Time: 25% OFF on all packages!
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`relative ${plan.popular ? 'scale-105 z-10' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold z-20"
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  ⭐ MOST POPULAR
                </motion.div>
              )}

              <div className={`bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl ${plan.popular ? 'ring-4 ring-purple-200' : ''}`}>
                {/* Header */}
                <div className={`bg-gradient-to-r ${plan.color} p-8 text-white text-center relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-4">
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-white/90 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-white/70 line-through text-lg">{plan.originalPrice}</span>
                    </div>
                    <p className="text-white/80 text-sm">{plan.guestCount} • {plan.duration}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="bg-green-100 rounded-full p-1 mt-0.5">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`w-full py-4 px-6 rounded-full font-bold text-lg transition-all duration-300 ${
                      selectedPlan === plan.id
                        ? `bg-gradient-to-r ${plan.color} text-white shadow-lg`
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {selectedPlan === plan.id ? '✅ Selected' : 'Choose This Plan'}
                  </motion.button>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-3 -right-3 text-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                animate={{ 
                  rotate: [0, 15, 0, -15, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
              >
                <Sparkles className="w-6 h-6 text-purple-500" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl p-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            🎁 Popular Add-ons
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-purple-50 p-4 rounded-2xl text-center hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-2xl mb-2">{addon.icon}</div>
                <h4 className="font-semibold text-gray-800 text-sm mb-1">{addon.name}</h4>
                <p className="text-purple-600 font-bold">{addon.price}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              🤔 Need a Custom Package?
            </h3>
            <p className="text-gray-600 mb-6">
              Every celebration is unique! Let's create a personalized package that fits your vision and budget perfectly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+919876543210"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📞 Get Custom Quote
              </motion.a>
              <motion.a
                href="https://wa.me/919876543210?text=Hi%20Bhanu%20Events%2C%20I'd%20like%20to%20discuss%20pricing%20for%20my%20event!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                💬 Chat on WhatsApp
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;