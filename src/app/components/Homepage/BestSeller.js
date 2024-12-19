'use client';

import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const products = [
    {
        id: 1,
        name: "Pedigree Meat Jerky Barbecued Chicken Adult Dog Meaty Treat",
        weight: "80 gm",
        image: "/topproducts/p1.jpg?height=200&width=200",
        rating: 4.5,
        originalPrice: 170.0,
        salePrice: 140.0,
        discount: 15,
        brand: "Pedigree",
    },
    {
        id: 2,
        name: "Pedigree Meat Jerky Barbecued Chicken Adult Dog Meaty Treat",
        weight: "80 gm",
        image: "/topproducts/p2.jpg?height=200&width=200",
        rating: 4.5,
        originalPrice: 170.0,
        salePrice: 140.0,
        discount: 15,
        brand: "Pedigree",
    },
    {
        id: 3,
        name: "Pedigree Meat Jerky Barbecued Chicken Adult Dog Meaty Treat",
        weight: "80 gm",
        image: "/topproducts/p3.jpg?height=200&width=200",
        rating: 4.5,
        originalPrice: 170.0,
        salePrice: 140.0,
        discount: 15,
        brand: "Pedigree",
    },
    {
        id: 4,
        name: "Pedigree Meat Jerky Barbecued Chicken Adult Dog Meaty Treat",
        weight: "80 gm",
        image: "/topproducts/p4.jpg?height=200&width=200",
        rating: 4.5,
        originalPrice: 170.0,
        salePrice: 140.0,
        discount: 15,
        brand: "Pedigree",
    },
    {
        id: 5,
        name: "Pedigree Meat Jerky Barbecued Chicken Adult Dog Meaty Treat",
        weight: "80 gm",
        image: "/topproducts/p5.jpg?height=200&width=200",
        rating: 4.5,
        originalPrice: 170.0,
        salePrice: 140.0,
        discount: 15,
        brand: "Pedigree",
    },
    {
        id: 6,
        name: "Pedigree Meat Jerky Barbecued Chicken Adult Dog Meaty Treat",
        weight: "80 gm",
        image: "/topproducts/p6.jpg?height=200&width=200",
        rating: 4.5,
        originalPrice: 170.0,
        salePrice: 140.0,
        discount: 15,
        brand: "Pedigree",
    },
];


const ProductCard = ({ image, name, weight, rating, originalPrice, salePrice, discount, brand }) => {
    return (
        <div>
            <div className="bg-white rounded-t-lg px-4 pt-4 shadow-sm hover:shadow-md transition-shadow border border-gray-300">
                <div className="relative aspect-square mb-4">
                    <Image src={image} alt={name} fill className="object-contain" />
                </div>
                <div className="flex items-center gap-1 mb-2 border-b border-gray-300 pb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{rating}</span>
                </div>
                <h3 className="font-semibold mb-1">{brand}</h3>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                    {name} - {weight}
                </p>
                <div className="flex items-center gap-2 mb-4 flex-col">
                    <div>
                        <span className="text-gray-400 line-through mx-2">₹{originalPrice.toFixed(2)}</span>
                        <span className="font-bold">₹{salePrice.toFixed(2)}</span>
                    </div>
                    <span className="text-red-500 text-sm">{discount}% off</span>
                </div>
            </div>
            <button className="w-full bg-[#71216A] text-white py-2 rounded-b-lg hover:bg-purple-800 transition-colors">
                Add To Cart
            </button>
        </div>
    );
};

const ProductGrid = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">What Are you looking for???</h1>
                <p className="text-gray-600">You cannot go wrong with these!</p>
            </div>

            {/* Mobile Carousel View */}
            <div className="sm:hidden">
                <Carousel className="w-full">
                    <CarouselContent>
                        {products.map((product) => (
                            <CarouselItem key={product.id}>
                                <div className="px-1">
                                    <ProductCard {...product} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-0 top-1/2" />
                    <CarouselNext className="absolute right-0 top-1/2" />
                </Carousel>
            </div>

            {/* Desktop Grid View */}
            <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
};

const BestSeller = () => {
    return (
        <div>
            <ProductGrid />
        </div>
    );
};

export default BestSeller;