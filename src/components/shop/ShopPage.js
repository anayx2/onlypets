'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { Star, ChevronDown, SlidersHorizontal, ArrowUpDown, CircleChevronLeft } from 'lucide-react';
import { ChevronRight } from "lucide-react";
import { useRouter, useSearchParams } from 'next/navigation';

export default function ProductListing() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [priceRange, setPriceRange] = useState([0, 1499]);
    const [sortOption, setSortOption] = useState(() =>
        searchParams.get('sort') || 'featured'
    );

    const [filters, setFilters] = useState(() => ({
        category: searchParams.get('category') || '',
        lifestage: searchParams.get('lifestage') || '',
        size: searchParams.get('size')?.split(',') || [],
        price: [0, parseInt(searchParams.get('price')?.split(',')[1]) || 1499],
        brand: searchParams.get('brand')?.split(',') || []
    }));

    const products = useMemo(() => [
        {
            id: 1,
            name: "Pedigree Meat Jerky Barbecued Chicken Adult Dog Meaty Treat",
            weight: "80 gm",
            image: "/product-img1.png",
            rating: 4.5,
            originalPrice: 170.0,
            salePrice: 140.0,
            discount: 15,
            brand: "Pedigree",
        },
        {
            id: 2,
            name: "Pedigree Meat Jerky Barbecued Chicken Adult Dog Meaty Treat",
            weight: "80 gm",
            image: "/product-img2.png",
            rating: 4.5,
            originalPrice: 170.0,
            salePrice: 140.0,
            discount: 15,
            brand: "Pedigree",
        },
        {
            id: 3,
            name: "Pedigree Meat Jerky Barbecued Chicken Adult Dog Meaty Treat",
            weight: "80 gm",
            image: "/product-img1.png",
            rating: 4.5,
            originalPrice: 170.0,
            salePrice: 140.0,
            discount: 15,
            brand: "Pedigree",
        },
        {
            id: 4,
            name: "Pedigree Meat Jerky Barbecued Chicken Adult Dog Meaty Treat",
            weight: "80 gm",
            image: "/product-img2.png",
            rating: 4.5,
            originalPrice: 170.0,
            salePrice: 140.0,
            discount: 15,
            brand: "Pedigree",
        },
        {
            id: 5,
            name: "Pedigree Meat Jerky Barbecued Chicken Adult Dog Meaty Treat",
            weight: "80 gm",
            image: "/product-img1.png",
            rating: 4.5,
            originalPrice: 170.0,
            salePrice: 140.0,
            discount: 15,
            brand: "Pedigree",
        },
        {
            id: 6,
            name: "Pedigree Meat Jerky Barbecued Chicken Adult Dog Meaty Treat",
            weight: "80 gm",
            image: "/product-img2.png",
            rating: 4.5,
            originalPrice: 170.0,
            salePrice: 140.0,
            discount: 15,
            brand: "Pedigree",
        },
    ], []);

    const CollapsibleFilter = useCallback(({ title, children }) => {
        const [isOpen, setIsOpen] = useState(true);

        return (
            <div className="border-b pb-4">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center justify-between w-full text-left font-semibold mb-2"
                >
                    {title}
                    {isOpen ? (
                        <ChevronDown className="w-4 h-4" />
                    ) : (
                        <ChevronRight className="w-4 h-4" />
                    )}
                </button>
                {isOpen && <div className="pl-4 space-y-2">{children}</div>}
            </div>
        );
    }, []);

    const handleFilterChange = useCallback((filterType, value, isMultiple = false) => {
        setFilters(prevFilters => {
            if (isMultiple) {
                const currentValues = prevFilters[filterType] || [];
                const updatedValues = currentValues.includes(value)
                    ? currentValues.filter(v => v !== value)
                    : [...currentValues, value];
                return { ...prevFilters, [filterType]: updatedValues };
            }
            return { ...prevFilters, [filterType]: value };
        });
    }, []);

    const handleSortChange = useCallback((option) => {
        setSortOption(option);
    }, []);

    const filteredAndSortedProducts = useMemo(() => {
        let filtered = [...products];

        // Apply filters
        if (filters.category) {
            filtered = filtered.filter(product => product.brand.toLowerCase() === filters.category);
        }
        if (filters.price[1] < 1499) {
            filtered = filtered.filter(product => product.salePrice <= filters.price[1]);
        }
        if (filters.size.length > 0) {
            filtered = filtered.filter(product => filters.size.includes(product.weight));
        }
        if (filters.brand.length > 0) {
            filtered = filtered.filter(product => filters.brand.includes(product.brand));
        }

        // Apply sorting
        switch (sortOption) {
            case 'price-low':
                filtered.sort((a, b) => a.salePrice - b.salePrice);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.salePrice - a.salePrice);
                break;
            case 'rating':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
        }

        return filtered;
    }, [products, filters, sortOption]);

    const applyFilters = useCallback(() => {
        const params = new URLSearchParams();

        Object.entries(filters).forEach(([key, value]) => {
            if (Array.isArray(value) && value.length > 0) {
                params.set(key, value.join(','));
            } else if (value && !Array.isArray(value)) {
                params.set(key, value);
            }
        });

        if (sortOption !== 'featured') {
            params.set('sort', sortOption);
        }

        router.push(`?${params.toString()}`);
        setIsFilterOpen(false);
    }, [filters, sortOption, router]);

    const isOptionSelected = useCallback((filterType, value) => {
        if (Array.isArray(filters[filterType])) {
            return filters[filterType].includes(value);
        }
        return filters[filterType] === value;
    }, [filters]);


    const FilterModal = useCallback(() => (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={(e) => e.target === e.currentTarget && setIsFilterOpen(false)}>
            <div className="bg-white w-11/12 max-w-md max-h-[90vh] rounded-lg shadow-lg flex flex-col">
                <div className="flex justify-end p-5 ">
                    <h2 className="font-semibold text-lg">Filter</h2>

                    <button
                        onClick={() => setIsFilterOpen(false)}
                        className="text-gray-500 hover:text-gray-800"
                    >
                        ✕
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {/* Category Filter */}
                    <div className="border rounded-lg p-4">
                        <h3 className="font-semibold mb-4">Category</h3>
                        <div className="space-y-2">
                            {["Food", "Treats", "Litter & Accessories", "Toys", "Health & Care"].map((category) => (
                                <label key={category} className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="category"
                                        value={category.toLowerCase()}
                                        checked={isOptionSelected('category', category.toLowerCase())}
                                        onChange={(e) => handleFilterChange('category', e.target.value)}
                                        className="accent-[#FF7700]"
                                    />
                                    <span>{category}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Price Range Filter */}
                    <div className="border rounded-lg p-4">
                        <h3 className="font-semibold mb-4">Price Range</h3>
                        <div className="space-y-4">
                            <input
                                type="range"
                                min="0"
                                max="2000"
                                value={filters.price[1]}
                                onChange={(e) => handleFilterChange('price', [0, parseInt(e.target.value)])}
                                className="w-full accent-[#FF7700]"
                            />
                            <div className="flex justify-between text-sm">
                                <span>₹{filters.price[0]}</span>
                                <span>₹{filters.price[1]}</span>
                            </div>
                        </div>
                    </div>

                    {/* Size Filter */}
                    <div className="border rounded-lg p-4">
                        <h3 className="font-semibold mb-4">Size</h3>
                        <div className="space-y-2">
                            {["Small", "Medium", "Large"].map((size) => (
                                <label key={size} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={isOptionSelected('size', size.toLowerCase())}
                                        onChange={() => handleFilterChange('size', size.toLowerCase(), true)}
                                        className="accent-[#FF7700]"
                                    />
                                    <span>{size}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="p-6 border-t flex gap-4">
                    <button
                        onClick={() => setFilters({
                            category: '',
                            lifestage: '',
                            size: [],
                            price: [0, 1499],
                            brand: []
                        })}
                        className="flex-1 bg-white border border-[#FF7700] text-[#FF7700] py-2 rounded-md"
                    >
                        Clear All
                    </button>
                    <button
                        onClick={applyFilters}
                        className="flex-1 bg-[#FF7700] text-white py-2 rounded-md hover:bg-[#ff8c2d]"
                    >
                        Apply Filters
                    </button>
                </div>
            </div>
        </div>
    ), [filters, isOptionSelected, handleFilterChange, applyFilters]);

    const SortModal = useCallback(() => (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white w-11/12 max-w-sm p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-4 border-b pb-2">
                    <h2 className="font-semibold text-lg">Sort By</h2>
                    <button onClick={() => setIsSortOpen(false)} className="text-gray-500 hover:text-gray-800">
                        ✕
                    </button>
                </div>
                <div className="space-y-2">
                    {["Featured", "Price: Low to High", "Price: High to Low", "Rating"].map((option) => (
                        <button
                            key={option}
                            className={`w-full text-left p-4 rounded-md ${sortOption === option.toLowerCase()
                                ? 'bg-orange-50 text-[#FF7700]'
                                : 'hover:bg-gray-50'
                                }`}
                            onClick={() => handleSortChange(option.toLowerCase())}
                        >
                            {option}
                        </button>
                    ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                    <button
                        onClick={() => {
                            applyFilters();
                            setIsSortOpen(false);
                        }}
                        className="w-full bg-[#FF7700] text-white py-2 rounded-md hover:bg-[#ff8c2d]"
                    >
                        Apply
                    </button>
                </div>
            </div>
        </div>
    ), [sortOption, handleSortChange, applyFilters]);
    const productPage = useCallback(() => {
        router.push('/product');
    }, [router]);

    const back = () => {
        router.back()
    }

    const BackButton = () => {
        const router = useRouter();
        return (
            <div className="bg-gray-200 w-9 h-9 mx-4 mt-4 cursor-pointer rounded-full flex items-center justify-center">
                <CircleChevronLeft onClick={() => router.back()} />
            </div>
        );
    };
    return (
        <div className="min-h-screen bg-white">
            {/* Desktop Header */}

            <header className="hidden md:flex items-center justify-between p-6 border-b">
                <h1 className="text-2xl font-semibold">Products</h1>
                <div className="flex items-center gap-2">
                    <select
                        className="p-2 border rounded-md"
                        onChange={(e) => handleSortChange(e.target.value)}
                        value={sortOption}>
                        <option value="featured">Featured</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
            </header>

            {/* Mobile Header */}
            <div className="bg-gray-200 w-9 h-9 mx-4 mt-4 cursor-pointer rounded-full flex items-center justify-center" >
                <BackButton />
            </div>
            <header className="md:hidden p-4 border-b">

                <h1 className="text-xl font-semibold text-center mb-4">Products</h1>
                <div className="grid grid-cols-2 gap-4">
                    <button
                        onClick={() => setIsFilterOpen(true)}
                        className="flex items-center justify-center gap-2 p-2 border rounded-md"
                    >
                        <SlidersHorizontal className="w-4 h-4" />
                        Filter
                    </button>
                    <button
                        onClick={() => setIsSortOpen(true)}
                        className="flex items-center justify-center gap-2 p-2 border rounded-md"
                    >
                        <ArrowUpDown className="w-4 h-4" />
                        Sort
                    </button>
                </div>
            </header>

            <div className="flex">
                {/* Desktop Sidebar */}
                <aside className="hidden md:block w-64 p-6 border-r">
                    <div className="space-y-6">
                        {/* Price Range Filter */}
                        <CollapsibleFilter title="Price">
                            <input
                                type="range"
                                min="0"
                                max="1499"
                                value={priceRange[1]}
                                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                                className="w-full accent-[#FF7700]"
                            />
                            <div className="flex justify-between text-sm">
                                <span>₹{priceRange[0]}</span>
                                <span>₹{priceRange[1]}</span>
                            </div>
                        </CollapsibleFilter>

                        {/* Lifestage Filter */}
                        <CollapsibleFilter title="Lifestage">
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="rounded accent-[#FF7700]"
                                    checked={isOptionSelected('lifestage', 'puppy')}
                                    onChange={() => handleFilterChange('lifestage', 'puppy', true)}
                                />
                                <span>Puppy</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="rounded accent-[#FF7700]"
                                    checked={isOptionSelected('lifestage', 'adult')}
                                    onChange={() => handleFilterChange('lifestage', 'adult', true)}
                                />
                                <span>Adult</span>
                            </label>
                        </CollapsibleFilter>

                        {/* Size Filter */}
                        <CollapsibleFilter title="Size">
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="rounded accent-[#FF7700]"
                                    checked={isOptionSelected('size', 'small')}
                                    onChange={() => handleFilterChange('size', 'small', true)}
                                />
                                <span>Small</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="rounded accent-[#FF7700]"
                                    checked={isOptionSelected('size', 'medium')}
                                    onChange={() => handleFilterChange('size', 'medium', true)}
                                />
                                <span>Medium</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="rounded accent-[#FF7700]"
                                    checked={isOptionSelected('size', 'large')}
                                    onChange={() => handleFilterChange('size', 'large', true)}
                                />
                                <span>Large</span>
                            </label>
                        </CollapsibleFilter>

                        {/* Brand Filter */}
                        <CollapsibleFilter title="Brand">
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="rounded accent-[#FF7700]"
                                    checked={isOptionSelected('brand', 'Pedigree')}
                                    onChange={() => handleFilterChange('brand', 'Pedigree', true)}
                                />
                                <span>Pedigree</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="rounded accent-[#FF7700]"
                                    checked={isOptionSelected('brand', 'Royal Canin')}
                                    onChange={() => handleFilterChange('brand', 'Royal Canin', true)}
                                />
                                <span>Royal Canin</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="rounded accent-[#FF7700]"
                                    checked={isOptionSelected('brand', 'Purina')}
                                    onChange={() => handleFilterChange('brand', 'Purina', true)}
                                />
                                <span>Purina</span>
                            </label>
                        </CollapsibleFilter>
                    </div>
                </aside>

                {/* Product Grid */}
                <main className="flex-1 p-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                        {filteredAndSortedProducts.map((product) => (
                            <div key={product.id} className="border rounded-lg p-4 cursor-pointer" onClick={productPage}>
                                <div className="relative aspect-square mb-4">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="font-medium text-sm mb-1 text-[12px] md:text-sm lg:text-sm line-clamp-2">
                                    {product.name}
                                </h3>
                                <p className="text-[12px] md:text-sm lg:text-sm text-gray-500 mb-2">
                                    {product.weight}
                                </p>
                                <div className="flex items-center gap-1 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 ${i < Math.floor(product.rating)
                                                ? 'text-yellow-400 fill-yellow-400'
                                                : 'text-gray-300'
                                                }`}
                                        />
                                    ))}
                                </div>
                                <div className="flex flex-col mb-4">
                                    <span className="text-[12px] md:text-base lg:text-base text-green-600">
                                        {product.discount}% off
                                    </span>
                                    <span className="flex gap-2 items-center">
                                        <span className="font-semibold text-[15px] md:text-base lg:text-base">
                                            ₹{product.salePrice}
                                        </span>
                                        <span className="text-[15px] md:text-sm lg:text-sm text-gray-500 line-through">
                                            ₹{product.originalPrice}
                                        </span>
                                    </span>
                                </div>
                                <button className="w-full bg-[#FF7700] font-bold text-white py-2 rounded-md hover:bg-[#ff8c2d] transition-colors">
                                    Add to cart
                                </button>
                            </div>
                        ))}
                    </div>
                </main>
            </div>

            {isFilterOpen && <FilterModal />}
            {isSortOpen && <SortModal />}
        </div>
    );
}