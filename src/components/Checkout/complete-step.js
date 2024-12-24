'use client'
import { cn } from "@/lib/utils";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import { useEffect, useCallback } from "react";
import { CircleCheck } from "lucide-react";

export function Completestep({ currentStep, bookingReference }) {
    // Move handleClick to useCallback to prevent unnecessary recreations
    const handleClick = useCallback(() => {
        const end = Date.now() + 3 * 1000;
        const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

        const frame = () => {
            if (Date.now() > end) return;

            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                startVelocity: 60,
                origin: { x: 0, y: 0.5 },
                colors: colors,
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                startVelocity: 60,
                origin: { x: 1, y: 0.5 },
                colors: colors,
            });

            requestAnimationFrame(frame);
        };

        frame();
    }, []);

    // This will run automatically when the component mounts
    useEffect(() => {
        // Slight delay to ensure DOM is ready
        const timer = setTimeout(() => {
            handleClick();
        }, 100);

        return () => clearTimeout(timer);
    }, []); // Remove currentStep dependency since we know this component only renders at step 3

    return (
        <div className="w-full">
            <div className="w-full items-center h-[50vh] flex flex-col gap-4 justify-center">
                <CircleCheck className=" h-10 w-10 text-green" />
                <h2 className="text-2xl font-semibold">Order Placed Successfully!</h2>
                <p className="text-gray-600">Reference: {bookingReference}</p>
                <span className="flex flex-wrap gap-5">
                    <Button variant="outline" className=" border-[#FF7700] border" >Check Status!</Button>
                    <Button className="bg-[#FF7700]">Continue Shopping</Button>
                </span>
            </div>
        </div>
    );
}