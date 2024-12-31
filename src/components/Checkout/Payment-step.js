'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function PaymentStep({ onNext, onBack }) {
    const [paymentMode, setPaymentMode] = useState("upi")

    const renderPaymentDetails = () => {
        switch (paymentMode) {
            case "upi":
                return (
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="upiId">UPI ID</Label>
                            <Input id="upiId" placeholder="yourname@upi" className='focus:ring-0 focus:outline-none' />
                        </div>
                    </div>
                )
            case "bank":
                return (
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="accountNumber">Account Number</Label>
                            <Input id="accountNumber" placeholder="Enter your account number" className='focus:ring-0 focus:outline-none' />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="ifscCode">IFSC Code</Label>
                            <Input id="ifscCode" placeholder="Enter IFSC code" className='focus:ring-0 focus:outline-none' />
                        </div>
                    </div>
                )
            case "card":
                return (
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="cardNumber">Card Number</Label>
                                <Input id="cardNumber" placeholder="1234 5678 9012 3456" className='focus:ring-0 focus:outline-none' />
                            </div>

                            <div className="grid gap-4 md:grid-cols-3">
                                <div className="space-y-2">
                                    <Label>Expiry Month</Label>
                                    <Select>
                                        <SelectTrigger className='focus:ring-0 focus:outline-none'>
                                            <SelectValue placeholder="Month" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Array.from({ length: 12 }, (_, i) => (
                                                <SelectItem key={i + 1} value={String(i + 1).padStart(2, "0")}>
                                                    {String(i + 1).padStart(2, "0")}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label>Expiry Year</Label>
                                    <Select>
                                        <SelectTrigger className='focus:ring-0 focus:outline-none'>
                                            <SelectValue placeholder="Year" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Array.from({ length: 10 }, (_, i) => (
                                                <SelectItem key={i} value={String(new Date().getFullYear() + i)}>
                                                    {new Date().getFullYear() + i}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="cvv">CVV</Label>
                                    <Input id="cvv" placeholder="123" maxLength={4} className='focus:ring-0 focus:outline-none' />
                                </div>
                            </div>
                        </div>

                        <Alert>
                            <AlertCircle className="h-4 w-4" />
                            <AlertDescription>
                                Your payment information is encrypted and secure. We never store your full card details.
                            </AlertDescription>
                        </Alert>
                    </div>
                )
            case "cod":
                return (
                    <div className="space-y-4">
                        <Alert>
                            <AlertCircle className="h-4 w-4" />
                            <AlertDescription>
                                Cash on Delivery is available for this order. You'll pay when your item is delivered.
                            </AlertDescription>
                        </Alert>
                    </div>
                )
            default:
                return null
        }
    }

    return (
        <Card className="w-full border border-[#FF7700]">
            <CardHeader>
                <CardTitle>Payment Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <input
                            type="radio"
                            id="upi"
                            name="paymentMode"
                            value="upi"
                            className="w-4 h-4 border border-gray-400 rounded-full checked:bg-[#FF7700]  appearance-none"
                            checked={paymentMode === "upi"}
                            onChange={() => setPaymentMode("upi")}
                        />
                        <Label htmlFor="upi">UPI</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input
                            type="radio"
                            id="bank"
                            name="paymentMode"
                            value="bank"
                            className="w-4 h-4 border border-gray-400 rounded-full checked:bg-[#FF7700] appearance-none"
                            checked={paymentMode === "bank"}
                            onChange={() => setPaymentMode("bank")}
                        />
                        <Label htmlFor="bank">Bank Transfer</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input
                            type="radio"
                            id="card"
                            name="paymentMode"
                            value="card"
                            className="w-4 h-4 border border-gray-400 rounded-full checked:bg-[#FF7700] appearance-none"
                            checked={paymentMode === "card"}
                            onChange={() => setPaymentMode("card")}
                        />
                        <Label htmlFor="card">Credit/Debit Card</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input
                            type="radio"
                            id="cod"
                            name="paymentMode"
                            value="cod"
                            className="w-4 h-4 border border-gray-400 rounded-full checked:bg-[#FF7700] appearance-none"
                            checked={paymentMode === "cod"}
                            onChange={() => setPaymentMode("cod")}
                        />
                        <Label htmlFor="cod">Cash on Delivery</Label>
                    </div>

                </div>

                <Accordion type="single" collapsible className="w-full" value={paymentMode}>
                    <AccordionItem value={paymentMode}>
                        <AccordionTrigger>
                            {paymentMode === "upi" && "UPI Payment"}
                            {paymentMode === "bank" && "Bank Transfer"}
                            {paymentMode === "card" && "Credit/Debit Card"}
                            {paymentMode === "cod" && "Cash on Delivery"}
                        </AccordionTrigger>
                        <AccordionContent>
                            {renderPaymentDetails()}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <div className="flex justify-between">
                    <Button variant="outline" onClick={onBack}>
                        Back
                    </Button>
                    <Button className="bg-[#FF7700] hover:bg-[#FF7700]" onClick={onNext}>
                        Complete Payment
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
