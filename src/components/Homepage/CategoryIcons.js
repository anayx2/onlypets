import Link from 'next/link';
import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { BadgePercent, Cat, Dog, Bird, Fish, Scissors } from 'lucide-react';

const categories = [
    {
        name: "Offer",
        id: "1",
        icon: BadgePercent, // Reference the imported component
        href: "#",
    },
    {
        name: "Cat Food",
        id: "3",
        icon: Cat, // Reference the imported component
        href: "#",
    },
    {
        name: "Dog Beds",
        id: "4",
        icon: Dog, // Reference the imported component
        href: "#",
    },
    {
        name: "Grooming",
        id: "5",
        icon: Scissors, // Reference the imported component
        href: "#",
    },
    {
        name: "Birds",
        id: "6",
        icon: Bird, // Reference the imported component
        href: "#",
    },
    {
        name: "Fish",
        id: "7",
        icon: Fish, // Reference the imported component
        href: "#",
    },
];


const CategoryIcons = () => {
    return (
        <div className="w-full px-4 py-6">
            <Carousel
                opts={{
                    align: "start",
                }}
            >
                <CarouselContent className="-ml-4">
                    {categories.map((category) => (
                        <CarouselItem
                            key={category.id}
                            className="basis-1/5 md:basis-1/4 lg:basis-1/5 flex justify-center">
                            <div className="flex flex-col text-center items-center p-2 border-none shadow-none">
                                <Link href={category.href} className="flex flex-col items-center text-white hover:text-white">
                                    {/* Icon Section */}
                                    <div className="relative aspect-square w-5 rounded-full overflow-hidden">
                                        <category.icon className="w-full h-full text-white" /> {/* Render the icon */}
                                    </div>
                                    {/* Category Name */}
                                    <span className="text-[10px] mt-1 font-medium whitespace-nowrap">
                                        {category.name}
                                    </span>
                                </Link>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* <CrouselPrevious />
                <CarouselNext /> */}
            </Carousel>
        </div>
    );
};

export default CategoryIcons;
