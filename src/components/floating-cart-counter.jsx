"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import { MoveRight, ShoppingBag } from "lucide-react";
import { Router } from "next/router";

const FloatingCartCounter = () => {
  const { cart } = useCart();

  // Calculate total items in cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Don't show if cart is empty
  if (totalItems === 0) return null;

  const checkout = () => {
    Router.push("/checkout");
  };
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[80%]">
      <div className="bg-[#FF7700] text-white px-6 justify-between py-3 rounded-full shadow-lg flex items-center gap-2 transition-colors cursor-pointer">
        <div className="flex gap-1 items-center">
          <ShoppingBag className="w-5 h-5" />
          <span className="font-bold">
            {totalItems} {totalItems === 1 ? "item" : "items"}
          </span>
        </div>
        <div onClick={checkout} className="flex gap-1 items-center">
          View cart <MoveRight />
        </div>
      </div>
    </div>
  );
};

export default FloatingCartCounter;
