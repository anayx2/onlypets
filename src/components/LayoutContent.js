// components/LayoutContent.js
'use client'

import { usePathname } from 'next/navigation'
import Hero from '@/components/Homepage/Hero'
import FloatingCartCounter from '@/components/floating-cart-counter'
import { CartProvider } from "@/context/CartContext";

export default function LayoutContent({ children, fontClasses }) {
    const pathname = usePathname()
    const isHomePage = pathname === '/'

    return (
        <CartProvider>
            {isHomePage && (
                <div className="fixed top-0 left-0 right-0 z-10 w-[auto]">
                    <Hero />
                </div>
            )}

            <main className={`relative ${isHomePage ? 'pt-[205px]' : 'pt-0'}`}>
                {children}
            </main>
            <FloatingCartCounter />
        </CartProvider>
    )
}