import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import OrderSuccess from './pages/OrderSuccess';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Blog from './pages/Blog';
import Cart from './pages/Cart';
import Trending from './pages/Trending';
import NewArrivals from './pages/NewArrivals';
import BestSellers from './pages/BestSellers';
import Offers from './pages/Offers';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-persian_orange-500 via-taupe-200 to-timberwolf-200 dark:from-black-100 dark:to-taupe-400 text-cordovan-500 dark:text-timberwolf-100 transition-all duration-300">
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50 backdrop-blur-sm">
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop searchTerm={searchTerm} />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/best-sellers" element={<BestSellers />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
