import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <>
            <div className='bg-[#4E0A09] text-white'>
                <div className="overflow-hidden whitespace-nowrap">
                    <div className="flex animate-marquee">
                        {[...Array(14)].map((_, index) => (
                            <span key={index} className="px-[50px]">
                                upto 30% on Pet Food
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex justify-center flex-col text-center relative'>
                <Image
                    src={'/heroimg.png'}
                    alt='hero'
                    width={500}
                    height={500}
                    className='w-auto h-auto lg:h-[90dvh]'
                />
                <div className='flex-col absolute top-5 w-full'>
                    <h3 className='text-[#63128A] font-extrabold text-4xl'>
                        Food for your Pet
                    </h3>
                    <h4>We Provide Best Quality Pet Food</h4>
                    <button className='bg-[#63128A] p-2 rounded-[20px] text-white'>
                        SHOP NOW
                    </button>
                </div>
            </div>
        </>)
}

export default Hero
