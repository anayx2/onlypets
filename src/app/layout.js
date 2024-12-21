
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar1 from "@/components/Navbar";
import { Footer } from "@/components/Footer";
// import { CartProvider } from "@/components/Cartcontext";
// import FloatingCart from "@/components/FloatingCart";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Only Pets",
  description: "-",
};
// const handleCheckout = () => {
//   console.log("Proceeding to checkout...");
//   // Add your checkout logic here
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <CartContext.Provider
          value={{
            cartItems,
            addToCart,
            clearCart,
            getTotalItems,
            getTotalPrice,
            handleCheckout,
          }}
        > */}
        <Navbar1 />
        {children}
        <Footer />
        {/* </CartContext.Provider> */}
      </body>
    </html>
  );
}
