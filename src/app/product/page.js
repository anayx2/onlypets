"use client";

import Image from "next/image";
import { BadgePercent, Heart, Minus, Plus, Star, Tag, X } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
// import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"; // Update with your component paths

import { Button } from "@/components/ui/button";
import { useState } from "react";
import BestSeller from "@/components/Homepage/BestSeller";
import Link from "next/link";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";

const product = {
    id: 6,
    name: "Pedigree Meat Jerky Barbecued Chicken Adult Dog Meaty Treat",
    category: "Dogs/Cats",
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

const offers = [
    {
        price: "1,259",
        discount: "10%",
        condition: "on your first app purchase",
        code: "APP10",
        minimumPurchase: null
    },
    {
        price: "1,119",
        discount: "20%",
        condition: "on minimum purchase of 4599/-",
        code: "FLAT20",
        minimumPurchase: 4599
    },
    {
        price: "1,189",
        discount: "15%",
        condition: "on minimum purchase of 2999/-",
        code: "FLAT15",
        minimumPurchase: 2999
    },
    {
        price: "1,259",
        discount: "10%",
        condition: "on minimum purchase of 1999/-",
        code: "FLAT10",
        minimumPurchase: 1999
    }
];
const variants = [
    {
        name: '2 x 750 ml',
        price: 79,
        originalPrice: null,
        value: 'pack2',
    },
    {
        name: '750 ml',
        price: 40,
        originalPrice: null,
        value: 'single',
    },
    // Add more variants as needed
];
function Benefit({ title, description, icon }) {
    return (
        <div className="flex gap-3 items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-green-50 rounded-full">
                {/* Placeholder for benefit icon */}

                <img src={icon}
                    alt="cat"
                    className="w-10 h-10"
                />            </div>
            <div>
                <h3 className="font-medium text-[1.2em] text-gray-900">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
        </div>
    )
}

export default function ProductPage() {
    const [selectedSize, setSelectedSize] = useState(80);
    const [selectedImage, setSelectedImage] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [selectedValue, setSelectedValue] = useState("pack2");

    const router = useRouter();

    const handleRedirect = () => {
        router.push("/checkout"); // Redirect to /checkout
    };
    const handleSelect = (value) => {
        setSelectedValue(value);
    };
    const increment = () => setQuantity((prev) => prev + 1);
    const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    const handleUpdateQuantity = () => {
        updateQuantity(id, quantity);
    };

    return (
        <>
            <div className="container max-w-7xl mx-auto px-4 py-8">
                <div className="grid md:grid-cols-2 gap-8 ">
                    <div className="space-y-4 rounded-lg md:border-gray-300 md:border-[1px] lg:border-gray-300 lg:border-[1px] p-5"
                        style={{ height: "" }}>
                        <div
                            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                            onClick={() => setIsFullscreen(true)}
                        >
                            <Image
                                src={product.images[selectedImage]}
                                alt={product.name}
                                className="object-cover h-50"
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

                    <div className="max-w-2xl lg:p-4 space-y-6">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                                    {product.category}
                                </span>
                            </div>
                            <h1 className="text-xl font-medium text-gray-900">
                                {product.name}
                            </h1>
                        </div>

                        <div className="space-y-4">
                            <ScrollArea className="w-full whitespace-nowrap ">
                                {/* <div className=""> */}
                                <h2 className="text-sm font-medium text-gray-700 mb-2">Select Unit</h2>
                                <div className="flex gap-4 overflow-x-auto">
                                    {variants.map((variant) => (
                                        <div
                                            key={variant.value}
                                            className={`w-[150px] relative flex flex-col p-2 border rounded-lg cursor-pointer m-1 transition-all ${selectedValue === variant.value
                                                ? 'border-[#FF7700] m-1 shadow-lg ring-1 ring-[#FF7700]'
                                                : ''
                                                }`}
                                            onClick={() => handleSelect(variant.value)}
                                        >
                                            <span className="font-medium">{variant.name}</span>
                                            <span className="text-sm text-gray-600">
                                                ₹{variant.price}
                                                {variant.originalPrice && (
                                                    <span className="line-through"> MRP ₹{variant.originalPrice}</span>
                                                )}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                {/* </div> */}
                            </ScrollArea>


                            <div className="flex items-center justify-start gap-2">
                                <Button variant="outline" size="icon" className="h-8 w-8"
                                    onClick={decrement} aria-label="Decrease quantity">
                                    <Minus className="h-4 w-4" />
                                    <span className="sr-only">Decrease quantity</span>
                                </Button>
                                <span className="w-8 text-center">{quantity}</span>
                                <Button variant="outline" size="icon" className="h-8 w-8"
                                    onClick={increment} aria-label="Increase quantity"
                                >
                                    <Plus className="h-4 w-4" />
                                    <span className="sr-only">Increase quantity</span>
                                </Button>
                            </div>

                            <p className="text-xs text-gray-500">(Inclusive of all taxes)</p>
                        </div>
                        <div className="space-y-2">
                            {offers.map((offer, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <div className="mt-1 flex item-center">
                                        <BadgePercent />                                    </div>
                                    <div className="flex flex-col ">
                                        <p className="mb-0">
                                            Get this for INR {offer.price}
                                        </p>
                                        <p className="mb-0">
                                            Flat <span className="text-red-500">{offer.discount} Off</span> {offer.condition}
                                        </p>
                                        <p className="mb-0">
                                            Code: <span className="font-semibold">{offer.code}</span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-4">
                            <Button className="w-full bg-[#552C7B] text-white">
                                ADD TO BAG
                            </Button>
                            <Button variant="outline" className="w-full border-[1px] border-[#552C7B] text-[#552C7B]"
                                onClick={handleRedirect}
                            >
                                {/* <Heart className="mr-2 h-4 w-4" /> */}
                                Quick buy
                            </Button>
                        </div>


                        <div className="space-y-6 pt-6 border-t">
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
                                                    <h4 className="font-semibold text-[1.2em]">{review.user}</h4>
                                                    <span className="flex items-center text-yellow-500">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star
                                                                key={i}
                                                                fill={i < review.rating ? "#FFD700" : "none"}
                                                            />
                                                        ))}
                                                    </span>
                                                </div>
                                                <p className="text-gray-600 text-sm mt-1">{review.comment}</p>
                                            </div>
                                        ))}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        <div className="space-y-6 pt-6 ">
                            <div className="space-y-6 pt-6">
                                <h2 className="font-medium text-[1.6em] text-gray-900">Why shop from us?</h2>
                                <div className="space-y-4">
                                    <Benefit
                                        icon={'/cat_profile.gif'}
                                        title="Superfast Delivery"
                                        description="Get your order delivered to your doorstep at the earliest from dark stores near you"
                                    />
                                    <Benefit
                                        icon={'/best-offer.gif'}
                                        title="Best Prices & Offers"
                                        description="Best price destination with offers directly from the manufacturers"
                                    />
                                </div>
                            </div>
                        </div>
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
            <div className="flex flex-col justify-center">
                <BestSeller />
            </div>
        </>
    );
}
