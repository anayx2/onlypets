import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'

const categories = [
    {
        name: "Special Offer",
        discount: "UP TO 50% OFF",
        title: "Special Offers",
        id: "1",
        image: "/categoryicons/offer.png?height=100&width=100",
        href: "/special-offer",
        color: "text-black",
    },

    {
        name: "Cat Food",
        id: "3",
        discount: "UP TO 50% OFF",
        title: "Cat Food",
        image: "/categoryicons/catfood.png?height=100&width=100",
        href: "/cat-food",
        color: "text-red-500",
    },
    {
        name: "Dog Beds",
        id: "4",
        discount: "UP TO 50% OFF",
        title: "Dog Beds",
        image: "/categoryicons/dogbed.png?height=100&width=100",
        href: "/dog-beds",
        color: "text-amber-600",
    },
    {
        name: "Grooming",
        id: "5",
        image: "/categoryicons/offer.png?height=100&width=100",
        href: "/grooming",
        color: "text-emerald-500",
        discount: "UP TO 50% OFF",
        title: "Grooming",
    }
    ,

    {
        name: "Cat Food",
        id: "6",
        image: "/categoryicons/catfood.png?height=100&width=100",
        href: "/cat-food",
        color: "text-red-500",
        discount: "UP TO 50% OFF",
        title: "Cat Food",
    },
    {
        name: "Dog Beds",
        id: "7",
        image: "/categoryicons/dogbed.png?height=100&width=100",
        href: "/dog-beds",
        discount: "UP TO 50% OFF",
        title: "Dog Beds",
        color: "text-amber-600",
    },
    // Add more categories if needed
]

const CategoryHero = () => {
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
                            className="basis-1/3 md:basis-1/4 lg:basis-1/5 flex justify-center" >
                            <Card className="relative overflow-hidden rounded-lg bg-gradient-to-b from-white to-white border-none">
                                <div className="top-0 left-0 right-0 mx-2">
                                    <div className="bg-[#4A0404] text-white px-2 py-2 rounded-b-xl mx-auto w-fit text-[8px] font-semibold">
                                        {category.discount}
                                    </div>
                                </div>
                                <div className="px-2">
                                    <h3 className="text-[#1E2F97] text-[10px] font-medium text-center mt-2">
                                        {category.title}
                                    </h3>
                                    <div className="flex justify-center pb-2">
                                        <img
                                            src={category.image}
                                            alt={category.title}
                                            className="w-12 h-12 object-cover rounded-full"
                                        />
                                    </div>
                                </div>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* <CarouselPrevious />
                <CarouselNext /> */}
            </Carousel>
        </div>
    )
}

export default CategoryHero