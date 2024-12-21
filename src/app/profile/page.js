'use client';

import { CreditCard, Heart, Package, Settings, User, User2, Wallet, } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { useState } from 'react';
import Image from "next/image"
import { Edit } from 'lucide-react'
import PersonalInformation from '@/components/profile/PersonalInformation';
import MyOrders from './MyOrders';

export default function Profile() {
    const profileData = {
        name: "Test User",
        avatar: "/cat_profile.gif",
        coverImage: "/food-banner.jpg",
        stats: {
            reviews: 2,
            photos: 0,
            followers: 1
        }
    }
    const [gender, setGender] = useState('male');
    const [selectedMenu, setSelectedMenu] = useState('settings');

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    };
    return (
        <div className="min-h-screen bg-gray-50/50">
            <div className="relative w-full">
                {/* Cover Image */}
                <div className="relative h-[400px] md:h-72 w-full overflow-hidden">
                    <Image
                        src={'/profilecover.jpg'}
                        alt="Profile cover"
                        fill

                        className="w-full h-40dvh object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                </div>

                {/* Profile Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-end p-6 md:items-start">
                    <div className="container mx-auto max-w-7xl w-full">
                        <div className="flex flex-col items-center md:flex-row md:items-end gap-4 md:gap-6">
                            {/* Avatar */}
                            <div className="relative md:-mb-12">
                                <div className="h-24 w-24 md:h-32 md:w-32 rounded-full overflow-hidden bg-purple-500 flex items-center justify-center border-4 border-white">
                                    {profileData.avatar ? (
                                        <img
                                            src={profileData.avatar}
                                            alt={profileData.name}
                                            width={128}
                                            height={128}
                                            className="object-cover"
                                        />
                                    ) : (
                                        <span className="text-5xl md:text-6xl text-white">
                                            {profileData.name.charAt(0).toLowerCase()}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Profile Info */}
                            <div className="flex-grow text-center md:text-left">
                                <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                    {profileData.name}
                                </h1>

                                {/* Stats */}
                                {/* <div className="flex justify-center md:justify-start gap-6 text-white">
                                    <div className="text-center">
                                        <div className="text-xl md:text-2xl font-semibold">{profileData.stats.reviews}</div>
                                        <div className="text-sm">ORDERS</div>
                                    </div>
                                    <div className="relative text-center">
                                        <div className="absolute -left-3 top-1 h-[80%] w-px bg-white/20" />
                                        <div className="text-xl md:text-2xl font-semibold">{profileData.stats.photos}</div>
                                        <div className="text-sm">Saved</div>
                                    </div>
                                    <div className="relative text-center">
                                        <div className="absolute -left-3 top-1 h-[80%] w-px bg-white/20" />
                                        <div className="text-xl md:text-2xl font-semibold">{profileData.stats.followers}</div>
                                        <div className="text-sm">Followers</div>
                                    </div>
                                </div> */}
                            </div>

                            {/* Edit Button */}
                            <button
                                className="mt-4 md:mt-0 inline-flex items-center px-6 py-2 rounded-md bg-[#71216A] text-white transition-colors"
                                href="#settings"
                                onClick={() => handleMenuClick('settings')}
                            >
                                <Edit className="w-4 h-4 mr-2" />
                                Edit profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container max-w-7xl mx-auto mt-10 p-4 space-y-4">
                <div className="grid md:grid-cols-[280px_1fr] gap-4">
                    {/* Sidebar */}
                    <div className="space-y-4">
                        <div className="bg-white rounded-lg shadow-md">
                            <nav className="flex flex-col">
                                <a
                                    href="#settings"
                                    onClick={() => handleMenuClick('settings')}
                                    className="flex items-center h-12 px-4 hover:bg-gray-50 text-[#71216A]"
                                >
                                    <User2 className="mr-2 h-5 w-5 text-[#71216A]" />
                                    ACCOUNT SETTINGS
                                </a>
                                <hr className='border-1 border-gray-400 '>
                                </hr>
                                <a
                                    href="#orders"
                                    onClick={() => handleMenuClick('orders')}
                                    className="flex items-center h-12 px-4 hover:bg-gray-50 text-[#71216A]"
                                >
                                    <Package className="mr-2 h-5 w-5 text-[#71216A]" />
                                    MY ORDERS
                                </a>
                                <hr className='border-1 border-gray-400 '>
                                </hr>
                                <a
                                    href="#orders"
                                    onClick={() => handleMenuClick('orders')}
                                    className="flex items-center h-12 px-4 hover:bg-gray-50 text-[#71216A]"
                                >
                                    <Heart className="mr-2 h-5 w-5 text-[#71216A]" />

                                    WISHLIST
                                </a>

                                {/* <a
                                    href="#addresses"
                                    onClick={() => handleMenuClick('addresses')}
                                    className="flex items-center h-12 px-4 hover:bg-gray-50 text-gray-700"
                                >
                                    Manage Addresses
                                </a>
                                <a
                                    href="#pan"
                                    onClick={() => handleMenuClick('pan')}
                                    className="flex items-center h-12 px-4 hover:bg-gray-50 text-gray-700"
                                >
                                    PAN Card Information
                                </a> */}
                                {/* <div className="border-t border-gray-200 my-2" /> */}
                                {/* <div className="px-4 py-2">
                                    <p className="text-sm font-medium flex items-center text-gray-700">
                                        <Wallet className="mr-2 h-4 w-4" />
                                        PAYMENTS
                                    </p>
                                </div>
                                <a
                                    href="#gift-cards"
                                    className="flex items-center justify-between h-12 px-4 hover:bg-gray-50 text-gray-700"
                                >
                                    <span>Gift Cards</span>
                                    <span className="text-green-600">₹0</span>
                                </a>
                                <a
                                    href="#upi"
                                    className="flex items-center h-12 px-4 hover:bg-gray-50 text-gray-700"
                                >
                                    Saved UPI
                                </a>
                                <a
                                    href="#cards"
                                    className="flex items-center h-12 px-4 hover:bg-gray-50 text-gray-700"
                                >
                                    Saved Cards
                                </a> */}
                            </nav>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="bg-white rounded-lg border-[1px] shadow-md w-full p-6">
                        <div className="space-y-6">
                            {selectedMenu === 'settings' && <PersonalInformation />}
                            {selectedMenu === 'orders' && <MyOrders />}
                            {selectedMenu === 'addresses' && 'sdfsd'}
                            {selectedMenu === 'pan' && 'sfsdf'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
