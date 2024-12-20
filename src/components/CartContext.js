// 'use client'
// import React, { createContext, useContext, useState, useEffect } from "react";

// const CartContext = createContext();
// const handleCheckout = () => {
//     console.log("Proceeding to checkout...");
//     // Add your global checkout logic here
// };
// export const CartProvider = ({ children }) => {
//     const [cartItems, setCartItems] = useState([]);

//     // Load cart from localStorage when the app initializes
//     useEffect(() => {
//         const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
//         setCartItems(savedCart);
//     }, []);

//     // Save cart to localStorage whenever it changes
//     useEffect(() => {
//         localStorage.setItem("cartItems", JSON.stringify(cartItems));
//     }, [cartItems]);

//     const addToCart = (item) => {
//         setCartItems((prevItems) => [...prevItems, item]);
//     };

//     const clearCart = () => {
//         setCartItems([]);
//     };

//     const getTotalItems = () => cartItems.length;

//     const getTotalPrice = () =>
//         cartItems.reduce((total, item) => total + item.price, 0);

//     return (
//         <CartContext.Provider
//             value={{ cartItems, addToCart, clearCart, getTotalItems, getTotalPrice }}
//         >
//             {children}
//         </CartContext.Provider>
//     );
// };

// export const useCart = () => useContext(CartContext);
