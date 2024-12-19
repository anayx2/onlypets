import Image from 'next/image'

const brands = [
    {
        id: 1,
        logo: "/topfoodbrands/or.png",

    },
    {
        id: 2,
        logo: "/topfoodbrands/pd.png",


    },
    {
        id: 3,
        logo: "/topfoodbrands/rc.png",


    },
    {
        id: 4,
        logo: "/topfoodbrands/or.png",


    },

]
const Topfoodbrand = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">
                    Top Food Brands
                </h1>
                <p className="text-gray-600">
                    You cannot go wrong with these!
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4  gap-4 md:gap-6">
                {brands.map((brand) => (
                    <div
                        key={brand.id}

                    >
                        <div className="relative w-full aspect-square">
                            <Image
                                src={brand.logo}
                                alt={`product`}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Topfoodbrand