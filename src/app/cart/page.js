'use client';

import Image from "next/image";
import { Minus, Plus, CircleChevronLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import BestSeller from "@/components/Homepage/BestSeller";
import { Footer } from "@/components/Footer";
import CartProductSuggestion from "@/components/Homepage/col3slider";

export default function CartPage() {
    const router = useRouter();
    const [appliedCoupon, setAppliedCoupon] = useState(null);
    const [products, setProducts] = useState([]);
    const [quantities, setQuantities] = useState({});
    const GST_RATE = 5;

    useEffect(() => {
        // Fetch products data (placeholder for API call)
        const fetchProducts = async () => {
            const fetchedProducts = [
                {
                    id: 6,
                    name: "Pedigree Meat Jerky Barbecued Chicken Adult Dog Meaty Treat",
                    category: "Dogs/Cats",
                    weight: "80 gm",
                    images: ["/topproducts/p6.jpg"],
                    rating: 4,
                    originalPrice: 170.0,
                    salePrice: 140.0,
                    discount: 15,
                    brand: "Pedigree",
                },
                {
                    id: 7,
                    name: "Royal Canin Puppy Food",
                    category: "Dogs",
                    weight: "2 kg",
                    images: ["/topproducts/p5.jpg"],
                    rating: 5,
                    originalPrice: 300.0,
                    salePrice: 280.0,
                    discount: 10,
                    brand: "Royal Canin",
                }
            ];

            setProducts(fetchedProducts);

            // Initialize quantities
            const initialQuantities = fetchedProducts.reduce((acc, product) => {
                acc[product.id] = 1;
                return acc;
            }, {});
            setQuantities(initialQuantities);
        };

        fetchProducts();

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

    const updateQuantity = (id, delta) => {
        setQuantities((prev) => {
            const newQuantity = Math.max(1, (prev[id] || 1) + delta);
            return { ...prev, [id]: newQuantity };
        });
    };

    const calculateSavings = () => {
        return products.reduce((total, product) => {
            const quantity = quantities[product.id] || 1;
            return total + (product.originalPrice - product.salePrice) * quantity;
        }, 0);
    };

    const calculateSubtotal = () => {
        return products.reduce((total, product) => {
            const quantity = quantities[product.id] || 1;
            return total + product.salePrice * quantity;
        }, 0);
    };

    const calculateFinalTotal = () => {
        const subtotal = calculateSubtotal();
        const gst = (subtotal * GST_RATE) / 100;
        const couponDiscount = appliedCoupon ? appliedCoupon.discount : 0;
        return subtotal + gst - couponDiscount;
    };

    const back = () => {
        router.back();
    };
    const checkout = () => {
        router.push('/checkout');
    };

    const handleViewOffersClick = () => {
        router.push('/cart/coupons');
    };

    return (
        <>
            <div className="flex flex-col min-h-screen bg-gray-50">
                {/* Header */}
                <div className="sticky top-0 z-10 bg-white px-4 py-3 flex items-center gap-2 border-b">
                    <div className="bg-gray-200 w-9 h-9 cursor-pointer rounded-full flex items-center justify-center">
                        <CircleChevronLeft onClick={back} />
                    </div>
                    <h2 className="text-lg font-semibold mb-0">My Cart</h2>
                </div>

                <div className="flex-1 space-y-4">
                    {/* Savings Banner */}
                    <div className="bg-green-50 p-3 rounded-lg">
                        <div className="flex justify-between items-center">
                            <span className="text-green-600">Your total savings</span>
                            <span className="text-green-600">₹{calculateSavings()}</span>
                        </div>
                    </div>

                    {/* Coupon Section */}
                    <Card className="p-3 mx-4">
                        <div className="flex justify-between items-center">
                            {!appliedCoupon ? (
                                <>
                                    <span className="ml-1 text-sm font-semibold">
                                        Have a coupon code?
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
                                    <span
                                        className="underline cursor-pointer text-red-500 text-sm"
                                        onClick={removeCoupon}
                                    >
                                        Remove
                                    </span>
                                </>
                            )}
                        </div>
                    </Card>

                    {/* Products */}
                    <div className="space-y-4">
                        <Card className="p-3 flex flex-col gap-4 mx-4">
                            {products.map((product) => (
                                <div key={product.id} className="flex gap-3 border-b pb-4 border-gray-200">
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
                                                <button
                                                    className="p-2"
                                                    onClick={() => updateQuantity(product.id, -1)}
                                                >
                                                    <Minus className="h-4 w-4" />
                                                </button>
                                                <span className="w-4 text-center">{quantities[product.id] || 1}</span>
                                                <button
                                                    className="p-2"
                                                    onClick={() => updateQuantity(product.id, 1)}
                                                >
                                                    <Plus className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Card>
                    </div>

                    <div className=" flex flex-col">
                        <h2 className="text-center mt-3 mb-0">
                            People also brought
                        </h2>
                        <CartProductSuggestion />
                    </div>

                    {/* Bill Details */}
                    <Card className="p-4 space-y-3 mx-4">
                        <h2 className="font-semibold">Bill details</h2>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="font-semibold">Items total</span>
                                <span className="font-semibold">₹{calculateSubtotal()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Delivery charge</span>
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
                                <span>₹{(calculateSubtotal() * GST_RATE) / 100}</span>
                            </div>
                            <div className="border-t pt-2 flex justify-between font-semibold">
                                <span>Grand total</span>
                                <span>₹{calculateFinalTotal()}</span>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="fixed bottom-4 w-[90%] transition-all duration-300 ease-in-out">
                    <Button className="shadow-2xl w-[90%] left-5 fixed bottom-4 bg-[#FF7700] p-5 rounded-lg shadow-lg cursor-pointer 
                    text-lg hover:bg-[#ff8c2d] transition-all duration-300 ease-in-outtext-white" onClick={checkout}>
                        Proceed to Checkout

                    </Button>
                </div>
            </div>

        </>
    );
}
