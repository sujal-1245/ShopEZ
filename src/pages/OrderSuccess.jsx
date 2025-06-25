import React,{useEffect} from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const OrderSuccess = () => {
    useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-brandGreen/10 to-brandGreen/90 text-white px-6 py-12">
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="bg-white/20 dark:bg-black/20 backdrop-blur-[14px] border border-white/10 shadow-2xl rounded-3xl p-10 max-w-md w-full text-center"
      >
        <FaCheckCircle className="text-brandGreen text-6xl mb-4 drop-shadow-sm mx-auto" />

        <h1 className="text-3xl font-extrabold mb-2 text-white drop-shadow-sm">
          Order Placed Successfully!
        </h1>
        <p className="text-white/80 mb-6 text-sm sm:text-base">
          Thank you for shopping with <span className="font-semibold">Shopez</span> 🎉
        </p>

        <button
          onClick={() => navigate('/')}
          className="mt-4 px-6 py-3 rounded-full bg-brandGreen/90 hover:bg-brandGreen/50 text-white font-semibold shadow-lg backdrop-blur-md transition duration-300"
        >
          Continue Shopping
        </button>
      </motion.div>
    </div>
  );
};

export default OrderSuccess;
