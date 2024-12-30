// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutContent from '@/components/LayoutContent'

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
      <meta name="theme-color" content="#971b1b"></meta>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LayoutContent fontClasses={`${geistSans.variable} ${geistMono.variable}`}>
          
          {children}
        </LayoutContent>
      </body>
    </html>
  );
}