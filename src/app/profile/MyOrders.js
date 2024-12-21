import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight, Search, SlidersHorizontal, Star } from 'lucide-react'


const orders = [
    {
        id: "1",
        name: "Pedigree Meat Jerky Barbecued Chicken Adult Dog Meaty Treat",
        image: "/product-img1.png",
        color: "Brown",
        price: 155,
        deliveryDate: "Jul 16",
        status: "delivered",
    },
    {
        id: "2",
        name: "Pedigree Meat Jerky Barbecued Chicken Adult Dog Meaty Treat",
        image: "/product-img2.png",
        color: "Brown",
        price: 155,
        deliveryDate: "Jul 16",
        status: "delivered",
    },
];

const MyOrders = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredOrders = orders.filter((order) =>
        order.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="max-w-5xl mx-auto">
            {/* Search Bar */}
            <div className="sticky top-0 bg-white border-b z-10">
                <div className="p-4 flex gap-2">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search your order here"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border rounded-md"
                        />
                    </div>
                    <button className="px-4 py-2 border rounded-md flex items-center gap-2">
                        <SlidersHorizontal className="w-5 h-5" />
                        <span className="hidden md:inline">Filters</span>
                    </button>
                </div>
            </div>

            {/* Orders List */}
            <div className="divide-y">
                {filteredOrders.map((order) => (
                    <div key={order.id} className="flex gap-4 p-4 hover:bg-gray-50">
                        {/* Product Image */}
                        <div className="relative w-20 h-20 flex-shrink-0">
                            <Image
                                src={order.image}
                                alt={order.name}
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Mobile Layout */}
                        <div className="flex-1 md:hidden">
                            <div className="text-sm text-green-600 font-medium">
                                Delivered on {order.deliveryDate}
                            </div>
                            <h3 className="font-medium text-sm mt-1">{order.name}</h3>
                            <div className="flex gap-1 mt-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-5 h-5 text-gray-300"
                                    />
                                ))}
                            </div>
                            <p className="text-gray-500 text-sm mt-1">Rate this product now</p>
                        </div>

                        {/* Desktop Layout */}
                        <div className="hidden md:flex flex-1 items-center">
                            <div className="flex-1">
                                <h3 className="font-medium">{order.name}</h3>
                                <p className="text-gray-600 text-sm mt-1">
                                    Color: {order.color}
                                    {order.size && ` Size: ${order.size}`}
                                </p>
                            </div>

                            <div className="text-lg font-medium">
                                ₹{order.price}
                            </div>

                            <div className="text-right ml-8">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                    <span>Delivered on {order.deliveryDate}</span>
                                </div>
                                <p className="text-gray-600 text-sm">Your item has been delivered</p>
                                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-2 flex items-center gap-1">
                                    <Star className="w-4 h-4" />
                                    Rate & Review Product
                                </button>
                            </div>
                        </div>

                        {/* Mobile Arrow */}
                        <div className="md:hidden flex items-center">
                            <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyOrders;
