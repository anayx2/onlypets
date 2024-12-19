import Image from 'next/image'
import React from 'react'

const Ad = () => {
    return (
        <>
            <div className='flex justify-center items-center w-full rounded-2xl'>
                <Image
                    src={'/ad1.png'}
                    width={800}
                    height={800}
                    alt="ad"
                    className="w-full h-auto py-10 lg:max-h-[80dvh] lg:max-w-[90%]"
                />
            </div>
            <div className='flex justify-center'>
                <div className='bg-gradient-to-r from-[#111855] to-[#8F1D00] text-bold text-white flex items-center justify-evenly p-5 w-[95%] rounded-3xl'>
                    <Image
                        src={'/lefticonarrow.svg'}
                        width={100}
                        height={100}
                        alt="arrow"
                        className="w-6 h-auto "
                    />
                    <p className="mt-1 text-sm md:text-2xl text-white font-bold text-center px-4">
                        GET UP TO 25% OFF by Using Code :- {' '}
                        <span className="text-yellow-300">DOG25</span>
                    </p>
                    <Image
                        src={'/righticonarrow.svg'}
                        width={100}
                        height={100}
                        alt="arrow"
                        className="w-6 h-auto "
                    />
                </div>
            </div>
        </>)
}

export default Ad