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
        id: "1",
        image: "/categoryicons/offer.png?height=100&width=100",
        href: "/special-offer",
        color: "text-black",
    },
    
    {
        name: "Cat Food",
        id: "3",
        image: "/categoryicons/catfood.png?height=100&width=100",
        href: "/cat-food",
        color: "text-red-500",
    },
    {
        name: "Dog Beds",
        id: "4",
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
    }
    ,
    
    {
        name: "Cat Food",
        id: "6",
        image: "/categoryicons/catfood.png?height=100&width=100",
        href: "/cat-food",
        color: "text-red-500",
    },
    {
        name: "Dog Beds",
        id: "7",
        image: "/categoryicons/dogbed.png?height=100&width=100",
        href: "/dog-beds",
        color: "text-amber-600",
    },
    // Add more categories if needed
]

const Category = () => {
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
                            className="basis-1/3 md:basis-1/4 lg:basis-1/5 flex justify-center"
                        >
                             <Card className="flex flex-col  text-center items-center p-4 border-none shadow-none">
                                <Link href={category.href} className="flex flex-col items-center gap-2">
                                    {/* Image Section */}
                                    <div className="relative aspect-square w-20 rounded-full overflow-hidden">
                                        <Image
                                            src={category.image}
                                            alt={category.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    {/* Category Name */}
                                    <span className={`text-sm font-semibold ${category.color}`}>
                                        {category.name}
                                    </span>
                                </Link>
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

export default Category
