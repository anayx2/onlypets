'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, ChevronDown, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { ChevronRight } from "lucide-react";

import { useRouter } from 'next/navigation';

export default function ProductListing() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1499]);

  const router = useRouter();

  const products = [
    {
      id: 1,
      name: "Pedigree Meat Jerky Barbecued Chicken Adult Dog Meaty Treat",
      weight: "80 gm",
      image: "/product-img1.png?height=200&width=200",
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
      image: "/product-img2.png?height=200&width=200",
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
      image: "/product-img1.png?height=200&width=200",
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
      image: "/product-img2.png?height=200&width=200",
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
      image: "/product-img1.png?height=200&width=200",
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
      image: "/product-img2.png?height=200&width=200",
      rating: 4.5,
      originalPrice: 170.0,
      salePrice: 140.0,
      discount: 15,
      brand: "Pedigree",
    },
  ];

  const updateQueryParams = (params) => {
    const currentParams = new URLSearchParams(window.location.search);
    Object.keys(params).forEach((key) => {
      if (params[key] !== null) {
        currentParams.set(key, params[key]);
      } else {
        currentParams.delete(key);
      }
    });
    // router.push({
    //   pathname: router.pathname,
    //   search: currentParams.toString(),
    // });
  };

  const productPage = () => {
    router.push('/product'); // Redirect to the /product page
  };

  const handleSortChange = (sortOption) => {
    updateQueryParams({ sort: sortOption });
    setIsSortOpen(false);
  };


  const applyFilters = () => {
    updateQueryParams({ minPrice: priceRange[0], maxPrice: priceRange[1] });
    setIsFilterOpen(false);
  };
  function CollapsibleFilter({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
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
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Desktop Header */}
      <header className="hidden md:flex items-center justify-between p-6 border-b">
        <h1 className="text-2xl font-semibold">Products</h1>
        <div className="flex items-center gap-2">
          <select
            className="p-2 border rounded-md"
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden p-4 border-b">
        <h1 className="text-xl font-semibold text-center mb-4">Products title</h1>
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
                onChange={(e) =>
                  setPriceRange([priceRange[0], parseInt(e.target.value)])
                }
                className="w-full"
              />
              <div className="flex justify-between text-sm">
                <span>₹{priceRange[0]}</span>
                <span>₹{priceRange[1]}</span>
              </div>
            </CollapsibleFilter>

            {/* Lifestage Filter */}
            <CollapsibleFilter title="Lifestage">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Puppy</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Adult</span>
              </label>
            </CollapsibleFilter>

            {/* Size Filter */}
            <CollapsibleFilter title="Size">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Small</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Medium</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Large</span>
              </label>
            </CollapsibleFilter>

            {/* Color Filter */}
            <CollapsibleFilter title="Color">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Black</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Brown</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>White</span>
              </label>
            </CollapsibleFilter>

            {/* Brand Filter */}
            <CollapsibleFilter title="Brand">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Pedigree</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Royal Canin</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Purina</span>
              </label>
            </CollapsibleFilter>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1 p-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="border rounded-lg p-4" onClick={productPage}>
                <div className="relative aspect-square mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-medium text-sm mb-1 text-[12px] md:text-sm lg:text-sm">{product.name}</h3>
                <p className="text-[12px] md:text-sm lg:text-sm text-gray-500 mb-2">{product.weight}</p>
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
                  <span className='flex gap-2 items-center'>

                    <span className="font-semibold text-[15px] md:text-base lg:text-base">₹{product.salePrice}</span>
                    <span className="text-[15px] md:text-sm lg:text-sm text-gray-500 line-through">
                      ₹{product.originalPrice}
                    </span>
                  </span>
                </div>
                <button className="w-full bg-[#FF7700] font-bold text-white py-2 rounded-md hover:bg-gray-800">
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Mobile Filter Modal */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setIsFilterOpen(false)}
        >
          <div className="bg-white w-11/12 max-w-md max-h-[90vh] rounded-lg shadow-lg flex flex-col" >
            {/* Header */}
            <div className="flex justify-end p-5 ">
              <button
                onClick={() => setIsFilterOpen(false)}
                className="text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-4 text-md">Category</h3>
                <div className="space-y-2">
                  {["Food", "Treats", "Litter & Accessories", "Toys", "Health & Care"].map((category, index) => (
                    <label key={index} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="category"
                        value={category.toLowerCase()}
                        className="accent-[#FF7700]
                        text-sm"
                      />
                      <span>{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-4 text-md">Price</h3>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#FF7700]"
                  />
                  <div className="flex justify-between text-sm">
                    <span>₹{priceRange[0]}</span>
                    <span>₹{priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-4">Lifestage</h3>
                <div className="space-y-2">
                  {["Puppy", "Adult", "Senior"].map((lifestage, index) => (
                    <label key={index} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="lifestage"
                        value={lifestage.toLowerCase()}
                        className="accent-[#FF7700]"
                      />
                      <span>{lifestage}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-4">Size</h3>
                <div className="space-y-2">
                  {["Small", "Medium", "Large"].map((size, index) => (
                    <label key={index} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="size"
                        value={size.toLowerCase()}
                        className="accent-[#FF7700]"
                      />
                      <span>{size}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t">
              <button
                onClick={() => {
                  setIsFilterOpen(false);
                  applyFilters(); // Call your filter logic here
                }}
                className="w-full bg-[#FFF] border-[#FF7700] border-[1px] text-[#FF7700] py-2 rounded-md hover:bg-blue-600"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}


      {/* Mobile Sort Modal */}
      {isSortOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 ">
          <div className="bg-white w-11/12 max-w-sm p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-4 border-b pb-2">
              <h2 className="font-semibold text-md">Sort By</h2>
              <button onClick={() => setIsSortOpen(false)} className="text-gray-500 hover:text-gray-800">
                ✕
              </button>
            </div>
            <div>
              {["Featured", "Price: Low to High", "Price: High to Low", "Rating"].map((option) => (
                <button
                  key={option}
                  className="w-full text-left p-4 hover:bg-gray-50"
                  onClick={() => handleSortChange(option.toLowerCase())}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
