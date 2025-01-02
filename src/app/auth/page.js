'use client'

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import Image from "next/image";
import LoginImages, { ProductCarousel } from "@/components/LoginImages";

export default function AuthForm() {
    const [visible, setVisible] = useState(false);
    const [currentStep, setCurrentStep] = useState(1); // Track the current step
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otp, setOtp] = useState("");

    // Handles phone number submission
    const handlePhoneSubmit = (e) => {
        e.preventDefault();
        if (phoneNumber.trim() === "" || phoneNumber.length < 10) {
            alert("Please enter a valid phone number");
            return;
        }
        setCurrentStep(2); // Proceed to the OTP step
    };

    // Handles OTP submission
    const handleOtpSubmit = (e) => {
        e.preventDefault();
        if (otp.trim() === "" || otp.length < 4) {
            alert("Please enter a valid OTP");
            return;
        }
        alert("OTP Verified Successfully!");
    };

    return (<>
        <div className="min-h-screen flex flex-col justify-between  bg-[#FF7700]">
            <div className="bg-[#FF7700]">
                <LoginImages />
            </div>
            <div className=" p-4 flex flex-col items-center justify-between bg-[#FF7700] shadow-lg">
                <div className="w-full max-w-sm space-y-6 border-[2px] rounded-lg p-5 bg-white">
                    <div className="flex flex-col items-center space-y-2">
                        <div className="flex items-center justify-center">
                            <Image
                                width={150}
                                height={150}
                                src={"/logo.png"}
                                alt="Cat"
                                style={{
                                    opacity: visible ? 1 : 0,
                                    transition: "opacity 1s ease-in-out",
                                }}
                                onLoad={() => setVisible(true)}
                            />
                        </div>
                    </div>

                    {/* Step 1: Enter Phone Number */}
                    {currentStep === 1 && (
                        <form onSubmit={handlePhoneSubmit} className="space-y-4">
                            <div className="space-y-2">
                                {/* <h2 className="text-center text-gray-700">
                                Log in or Sign up      </h2> */}
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    required
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    className="h-12"
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full h-12 text-lg font-bold bg-[#FF7700] hover:bg-[#FF7700]"
                            >
                                Send OTP
                            </Button>
                        </form>
                    )}

                    {/* Step 2: Enter OTP */}
                    {currentStep === 2 && (
                        <form onSubmit={handleOtpSubmit} className="space-y-2">
                            <div className="space-y-2 text-center">
                                {/* <h2 className="text-lg font-semibold">We have sent an OTP to your phone number.</h2> */}
                                <p className="text-sm text-gray-600">
                                    We have sent an OTP to your phone number.
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <InputOTP maxLength={4} value={otp} onChange={setOtp}>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={0} />
                                        <InputOTPSlot index={1} />
                                        <InputOTPSlot index={2} />
                                        <InputOTPSlot index={3} />
                                    </InputOTPGroup>
                                </InputOTP>
                            </div>
                            <Button
                                type="submit"
                                className="w-full h-12 text-lg font-bold bg-[#FF7700] hover:bg-[#FF7700]"
                            >
                                Verify OTP
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    </>);
}
