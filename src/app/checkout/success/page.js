"use client"

import { Check, Download, MapPin, Phone, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const orderStages = [
    { id: 1, title: "ORDER\nCONFIRMED", completed: true },
    { id: 2, title: "START\nPRODUCTION", completed: false },
    { id: 3, title: "QUALITY\nCHECK", completed: false },
    { id: 4, title: "DISPATCHED\nITEM", completed: false },
    { id: 5, title: "PRODUCT\nDELIVERED", completed: false },
]

const orderDetails = {
    orderNumber: "2059666",
    date: "January 13, 2021",
    expectedDelivery: "16 January 2021",
    delivery: {
        address: "Vvip Addresses, Raj Nagar Extension Road\nRaj Nagar Extension Ghaziabad\nlandon 201001 India",
    },
    billing: {
        address: "Vvip Addresses, Raj Nagar Extension Road\nRaj Nagar Extension Ghaziabad\nlandon 201001 India",
    },
    contact: {
        email: "email@company.com",
        phone1: "+91-987 000 0000",
        phone2: "+91-987 000 000",
    },
    summary: {
        subTotal: "£15.00",
        delivery: "£16.00",
        total: "£31.00",
    },
}

export default function OrderConfirmation() {
    return (
        <div className="min-h-screen bg-[#2ECC71] p-4 md:p-8">
            <div className="mx-auto max-w-5xl">
                {/* Header Section */}
                <div className="mb-8 text-center text-white">
                    <div className="mb-6 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 animate-spin-slow">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {[...Array(12)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="absolute h-2 w-2"
                                            style={{
                                                transform: `rotate(${i * 30}deg) translateY(-40px)`,
                                            }}
                                        >
                                            <div className="h-2 w-2 rounded-full bg-white/30" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white">
                                <Check className="h-8 w-8 text-[#2ECC71]" />
                            </div>
                        </div>
                    </div>
                    <h1 className="mb-2 text-2xl font-bold">THANK YOU</h1>
                    <h2 className="mb-4 text-3xl font-bold">YOUR ORDER IS CONFIRMED</h2>
                    <p className="text-sm opacity-90">
                        We will be sending you an email confirmation to example@contrado.com shortly
                    </p>
                </div>

                {/* Order Progress Card */}
                <Card className="mb-8">
                    <CardContent className="p-6">
                        <p className="mb-6 text-sm text-muted-foreground">
                            Order #{orderDetails.orderNumber} was placed on {orderDetails.date} and is currently in progress
                        </p>

                        {/* Progress Tracker */}
                        <div className="relative mb-6">
                            <div className="absolute left-0 right-0 top-[22px] h-[2px] bg-gray-200" />
                            <div className="relative flex justify-between">
                                {orderStages.map((stage, index) => (
                                    <div key={stage.id} className="flex flex-col items-center">
                                        <div
                                            className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 ${stage.completed
                                                    ? "border-[#2ECC71] bg-[#2ECC71] text-white"
                                                    : "border-gray-200 bg-white"
                                                }`}
                                        >
                                            {stage.completed && <Check className="h-5 w-5" />}
                                        </div>
                                        <p className="mt-2 whitespace-pre-line text-center text-xs font-medium">
                                            {stage.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-sm">
                                Expected Delivery Date: <span className="font-medium">{orderDetails.expectedDelivery}</span>
                            </p>
                            <Button variant="link" className="text-blue-600">
                                Track Your Order
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Order Details */}
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div className="flex items-center gap-2">
                            <h3 className="text-lg font-semibold">ORDER DETAIL</h3>
                            <span className="text-muted-foreground">#{orderDetails.orderNumber}</span>
                        </div>
                        <Button variant="outline" className="gap-2">
                            <Download className="h-4 w-4" /> Download Invoice
                        </Button>
                    </CardHeader>
                    <CardContent className="grid gap-6 md:grid-cols-2">
                        {/* Left Column */}
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-5 w-5" />
                                    <h4 className="font-semibold">DELIVERY ADDRESS</h4>
                                    <Button variant="link" className="ml-auto text-blue-600">
                                        Change Details
                                    </Button>
                                </div>
                                <p className="whitespace-pre-line text-sm text-muted-foreground">
                                    {orderDetails.delivery.address}
                                </p>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-5 w-5" />
                                    <h4 className="font-semibold">BILLING ADDRESS</h4>
                                </div>
                                <p className="whitespace-pre-line text-sm text-muted-foreground">
                                    {orderDetails.billing.address}
                                </p>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Phone className="h-5 w-5" />
                                    <h4 className="font-semibold">CONTACT DETAILS</h4>
                                </div>
                                <div className="space-y-1 text-sm text-muted-foreground">
                                    <p>{orderDetails.contact.email}</p>
                                    <p>{orderDetails.contact.phone1}</p>
                                    <p>{orderDetails.contact.phone2}</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div>
                            <Button variant="ghost" className="w-full justify-between">
                                <div className="flex items-center gap-2">
                                    <h4 className="font-semibold">ORDER SUMMARY (3)</h4>
                                </div>
                                <ChevronRight className="h-5 w-5" />
                            </Button>
                            <div className="mt-4 space-y-4">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Sub Total</span>
                                    <span>{orderDetails.summary.subTotal}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Delivery</span>
                                    <span>{orderDetails.summary.delivery}</span>
                                </div>
                                <div className="flex justify-between border-t pt-4">
                                    <span className="font-semibold">Total</span>
                                    <span className="font-semibold">{orderDetails.summary.total}</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

