// 'use client';

// import { Summary } from "@/components/Checkout/checkout-summary";
// import { CheckoutTimeline } from "@/components/Checkout/checkout-timeline";
// import { Completestep } from "@/components/Checkout/CompleteStep";
// // import { Completestep } from "@/components/Checkout/CompleteStep";
// import { PaymentStep } from "@/components/Checkout/Payment-step";
// import { PersonalDetailsStep } from "@/components/Checkout/Personal-details-step";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// useRouter()

// const MOCK_BOOKING_DETAILS = {
//     totalProducts: 1,
//     expectedDelivery: "Mon, 4 Feb 2025",
//     discount: 230,
//     deliveryFee: 0,
//     tax: 0,
//     total: 1850.00,
// };

// export default function CheckoutPage() {
//     const [currentStep, setCurrentStep] = useState(1);

//     const handleNext = () => {
//         setCurrentStep((prev) => Math.min(prev + 1, 3));
//     };

//     const handleBack = () => {
//         setCurrentStep((prev) => Math.max(prev - 1, 1));
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 py-8">
//             <div className="container mx-auto px-4">
//                 <div className="mb-8">
//                     <CheckoutTimeline currentStep={currentStep} />
//                 </div>

//                 <div className="grid gap-8 md:grid-cols-3">
//                     <div className="md:col-span-2">
//                         {currentStep === 1 && (
//                             <PersonalDetailsStep onNext={handleNext} />
//                         )}
//                         {currentStep === 2 && (
//                             <PaymentStep onNext={handleNext} onBack={handleBack} />
//                         )}
//                         {/* {currentStep === 3 && (
//                             <Completestep
//                                 bookingReference="BOK-2024-001"
//                                 currentStep={currentStep}  // Add this line
//                             />
//                         )} */}
//                     </div>
//                     <div>
//                         <Summary bookingDetails={MOCK_BOOKING_DETAILS} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
