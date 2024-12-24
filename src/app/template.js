'use client'
import { Footer } from "@/components/Footer";
import Navbar1 from "@/components/Navbar";
import { usePathname } from 'next/navigation';

// app/template.js
export default function Template({ children }) {
    const pathname = usePathname();
    const isProductPage = pathname.startsWith('/product');
    return (
        <>
            {/* <Navbar1 /> */}
            {children}
            {!isProductPage && <Footer />}

        </>
    );
}