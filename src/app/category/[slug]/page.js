import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import Image from "next/image";

const products = [
    {
        id: "1",
        title: "3D 7 Color Changing Moon Night LED 5W Lamp",
        price: 479,
        mrp: 1299,
        discount: 63,
        rating: 4.5,
        reviews: 2186,
        image: "/placeholder.svg?height=200&width=200",
        power: "5W",
        type: "Multicolour",
    },
    // Add more products as needed
];

export default function CategoryPage({ params }) {
    const categoryName = params.slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Featured Products Carousel */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                <Card className="relative overflow-hidden rounded-lg">
                    <Badge className="absolute top-4 left-4 z-10 bg-red-500">Featured</Badge>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">Juicers & Mixer</h3>
                        <Image
                            src="/placeholder.svg?height=200&width=200"
                            alt="Juicers"
                            width={200}
                            height={200}
                            className="w-full object-cover"
                        />
                    </div>
                </Card>
                {/* Add more featured cards */}
            </div>

            {/* Top Deals Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6">Top Deals</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <Card key={product.id} className="overflow-hidden">
                            <div className="p-4">
                                <div className="relative aspect-square mb-4">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="space-y-2">
                                    {product.power && product.type && (
                                        <div className="flex gap-4 text-sm text-muted-foreground">
                                            <span>{product.power}</span>
                                            <span>{product.type}</span>
                                        </div>
                                    )}
                                    <h3 className="font-medium leading-tight">{product.title}</h3>
                                    <div className="flex items-center gap-1">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 ${i < Math.floor(product.rating)
                                                    ? "text-yellow-400 fill-yellow-400"
                                                    : "text-gray-300"
                                                    }`}
                                            />
                                        ))}
                                        <span className="text-sm text-muted-foreground">
                                            ({product.reviews})
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xl font-bold">₹{product.price}</span>
                                        <span className="text-sm text-muted-foreground line-through">
                                            MRP ₹{product.mrp}
                                        </span>
                                        <span className="text-sm text-green-600">
                                            {product.discount}% OFF
                                        </span>
                                    </div>
                                    <button className="w-full bg-primary text-primary-foreground rounded-md py-2 mt-2">
                                        ADD
                                    </button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
