'use client';
import React from 'react';
import { useState } from "react";
import { Plus, Minus } from "lucide-react"; import Image from 'next/image';
import { Star } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import AddToCartButton from '../AddToCartButton';
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

// import { useCart } from '../Cartcontext';

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


const ProductCard = ({ id, image, name, weight, rating, originalPrice, salePrice, discount, brand }) => {
    const [quantity, setQuantity] = useState(1);
    const { cart, addToCart, removeFromCart, updateQuantity } = useCart();
    const router = useRouter();

    const product = () => {
        router.push('/product')
    }
    const increment = () => setQuantity((prev) => prev + 1);
    const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    const handleUpdateQuantity = () => {
        updateQuantity(id, quantity);
    };

    return (
        <div className="bg-white rounded-lg md:px-3 lg:md:px-3 w-[160px] lg:w-[auto] md:w-[auto] sm:pt-4">
            <div className="p-2">
                {/* Image Section */}
                <div className="relative aspect-square rounded-xl sm:mb-4 shadow-sm hover:shadow-md transition-shadow border border-gray-200 mb-1">
                    <Image src={image} alt={name} fill className="object-contain p-2" />
                    <div style={{ bottom: "-10%", right: "-2%" }} className="absolute w-[auto] flex border-[1px] rounded-lg bg-[#FF7700] text-white px-2 py-1 space-x-2 my-2">
                        <button className="p-1 rounded-full" onClick={decrement} aria-label="Decrease quantity">
                            <Minus size={15} />
                        </button>
                        <span className="text-sm font-semibold">{quantity}</span>
                        <button className="p-1 rounded-full" onClick={increment} aria-label="Increase quantity">
                            <Plus size={15} />
                        </button>
                    </div>
                </div>
                <div className='relative'>
                    {/* Product Details */}
                    <span className="flex justify-between items-center">
                        <h3 className="font-semibold text-xs sm:text-base mb-1">{brand}</h3>
                    </span>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-2 line-clamp-2">
                        {name} - {weight}
                    </p>
                    {/* Pricing Section */}
                    <div className="flex items-start sm:gap-2 sm:mb-4 flex-col">
                        <span className="text-green-700 text-xs sm:text-sm">{discount}% off</span>
                        <div>
                            <span className="font-bold text-[12px] lg:text-lg">₹{salePrice.toFixed(2)}</span>
                            <span className="text-gray-400 line-through mx-1 sm:mx-2 text-xs sm:text-sm lg:text-lg">₹{originalPrice.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add to Cart */}
            <AddToCartButton productId={id} quantity={quantity || 1} />
        </div>
    );
};

const ProductGrid = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Mobile Carousel View */}
            <div className="sm:hidden">
                <Carousel
                    opts={{
                        align: "start",
                        loop: false,
                        dragFree: true,
                        containScroll: "trimSnaps",
                    }}

                    className="w-full overflow-x-auto flex gap-2">
                    <CarouselContent className="flex">
                        {products.map((product) => (
                            <CarouselItem key={product.id} className="basis-1/2">
                                <ProductCard {...product} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2" />
                    <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2" />
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