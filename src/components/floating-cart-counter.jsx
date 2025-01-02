"use client";
import React, { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { ChevronRight, MoveRight, ShoppingBag, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

const FloatingCartCounter = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const { cart } = useCart();
  const router = useRouter();
  const pathname = usePathname();
  const [prevTotalItems, setPrevTotalItems] = useState(0);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Watch for changes in cart quantity
  useEffect(() => {
    if (prevTotalItems !== totalItems && totalItems > 0) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 1000);
      return () => clearTimeout(timer);
    }
    setPrevTotalItems(totalItems);
  }, [totalItems, prevTotalItems]);

  if (pathname === "/checkout" || pathname === "/cart") return null;
  if (totalItems === 0) return null;

  const checkout = () => {
    router.push("/cart");
  };

  return (
    <>
      <div className="fixed z-50 bottom-4 shadow-md">
        <div
          onClick={() => setIsExpanded(true)}
          className={`
            shadow-2xl fixed bottom-4 right-4 bg-[#FF7700] p-3 rounded-full shadow-lg cursor-pointer 
            hover:bg-[#ff8c2d] transition-all duration-300 ease-in-out
            ${isAnimating ? "animate-grow" : ""}
            ${
              isExpanded
                ? "opacity-0 translate-x-full"
                : "opacity-100 translate-x-0"
            }
          `}
        >
          <ShoppingBag className="w-6 h-6 text-white" />
          {totalItems > 0 && (
            <div
              className="absolute -top-2 -right-2 bg-white text-[#FF7700] rounded-full w-6 h-6 
              flex items-center justify-center text-sm font-bold transition-all duration-300 shadow-xl border border-[#FF7700]"
            >
              {totalItems}
            </div>
          )}
        </div>

        {/* Expanded cart view */}
        <div
          className={`
            fixed bottom-4 left-1/2 w-[90%] max-w-md transition-all duration-300 ease-in-out
            ${
              isExpanded
                ? "opacity-100 -translate-x-1/2 translate-y-0"
                : "opacity-0 -translate-x-1/2 translate-y-full pointer-events-none"
            }
          `}
        >
          <div className="bg-[#FF7700] text-white px-6 py-3 rounded-lg shadow-lg flex items-center justify-between gap-2 cursor-pointer">
            <div
              className="flex justify-between gap-2 w-full"
              onClick={checkout}
            >
              <div className="flex gap-2 items-center">
                <span
                  className={`rounded-lg bg-orange-400 p-2 
                ${isAnimating ? "animate-grow" : ""}`}
                >
                  <ShoppingBag className="w-5 h-5" />
                </span>
                <span className="flex flex-col">
                  <span className="font-medium text-[12px]">
                    {totalItems} {totalItems === 1 ? "item" : "items"}
                  </span>
                  <span className="font-medium text-[14px]">$200</span>
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <div
                  onClick={checkout}
                  className="flex gap-1 items-center hover:opacity-80 transition-opacity"
                >
                  View cart
                  <ChevronRight />
                </div>
              </div>
            </div>
            <div
              className="absolute -top-2 -right-2 bg-white text-[#FF7700] rounded-full w-6 h-6 
              flex items-center justify-center text-sm font-bold transition-all duration-300 shadow-xl border border-[#FF7700]"
            >
              <button
                onClick={() => setIsExpanded(false)}
                className="p-1 hover:bg-[#ff8c2d] rounded-full transition-colors duration-200
                w-7 h-7 flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingCartCounter;
