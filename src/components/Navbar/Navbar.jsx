import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { IoMdSearch } from 'react-icons/io';
import { FaShoppingCart, FaCaretDown } from 'react-icons/fa';
import { MdElectricalServices } from 'react-icons/md';
import ThemeToggleButton from './ThemeToggleButton';
import productData from '../../data/productData';
import { useCart } from '../../context/CartContext';

const MenuLinks = [
  { id: 1, name: 'Home', link: '/' },
  { id: 2, name: 'Shop', link: '/shop' },
  { id: 3, name: 'Cart', link: '/cart' },
  { id: 4, name: 'Offers', link: '/offers' },
];

const DropdownLinks = [
  { id: 1, name: 'About', link: '/about' },
  { id: 2, name: 'Blogs', link: '/blog' },
];

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const suggestionBoxRef = useRef(null);
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(e.target) &&
        suggestionBoxRef.current && !suggestionBoxRef.current.contains(e.target)
      ) {
        setDropdownOpen(false);
        setSuggestions([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchTerm.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchTerm.trim())}`);
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (name) => {
    setSearchTerm(name);
    navigate(`/shop?search=${encodeURIComponent(name)}`);
    setSuggestions([]);
  };

  useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = productData
        .filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .slice(0, 5);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  return (
    <div className="bg-persian_orange-900/90 text-chocolate_cosmos-800 dark:bg-black-100 dark:text-timberwolf-200 duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Left: Logo + Nav */}
          <div className="flex gap-4 items-center">
            <NavLink to="/" className="flex items-center gap-2 text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl">
              <span className="bg-white rounded-full opacity-90 hover:opacity-100">
                <MdElectricalServices className="-scale-x-100 text-3xl sm:text-4xl" />
              </span>
              ShopEZ
            </NavLink>

            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((item) => (
                  <li key={item.id}>
                    <NavLink
                      to={item.link}
                      className={({ isActive }) =>
                        `inline-block px-4 font-semibold duration-200 ${
                          isActive
                            ? 'text-black dark:text-white'
                            : 'text-gray-500 hover:text-black dark:hover:text-white'
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
                {/* Dropdown */}
                <li ref={dropdownRef} className="relative cursor-pointer">
                  <div
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="cursor-pointer gap-[2px] font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200 flex items-center py-2"
                  >
                    More
                    <FaCaretDown className={`mt-1 duration-200 ml-1 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </div>
                  {dropdownOpen && (
                    <div className="absolute z-[9999] w-[200px] mt-2 rounded-md bg-white shadow-md dark:bg-taupe-400 p-2 text-black dark:text-white">
                      <ul className="space-y-2">
                        {DropdownLinks.map((item) => (
                          <li key={item.id}>
                            <NavLink
                              to={item.link}
                              className="block px-4 py-2 rounded-xl text-gray-500 hover:text-black dark:hover:text-white font-semibold hover:bg-gray-100 dark:hover:bg-taupe-500"
                            >
                              {item.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Search / Cart / Theme */}
          <div className="flex items-center gap-4 relative">
            {/* Search */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleSearch}
                className="w-0 group-hover:w-[260px] focus:w-[260px] bg-timberwolf-700 dark:bg-taupe-300 text-black dark:text-white px-4 py-1 rounded-full border border-transparent focus:outline-none group-hover:border-chocolate_cosmos-400 dark:group-hover:border-silver-300 transition-all duration-300"
              />
              <IoMdSearch className="absolute right-2 top-1/2 -translate-y-1/2 text-dim_gray-500 dark:text-gray-400 text-xl group-hover:text-chocolate_cosmos-600 dark:group-hover:text-silver-400 transition-colors duration-300" />
              {suggestions.length > 0 && (
                <div
                  ref={suggestionBoxRef}
                  className="absolute top-full mt-1 left-0 w-[260px] bg-white dark:bg-taupe-400 rounded-xl shadow-lg z-50 overflow-hidden"
                >
                  {suggestions.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => handleSuggestionClick(product.name)}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-taupe-500 text-black dark:text-white"
                    >
                      {product.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cart */}
            <NavLink to="/cart" className="relative p-3">
              <FaShoppingCart className="text-xl text-gray-600 dark:text-gray-400" />
              {totalItems > 0 && (
                <div className="absolute -top-2 -right-1 bg-primary text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </div>
              )}
            </NavLink>

            {/* Theme */}
            <ThemeToggleButton />

            {/* Hamburger (Mobile Only) */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-2xl text-gray-700 dark:text-white focus:outline-none"
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      mobileMenuOpen
                        ? 'M6 18L18 6M6 6l12 12'
                        : 'M4 6h16M4 12h16M4 18h16'
                    }
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
  <div className="lg:hidden absolute top-full left-0 w-full px-6 py-8 backdrop-blur-md bg-white/90 dark:bg-black/90 shadow-xl border-t border-white/20 dark:border-white/10 rounded-b-3xl z-50 animate-fade-in">
    <ul className="flex flex-col items-center justify-center space-y-6 text-lg font-semibold text-gray-800 dark:text-white">
      {MenuLinks.map((item) => (
        <li key={item.id}>
          <NavLink
            to={item.link}
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-black dark:hover:text-timberwolf-200 transition duration-200"
          >
            {item.name}
          </NavLink>
        </li>
      ))}
      {DropdownLinks.map((item) => (
        <li key={item.id}>
          <NavLink
            to={item.link}
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-black dark:hover:text-timberwolf-200 transition duration-200"
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
)}

    </div>
  );
};

export default Navbar;
