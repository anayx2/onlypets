"use client";

import Image from "next/image";
import { Heart, Star, Tag, X } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"; // Update with your component paths

import { Button } from "@/components/ui/button";
import { useState } from "react";
import BestSeller from "@/components/Homepage/BestSeller";

const product = {
    id: 6,
    name: "Pedigree Meat Jerky Barbecued Chicken Adult Dog Meaty Treat",
    weight: "80 gm",
    images: [
        "/topproducts/p6.jpg",
        "/topproducts/p5.jpg",
        "/topproducts/p4.jpg",
        "/topproducts/p6.jpg",
    ],
    rating: 4,
    originalPrice: 170.0,
    salePrice: 140.0,
    discount: 15,
    brand: "Pedigree",
    description:
        "Treat your furry friends with the delicious and nutritious Pedigree Meat Jerky. Made with high-quality ingredients, this meaty treat offers a delightful experience for adult dogs. Perfect for training, rewarding, or simply treating your pet.",
    reviews: [
        {
            user: "John Doe",
            rating: 5,
            comment: "My dog loves it! Great quality and affordable price.",
        },
        {
            user: "Jane Smith",
            rating: 4,
            comment: "Good treat for my dog, but I wish it came in a larger pack.",
        },
    ],
};


const couponsData = [
    {
        brand: "Farmina",
        discount: "Upto 50% OFF",
        code: "COUPON50",
        description: "Applicable in dog & Cat Food",
        bgColor: "bg-gradient-to-tr from-red-700 to-red-400",
        textColor: "text-yellow-300"
    },
    {
        brand: "Royal Canin",
        discount: "Upto 40% OFF",
        code: "ROYAL40",
        description: "Valid on all products",
        bgColor: "bg-gradient-to-tr from-green-700 to-green-300",
        textColor: "text-green-800"
    },
    {
        brand: "Pedigree",
        discount: "Upto 30% OFF",
        code: "PED30",
        description: "On dry dog food",
        bgColor: "bg-gradient-to-tr from-yellow-600 to-yellow-300",
        textColor: "text-yellow-800"
    },
    {
        brand: "Whiskas",
        discount: "Upto 45% OFF",
        code: "WHISK45",
        description: "On cat food items",
        bgColor: "bg-gradient-to-tr from-purple-700 to-purple-300",
        textColor: "text-purple-800"
    }
];


export default function ProductPage() {
    const [selectedSize, setSelectedSize] = useState(80);
    const [selectedImage, setSelectedImage] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [quantity, setQuantity] = useState(1);

    return (
        <>
            <div className="container max-w-7xl mx-auto px-4 py-8">
                <div className="grid md:grid-cols-2 gap-8 ">
                    <div className="space-y-4 rounded-lg md:border-gray-300 md:border-[1px] lg:border-gray-300 lg:border-[1px] p-5"
                        style={{ height: "fit-content" }}>
                        <div
                            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                            onClick={() => setIsFullscreen(true)}
                        >
                            <Image
                                src={product.images[selectedImage]}
                                alt={product.name}
                                className="object-cover"
                                fill
                                priority
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-3 border-gray-400 border-[1px] p-2 rounded-lg">
                            {product.images.map((image, index) => (
                                <button
                                    key={index}
                                    className={`relative aspect-square overflow-hidden rounded-md ${selectedImage === index ? 'ring-2 ring-black' : ''
                                        }`}
                                    onClick={() => setSelectedImage(index)}
                                >
                                    <Image
                                        src={image}
                                        alt={`Product ${index + 1}`}
                                        className="object-cover"
                                        fill
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold">{product.name}</h1>
                            <div className="text-sm text-gray-500 mt-2">by {product.brand}</div>
                            <div className="flex items-center mt-4">
                                <span className="text-2xl font-semibold">INR {product.salePrice}</span>
                                <span className="text-sm text-gray-500 ml-2 line-through">
                                    INR {product.originalPrice}
                                </span>
                                <span className="ml-2 text-green-600 text-sm">
                                    ({product.discount}% OFF)
                                </span>
                            </div>
                            <div className="flex items-center mt-2">
                                <span className="flex items-center text-yellow-500">
                                    {[...Array(5)].map((_, index) => (
                                        <Star
                                            key={index}
                                            fill={index < Math.round(product.rating) ? "#FFD700" : "none"}
                                        />
                                    ))}
                                </span>
                                <span className="ml-2 text-gray-600">{product.rating} Stars</span>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-sm font-medium mb-4">Size/Weight</h2>
                            <div className="flex gap-2">
                                {[80, 100, 120, 150].map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`w-12 h-12 rounded-full border ${selectedSize === size ? "bg-black text-white" : "hover:border-black"
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                                Quantity
                            </label>
                            <select
                                id="quantity"
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                className="w-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#552C7B]"
                            >
                                {[...Array(20)].map((_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {String(i + 1).padStart(2, '0')}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="pt-6 border-t ">
                            <p className="text-sm font-medium text-gray-700 mb-3">Share</p>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(window.location.href)}`, '_blank')}
                                    className="text-gray-600 hover:text-gray-900"
                                    aria-label="Share on WhatsApp"
                                >
                                    <img width="44" height="44" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1" />
                                </button>
                                <button
                                    onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                                    className="text-gray-600 hover:text-gray-900"
                                    aria-label="Share on Facebook"
                                >
                                    <img width="40" height="40" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new" />                                </button>
                                <button
                                    onClick={() => window.open(`https://x.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                                    className="text-gray-600 hover:text-gray-900"
                                    aria-label="Share on X"
                                >
                                    <img width="35" height="435" src="https://img.icons8.com/ios-filled/50/twitterx--v1.png" alt="twitterx--v1" />                                </button>
                                <button
                                    onClick={() => window.open(`https://www.instagram.com/`, '_blank')}
                                    className="text-gray-600 hover:text-gray-900"
                                    aria-label="Share on Instagram"
                                >
                                    <img width="40" height="40" src="https://img.icons8.com/cute-clipart/64/instagram-new.png" alt="instagram-new" />                                </button>
                            </div>
                        </div>
                        <div className="space-y-4">

                            {/* Available Coupons */}
                            <Carousel
                                opts={{
                                    align: "start",
                                    loop: true
                                }}
                                className="w-full"
                            >
                                <CarouselContent className="-ml-2 md:-ml-4">
                                    {couponsData.map((coupon, index) => (
                                        <CarouselItem key={index} className=" w-[1rem] pl-2 md:pl-4 md:basis-1/3 basis-1/2">
                                            <div className={`${coupon.bgColor} p-4 rounded-lg h-full`}>
                                                <div className="flex justify-between items-start flex-col h-full">
                                                    <div>
                                                        <p className={` font-extrabold ${coupon.textColor}`}>{coupon.discount}</p>
                                                    </div>
                                                    <div className={`flex items-center flex-wrap gap-2 mt-4`}>
                                                        <Tag className="h-5 w-5 text-white" />
                                                        <span className={`text-sm font-medium text-white`}>
                                                            {coupon.code}
                                                        </span>
                                                        {/* <button
                                                            onClick={() => {
                                                                navigator.clipboard.writeText(coupon.code);
                                                            }}
                                                            className="text-sm font-medium text-gray-400 hover:text-gray-600"
                                                        >
                                                            Copy
                                                        </button> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                {/* <CarouselPrevious className="hidden md:flex" />
                                <CarouselNext className="hidden md:flex" /> */}
                            </Carousel>

                        </div>

                        <div className="space-y-4">
                            <Button className="w-full bg-[#552C7B] text-white">
                                ADD TO BAG
                            </Button>
                            <Button variant="outline" className="w-full border-[1px] border-[#552C7B] text-[#552C7B]">
                                <Heart className="mr-2 h-4 w-4" />
                                Add to Wishlist
                            </Button>
                        </div>

                        <Accordion type="single" defaultValue="description" collapsible className="w-full">
                            <AccordionItem value="description">
                                <AccordionTrigger>DESCRIPTION</AccordionTrigger>
                                <AccordionContent>
                                    <p>{product.description}</p>
                                    <div className="mt-4">
                                        <h3 className="font-semibold">Size & Weight</h3>
                                        <ul className="mt-2 space-y-1">
                                            <li>Weight - {product.weight}</li>
                                            <li>Brand - {product.brand}</li>
                                        </ul>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="reviews">
                                <AccordionTrigger>REVIEWS</AccordionTrigger>
                                <AccordionContent>
                                    {product.reviews.map((review, index) => (
                                        <div key={index} className="mb-4">
                                            <div className="flex items-center justify-between">
                                                <h4 className="font-semibold">{review.user}</h4>
                                                <span className="flex items-center text-yellow-500">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            fill={i < review.rating ? "#FFD700" : "none"}
                                                        />
                                                    ))}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 mt-1">{review.comment}</p>
                                        </div>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
            {isFullscreen && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
                    style={{ pointerEvents: 'auto' }} // Ensure the modal overlay receives touch events on mobile
                >
                    <button
                        onClick={() => setIsFullscreen(false)}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 z-[100]"
                    >
                        <X className="h-8 w-8" />
                    </button>
                    <div className="relative h-[90vh] w-[90vw]">
                        <Image
                            src={product.images[selectedImage]}
                            alt={product.name}
                            className="object-contain"
                            fill
                            priority
                        />
                    </div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                        <div className="flex gap-2 bg-[#552C7B] p-5 rounded-lg">
                            {product.images.map((image, index) => (
                                <button
                                    key={index}
                                    className={`relative w-16 h-16 overflow-hidden rounded-md ${selectedImage === index ? 'ring-2 ring-white' : ''
                                        }`}
                                    onClick={() => setSelectedImage(index)}
                                >
                                    <Image
                                        src={image}
                                        alt={`Product ${index + 1}`}
                                        className="object-cover"
                                        fill
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div className="flex flex-col jusitfy-center">
                <BestSeller />
            </div>
        </>
    );
}

