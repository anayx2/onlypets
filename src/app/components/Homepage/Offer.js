import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import styles from '@/styles/offer.module.css'
const couponsData = [
    {
        brand: "Farmina",
        discount: "Upto 50% OFF",
        code: "COUPON50",
        description: "Applicable in dog & Cat Food"
    },
    {
        brand: "Royal Canin",
        discount: "Upto 40% OFF",
        code: "ROYAL40",
        description: "Valid on all products"
    },
    {
        brand: "Pedigree",
        discount: "Upto 30% OFF",
        code: "PED30",
        description: "On dry dog food"
    },
    {
        brand: "Whiskas",
        discount: "Upto 45% OFF",
        code: "WHISK45",
        description: "On cat food items"
    },
   
];

const CouponCarousel = () => {
    return (
        <div className="w-full">
            {/* Mobile and Tablet: Carousel */}
            <div className="block md:hidden">
                <Carousel className="w-full">
                    <CarouselContent>
                        {couponsData.map((coupon, index) => (
                            <CarouselItem key={index}>
                                <CouponCard {...coupon} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

            {/* Desktop: Grid Layout */}
            <div className="hidden md:grid md:grid-cols-4 gap-4">
                {couponsData.map((coupon, index) => (
                    <CouponCard key={index} {...coupon} />
                ))}
            </div>
        </div>
    );
};

// Your existing card component with props
const CouponCard = ({ brand, discount, code, description }) => {
    return (
        <div className="my-5">
            <div className={styles.coupon}>
                <div className={styles.left}>
                    <div>{brand}</div>
                </div>
                <div className={styles.center}>
                    <div className="flex flex-col items-center ml-[-10px]">
                        <h2>{discount}</h2>
                        <span className={styles.couponSpan}>
                            <h3>{code}</h3>
                        </span>
                        <small className="mt-1">{description}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CouponCarousel;