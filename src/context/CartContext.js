'use client';
import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = ({ productId, quantity }) => {
    if (quantity <= 0) return; // Ensure valid quantity
    setCart((prev) => {
      const existingProduct = prev.find(item => item.productId === productId);
      if (existingProduct) {
        return prev.map(item =>
          item.productId === productId
            ? { ...item, quantity }
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
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev => prev.map(item =>
      item.productId === productId
        ? { ...item, quantity }
        : item
    ));
  };

  const getTotalItems = () =>
    cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, getTotalItems }}>
      {children}
      {/* {cart.length > 0 && ( */}
        <div className="fixed bottom-10 text-red bg-green w-[200px] h-auto  z-50">
          {console.log(cart.length)}
          sfsdf
        </div>

        {/* // <div className="fixed bottom-10 z-50 bg-black text-white py-3 px-5 rounded-md shadow-md flex justify-between items-center w-3/4 max-w-md">
        //   <div>
        //     <p className="font-bold text-sm">Cart Updated</p>
        //     <p>Total Items: {getTotalItems()}</p>
        //   </div>
        // </div> */}
      {/* )} */}
    </CartContext.Provider>
  );
};
