'use client'

import { useState, useEffect } from 'react'
import { CircleChevronLeft } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRouter } from "next/navigation"
import { Card, CardContent } from '@/components/ui/card'
import { Alert, AlertDescription } from "@/components/ui/alert"
import styles from '@/styles/coupon.module.css'

// Sample coupon data with discounts
const coupons = [
    {
        id: '1',
        type: 'restaurant',
        title: 'Flat ₹250 OFF',
        description: 'Save ₹250.00 with this code',
        code: 'FLAT250',
        discount: 250,
        icon: '🏷️'
    },
    {
        id: '2',
        type: 'restaurant',
        title: '₹100 cashback on using UPI',
        description: 'Get up to ₹100.00 cashback with this code',
        code: 'PHONEPERUPAYCC',
        discount: 100,
        icon: '💳'
    },
    {
        id: '3',
        type: 'restaurant',
        title: 'Flat ₹150 OFF',
        description: 'Save ₹150.00 with this code',
        code: 'FLAT150',
        discount: 150,
        icon: '🏷️'
    },
    {
        id: '4',
        type: 'restaurant',
        title: 'Special ₹350 OFF',
        description: 'Save ₹350.00 with this code',
        code: 'FLAT350',
        discount: 350,
        icon: '💰'
    }
]

const validCoupons = ['FLAT250', 'FLAT150', 'FLAT350', 'FLAT550', 'PHONEPERUPAYCC'];

export default function CouponsPage() {
    const [selectedCoupons, setSelectedCoupons] = useState([])
    const [couponCode, setCouponCode] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [modalContent, setModalContent] = useState({ success: false, message: '', discount: 0 })
    const router = useRouter()
    const restaurantCoupons = coupons.filter(coupon => coupon.type === 'restaurant')

    // Validate and apply coupon
    const validateAndApplyCoupon = (code) => {
        const coupon = coupons.find(c => c.code === code);
        if (validCoupons.includes(code)) {
            setModalContent({
                success: true,
                message: `Coupon applied successfully! You got ₹${coupon?.discount || '---'} off`,
                code: code,
                discount: coupon?.discount || 0
            });
        } else {
            setModalContent({
                success: false,
                message: 'Invalid coupon code. Please try again.',
                code: null,
                discount: 0
            });
        }
        setShowModal(true);
    }

    // Handle coupon selection
    const toggleCoupon = (couponId) => {
        const coupon = coupons.find(c => c.id === couponId);
        if (coupon) {
            validateAndApplyCoupon(coupon.code);
        }
    }

    // Handle manual coupon code application
    const applyCouponCode = () => {
        if (couponCode.trim()) {
            validateAndApplyCoupon(couponCode.trim());
        }
    }

    // Handle modal close and navigation
    const closeModal = () => {
        setShowModal(false);
        if (modalContent.success) {
            localStorage.setItem('appliedCoupon', JSON.stringify(modalContent));
            router.push('/cart');
        }
    }

    // Handle back navigation
    const back = () => {
        router.back()
    }

    // Clear selected coupons
    const clearSelection = () => {
        setSelectedCoupons([])
        setCouponCode('')
    }

    // Coupon Card Component
    const CouponCard = ({ coupon }) => (
        <Card className="mb-4 hover:shadow-md transition-shadow">
            <CardContent className="p-4">
                <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
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
                                className={`w-6 h-6 rounded-full border-2 cursor-pointer flex items-center justify-center
                                    ${selectedCoupons.includes(coupon.id)
                                        ? 'bg-blue-600 border-blue-600'
                                        : 'border-gray-300 hover:border-blue-400'}`}
                                onClick={() => toggleCoupon(coupon.id)}
                            >
                                {selectedCoupons.includes(coupon.id) && (
                                    <span className="text-white text-sm">✓</span>
                                )}
                            </div>
                        </div>
                        <div className="mt-2 bg-gray-100 px-3 py-1 rounded inline-block text-sm font-medium">
                            {coupon.code}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )

    // Modal Component
    const AnimatedCheckmark = () => (
        <div className={styles.wrapper}>
            <svg className={styles.checkmark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle className={styles.checkmark__circle} cx="26" cy="26" r="25" fill="none" />
                <path className={styles.checkmark__check} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
        </div>
    );

    const CouponModal = ({ showModal, modalContent, closeModal }) => {
        const [showAnimation, setShowAnimation] = useState(false);

        useEffect(() => {
            if (showModal && modalContent.success) {
                setShowAnimation(true);
            } else {
                setShowAnimation(false);
            }
        }, [showModal, modalContent.success]);

        if (!showModal) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg max-w-sm w-full mx-4">
                    {modalContent.success && showAnimation && <AnimatedCheckmark />}
                    <Alert
                        variant={modalContent.success ? "success" : "destructive"}
                        className="my-4"
                    >
                        <AlertDescription className="text-center py-2">
                            {modalContent.message}
                        </AlertDescription>
                    </Alert>
                    <div className="mt-6 flex justify-end">
                        <Button
                            onClick={closeModal}
                            className="w-full bg-[#FF7700] hover:bg-[#FF7700] hover:shadow-lg"
                        >
                            {modalContent.success ? 'Go to Cart' : 'Try Again'}
                        </Button>
                    </div>
                </div>
            </div>
        );
    };
    return (
        <div className="max-w-md mx-auto p-4 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="flex items-center mb-6 gap-4">
                <div className="bg-gray-200 w-9 h-9 cursor-pointer rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors" >
                    <CircleChevronLeft onClick={back} />
                </div>
                <span className="text-xl font-semibold flex-1">Coupons</span>
            </div>

            <div className="">
                {/* Coupon Code Input */}
                <div className="relative">
                    <Input
                        placeholder="Have a coupon code?"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                        className="pr-20 p-2 bg-white"
                    />
                    <Button
                        variant="outlined"
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-[#FF7700] hover:text-[#FF7700] font-medium"
                        onClick={applyCouponCode}
                        disabled={!couponCode.trim()}
                    >
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
                            className="text-[#FF7700] hover:text-[#FF7700]"
                            onClick={clearSelection}
                        >
                            Clear
                        </Button>
                    </div>
                    {restaurantCoupons.map((coupon) => (
                        <CouponCard key={coupon.id} coupon={coupon} />
                    ))}
                </div>

                {/* Modal */}
                <CouponModal
                    showModal={showModal}
                    modalContent={modalContent}
                    closeModal={closeModal}
                />            </div>
        </div>
    )
}