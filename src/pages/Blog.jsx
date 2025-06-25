import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Image1 from '../assets/hero/watch.png';
import Image2 from '../assets/category/macbook.png';
import Image3 from '../assets/category/speaker.png';

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Gadgets Every Tech Enthusiast Should Own in 2025',
    excerpt: `2025 is shaping up to be a breakthrough year in consumer electronics. From AI-powered smartwatches to ultra-fast wireless charging pads, we've compiled a list of the ten most innovative gadgets that are redefining how we interact with technology daily.`,
    image: Image1,
  },
  {
    id: 2,
    title: 'Choosing the Right Laptop: A Buyer’s Guide',
    excerpt: `Not all laptops are created equal. With so many specs, brands, and use cases, it's easy to feel overwhelmed. This guide breaks down processors, SSDs, battery life, and build quality to help you make the right choice.`,
    image: Image2,
  },
  {
    id: 3,
    title: 'Why Smart Home Devices are Worth the Investment',
    excerpt: `Smart homes are no longer a futuristic dream — they're today’s standard. In this blog, we explore how devices like smart thermostats, lights, and assistants improve security and efficiency.`,
    image: Image3,
  },
];

const Blog = () => {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gradient-to-b dark:from-persian_orange-100 dark:via-taupe-100 dark:to-taupe-500 py-16 px-6 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">ShopEZ Blog</h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Insights, tips, and stories from the world of electronics. Stay ahead with expert-backed blogs.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-md dark:shadow-none hover:shadow-lg hover:scale-[1.015] transition-all duration-300 backdrop-blur-md"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 dark:bg-black/30 group-hover:bg-transparent transition duration-300"></div>
              </div>

              <div className="p-6 flex flex-col justify-between h-[360px]">
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">{post.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-[6]">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6">
                  <Link
                    to={`/blogs/${post.id}`}
                    className="inline-block text-sm font-medium text-brandBlue dark:text-brandYellow hover:underline transition"
                  >
                    Read full article →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
