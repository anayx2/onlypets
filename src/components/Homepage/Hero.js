"use client";

import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { CircleUserRound, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CategoryIcons from "./CategoryIcons";

const Hero = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [visible, setVisible] = useState(false);


    const placeholders = [
        "Dog Food...",
        "Cat Food...",
        "Bird Food...",
        "Fish Food...",
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (inputValue) return; // Skip animation if input value is not empty

        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setPlaceholderIndex((prevIndex) =>
                    prevIndex === placeholders.length - 1 ? 0 : prevIndex + 1
                );
                setIsAnimating(false);
            }, 300); // Duration for the animation
        }, 2000);

        return () => clearInterval(interval);
    }, [inputValue]); // Dependency on inputValue

    return (
        <div
            className={`sticky top-0 z-50 transition-all duration-300 ${scrollPosition > 100 ? "h-[120px]" : "h-auto"
                }`}>
            <div
                className={`relative flex justify-between transition-opacity duration-300 ${scrollPosition > 100 ? "opacity-0 h-0" : "opacity-100"
                    }`}>
                <Image
                    className="absolute left-0 top-[-100px] w-[70%] h-60 opacity-50 z-20"
                    src={"/left.svg"}
                    width={500}
                    height={550}
                    alt="left" />
                <Image
                    className="absolute top-[-50px] right-0 w-[40%] h-50 opacity-50 z-20"
                    src={"/right.svg"}
                    width={100}
                    alt="left"
                    height={200} />
            </div>
            <div className="bg-gradient-to-b from-red-800 to-[#350303] flex flex-col items-center justify-between pt-2">
                <div
                    className={` z-50 flex flex-end items-center justify-between w-full w-[90%] p-2 ${scrollPosition > 100
                        ? "opacity-0 h-0 overflow-hidden"
                        : "opacity-100"
                        }`}
                >
                    <Link href="/" className="flex items-center">
                        <Image
                            src={"/newLogo.png"}
                            width={900}
                            height={900}
                            className="w-40 h-15 z-50"
                            alt="LOGO"
                            style={{
                                opacity: visible ? 1 : 0,
                                transition: "opacity 0.4s ease-in-out",
                            }}
                            onLoad={() => setVisible(true)}
                        />
                    </Link>

                    <Link href="/profile" className="text-white hover:text-white">
                        <CircleUserRound className="w-8 h-8" />

                    </Link>

                </div>

                {/* Search and CategoryIcons - always visible */}
                <div
                    className={`flex flex-col w-full items-center transition-all duration-300 ${scrollPosition > 100 ? "py-2" : "py-0"
                        }`}
                >
                    <div className="flex w-[90%] items-center relative rounded-xl bg-white overflow-hidden">
                        <Input
                            type="search"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder={placeholders[placeholderIndex]}
                            className={`border-white w-full rounded-xl py-6 transition-transform duration-300 ${isAnimating && !inputValue ? "animate-slide-up" : ""
                                }`}
                        />
                        <button className="absolute right-2">
                            <Search className="h-20 w-5" />
                        </button>
                    </div>
                    <CategoryIcons />
                </div>
            </div>
        </div>
    );
};

export default Hero;
