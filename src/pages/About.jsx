import React, {useEffect} from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 
import { FaShippingFast, FaShieldAlt, FaBolt, FaUsers, FaTools, FaLaptopCode } from 'react-icons/fa';

const About = () => {
    useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  return (
    <section className="min-h-screen bg-gradient-to-b from-persian_orange-100 to-taupe-100 dark:from-black-100 dark:to-taupe-700 px-6 py-20 text-white">
      <div className="container mx-auto max-w-6xl space-y-24">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-4">Welcome to ShopEZ</h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            ShopEZ is India’s go-to e-commerce destination for all things electronics. From budget gadgets to cutting-edge tech, we curate the best for every kind of customer — all in one place.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Journey</h2>
            <p className="text-white/80 leading-relaxed">
              ShopEZ started with a simple idea — making technology easy, affordable, and accessible for everyone. What began as a passion project has now grown into a platform trusted by thousands of happy customers across India.
            </p>
            <p className="mt-4 text-white/80 leading-relaxed">
              With a deep focus on customer satisfaction and product quality, we’ve built a marketplace where people can shop confidently. Whether you're a college student or a tech-savvy professional, ShopEZ is built for you.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
            alt="Our journey"
            className="rounded-xl shadow-lg hidden md:block"
          />
        </motion.div>

        {/* Mission, Vision, Values */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-10 text-center"
        >
          <div>
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-white/80">To empower every Indian with access to world-class electronic products — affordably, reliably, and quickly.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-white/80">To become the most loved electronics platform in the country — blending speed, quality, and trust.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <p className="text-white/80">Integrity, Innovation, Customer-first thinking, and Commitment to tech accessibility for all.</p>
          </div>
        </motion.div>

        {/* Why Choose ShopEZ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-center mb-10">Why Shop with Us?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {[
              { icon: FaShippingFast, title: 'Lightning-Fast Delivery', desc: 'Get your gadgets delivered faster than ever, pan-India.' },
              { icon: FaShieldAlt, title: 'Secure Payments', desc: 'SSL encryption, UPI, and wallet-friendly checkout options.' },
              { icon: FaBolt, title: 'Top-Rated Products', desc: 'Only the best — handpicked electronics and accessories.' },
              { icon: FaUsers, title: 'Community-Driven', desc: 'We listen. Our users help us shape the future of ShopEZ.' },
              { icon: FaTools, title: '7-Day Return Policy', desc: 'Not satisfied? Easy returns with zero hassle.' },
              { icon: FaLaptopCode, title: 'Built for Modern India', desc: 'Optimized for speed, mobile devices, and 24x7 support.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white/10 p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <Icon className="text-3xl text-brandYellow mb-3 mx-auto" />
                <h4 className="font-semibold text-lg mb-1">{title}</h4>
                <p className="text-sm text-white/80">{desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center pt-12"
        >
          <h2 className="text-3xl font-semibold mb-4">Ready to Elevate Your Tech Game?</h2>
          <p className="text-white/80 mb-6">Explore our store and experience a smarter way to shop electronics.</p>
<Link
  to="/shop"
  className="inline-block px-6 py-3 bg-brandBlue text-white rounded-full hover:bg-brandYellow transition duration-300 font-medium"
>
  Visit the Store
</Link>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
