// "use client";

// import { ShoppingBag } from "lucide-react";

// import { useCart } from "./Cartcontext";

// const FloatingCart = () => {
//     const { cartItems, getTotalItems, getTotalPrice } = useCart();

//     const handleCheckout = () => {
//         console.log("Proceeding to checkout...");
//         // Add your checkout logic here (e.g., navigate to a checkout page)
//     };

//     if (cartItems.length === 0) return null;

//     return (
//         <div className="fixed bottom-[10%] left-1/2 transform -translate-x-1/2 flex justify-between items-center min-w-[300px] rounded-2xl p-2.5 bg-[#27AE60] text-white shadow-md">
//             <div
//                 className="flex justify-between items-center w-full cursor-pointer"
//                 onClick={handleCheckout}
//             >
//                 <div className="text-sm">Total Items: {getTotalItems()}</div>
//                 <div className="text-sm">Total Price: ₹{getTotalPrice()}</div>
//                 <div>
//                     <ShoppingBag
//                         style={{ marginRight: "5px", cursor: "pointer" }}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FloatingCart;
