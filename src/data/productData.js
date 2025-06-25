// src/data/productData.js
import EarphoneImg from '../assets/category/earphone.png';
import MacbookImg from '../assets/category/macbook.png';
import GamingImg from '../assets/category/gaming.png';
import SpeakerCatImg from '../assets/category/speaker.png';
import VrCatImg from '../assets/category/vr.png';
import WatchCatImg from '../assets/category/watch.png';

import P1Img from '../assets/product/p-1.jpg'
import P2Img from '../assets/product/p-2.jpg';
import P3Img from '../assets/product/p-3.jpg';
import P4Img from '../assets/product/p-4.jpg';
import P5Img from '../assets/product/p-5.jpg';
import P6Img from '../assets/product/p-7.jpg';
import P7Img from '../assets/product/p-9.jpg';

import HeroHeadphone from '../assets/hero/headphone.png';
import HeroWatch from '../assets/hero/watch.png';

const productData = [
  {
    id: 1,
    name: 'Bass Boost Earphones',
    category: 'Audio',
    image: EarphoneImg,
    price: '₹999',
  },
  {
    id: 2,
    name: 'MacBook Pro M2',
    category: 'Laptops',
    image: MacbookImg,
    price: '₹1,24,999',
  },
  {
    id: 3,
    name: 'Gaming Console Set',
    category: 'Gaming',
    image: GamingImg,
    price: '₹34,999',
  },
  {
    id: 4,
    name: '360° Bluetooth Speaker',
    category: 'Audio',
    image: SpeakerCatImg,
    price: '₹2,799',
  },
  {
    id: 5,
    name: 'VR Playstation Set',
    category: 'Wearables',
    image: VrCatImg,
    price: '₹19,999',
  },
  {
    id: 6,
    name: 'Smart Watch Series 9',
    category: 'Wearables',
    image: WatchCatImg,
    price: '₹5,499',
  },
  {
    id: 7,
    name: 'Beats Studio Headphones',
    category: 'Audio',
    image: P1Img,
    price: '₹8,999',
  },
  {
    id: 8,
    name: 'Samsung QLED 4K',
    category: 'Displays',
    image: P2Img,
    price: '₹44,999',
  },
  {
    id: 9,
    name: 'Home Theater System',
    category: 'Audio',
    image: P3Img,
    price: '₹12,499',
  },
  {
    id: 10,
    name: 'Wireless Gaming Keyboard',
    category: 'Accessories',
    image: P4Img,
    price: '₹2,999',
  },
  {
    id: 11,
    name: 'Compact DSLR Camera',
    category: 'Cameras',
    image: P5Img,
    price: '₹18,999',
  },
  {
    id: 12,
    name: 'Mini Projector 1080p',
    category: 'Displays',
    image: P6Img,
    price: '₹7,899',
  },
  {
    id: 13,
    name: 'Echo Dot Smart Assistant',
    category: 'Smart Devices',
    image: P7Img,
    price: '₹3,499',
  },
  {
    id: 14,
    name: 'Headphones Max',
    category: 'Audio',
    image: HeroHeadphone,
    price: '₹12,999',
  },
  {
    id: 15,
    name: 'Smart Fitness Watch',
    category: 'Wearables',
    image: HeroWatch,
    price: '₹3,999',
  },
];

export default productData;
