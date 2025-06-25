import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaTags,
  FaLaptop,
  FaMobileAlt,
  FaHeadphones,
  FaGift,
  FaUserGraduate,
} from 'react-icons/fa';

// Countdown Timer Component
const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <p className="text-sm text-white mt-3">
      ⏳ Ends in: {timeLeft.hours || '00'}h {timeLeft.minutes || '00'}m {timeLeft.seconds || '00'}s
    </p>
  );
};

const offers = [
  {
    id: 1,
    icon: <FaTags className="text-3xl mb-3 animate-pulse" />,
    title: 'Mega Summer Sale',
    description: 'Get up to 50% off on selected electronic gadgets. Limited time only!',
    discount: '50%',
    bg: 'from-princeton_orange via-selective_yellow to-brandGreen',
    countdown: true, // Only this deal has timer
  },
  {
    id: 2,
    icon: <FaMobileAlt className="text-3xl mb-3" />,
    title: 'Smartphone Fest',
    description: 'Latest phones from top brands with flat ₹5000 off.',
    discount: '₹5000 Off',
    bg: 'from-indigo-500 via-blue-600 to-cyan-500',
  },
  {
    id: 3,
    icon: <FaHeadphones className="text-3xl mb-3" />,
    title: 'Audio Gear Blast',
    description: 'Earbuds, headphones, and speakers at crazy low prices!',
    discount: 'Up to 60%',
    bg: 'from-pink-500 via-rose-500 to-red-400',
  },
  {
    id: 4,
    icon: <FaGift className="text-3xl mb-3" />,
    title: 'Buy 1 Get 1 Free',
    description: 'Buy any pair of smart accessories and get one absolutely free!',
    discount: 'BOGO',
    bg: 'from-brandBlue via-indigo-500 to-indigo-700',
  },
  {
    id: 5,
    icon: <FaLaptop className="text-3xl mb-3" />,
    title: 'Laptop Clearance',
    description: 'Last-gen laptops at unbeatable prices. Hurry before it’s gone!',
    discount: 'Flat 35% Off',
    bg: 'from-teal-400 via-teal-500 to-teal-700',
  },
  {
    id: 6,
    icon: <FaUserGraduate className="text-3xl mb-3" />,
    title: 'Student Exclusive',
    description: 'Special pricing and perks for students. Verify and save more!',
    discount: 'Up to 30%',
    bg: 'from-amber-500 via-yellow-500 to-yellow-400',
  },
];

const Offers = () => {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gradient-to-b dark:from-persian_orange-100 dark:via-taupe-100 dark:to-taupe-500 py-16 px-6 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl font-bold mb-3">🔥 Today's Hot Offers</h1>
          <p className="text-lg text-gray-700 dark:text-taupe-900 max-w-2xl mx-auto">
            Discover exclusive deals, limited-time discounts, and special bundles available only on ShopEZ. Don’t miss out!
          </p>
        </motion.div>

        {/* Offer Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={`bg-gradient-to-br ${offer.bg} text-white rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="p-8 flex flex-col justify-between h-full">
                <div>
                  <div>{offer.icon}</div>
                  <h2 className="text-2xl font-semibold mb-2">{offer.title}</h2>
                  <p className="text-sm text-white/90">{offer.description}</p>
                  {offer.countdown && (
                    <CountdownTimer targetDate={new Date(Date.now() + 12 * 60 * 60 * 1000)} />
                  )}
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-3xl font-bold">{offer.discount}</span>
                  <Link
                    to="/shop"
                    className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-brandYellow hover:text-white transition"
                  >
                    Shop Now →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="text-center mt-16 text-sm text-gray-600 dark:text-taupe-900"
        >
          *Offers valid while stocks last. Terms and conditions apply.
        </motion.p>
      </div>
    </section>
  );
};

export default Offers;
