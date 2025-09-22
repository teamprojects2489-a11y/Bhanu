import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Heart, MessageCircle } from 'lucide-react';

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Creative Birthday Party Themes That Kids Absolutely Love",
      excerpt: "Discover the most popular and creative birthday party themes that will make your child's special day unforgettable. From superhero adventures to princess castles...",
      image: "https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Bhanu Sharma",
      date: "March 15, 2024",
      category: "Birthday Ideas",
      readTime: "5 min read",
      likes: 124,
      comments: 18
    },
    {
      id: 2,
      title: "Wedding Decoration Trends 2024: What's Hot This Season",
      excerpt: "Stay ahead of the curve with the latest wedding decoration trends. From sustainable florals to minimalist elegance, explore what's trending this year...",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Priya Patel",
      date: "March 10, 2024",
      category: "Wedding Tips",
      readTime: "7 min read",
      likes: 89,
      comments: 12
    },
    {
      id: 3,
      title: "How to Plan the Perfect Corporate Event on Any Budget",
      excerpt: "Learn the secrets of successful corporate event planning. From venue selection to entertainment options, we share insider tips for memorable business events...",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Rajesh Kumar",
      date: "March 5, 2024",
      category: "Corporate Events",
      readTime: "6 min read",
      likes: 67,
      comments: 8
    },
    {
      id: 4,
      title: "DIY Decoration Ideas That Won't Break the Bank",
      excerpt: "Create stunning decorations on a budget with these creative DIY ideas. Perfect for small gatherings and intimate celebrations that still want to make a big impact...",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Anita Singh",
      date: "February 28, 2024",
      category: "DIY Tips",
      readTime: "4 min read",
      likes: 156,
      comments: 23
    },
    {
      id: 5,
      title: "The Ultimate Guide to Festival Celebrations in India",
      excerpt: "Celebrate Indian festivals with authentic decorations and traditional elements. Learn about the significance and best practices for various cultural celebrations...",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Bhanu Sharma",
      date: "February 20, 2024",
      category: "Festival Guide",
      readTime: "8 min read",
      likes: 203,
      comments: 31
    },
    {
      id: 6,
      title: "Photography Tips for Capturing Perfect Event Moments",
      excerpt: "Master the art of event photography with these professional tips. Learn about lighting, composition, and timing to capture those precious moments that last forever...",
      image: "https://images.pexels.com/photos/1024969/pexels-photo-1024969.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Photography Team",
      date: "February 15, 2024",
      category: "Photography",
      readTime: "6 min read",
      likes: 91,
      comments: 14
    }
  ];

  const categories = [
    { name: 'All Posts', count: 24, color: 'bg-purple-100 text-purple-700' },
    { name: 'Birthday Ideas', count: 8, color: 'bg-pink-100 text-pink-700' },
    { name: 'Wedding Tips', count: 6, color: 'bg-rose-100 text-rose-700' },
    { name: 'Corporate Events', count: 4, color: 'bg-blue-100 text-blue-700' },
    { name: 'DIY Tips', count: 6, color: 'bg-green-100 text-green-700' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 text-4xl opacity-20"
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
          📝
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-20 text-5xl opacity-15"
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
            Event Planning <span className="text-orange-600">Tips</span> & Ideas 📝
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert advice, creative ideas, and insider tips to make your events extraordinary
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${category.color} hover:scale-105`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name} ({category.count})
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>

                {/* Read Time */}
                <div className="absolute top-4 right-4">
                  <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
                    {post.readTime}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>

                {/* Engagement Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4 text-red-400" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4 text-blue-400" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>

                {/* Read More Button */}
                <motion.button
                  className="flex items-center space-x-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-300 group/btn"
                  whileHover={{ x: 5 }}
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-2 -right-2 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                ✨
              </motion.div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100 rounded-3xl p-8 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-4xl mb-4"
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            📧
          </motion.div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Get Event Planning Tips in Your Inbox!
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest event planning tips, decoration ideas, and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
            />
            <motion.button
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold hover:from-orange-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe 🚀
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;