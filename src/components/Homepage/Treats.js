'use client'

import { useState } from 'react'
import Image from 'next/image'

const products = [
    {
        id: 1,
        name: "Sara's Treats",
        image: "/treat/Anchovies.webp",
        discount: 15,
        category: "dog"
    },
    {
        id: 2,
        name: "Gnawlers",
        image: "/treat/DSC_1496.webp",
        discount: 25,
        category: "dog"
    },
    {
        id: 3,
        name: "Happi Doggy",
        image: "/treat/ChickenjerkywithApplesauce.webp",
        discount: 18,
        category: "dog"
    },
    {
        id: 4,
        name: "Dogaholic",
        image: "/treat/Anchovies.webp",
        discount: 20,
        category: "dog"
    },
    {
        id: 5,
        name: "YIMT Biscuits",
        image: "/treat/DSC_1496.webp",
        discount: 15,
        category: "cat"
    },
    {
        id: 6,
        name: "Sara's Treats",
        image: "/treat/ChickenjerkywithApplesauce.webp",
        discount: 15,
        category: "cat"
    }
]

const Treats = () => {
    const [selectedCategory, setSelectedCategory] = useState('dog')

    const filteredProducts = products.filter(
        product => product.category === selectedCategory
    )

    const handleToggle = (category) => {
        setSelectedCategory(category)
    }

    return (
        <>
            <div className="container mx-auto px-4 py-5">
                <div className="text-center mb-8">
                    <h2 className=" font-bold ">
                        Treats Bar
                    </h2>
                    <p className="text-gray-600">
                        You cannot go wrong with these!
                    </p>
                </div>

                {/* Category Toggle */}
                <div className="flex justify-center mb-8">
                    <div className="bg-gray-200 rounded-full p-1 flex">
                        <button
                            className={`px-6 py-2 rounded-full transition-colors ${selectedCategory === 'dog' ? 'bg-orange-500 text-white' : 'hover:bg-gray-300'}`}
                            onClick={() => handleToggle('dog')}
                        >
                            Dog
                        </button>
                        <button
                            className={`px-6 py-2 rounded-full transition-colors ${selectedCategory === 'cat' ? 'bg-blue-800 text-white' : 'hover:bg-gray-300'}`}
                            onClick={() => handleToggle('cat')}
                        >
                            Cat
                        </button>
                    </div>
                </div>

                {/* Product Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="flex flex-col items-center">
                            <div className="relative w-full aspect-square mb-4">
                                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=50&width=300')] bg-bottom bg-no-repeat bg-contain z-10" />
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain rounded-2xl"
                                />
                            </div>


                            <h3 className="text-lg font-medium text-center mb-2">{product.name}</h3>
                            <hr className='border-2 border-orange-500 w-[50px]' >
                            </hr>

                            <p className="text-orange-500 font-extrabold mt-2">
                                Up To {product.discount}% Off
                            </p>

                        </div>
                    ))}
                </div>
            </div >
            <div className='flex justify-center items-center w-full rounded-2xl'>
                <Image
                    src={'/catbanner.png'}
                    width={800}
                    height={800}
                    alt="ad"
                    className="w-full h-auto py-10 lg:max-h-[80dvh] "
                />
            </div>
        </>
    )
}

export default Treats