"use client";

import Image from "next/image";
import { Heart, Star } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Navbar1 from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import BestSeller from "@/components/Homepage/BestSeller";

const product = {
    id: 6,
    name: "Pedigree Meat Jerky Barbecued Chicken Adult Dog Meaty Treat",
    weight: "80 gm",
    image: "/topproducts/p6.jpg?height=200&width=200",
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

export default function ProductPage() {
    const [selectedSize, setSelectedSize] = useState(80); // Set default size

    return (
        <>
            <Navbar1 />

            <div className="container max-w-7xl mx-auto px-4 py-8">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Product Images */}
                    <div className="space-y-4">
                        <div className="relative aspect-square overflow-hidden rounded-lg">
                            <Image
                                src={product.image}
                                alt={product.name}
                                className="object-cover"
                                fill
                                priority
                            />
                        </div>
                    </div>

                    {/* Product Details */}
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
                                            fill={index < Math.round(product.rating) ? "#FFD700" : "none"} // Changed to golden color
                                        />
                                    ))}
                                </span>

                                <span className="ml-2 text-gray-600">{product.rating} Stars</span>
                            </div>
                        </div>

                        {/* Size Selection */}
                        <div>
                            <h2 className="text-sm font-medium mb-4">SIZE</h2>
                            <div className="flex gap-2">
                                {[80, 100, 120, 150].map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)} // Update selected size on click
                                        className={`w-12 h-12 rounded-full border ${selectedSize === size ? "bg-black text-white" : "hover:border-black"
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-4">
                            <Button className="w-full bg-[#552C7B] text-white">
                                ADD TO BAG
                            </Button>
                            <Button variant="outline" className="w-full border-[1px] border-[#552C7B] text-[#552C7B]">
                                <Heart className="mr-2 h-4 w-4" />
                                Add to Wishlist
                            </Button>
                        </div>

                        {/* Accordion Sections */}
                        <Accordion type="single" defaultValue={["description"]} collapsible className="w-full">
                            {/* <AccordionItem value="emi">
                            <AccordionTrigger>EMI / PAY IN 3 OFFERS</AccordionTrigger>
                            <AccordionContent>
                                Available on all major credit cards and select banks.
                            </AccordionContent>
                        </AccordionItem> */}

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
            <div className="flex flex-col jusitfy-center">

                <BestSeller />
            </div>
            <Footer />
        </>
    );
}
