'use client'
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = ({ productId, quantity }) => {
    setCart((prev) => {
      const existingProduct = prev.find(item => item.productId === productId);
      if (existingProduct) {
        return prev.map(item =>
          item.productId === productId
            ? { ...item, quantity:  quantity }
            : item
        );
      } else {
        return [...prev, { productId, quantity }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.productId !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCart(prev => prev.map(item =>
      item.productId === productId
        ? { ...item, quantity }
        : item
    ));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
