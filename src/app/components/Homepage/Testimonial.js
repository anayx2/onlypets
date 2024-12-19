'use client'

import React from 'react'
import { Card } from "@/components/ui/card"
import { Star } from 'lucide-react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
    {
        id: 1,
        name: "Anubhav Anand",
        time: "1 month ago",
        rating: 4,
        text: "I love Supertails. For me, it's a one stop website for everything that my husky needs. From puppy food to toys to dog essentials, Supertails has got me covered. Best part of Supertails is that we g...",
    },
    {
        id: 2,
        name: "Priya Singh",
        time: "2 months ago",
        rating: 5,
        text: "Amazing experience with the products and delivery. The quality of pet food and accessories is top-notch. Customer service is very responsive and helpful...",
    },
    {
        id: 3,
        name: "Rahul Sharma",
        time: "1 month ago",
        rating: 4,
        text: "Great selection of products for my cats. The delivery was quick and the prices are reasonable. Will definitely order again from here...",
    },
    {
        id: 4,
        name: "Meera Patel",
        time: "3 months ago",
        rating: 5,
        text: "Excellent service and product quality. My pets love everything I've ordered so far. The website is easy to navigate and ordering is hassle-free...",
    }
]

const Testimonial = () => {
    const [current, setCurrent] = React.useState(0)

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    What our clients say
                </h2>
                <p className="text-gray-600">
                    You cannot go wrong with these!
                </p>
            </div>

            <div className="max-w-2xl mx-auto">
                <Carousel
                    onScroll={(index) => setCurrent(index)}
                    className="w-full"
                    options={{
                        align: "start", // Align items to the start to fit multiple cards
                        loop: true,
                        slidesToScroll: 1, // Scroll 1 item at a time
                        slidesToShow: 2, // Show 2 items at once on larger screens
                        breakpoints: {
                            768: { // Mobile view - single card
                                slidesToShow: 1,
                            },
                            1024: { // Desktop view - 2 cards
                                slidesToShow: 2,
                            },
                        },
                    }}
                >

                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={testimonial.id} index={index} className="w-full w-1/2 px-2">
                                <Card className="p-6 border-0 shadow-none text-center">
                                    <div className="flex flex-col justify-between items-center mb-4">
                                        <div>
                                            <h3 className="font-semibold text-lg">
                                                {testimonial.name}
                                            </h3>
                                            <p className="text-xs text-gray-500">
                                                {testimonial.time}
                                            </p>
                                        </div>
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-5 h-5 ${i < testimonial.rating
                                                        ? "text-yellow-400 fill-yellow-400"
                                                        : "text-gray-300 fill-gray-300"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-gray-600">
                                        {testimonial.text}
                                    </p>

                                </Card>
                            </CarouselItem>

                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                </Carousel>
{/* 
                <div className="flex justify-center gap-2 mt-4">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`w-2 h-2 rounded-full transition-colors ${current === index ? 'bg-orange-500' : 'bg-gray-300'
                                }`}
                            onClick={() => setCurrent(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div> */}
            </div>
        </div>
    )
}

export default Testimonial
