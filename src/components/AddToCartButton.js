'use client';
import { useCart } from "@/context/CartContext";
import { ShoppingBagIcon } from "lucide-react";
import React, { useState } from "react";

export default function AddToCartButton({ productId, quantity }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cart, addToCart } = useCart();
  console.log(cart, `productId:${productId} : ${quantity}  `)
  const getTotalItems = () => {
    // Calculate total items in cart
    return 10;
  };

  const getTotalPrice = () => {
    // Calculate total price
    return 100;
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout...");
  };

  const handleAddToCart = () => {
    addToCart({ productId, quantity }); // Add product to cart with quantity 1
    setIsModalOpen(true);
  };

  return (
    <div>
      {/* Cart Button */}
      <button
        className="w-full bg-[#71216A] text-white py-2 rounded-lg text-xs sm:text-base hover:bg-purple-800 transition-colors"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed bottom-[10%] left-1/2 transform -translate-x-1/2 flex justify-between items-center min-w-[300px] rounded-2xl p-2.5 bg-[#27AE60] text-white shadow-md z-[99]">
          <div
            className="flex justify-between items-center w-full cursor-pointer"
            onClick={handleCheckout}>
            <div className="text-sm">Total Items: {getTotalItems()}</div>
            <div className="text-sm">Total Price: ₹{getTotalPrice()}</div>
            <div>
              <ShoppingBagIcon style={{ marginRight: "5px", cursor: "pointer" }} />
            </div>
          </div>
          {/* Close Modal Button */}
          <button
            className="absolute top-2 right-2 text-white"
            onClick={() => setIsModalOpen(false)}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
