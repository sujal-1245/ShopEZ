import React from 'react'
import { FaGithub, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'
import { RiBuilding4Line } from 'react-icons/ri'
import { MdSupportAgent, MdElectricalServices } from 'react-icons/md'
import { GiShoppingCart } from 'react-icons/gi'
import { FaUsers } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white/5 to-black/10 dark:from-black/30 dark:to-black/10 backdrop-blur-2xl border-t border-white/10 dark:border-white/5 text-white py-14 mt-20">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 sm:text-left text-center">

        {/* Brand Info */}
        <div className="md:col-span-1">
          <h1 className="text-3xl font-bold text-selective_yellow tracking-wider mb-3 flex items-center justify-center sm:justify-start gap-2">
            <MdElectricalServices className="text-4xl -scale-x-100" />
            SHOPEZ
          </h1>
          <p className="text-sm opacity-80 leading-relaxed mb-4 break-words">
            Your ultimate destination for premium electronic gadgets.
            Experience quality, speed, and unbeatable service with every order.
          </p>
          <p className="text-xs opacity-50">Crafted with ❤️ by Sujal Bhagat</p>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-xl font-semibold flex justify-center sm:justify-start items-center gap-2 mb-4">
            <RiBuilding4Line className="text-selective_yellow" /> Company
          </h2>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-xl font-semibold flex justify-center sm:justify-start items-center gap-2 mb-4">
            <MdSupportAgent className="text-selective_yellow" /> Support
          </h2>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Shipping Info</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-xl font-semibold flex justify-center sm:justify-start items-center gap-2 mb-4">
            <GiShoppingCart className="text-selective_yellow" /> Shop
          </h2>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="#">Headphones</a></li>
            <li><a href="#">Watches</a></li>
            <li><a href="#">Speakers</a></li>
            <li><a href="#">Accessories</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h2 className="text-xl font-semibold flex justify-center sm:justify-start items-center gap-2 mb-4">
            <FaUsers className="text-selective_yellow" /> Follow Us
          </h2>
          <div className="flex justify-center sm:justify-start gap-4 text-2xl">
            <a
              href="https://github.com/sujal-1245"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a href="#" className="hover:text-pink-400 transition transform hover:scale-110"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400 transition transform hover:scale-110"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-600 transition transform hover:scale-110"><FaFacebook /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm opacity-50">
        © {new Date().getFullYear()} <span className="text-selective_yellow font-semibold">SHOPEZ</span>. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
