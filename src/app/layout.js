// app/layout.js (root layout)
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar1 from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar1 />
        <CartProvider>

          {children}
        </CartProvider>
      </body>
    </html>
  );
}