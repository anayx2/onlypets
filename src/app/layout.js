// app/layout.js (root layout)
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar1 from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import FloatingCartCounter from "@/components/floating-cart-counter";
import Hero from "@/components/Homepage/Hero";

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
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="theme-color" content="#c62828"></meta>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CartProvider>
          {/* Fixed hero section */}
          {/* <div className="fixed top-0 left-0 right-0 z-10 w-[auto]">
            <Hero />
          </div> */}

          {/* Scrollable content area - adjust the top padding based on your Hero height */}
          <main 
          // className="relative pt-[230px]"
          >
            {children}
            </main>

          <FloatingCartCounter />
        </CartProvider>
      </body>
    </html>
  );
}