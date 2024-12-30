'use client'

import { useState } from 'react'
import { ArrowLeft, CircleChevronLeft, Info } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRouter } from "next/navigation";
import { Card, CardContent } from '@/components/ui/card'

// Sample Data
const coupons = [
    {
        id: '1',
        type: 'restaurant',
        title: 'Flat ₹250 OFF',
        description: 'Save ₹250.00 with this code',
        code: 'FLAT250',
        icon: '🏷️'
    },
    {
        id: '2',
        type: 'restaurant',
        title: '₹100 cashback on using UPI',
        description: 'Get up to ₹100.00 cashback with this code',
        code: 'PHONEPERUPAYCC',
        icon: '💳'
    }
]

export default function CouponsPage() {
    const [selectedCoupons, setSelectedCoupons] = useState([])
    const [couponCode, setCouponCode] = useState('')

    const restaurantCoupons = coupons.filter(coupon => coupon.type === 'restaurant')
    const paymentCoupons = coupons.filter(coupon => coupon.type === 'payment')

    const toggleCoupon = (couponId) => {
        setSelectedCoupons(prev =>
            prev.includes(couponId)
                ? prev.filter(id => id !== couponId)
                : [...prev, couponId]
        )
    }
    const router = useRouter();

    const clearSelection = () => {
        setSelectedCoupons([])
    }
    const back = () => {
        router.back()
    }
    const cart = () => {
        router.push('/cart')
    }

    const CouponCard = ({ coupon }) => (
        <Card className="mb-4">
            <CardContent className="p-4">
                <div className="flex items-start gap-4">
                    <div className={`w-8 h-8 ${coupon.type === 'restaurant' ? 'bg-blue-100' : 'bg-purple-100'} rounded flex items-center justify-center`}>
                        {coupon.icon}
                    </div>
                    <div className="flex-1">
                        <div className="flex items-start justify-between">
                            <div>
                                <h3 className="font-semibold text-sm flex items-center gap-2">
                                    {coupon.title}
                                </h3>
                                <p className="text-[#FF7700] text-[12px]">{coupon.description}</p>
                            </div>
                            <div
                                className={`w-6 h-6 rounded-full border-2 cursor-pointer ${selectedCoupons.includes(coupon.id) ? 'bg-blue-600 border-blue-600' : 'border-gray-300'}`}
                                onClick={() => toggleCoupon(coupon.id)}
                            />
                        </div>
                        <div className="mt-2 bg-gray-100 px-3 py-1 rounded inline-block">
                            {coupon.code}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )

    return (
        <div className="max-w-md mx-auto p-4 bg-gray-50 min-h-screen">
            <div className="flex items-center mb-6 gap-4">
                <div className="bg-gray-200 w-9 h-9 cursor-pointer rounded-full flex items-center justify-center" >
                    <CircleChevronLeft onClick={back} />
                </div>
                <span className="text-xl font-semibold flex-1">Coupons</span>
            </div>

            <div className="space-y-6">
                {/* Coupon Code Input */}
                <div className="relative">
                    <Input
                        placeholder="Have a coupon code?"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="pr-20 p-2 bg-white"
                    />
                    <Button
                        variant="outlined"
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-[#FF7700] hover:text-[#FF7700] font-medium"
                   onClick={cart} >
                        APPLY
                    </Button>
                </div>

                {/* Info Banner */}
                <Card className="bg-blue-50 border-none">
                    <CardContent className="p-4 flex items-center gap-4">
                        <div className="flex-1">
                            <p className="text-navy-900">
                                Now apply both restaurant & payment coupons in the same order
                            </p>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-8 h-8 bg-blue-200 rounded flex items-center justify-center">%</div>
                            <div className="w-8 h-8 bg-blue-200 rounded flex items-center justify-center">💳</div>
                        </div>
                    </CardContent>
                </Card>

                {/* Restaurant Coupons */}
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Restaurant coupons</h2>
                        <Button
                            variant="ghost"
                            className="text-[#FF7700]"
                            onClick={clearSelection}
                        >
                            Clear
                        </Button>
                    </div>

                    {restaurantCoupons.map((coupon) => (
                        <CouponCard key={coupon.id} coupon={coupon} />
                    ))}
                </div>

                {/* Payment Coupons */}
                {/* <div>
                    <h2 className="text-lg font-semibold mb-4">Payment coupons</h2>
                    {paymentCoupons.map((coupon) => (
                        <CouponCard key={coupon.id} coupon={coupon} />
                    ))}
                </div> */}

                {/* Selected Coupon */}
                {selectedCoupons.length > 0 && (
                    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
                        <Button className="w-full bg-[#FF7700] hover:bg-[#FF7700] text-white py-6 text-lg" onClick={cart}>
                            Tap to apply
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )
}
