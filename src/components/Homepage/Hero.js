// 'use client';
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
// import { Card, CardContent } from "@/components/ui/card";

// const Hero = () => {
//     const desktopBanners = [
//         "/herodesk.webp",
//         "/herodesk.webp",
//         "/herodesk.webp",
//         "/herodesk.webp",
//     ];

//     const mobileBanners = [
//         "/heroimg.png",
//         "/heroimg.png",
//         "/heroimg.png",
//     ];

//     const [isMobile, setIsMobile] = useState(false);
//     const banners = isMobile ? mobileBanners : desktopBanners;

//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
//         };
//         handleResize();
//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     return (
//         <div className="w-full overflow-hidden">
//             <div className='bg-[#4E0A09] text-white'>
//                 <div className="overflow-hidden whitespace-nowrap">
//                     <div className="flex animate-marquee">
//                         {[...Array(50)].map((_, index) => (
//                             <span key={index} className="px-[50px]">
//                                 upto 30% on Pet Food
//                             </span>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             {/* Shad UI Carousel Wrapper */}
//             <Carousel className="w-full h-90 relative">
//                 <CarouselContent>
//                     {banners.map((banner, index) => (
//                         <CarouselItem key={index} className="flex justify-center items-center">

//                             <Card className="h-full w-full">
//                                 <div>

//                                     <CardContent className="p-0 m-0 flex items-center justify-center h-full">
//                                         <Image
//                                             src={banner}
//                                             alt="Banner"
//                                             width={1920}
//                                             quality={70}
//                                             height={1080}
//                                             style={{ objectFit: "cover" }}
//                                             className="w-full h-[60vh] md:h-[auto]"
//                                         />
//                                     </CardContent>
//                                 </div>
//                             </Card>
//                         </CarouselItem>
//                     ))}
//                 </CarouselContent>

//                 {/* Carousel Controls */}
//                 <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2">
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth="2"
//                         stroke="currentColor"
//                         className="w-6 h-6 text-white"
//                     >
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//                     </svg>
//                 </CarouselPrevious>
//                 <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2">
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth="2"
//                         stroke="currentColor"
//                         className="w-6 h-6 text-white"
//                     >
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                     </svg>
//                 </CarouselNext>
//             </Carousel>
//         </div>
//     );
// };

// export default Hero;
import React from 'react'
import CategoryHero from './CategoryHero'
import { Input } from '../ui/input'
import { Search, ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import CategoryIcons from './CategoryIcons'
import styles from '@/styles/hero.module.css'
import ProductPage from "@/components/Homepage/LookingFor";
import Sec2products from './Sec2products'
import { Button } from '../ui/button'

const Hero = () => {
    return (
        <>
            <div className='relative flex justify-between'>
                <Image
                    className='absolute left-0 top-[-100px] w-[70%] h-60 opacity-50 '
                    src={'/left.svg'}
                    width={500}
                    height={550}
                    alt='left'
                    
                />
                <Image
                    className='absolute top-[-50px] right-0 w-[40%] h-50 opacity-50'
                    src={'/right.svg'}
                    width={100}
                    alt='left'
                    height={200}
                />
            </div>
            <div className='bg-gradient-to-b from-red-800 to-[#350303] flex flex-col items-center justify-between pt-2 pb-10'>
                <div className=' flex flex-end items-center w-full w-[90%] p-2 mb-2'>
                    {/* LOGO */}
                    <Link href="/" className="flex items-center ">
                        <Image
                            src={"/newLogo.png"}
                            width={900}
                            height={900}
                            className="w-40 h-15 z-50"
                            alt="LOGO"
                        // onLoad={(e) => (e.target.style.opacity = 1)} // Ensures the fade-in effect triggers when the image loads
                        />
                    </Link>
                    <div className='flex items-center justify-end w-[95%] gap-3 z-50'>
                        <Link href="/profile" className="flex flex-col items-center text-black">
                            <button className='p-2 bg-[#500404] rounded-full'>
                                <User className='h-5 w-5 text-white' fill="#fff" /> </button>
                        </Link>
                    </div>
                </div>
                {/* search */}
                <div className="flex w-[90%] items-center relative rounded-xl bg-white">
                    <Input
                        type="search"
                        placeholder="Search.."
                        className="w-full rounded-xl py-6"
                    />
                    <button className="absolute right-2">
                        <Search className="h-20 w-5" />
                    </button>
                </div>
                <CategoryIcons />
                <div className='h-[80px] text-center border border-white w-full'>.....video.....</div>
                <CategoryHero />
            </div>
            <div className='bg-gradient-to-b from-[#fff59d] to-yellow-300 '>
                <div className="relative w-full ">
                    <div className={styles.notch} style={{ display: "flex", textAlign: "center" }}>
                        <span className='absolute top-[15%] left-[15%] text-[20px] text-[#350303] font-bold'>UNMISSABLE OFFER</span>
                    </div>
                </div>
                <div className='p-5 pt-5 '>
                    <Sec2products />
                    <span className='w-full flex justify-center mt-5'>
                        <Button className="bg-white text-blue-700 hover:bg-white" >See all products
                        </Button>
                    </span>
                </div>
            </div >
        </>)
}

export default Hero