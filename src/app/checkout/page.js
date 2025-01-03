'use client';

import { Summary } from "@/components/Checkout/checkout-summary";
import { CheckoutTimeline } from "@/components/Checkout/checkout-timeline";
import { Completestep } from "@/components/Checkout/CompleteStep";
// import { Completestep } from "@/components/Checkout/CompleteStep";
import { PaymentStep } from "@/components/Checkout/Payment-step";
import { PersonalDetailsStep } from "@/components/Checkout/Personal-details-step";
import { CircleChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";


const MOCK_BOOKING_DETAILS = {
    totalProducts: 1,
    expectedDelivery: "Mon, 4 Feb 2025",
    discount: 230,
    deliveryFee: 0,
    tax: 0,
    total: 1850.00,
};

export default function CheckoutPage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {
        setCurrentStep((prev) => Math.min(prev + 1, 3));
    };

    const handleBack = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };
    const back = () => {
        router.back();
    };
    const sucess = () => {
        router.push('/checkout/success');
    };

    return (
        <div className="min-h-screen bg-gray-50 ">
            <div className="sticky top-0 z-10 bg-white px-4 py-3 flex items-center gap-2 border-b">
                <div className="bg-gray-200 w-9 h-9 cursor-pointer rounded-full flex items-center justify-center">
                    <CircleChevronLeft onClick={back} />
                </div>
                <h2 className="text-lg font-semibold mb-0">Checkout</h2>
            </div>
            <div className="container mx-auto px-2">

                <div className="mb-8">
                    <CheckoutTimeline currentStep={currentStep} />
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    <div className="md:col-span-2">
                        {currentStep === 1 && (
                            <PersonalDetailsStep onNext={handleNext} />
                        )}
                        {currentStep === 2 && (
                            <PaymentStep onNext={handleNext} onBack={handleBack} />
                            // <PaymentStep onNext={sucess} onBack={handleBack} />
                        )}
                        {currentStep === 3 && (
                                <Completestep
                                    bookingReference="BOK-2024-001"
                                    currentStep={currentStep}  // Add this line
                                />
                            )}
                    </div>
                    {/* <div>
                        <Summary bookingDetails={MOCK_BOOKING_DETAILS} />
                    </div> */}
                </div>
            </div>
        </div>
    );
}
