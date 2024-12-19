'use client';

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from 'react';

const offers = [
    {
        brand: "FARMINA",
        description: "APPLICABLE IN DOG & CAT FOOD",
        discount: "50%",
        code: "ONLY020",
        gradient: "linear-gradient(135deg, #8B0000, #B22222)",
        brandColor: "#FFD700",
    },
    {
        brand: "WHISKAS",
        description: "APPLICABLE ON CAT FOOD",
        discount: "40%",
        code: "ONLY020",
        gradient: "linear-gradient(135deg, #00008B, #0000CD)",
        brandColor: "#40E0D0",
    },
    {
        brand: "PEDIGREE",
        description: "APPLICABLE ON DOG FOOD",
        discount: "30%",
        code: "ONLY020",
        gradient: "linear-gradient(135deg, #4B0082, #8A2BE2)",
        brandColor: "#FFD700",
    },
    {
        brand: "ROYAL CANIN",
        description: "APPLICABLE ON ALL PRODUCTS",
        discount: "25%",
        code: "ONLY020",
        gradient: "linear-gradient(135deg, #006400, #228B22)",
        brandColor: "#FFA500",
    },
];

const OfferCarousel = () => {
    const [api, setApi] = React.useState();
    const [current, setCurrent] = React.useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);
    return (
        <div className="relative w-full max-w-screen-sm mx-auto px-4">
            <h2 className="text-center text-gray-700 font-bold mb-2">Offers made just for you</h2>
            <p className="text-center text-gray-500 text-sm mb-4">The more the goodies, the more your savings!</p>

            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                setApi={setApi}
                className="w-full"
            >
                <CarouselContent className="flex">
                    {offers.map((offer, index) => (
                        <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/2 ">
                            <div className="p-1">
                                <div
                                    className="h-[200px] w-full rounded-lg p-4 flex flex-col justify-between shadow-md"
                                    style={{
                                        background: offer.gradient,
                                        color: offer.brandColor,
                                    }}
                                >
                                    <div>
                                        <h3 className="text-lg font-bold" style={{ color: offer.brandColor }}>
                                            {offer.brand}
                                        </h3>
                                        <p className="text-white text-sm">{offer.description}</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="bg-white rounded-full px-3 py-1 flex justify-between items-center gap-1">
                                            <span className="text-xs text-gray-600">USE CODE</span>
                                            <span className="text-xs font-semibold">{offer.code}</span>
                                        </div>
                                        <div className="text-xl font-bold text-white text-center">
                                            UP TO <br />
                                            {offer.discount}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            <div className="flex justify-center mt-4 space-x-2">
                {offers.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${current === index ? "bg-yellow-500" : "bg-gray-300"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default OfferCarousel;