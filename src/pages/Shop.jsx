import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFilter } from 'react-icons/fa';
import productData from '../data/productData';
import { useCart } from '../context/CartContext';

const Shop = () => {
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, []);

  const location = useLocation();

  // ✅ reactively track search term on route change
  const searchTerm = useMemo(() => {
    return new URLSearchParams(location.search).get('search')?.toLowerCase() || '';
  }, [location.search]);

  const allCategories = ['All', ...new Set(productData.map((p) => p.category))];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [addedProducts, setAddedProducts] = useState({});

  const { dispatch } = useCart();

  const filteredProducts = useMemo(() => {
    return productData.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm);
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleAddToCart = (product) => {
    if (addedProducts[product.id]) return;

    dispatch({
      type: 'ADD',
      product: { ...product, quantity: 1 },
    });

    setAddedProducts((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedProducts((prev) => {
        const updated = { ...prev };
        delete updated[product.id];
        return updated;
      });
    }, 1500);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-persian_orange-50 to-taupe-100 dark:from-black-100 dark:to-taupe-700 py-16 px-6 text-cordovan-500 dark:text-timberwolf-100">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-6"
        >
          <h2 className="text-2xl font-semibold">Shop</h2>
          <button
            onClick={() => setShowFilters((prev) => !prev)}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-princeton_orange text-princeton_orange hover:bg-princeton_orange hover:text-white transition"
          >
            <FaFilter /> Filter
          </button>
        </motion.div>

        {/* Category Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mb-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-wrap justify-start gap-3"
              >
                {allCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-1 rounded-full font-medium text-sm border transition ${
                      selectedCategory === cat
                        ? 'bg-selective_yellow text-white border-selective_yellow'
                        : 'bg-white/70 dark:bg-black/20 border-gray-300 dark:border-gray-600 hover:bg-selective_yellow/20'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProducts.map((product) => {
            const isAdded = !!addedProducts[product.id];
            const originalPrice = (
              parseInt(product.price.replace(/[^\d]/g, '')) * 2
            ).toLocaleString();

            return (
              <motion.div
                layout
                key={product.id}
                className="relative group bg-white/20 dark:bg-black/30 border border-white/10 dark:border-white/10 rounded-2xl p-5 backdrop-blur-[12px] shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                {/* Hover Glow */}
                <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-tr from-princeton_orange/30 via-white/10 to-selective_yellow/20 opacity-0 group-hover:opacity-100 blur-[8px] transition duration-500" />

                {/* Image */}
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border border-white/10 bg-white/10 dark:bg-black/20 shadow-inner">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Name & Category */}
                <h3 className="font-semibold text-lg text-black dark:text-white drop-shadow-sm">
                  {product.name}
                </h3>
                <p className="text-sm text-cordovan-400 dark:text-taupe-200 mt-1">
                  {product.category}
                </p>

                {/* Price */}
                <div className="mt-2 flex flex-col items-center gap-1">
                  <span className="text-sm line-through text-gray-400 dark:text-primary">
                    ₹{originalPrice}
                  </span>
                  <span className="font-bold text-xl text-brandGreen drop-shadow-sm">
                    {product.price}
                  </span>
                </div>

                {/* Add to Cart */}
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={isAdded}
                  className={`mt-4 px-5 py-2 rounded-full z-50 text-sm font-medium transition-colors duration-300 shadow-lg ${
                    isAdded
                      ? 'bg-brandGreen text-white cursor-not-allowed opacity-90'
                      : 'bg-brandBlue text-white hover:bg-brandYellow cursor-pointer'
                  }`}
                >
                  {isAdded ? '✔️ Added to your Cart!' : 'Add to Cart'}
                </button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* No Match */}
        {filteredProducts.length === 0 && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mt-16 text-gray-400"
          >
            No products match your search or filter.
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Shop;
