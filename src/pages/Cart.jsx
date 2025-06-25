import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';

const Cart = () => {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();
  const [address, setAddress] = useState('');

  const total = cart.reduce(
    (acc, item) => acc + item.quantity * parseInt(item.price.replace(/[^\d]/g, '')),
    0
  );

  const placeOrder = () => {
    if (!address.trim()) {
      alert('Please enter billing address');
      return;
    }

    dispatch({ type: 'CLEAR' });
    navigate('/order-success');
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-persian_orange-50 to-taupe-100 dark:from-black-100 dark:to-taupe-700 py-16 px-4 text-cordovan-700 dark:text-timberwolf-100 transition-all duration-300 flex justify-center items-start">
      <div className="w-full max-w-4xl bg-white/20 dark:bg-black/30 rounded-3xl backdrop-blur-[16px] border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.2)] px-6 sm:px-10 py-10">

        <h2 className="text-3xl text-white font-extrabold mb-8 text-center drop-shadow-md">🛒 Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400 text-lg">Your cart is empty.</p>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/30 dark:bg-white/10 p-5 rounded-2xl backdrop-blur-[10px] border border-white/10 shadow-md flex justify-between items-center transition hover:scale-[1.01]"
                >
                  {/* Product Info */}
                  <div>
                    <h3 className="font-semibold text-lg text-black dark:text-white">{item.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{item.category}</p>
                    <p className="text-white dark:text-brandGreen font-bold mt-1 text-lg">
                      ₹{(parseInt(item.price.replace(/[^\d]/g, '')) * item.quantity).toLocaleString()}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 text-sm">
                    <button
                      onClick={() => dispatch({ type: 'DECREMENT', product: item })}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-white/40 dark:bg-white/20 hover:bg-white/60 dark:hover:bg-white/30 backdrop-blur text-black dark:text-white shadow"
                    >
                      <FaMinus size={12} />
                    </button>
                    <span className="font-semibold text-black dark:text-white">{item.quantity}</span>
                    <button
                      onClick={() => dispatch({ type: 'INCREMENT', product: item })}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-white/40 dark:bg-white/20 hover:bg-white/60 dark:hover:bg-white/30 backdrop-blur text-black dark:text-white shadow"
                    >
                      <FaPlus size={12} />
                    </button>
                    <button
                      onClick={() => dispatch({ type: 'REMOVE', product: item })}
                      className="text-red-400 hover:text-red-600 transition"
                      title="Remove"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Billing Address */}
            <div className="mt-10">
              <h4 className="text-lg text-black dark:text-white font-semibold mb-2">Billing Address</h4>
              <textarea
                rows={3}
                className="w-full rounded-xl p-3 text-sm text-black dark:text-white bg-white/40 dark:bg-black/20 backdrop-blur border border-white/20 shadow-inner focus:outline-none focus:ring-2 focus:ring-brandBlue transition"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your delivery address..."
              />
            </div>

            {/* Order Summary */}
            <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-2xl font-bold">
                Total: <span className="text-brandGreen">₹{total.toLocaleString()}</span>
              </p>
              <button
                onClick={placeOrder}
                className="bg-brandBlue hover:bg-brandYellow text-white hover:text-black px-6 py-2 rounded-full shadow-lg font-medium transition-colors duration-300"
              >
                Place Order
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
