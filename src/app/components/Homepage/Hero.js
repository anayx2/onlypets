'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Hero = () => {
    const desktopBanners = [
        "/herodesk.webp",
        "/herodesk.webp",
        "/herodesk.webp",
        "/herodesk.webp",
    ];

    const mobileBanners = [
        "/heroimg.png",
        "/heroimg.png",
        "/heroimg.png",
    ];

    const [isMobile, setIsMobile] = useState(false);
    const banners = isMobile ? mobileBanners : desktopBanners;

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="w-full overflow-hidden">
            <div className='bg-[#4E0A09] text-white'>
                <div className="overflow-hidden whitespace-nowrap">
                    <div className="flex animate-marquee">
                        {[...Array(50)].map((_, index) => (
                            <span key={index} className="px-[50px]">
                                upto 30% on Pet Food
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            {/* Shad UI Carousel Wrapper */}
            <Carousel className="w-full h-90 relative">
                <CarouselContent>
                    {banners.map((banner, index) => (
                        <CarouselItem key={index} className="flex justify-center items-center">

                            <Card className="h-full w-full">
                                <div>

                                    <CardContent className="p-0 m-0 flex items-center justify-center h-full">
                                        <Image
                                            src={banner}
                                            alt="Banner"
                                            width={1920}
                                            height={1080}
                                            style={{ objectFit: "cover" }}
                                            className="w-full h-[60vh] md:h-[auto]"
                                        />
                                    </CardContent>
                                </div>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Carousel Controls */}
                <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-6 h-6 text-white"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </CarouselPrevious>
                <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-6 h-6 text-white"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </CarouselNext>
            </Carousel>
        </div>
    );
};

export default Hero;
