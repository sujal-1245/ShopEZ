import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Category from '../components/Category/Category';
import Category2 from '../components/Category/Category2';
import Banner from '../components/Category/Banner';
import Services from '../components/Category/Services';
import Products from '../components/Category/Products';
import Footer from '../components/Footer';

const Home = () => {
  

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-persian_orange-500 via-taupe-200 to-timberwolf-200 dark:from-black-100 dark:to-taupe-400 text-cordovan-500 dark:text-timberwolf-100 transition-all duration-300">

      <main className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Category />
        <Category2 />
        <Banner />
        <Services />
        <Products />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
