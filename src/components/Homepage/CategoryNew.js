import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'

const categories = [
    {
        name: "Special Offer",
        discount: "UP TO 50% OFF",
        title: "Special Offers",
        id: "1",
        image: "/newCategory/food.png",
        href: "/special-offer",
        color: "text-black",
    },

    {
        name: "Cat Food",
        id: "3",
        discount: "UP TO 50% OFF",
        title: "Cat Food",
        image: "/newCategory/cat.png",
        href: "/cat-food",
        color: "text-red-500",
    },
    {
        name: "Dog Beds",
        id: "4",
        discount: "UP TO 50% OFF",
        title: "Dog Beds",
        image: "/newCategory/dog.png",
        href: "/dog-beds",
        color: "text-amber-600",
    },
    {
        name: "Grooming",
        id: "5",
        image: "/newCategory/food.png",
        href: "/grooming",
        color: "text-emerald-500",
        discount: "UP TO 50% OFF",
        title: "Grooming",
    }
    ,

    {
        name: "Cat Food",
        id: "6",
        image: "/newCategory/cat.png",
        href: "/cat-food",
        color: "text-red-500",
        discount: "UP TO 50% OFF",
        title: "Cat Food",
    },
    {
        name: "Dog Beds",
        id: "7",
        image: "/newCategory/dog.png",
        href: "/dog-beds",
        discount: "UP TO 50% OFF",
        title: "Dog Beds",
        color: "text-amber-600",
    },
]

const CategoryHeroNew = () => {
    return (
        <div className="w-full px-4 py-3">
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full overflow-visible" // Make overflow visible

            >
                <CarouselContent>
                    {categories.map((category) => (
                        <CarouselItem
                            key={category.id}
                            className="basis-1/3 md:basis-1/4 lg:basis-1/5 flex justify-center overflow-visible" >
                            <Card style={{
                                backgroundImage: 'url(/newCategory/image.svg)', // Replace with your image URL
                            }}
                             className="w-[250px] overflow-visible rounded-lg bg-gradient-to-b from-white to-white border-none">
                                {/* <div className="top-0 left-0 right-0 mx-2">
                                    <div className="bg-[#4A0404] text-white px-2 py-2 rounded-b-xl mx-auto w-fit text-[8px] font-semibold">
                                        {category.discount}
                                    </div>
                                </div> */}
                                <div className="px-2 flex flex-col items-center">
                                    <h3 className="text-[#350304] text-[10px] font-extrabold text-center mt-2 pb-0 mb-0">
                                        {category.discount}
                                    </h3>
                                    <span className='text-[#350304] text-[11px] font-medium text-center'>
                                        Special offer
                                    </span>
                                    <div className="flex justify-center">
                                        <img
                                            src={category.image}
                                            alt={category.title}
                                            className="w-auto h-[55px] mt-[2px]"
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

export default CategoryHeroNew