"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import Image from 'next/image';

// Data for footer menus
const footerMenus = [
    {
        title: 'Quick Links',
        links: [
            { name: 'Home', href: '#' },
            { name: 'About', href: '#' },
            { name: 'Collections', href: '#' },
            { name: 'F.A.Q.', href: '#' },
            { name: 'Contact us', href: '#' },
            { name: 'Shop', href: '#' },
        ],
    },
    {
        title: 'Support',
        links: [
            { name: 'Contact Us', href: '#' },
            { name: "FAQ's and Return Policy", href: '#' },
            { name: 'Privacy Policy', href: '#' },
            { name: 'Terms and Conditions', href: '#' },
        ],
    },
    {
        title: 'Collections',
        links: [
            { name: 'Dog Food', href: '#' },
            { name: 'Cat Food', href: '#' },
            { name: 'Beds', href: '#' },
            { name: 'Bowls', href: '#' },
            { name: 'Accessories', href: '#' },
        ],
    },
];

export function Footer() {
    const pathname = usePathname();

    // Array of routes where the footer should be hidden
    const hiddenRoutes = ['/checkout', '/coupon', '/cart/coupons', '/auth', '/auth/'];

    // If current path is in hiddenRoutes, don't render the footer
    if (hiddenRoutes.includes(pathname)) {
        return null;
    }

    return (
        <>
            <div className="p-4 flex items-end justify-between relative z-20">
                <div className="flex text-[40px] font-bold text-[#FF7700]">
                    <span>
                        Pet store for<br /> your furry<br /> friends...
                    </span>
                </div>
                <Image
                    src={'/dogbgsection.svg'}
                    width={200}
                    height={140}
                    className="mt-[-50px] absolute bottom-0 right-0"
                    alt="bg"
                />
            </div>
            <footer className="bg-[#0A0F1C] text-white py-5">
                <div className="container px-6 md:px-12">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="footer">
                            <AccordionTrigger className="text-sm lg:text-2xl no-underline decoration-none font-semibold text-center">
                                Only Pets, pet parents' favorite store
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="grid grid-cols-3 md:grid-cols-3 gap-8 mb-12 justify-items-center">
                                    {footerMenus.map((menu, index) => (
                                        <div key={index}>
                                            <h2 className="lg:text-2xl text-sm font-semibold mb-4 text-white">{menu.title}</h2>
                                            <ul className="space-y-3">
                                                {menu.links.map((link, idx) => (
                                                    <li key={idx}>
                                                        <Link
                                                            href={link.href}
                                                            className="hover:text-orange-500 lg:text-xl md:text-lg text-xs transition text-white"
                                                        >
                                                            {link.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    {/* Copyright Section */}
                    <div className="text-center text-gray-400 text-[10px] mt-8">
                        © {new Date().getFullYear()} OnlyPets. Powered By Alphabet Technology.
                    </div>
                </div>
            </footer>
        </>
    );
}