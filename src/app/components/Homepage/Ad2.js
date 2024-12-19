import Image from 'next/image'
import React from 'react'

const Ad2 = () => {
    return (
        <>
            <div className='flex justify-center items-center w-full rounded-2xl'>
                <Image
                    src={'/banner2.png'}
                    width={800}
                    height={800}
                    alt="ad"
                    className="w-full h-auto py-10 lg:max-h-[80dvh] lg:max-w-[90%]"
                />
            </div>

        </>)
}

export default Ad2