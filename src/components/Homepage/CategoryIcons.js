import Link from 'next/link';
import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card';
import { BadgePercent, Cat, Dog, Bird, Fish, Scissors } from 'lucide-react';

const categories = [
    {
        name: "All",
        id: "1",
        icon: BadgePercent,
        href: "/", // Home page
    },
    {
        name: "Cat Food",
        id: "3",
        icon: Cat,
        href: "/",
    },
    {
        name: "Dog Food",
        id: "4",
        icon: Dog,
        href: "/",
    },
    {
        name: "Grooming",
        id: "5",
        icon: Scissors,
        href: "/",
    },
    {
        name: "Birds",
        id: "6",
        icon: Bird,
        href: "/",
    },
    {
        name: "Fish",
        id: "7",
        icon: Fish,
        href: "/",
    },
    {
        name: "Beds",
        id: "4",
        icon: Dog,
        href: "/",
    },
];


const CategoryIcons = () => {
    return (

        <div className="w-full px-2 py-6 ">
            <Tabs defaultValue={categories[0].id} >
                <TabsList className="flex shadow-md justify-start overflow-x-auto h-auto bg-transparent gap-2 scrollbar-none [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden">
                    {categories.map((category) => (
                        <TabsTrigger
                            key={category.id}
                            value={category.id}
                            className="flex-shrink-0 bg-transparent data-[state=active]:shadow-none hover:bg-transparent data-[state=active]:bg-transparent data-[state=active]:border-b data-[state=active]:border-white shadow-0"                        >
                            <Link href={category.href} className="flex flex-col items-center text-white hover:text-foreground">
                                <div className="relative flex gap-5 w-5 rounded-[1px] overflow-hidden">
                                    <category.icon className="w-full h-full" />
                                </div>
                                <span className="text-[10px] mt-1 font-medium whitespace-nowrap">
                                    {category.name}
                                </span>
                            </Link>
                        </TabsTrigger>
                    ))}
                </TabsList>
            </Tabs>
        </div>
    );
};

export default CategoryIcons;
