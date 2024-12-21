'use client';

import { CreditCard, Package, Settings, User, Wallet, } from 'lucide-react';
import { useState } from 'react';


export default function Profile() {
    const [gender, setGender] = useState('male');

    return (
        <div className="min-h-screen bg-gray-50/50">
            <div className="container max-w-7xl mx-auto p-4 space-y-4">
                <div className="grid md:grid-cols-[280px_1fr] gap-4">
                    {/* Sidebar */}
                    <div className="space-y-4">
                        <div className="bg-white rounded-lg shadow-sm">
                            <div className="p-6">
                                <div className="flex items-center gap-4">
                                    <div className="h-16 w-16 rounded-full bg-gray-100 overflow-hidden">
                                        <img
                                            src="/placeholder.svg"
                                            alt="Profile"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Hello,</p>
                                        <h2 className="text-xl font-semibold">Anay Tiwari</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm">
                            <nav className="flex flex-col">
                                <a
                                    href="#orders"
                                    className="flex items-center h-12 px-4 hover:bg-gray-50 text-gray-700"
                                >
                                    <Package className="mr-2 h-5 w-5" />
                                    MY ORDERS
                                </a>
                                <a
                                    href="#settings"
                                    className="flex items-center h-12 px-4 hover:bg-gray-50 text-gray-700"
                                >
                                    <Settings className="mr-2 h-5 w-5" />
                                    ACCOUNT SETTINGS
                                </a>
                                <div className="border-t border-gray-200" />
                                <div className="px-4 py-2">
                                    <p className="text-sm text-blue-600">Profile Information</p>
                                </div>
                                <a
                                    href="#addresses"
                                    className="flex items-center h-12 px-4 hover:bg-gray-50 text-gray-700"
                                >
                                    Manage Addresses
                                </a>
                                <a
                                    href="#pan"
                                    className="flex items-center h-12 px-4 hover:bg-gray-50 text-gray-700"
                                >
                                    PAN Card Information
                                </a>
                                <div className="border-t border-gray-200" />
                                <div className="px-4 py-2">
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
                                </a>
                            </nav>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="bg-white rounded-lg shadow-sm">
                        <div className="p-6">
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-medium">Personal Information</h3>
                                    <button className="text-blue-600 hover:text-blue-700">
                                        Edit
                                    </button>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            defaultValue="Anay"
                                            readOnly
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            defaultValue="Tiwari"
                                            readOnly
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Your Gender
                                    </label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center space-x-2">
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="male"
                                                checked={gender === 'male'}
                                                onChange={(e) => setGender(e.target.value)}
                                                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                            />
                                            <span className="text-gray-700">Male</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="female"
                                                checked={gender === 'female'}
                                                onChange={(e) => setGender(e.target.value)}
                                                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                            />
                                            <span className="text-gray-700">Female</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200" />

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            Email Address
                                        </label>
                                        <button className="text-blue-600 hover:text-blue-700">
                                            Edit
                                        </button>
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        defaultValue="holeeday@gmail.com"
                                        readOnly
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                                            Mobile Number
                                        </label>
                                        <button className="text-blue-600 hover:text-blue-700">
                                            Edit
                                        </button>
                                    </div>
                                    <input
                                        type="tel"
                                        id="mobile"
                                        defaultValue="+919214399998"
                                        readOnly
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
