// CartContext.jsx
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  const { type, product } = action;

  switch (type) {
    case 'ADD':
      const existing = state.find(p => p.id === product.id);
      if (existing) {
        return state.map(p =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...state, product];

    case 'INCREMENT':
      return state.map(p =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      );

    case 'DECREMENT':
      return state.map(p =>
        p.id === product.id && p.quantity > 1
          ? { ...p, quantity: p.quantity - 1 }
          : p
      );

    case 'REMOVE':
      return state.filter(p => p.id !== product.id);

    case 'CLEAR':
      return [];

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
