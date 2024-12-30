"use client";

import Image from "next/image";
import { BadgePercent, ChevronDown, CircleChevronLeft, Heart, Minus, MoveLeft, MoveLeftIcon, Plus, Star, Tag, X } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import BestSeller from "@/components/Homepage/BestSeller";
// import Link from "next/link";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";



const product = {
    id: 6,
    name: "Pedigree Meat Jerky Barbecued Chicken Adult Dog Meaty Treat",
    category: "Dogs/Cats",
    weight: "80 gm",
    images: [
        "/topproducts/p6.jpg",
        "/topproducts/p5.jpg",
        "/topproducts/p4.jpg",
        "/topproducts/p6.jpg",
    ],
    rating: 4,
    originalPrice: 170.0,
    salePrice: 140.0,
    discount: 15,
    brand: "Pedigree",
    description:
        "Treat your furry friends with the delicious and nutritious Pedigree Meat Jerky. Made with high-quality ingredients, this meaty treat offers a delightful experience for adult dogs. Perfect for training, rewarding, or simply treating your pet.",
    reviews: [
        {
            user: "John Doe",
            rating: 5,
            comment: "My dog loves it! Great quality and affordable price.",
        },
        {
            user: "Jane Smith",
            rating: 4,
            comment: "Good treat for my dog, but I wish it came in a larger pack.",
        },
    ],
};

const offers = [
    {
        price: "1,259",
        discount: "10%",
        condition: "on your first app purchase",
        code: "APP10",
        minimumPurchase: null
    },
    {
        price: "1,119",
        discount: "20%",
        condition: "on minimum purchase of 4599/-",
        code: "FLAT20",
        minimumPurchase: 4599
    },
    {
        price: "1,189",
        discount: "15%",
        condition: "on minimum purchase of 2999/-",
        code: "FLAT15",
        minimumPurchase: 2999
    },
    {
        price: "1,259",
        discount: "10%",
        condition: "on minimum purchase of 1999/-",
        code: "FLAT10",
        minimumPurchase: 1999
    }
];
const variants = [
    {
        name: '2 x 750 ml',
        price: 79,
        originalPrice: '200',
        value: 'pack2',
        discount: '10% off'
    },
    {
        name: '750 ml',
        price: 40,
        originalPrice: '200',
        value: 'single',
        discount: '12% off'
    },
    // Add more variants as needed
];

const keyFeatures = [
    "Treat your furry friends with the delicious and nutritious Pedigree Meat Jerky. Made with high-quality ingredients, this meaty treat offers a delightful experience for adult dogs. Perfect for training, rewarding, or simply treating your pet.",

]

const productDetails = [
    {
        label: "Type",
        value: "Full Cream Milk"
    },
    {
        label: "FSSAI License",
        value: "10012013000275"
    },
    {
        label: "Shelf Life",
        value: "2 days"
    },
    {
        label: "Return Policy",
        value: [
            "The product is non-returnable. For a damaged, defective, expired or incorrect item, you can request a replacement within 24 hours of delivery.",
            "In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/ unopened/ unused and in original condition."
        ]
    },
    {
        label: "Packaging Type",
        value: "Pack"
    },
    {
        label: "Manufacturer Details",
        value: "Jaipur Zila Dugdh Utpadak Sahakari Sangh Ltd., Jaipur - 15"
    },
    {
        label: "Country of Origin",
        value: "India"
    }
]
function Benefit({ title, description, icon }) {
    return (
        <div className="flex gap-3 items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-green-50 rounded-full">
                {/* Placeholder for benefit icon */}

                <img src={icon}
                    alt="cat"
                    className="w-10 h-10"
                />            </div>
            <div>
                <h3 className="font-medium text-[1.2em] text-gray-900">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
        </div>
    )
}

export default function ProductPage() {
    const [selectedSize, setSelectedSize] = useState(80);
    const [selectedImage, setSelectedImage] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [selectedValue, setSelectedValue] = useState("pack2");
    const [showQuantityControls, setShowQuantityControls] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0);
    const [startX, setStartX] = useState(0); // Track touch start position
    const [isSwiping, setIsSwiping] = useState(false); // Avoid click actions during swipe
    const sliderRef = useRef();



    const router = useRouter();

    const handleRedirect = () => {
        router.push("/checkout"); // Redirect to /checkout
    };
    const handleSelect = (value) => {
        setSelectedValue(value);
    };
    const increment = () => setQuantity((prev) => prev + 1);
    const decrement = () => {
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
        if (newQuantity === 0) {
            setShowQuantityControls(false);
        }
    };

    // Add a new function to handle Add to Cart click
    const handleAddToCart = () => {
        setShowQuantityControls(true);
        setQuantity(1);
    };
    const handleNext = () => {
        setCurrentSlide((prev) =>
            prev === product.images.length - 1 ? 0 : prev + 1
        );
    };

    const handlePrevious = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? product.images.length - 1 : prev - 1
        );
    };

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    // Swipe Handlers
    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX); // Track the starting touch position
        setIsSwiping(false); // Reset swiping state
    };

    const handleTouchMove = (e) => {
        const touchX = e.touches[0].clientX;
        const diff = startX - touchX;

        if (Math.abs(diff) > 30) {
            // Minimum swipe threshold
            setIsSwiping(true);
        }
    };

    const handleTouchEnd = (e) => {
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;

        if (Math.abs(diff) > 50) {
            // Only slide if swipe distance exceeds threshold
            if (diff > 0) {
                handleNext(); // Swipe left -> next slide
            } else {
                handlePrevious(); // Swipe right -> previous slide
            }
        }
    };
    const back = () => {
        router.back()
    }

    return (
        <>
            <div className="bg-gray-200 w-9 h-9 mx-4 mt-4 cursor-pointer rounded-full flex items-center justify-center" >
                <CircleChevronLeft onClick={back} />
            </div>
            <div className="container max-w-7xl mx-auto px-4 pt-2 pb-5">
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-4 rounded-lg p-1 shadow-md">
                        <div className="overflow-hidden">
                            <div className="relative w-full max-w-lg mx-auto pb-2">
                                {/* Slider Wrapper */}
                                <div
                                    className="relative overflow-hidden"
                                    ref={sliderRef}
                                    onTouchStart={handleTouchStart}
                                    onTouchMove={handleTouchMove}
                                    onTouchEnd={handleTouchEnd}
                                >
                                    <div
                                        className="flex transition-transform duration-500"
                                        style={{
                                            transform: `translateX(-${currentSlide * 100}%)`,
                                        }}
                                    >
                                        {product.images.map((image, index) => (
                                            <div
                                                key={index}
                                                className="min-w-full flex-shrink-0 relative aspect-square"
                                            >
                                                <Image
                                                    src={image}
                                                    alt={`${product.name} - View ${index + 1}`}
                                                    className="object-cover w-full h-full"
                                                    width={500}
                                                    height={500}
                                                    priority={index === 0}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Dot Navigation */}
                                <div className="flex justify-center mt-4 space-x-2">
                                    {product.images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => !isSwiping && handleDotClick(index)}
                                            className={`w-2 h-2 rounded-full transition-all ${currentSlide === index ? "bg-black w-4" : "bg-gray-300"
                                                }`}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Fullscreen Modal */}
                    {isFullscreen && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-90 z-30 flex items-center justify-center"
                            style={{ pointerEvents: 'auto' }}
                        >
                            <button
                                onClick={() => setIsFullscreen(false)}
                                className="absolute top-4 right-4 text-white hover:text-gray-300 z-[100]"
                            >
                                <X className="h-8 w-8" />
                            </button>
                            <div className="relative h-[90vh] w-[90vw]">
                                <Image
                                    src={images[selectedImage]}
                                    alt={productName}
                                    className="object-contain"
                                    fill
                                    priority
                                />
                            </div>
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                                <div className="flex gap-2 bg-[#552C7B] p-5 rounded-lg">
                                    {images.map((image, index) => (
                                        <button
                                            key={index}
                                            className={`relative w-16 h-16 overflow-hidden rounded-md ${selectedImage === index ? 'ring-2 ring-white' : ''
                                                }`}
                                            onClick={() => setSelectedImage(index)}
                                        >
                                            <Image
                                                src={image}
                                                alt={`${productName} thumbnail ${index + 1}`}
                                                className="object-cover"
                                                fill
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                    {/* <div className="space-y-4 rounded-lg md:border-gray-300 md:border-[1px] lg:border-gray-300 lg:border-[1px] p-1 shadow-lg "
                        style={{ height: "" }}>
                        <div
                            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                            onClick={() => setIsFullscreen(true)}                        >


                            <Image
                                src={product.images[selectedImage]}
                                alt={product.name}
                                height={200}
                                width={500}
                                className="h-50 w-full"
                            // fill
                            // priority
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-3 border-gray-400 border-[1px] p-2 rounded-lg">
                            {product.images.map((image, index) => (
                                <button
                                    key={index}
                                    className={`relative aspect-square overflow-hidden rounded-md ${selectedImage === index ? 'ring-2 ring-black' : ''
                                        }`}
                                    onClick={() => setSelectedImage(index)}
                                >
                                    <Image
                                        src={image}
                                        alt={`Product ${index + 1}`}
                                        className="object-cover "
                                        fill
                                    />
                                </button>
                            ))}
                        </div>
                    </div> */}

                    <div className="max-w-2xl lg:p-4 space-y-6 ">
                        <div className="space-y-2 ">
                            <div className="flex items-center gap-2">
                                <span className="inline-flex items-center rounded-full bg-gray-200 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                                    {product.category}
                                </span>
                            </div>
                            <h1 className="text-xl font-semibold text-gray-900">
                                {product.name}
                            </h1>
                        </div>

                        <div className="space-y-4">
                            <ScrollArea className="w-full whitespace-nowrap ">
                                {/* <div className=""> */}
                                <h2 className="text-sm font-medium text-black mb-2">Select Unit</h2>
                                <div className="flex gap-4 overflow-x-auto">
                                    {variants.map((variant) => (
                                        <div
                                            key={variant.value}
                                            className={`w-[140px] relative flex flex-col p-2 border rounded-lg cursor-pointer m-1 transition-all ${selectedValue === variant.value
                                                ? 'border-[#FF7700] m-1 shadow-lg ring-1 ring-[#FF7700]'
                                                : ''
                                                }`}
                                            onClick={() => handleSelect(variant.value)}
                                        >
                                            {/* Discount Badge */}
                                            <div className="flex items-center justify-center rounded-lg bg-[#FF7700] text-white text-xs font-semibold py-1 px-2 absolute top-[-10px] left-1/2 transform -translate-x-1/2 pt-2">
                                                {variant.discount}
                                            </div>
                                            {/* <div
                                                className="absolute top-0 -translate-y-[5px] left-1/2 transform -translate-x-1/2"
                                                data-pf="reset"
                                            >
                                                <svg
                                                    width="80"
                                                    height="17"
                                                    viewBox="0 0 56 17"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clipPath="url(#clip0_2_44)">
                                                        <path
                                                            d="M4.5 0.5H51.5V12.5C51.5 14.7091 49.7091 16.5 47.5 16.5H8.5C6.29086 16.5 4.5 14.7091 4.5 12.5V0.5Z"
                                                            fill="url(#paint0_linear_2_44)"
                                                        ></path>
                                                    </g>
                                                    <path d="M0 4.5L4.5 0.5V4.5H0Z" fill="#336CCE"></path>
                                                    <path d="M56 4.5L51.5 0.5V4.5H56Z" fill="#336CCE"></path>
                                                    <defs>
                                                        <linearGradient
                                                            id="paint0_linear_2_44"
                                                            x1="24.7149"
                                                            y1="0.483896"
                                                            x2="24.7149"
                                                            y2="15.07"
                                                            gradientUnits="userSpaceOnUse"
                                                        >
                                                            <stop stopColor="#4F86E4"></stop>
                                                            <stop offset="0.182292" stopColor="#90B6F9"></stop>
                                                            <stop offset="0.295972" stopColor="#548DEF"></stop>
                                                            <stop offset="1" stopColor="#538CEE"></stop>
                                                        </linearGradient>
                                                        <clipPath id="clip0_2_44">
                                                            <rect
                                                                width="80"
                                                                height="16"
                                                                fill="white"
                                                                transform="translate(4.5 0.5)"
                                                            ></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <span className="absolute top-[1px] left-[22px] text-white text-[10px] font-semibold">
                                                    {variant.discount}
                                                </span>
                                            </div> */}

                                            {/* Product Information */}
                                            <div className="flex flex-col items-center text-center mt-4">
                                                <span className="font-medium">{variant.name}</span>
                                                <span className="text-sm text-black">
                                                    ₹{variant.price}
                                                    {variant.originalPrice && (
                                                        <span className="line-through ml-2 text-gray-500">
                                                            ₹{variant.originalPrice}
                                                        </span>
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                                {/* </div> */}
                            </ScrollArea>
                            <div className="flex justify-between">
                                <div className="flex flex-col ">
                                    <span className="text-3xl w-full text-center font-bold">
                                        ₹{variants.find(v => v.value === selectedValue)?.price || 0}
                                    </span>
                                    {variants.find(v => v.value === selectedValue)?.originalPrice && (
                                        <span className="text-sm text-gray-500 text-center">
                                            MRP ₹
                                            <span className="text-sm text-gray-500 line-through">
                                                {variants.find(v => v.value === selectedValue)?.originalPrice}
                                            </span>
                                        </span>
                                    )}
                                    <span className="text-[10px] text-center text-gray-500">(Inclusive of all taxes)</span>
                                </div>
                                <div className="flex justify-center flex-col text-center gap-2 " >
                                    {showQuantityControls ? (
                                        <div className="flex items-center justify-start gap-2 bg-[#FF7700] text-white p-3 rounded-lg ">
                                            <Button
                                                size="icon"
                                                className="h-6 w-6 bg-[#FF7700] shadow-none hover:bg-[#FF7700] "
                                                onClick={decrement}
                                                aria-label="Decrease quantity"
                                            >
                                                <Minus className="h-4 w-4 text-white" />
                                                <span className="sr-only">Decrease quantity</span>
                                            </Button>
                                            <span className="w-8 text-center">{quantity}</span>
                                            <Button
                                                size="icon"
                                                className="h-6 w-6 bg-[#FF7700] hover:bg-[#FF7700] shadow-none"
                                                onClick={increment}
                                                aria-label="Increase quantity"
                                            >
                                                <Plus className="h-4 w-4 text-white" />
                                                <span className="sr-only">Increase quantity</span>
                                            </Button>
                                        </div>
                                    ) : (
                                        <Button
                                            className="w-[120px] p-2 py-6 bg-[#FF7700] hover:bg-[#FF7700]"
                                            onClick={handleAddToCart}
                                        >
                                            ADD TO CART
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* <div className="">
                            <Accordion type="single" collapsible className="space-y-2">

                            </Accordion>
                        </div> */}

                        <div className="space-y-4">
                            <h2 className="text-xl text-black font-semibold">Product Details</h2>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    {/* <h3 className="font-medium text-gray-700 text-[16px] ">Description</h3> */}
                                    <ul className="space-y-1 text-gray-600 text-sm">
                                        {keyFeatures.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className={`space-y-2 ${!isExpanded && "hidden"}`}>
                                    {productDetails.map((detail, index) => (
                                        <div key={index} className="space-y-1">
                                            <span className="font-medium  text-gray-700 text-[16px]">{detail.label}</span>
                                            {Array.isArray(detail.value) ? (
                                                <ul className=" text-gray-600">
                                                    {detail.value.map((item, idx) => (
                                                        <li key={idx}>{item}</li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="text-gray-600">{detail.value}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {!isExpanded && (
                                    <Button
                                        variant="ghost"
                                        className="flex items-center gap-2 text-[#FF7700] hover:text-[#FF7700] p-0 h-auto"
                                        onClick={() => setIsExpanded(true)}
                                    >
                                        View more details
                                        <ChevronDown className="h-4 w-4" />
                                    </Button>
                                )}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Accordion type="single" defaultValue="description" collapsible className="w-full">
                                <AccordionItem value="offers">
                                    <AccordionTrigger className='text-sm font-semibold text-black'>
                                        VIEW OFFERS
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="space-y-4">
                                            {offers.map((offer, index) => (
                                                <div key={index} className="flex items-center gap-4">
                                                    <div className="mt-1 flex items-center">
                                                        <BadgePercent className="text-yellow-500" />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <p className="mb-0">
                                                            Get this for INR {offer.price}
                                                        </p>
                                                        <p className="mb-0">
                                                            Flat <span className="text-red-500">{offer.discount} Off</span> {offer.condition}
                                                        </p>
                                                        <p className="mb-0">
                                                            Code: <span className="font-semibold">{offer.code}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                {/* <AccordionItem value="description">
                                    <AccordionTrigger className='text-sm font-semibold text-black'>DESCRIPTION</AccordionTrigger>
                                    <AccordionContent>
                                        <p>{product.description}</p>
                                        <div className="mt-4">
                                            <h3 className="font-semibold">Size & Weight</h3>
                                            <ul className="mt-2 space-y-1">
                                                <li>Weight - {product.weight}</li>
                                                <li>Brand - {product.brand}</li>
                                            </ul>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem> */}

                                <AccordionItem value="reviews">
                                    <AccordionTrigger className='text-sm font-semibold text-black'>REVIEWS</AccordionTrigger>
                                    <AccordionContent>
                                        {product.reviews.map((review, index) => (
                                            <div key={index} className="mb-4">
                                                <div className="flex items-center justify-between">
                                                    <h4 className="font-semibold text-[1.2em]">{review.user}</h4>
                                                    <span className="flex items-center text-yellow-500">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star
                                                                key={i}
                                                                fill={i < review.rating ? "#FFD700" : "none"}
                                                            />
                                                        ))}
                                                    </span>
                                                </div>
                                                <p className="text-gray-600 text-sm mt-1">{review.comment}</p>
                                            </div>
                                        ))}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        {/* <div className="space-y-6 pt-6 ">
                            <div className="space-y-6 pt-6">
                                <h2 className="font-medium text-[1.6em] text-gray-900">Why shop from us?</h2>
                                <div className="space-y-4">
                                    <Benefit
                                        icon={'/cat_profile.gif'}
                                        title="Superfast Delivery"
                                        description="Get your order delivered to your doorstep at the earliest from dark stores near you"
                                    />
                                    <Benefit
                                        icon={'/best-offer.gif'}
                                        title="Best Prices & Offers"
                                        description="Best price destination with offers directly from the manufacturers"
                                    />
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            {isFullscreen && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-30 flex items-center justify-center"
                    style={{ pointerEvents: 'auto' }} // Ensure the modal overlay receives touch events on mobile
                >
                    <button
                        onClick={() => setIsFullscreen(false)}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 z-[100]"
                    >
                        <X className="h-8 w-8" />
                    </button>
                    <div className="relative h-[90vh] w-[90vw]">
                        <Image
                            src={product.images[selectedImage]}
                            alt={product.name}
                            className="object-contain"
                            fill
                            priority
                        />
                    </div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                        <div className="flex gap-2 bg-[#552C7B] p-5 rounded-lg">
                            {product.images.map((image, index) => (
                                <button
                                    key={index}
                                    className={`relative w-16 h-16 overflow-hidden rounded-md ${selectedImage === index ? 'ring-2 ring-white' : ''
                                        }`}
                                    onClick={() => setSelectedImage(index)}
                                >
                                    <Image
                                        src={image}
                                        alt={`Product ${index + 1}`}
                                        className="object-cover"
                                        fill
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            <div className="flex flex-col justify-center py-10">
                <span className="text-2xl text-center font-bold mb-2">Similar Products</span>
                <BestSeller />
            </div>

            <div className="flex flex-col justify-center pb-10">
                <span className="text-2xl text-center font-bold mb-2">People also bought</span>
                <BestSeller />
            </div>
            <div className="flex flex-col justify-center pb-20">
                <span className="text-2xl text-center font-bold mb-2">Top Products</span>
                <BestSeller />
            </div>
        </>
    );
}
