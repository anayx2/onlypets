'use client';

import Image from "next/image";
import { Minus, Plus, CircleChevronLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function CartPage() {
    const router = useRouter();
    const [appliedCoupon, setAppliedCoupon] = useState(null);

    const product = [{
        id: 6,
        name: "Pedigree Meat Jerky Barbecued Chicken Adult Dog Meaty Treat",
        category: "Dogs/Cats",
        weight: "80 gm",
        images: ["/topproducts/p6.jpg"],
        rating: 4,
        originalPrice: 170.0,
        salePrice: 540.0,
        discount: 15,
        brand: "Pedigree",
    },
    {
        id: 7,
        name: "Pedigree Meat Jerky Barbecued Chicken Adult Dog Meaty Treat",
        category: "Dogs/Cats",
        weight: "80 gm",
        images: ["/topproducts/p6.jpg"],
        rating: 4,
        originalPrice: 170.0,
        salePrice: 540.0,
        discount: 15,
        brand: "Pedigree",
    }];

    useEffect(() => {
        // Get applied coupon from localStorage
        const couponData = localStorage.getItem('appliedCoupon');
        if (couponData) {
            setAppliedCoupon(JSON.parse(couponData));
        }
    }, []);

    const removeCoupon = () => {
        localStorage.removeItem('appliedCoupon');
        setAppliedCoupon(null);
    };

    const savings = product.originalPrice - product.salePrice;
    const quantity = 1;

    const back = () => {
        router.back()
    }

    const handleViewOffersClick = () => {
        router.push('/cart/coupons')
    }

    // Calculate final amount after coupon discount
    const calculateFinal = () => {
        const subtotal = product.salePrice;
        const gst = 5;
        const couponDiscount = appliedCoupon ? appliedCoupon.discount : 0;
        return subtotal + gst - couponDiscount;
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Header */}
            <div className="sticky top-0 z-10 bg-white px-4 py-3 flex items-center gap-2 items-center border-b">
                <div className="bg-gray-200 w-9 h-9 cursor-pointer rounded-full flex items-center justify-center" >
                    <CircleChevronLeft onClick={back} />
                </div>
                <h2 className="text-lg font-semibold mb-0">My Cart</h2>
            </div>

            <div className="flex-1 p-4 space-y-4">
                {/* Savings Banner */}
                <div className="bg-green-50 p-3 rounded-lg">
                    <div className="flex justify-between items-center">
                        <span className="text-green-600">Your total savings</span>
                        <span className="text-green-600">₹{savings + (appliedCoupon?.discount || 0)}</span>
                    </div>
                </div>

                {/* Coupon Section */}
                <Card className="p-3">
                    <div className="flex justify-between items-center">
                        {!appliedCoupon ? (
                            <>
                                <span className="ml-1 text-sm font-semibold">
                                    Have a coupon Code?
                                </span>
                                <span
                                    className="underline cursor-pointer text-[#FF7700]"
                                    onClick={handleViewOffersClick}
                                >
                                    View Offers
                                </span>
                            </>
                        ) : (
                            <>
                                <div className="flex flex-col">
                                    <span className="ml-1 text-sm font-semibold text-green-600">
                                        Applied: {appliedCoupon.code}
                                    </span>
                                    <span className="ml-1 text-xs text-green-600">
                                        Saved ₹{appliedCoupon.discount}
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="underline cursor-pointer text-red-500 text-sm"
                                        onClick={removeCoupon}
                                    >
                                        Remove
                                    </span>

                                </div>
                            </>
                        )}
                    </div>
                </Card>

                {/* Product Card */}
                <Card className="p-3">
                    <div className="flex gap-3">
                        <div className="relative w-20 h-20">
                            <Image
                                src={product.images[0]}
                                alt={product.name}
                                fill
                                className="object-cover rounded"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-medium text-sm line-clamp-2">{product.name}</h3>
                            <p className="text-sm text-gray-500">{product.weight}</p>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold">₹{product.salePrice}</span>
                                    <span className="text-sm text-gray-500 line-through">
                                        ₹{product.originalPrice}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 bg-[#FF7700] text-white rounded-lg">
                                    <button className="p-2">
                                        <Minus className="h-4 w-4" />
                                    </button>
                                    <span className="w-4 text-center">{quantity}</span>
                                    <button className="p-2">
                                        <Plus className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Bill Details */}
                <Card className="p-4 space-y-3">
                    <h2 className="font-semibold">Bill details</h2>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span>Items total</span>
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-blue-600">Saved ₹{savings}</span>
                                <span>₹{product.salePrice}</span>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <span className="flex items-center gap-1">
                                Delivery charge
                                <span className="text-gray-400">(Free above ₹399)</span>
                            </span>
                            <span className="text-green-600">FREE</span>
                        </div>
                        {appliedCoupon && (
                            <div className="flex justify-between text-green-600">
                                <span>Coupon discount ({appliedCoupon.code})</span>
                                <span>-₹{appliedCoupon.discount}</span>
                            </div>
                        )}
                        <div className="flex justify-between">
                            <span>GST & other taxes</span>
                            <span>₹5</span>
                        </div>
                        <div className="border-t pt-2 flex justify-between font-semibold">
                            <span>Grand total</span>
                            <span>₹{calculateFinal()}</span>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 p-4 bg-white border-t">
                <Button className="w-full bg-[#FF7700] hover:bg-[#FF7700] text-white">
                    Proceed to Checkout
                </Button>
            </div>
        </div>
    );
}