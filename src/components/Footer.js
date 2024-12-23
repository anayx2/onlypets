'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Data for footer menus
const footerMenus = [
    {
        title: 'Quick Links',
        links: [
            { name: 'Home', href: '/' },
            { name: 'About', href: '/about' },
            { name: 'Collections', href: '/collections' },
            { name: 'F.A.Q.', href: '/faq' },
            { name: 'Contact us', href: '/contact' },
            { name: 'Shop', href: '/shop' },
        ],
    },
    {
        title: 'Support',
        links: [
            { name: 'Contact Us', href: '/contact' },
            { name: "FAQ's and Return Policy", href: '/faq' },
            { name: 'Privacy Policy', href: '/privacy' },
            { name: 'Terms and Conditions', href: '/terms' },
        ],
    },
    {
        title: 'Collections',
        links: [
            { name: 'Dog Food', href: '/collections/dog-food' },
            { name: 'Cat Food', href: '/collections/cat-food' },
            { name: 'Beds', href: '/collections/beds' },
            { name: 'Bowls', href: '/collections/bowls' },
            { name: 'Accessories', href: '/collections/accessories' },
        ],
    },
];

export function Footer() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Subscribing email:', email);
        setEmail('');
    };

    return (
        <footer className="bg-[#0A0F1C] text-white py-16 rounded-t-3xl ">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-3 md:grid-cols-3 gap-8 mb-12 justify-items-center">
                    {/* Menu Sections */}
                    {footerMenus.map((menu, index) => (
                        <div key={index}>
                            <h2 className="lg:text-2xl text-sm  font-semibold mb-4 text-white">{menu.title}</h2>
                            <ul className="space-y-3">
                                {menu.links.map((link, idx) => (
                                    <li key={idx}>
                                        <Link href={link.href} className="hover:text-orange-500 lg:text-xl md:text-lg text-xs  transition text-white">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Newsletter Section */}
                <div className="max-w-2xl mx-auto mb-12 text-center">
                    <h2 className="text-2xl text-white font-semibold mb-6">Subscribe to our newsletter</h2>
                    <p className="text-gray-400 mb-4">
                        Stay updated with the latest collections and exclusive offers.
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-row justify-center items-center gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 max-w-[60%] px-4 py-3 rounded-lg bg-white text-black placeholder:text-gray-400"
                            required
                        />
                        <button
                            type="submit"
                            className="px-4 py-3 bg-orange-500 text-white text-sm md:text-base lg:text-base font-medium rounded-lg hover:bg-orange-600 transition"
                        >
                            SUBSCRIBE
                        </button>
                    </form>
                </div>

                {/* Payment Methods */}
                {/* <div className="flex justify-center gap-6 mb-12">
                    {['Visa', 'Mastercard', 'PayPal', 'American Express', 'Apple Pay'].map((method, idx) => (
                        <Image
                            key={idx}
                            src={`/placeholder.svg?text=${method}`}
                            alt={method}
                            width={40}
                            height={30}
                            className="opacity-75 hover:opacity-100 transition"
                        />
                    ))}
                </div> */}

                {/* Copyright Section */}
                <div className="text-center text-gray-400 text-sm">
                    © {new Date().getFullYear()} OnlyPets. Powered By Alphabet Technology.
                </div>
            </div>
        </footer>
    );
}
