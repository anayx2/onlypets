"use client";
import { useCart } from "@/context/CartContext";
import { ShoppingBagIcon } from "lucide-react";
import React, { useState } from "react";

export default function AddToCartButton({ productId, quantity }) {
  const { cart, addToCart } = useCart();



  const handleAddToCart = () => {
    addToCart({ productId, quantity }); // Add product to cart with quantity 1
    // setIsModalOpen(true);
  };

  return (
    <div>
      {/* Cart Button */}
      <button
        className="w-full bg-[#ef8427] text-white py-2 rounded-lg font-bold text-[1em] sm:text-base hover:bg-purple-800 transition-colors"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}