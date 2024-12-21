"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  ChevronRight,
  MapPin,
  Menu,
  Search,
  ShoppingCart,
  User,
  X,
} from "lucide-react";
import { Router } from "next/router";

// Menu items defined in an array
const menuItems = [
  { title: "Fresh Meals", href: "/fresh-meals", hasDropdown: true, icon: "/menuicons/freshmeal.png" },
  { title: "Dogs", href: "/dogs", hasDropdown: true, icon: "/menuicons/dogs.png" },
  { title: "Cat", href: "/cat", hasDropdown: true, icon: "/menuicons/cats.png" },
  { title: "Small Animals", href: "/small-animals", hasDropdown: true, icon: "/menuicons/smallanimals.png" },
  { title: "Brands", href: "/brands", hasDropdown: true, icon: "/menuicons/brands.png" },
  { title: "New Collection", href: "/new-collection", hasDropdown: true, icon: "/menuicons/newcollection.png" },
  { title: "Treats Bar", href: "/treats-bar", hasDropdown: true, icon: "/menuicons/treatbar.png" },
  { title: "Best Seller", href: "/best-seller", hasDropdown: true, icon: "/menuicons/bestseller.png" },
];

const Navbar1 = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="border-b">
      <div className="container mx-auto">
        {/* Top Bar */}
        <div className="flex h-20 items-center justify-between px-4">
          {/* Mobile Menu Toggle */}

          <button
            className="md:hidden"
            onClick={() => setDrawerOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center ml-[-50px] md:ml-0 lg:ml-0">
            <Image
              src={"/logo.png"}
              width={500}
              height={500}
              className="w-40 h-13 opacity-5 transition-opacity duration-300 ease-in-out"
              alt="LOGO"
              onLoad={(e) => (e.target.style.opacity = 1)} // Ensures the fade-in effect triggers when the image loads
            />
          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden flex-1 max-w-2xl mx-8 md:flex items-center relative border-gray-400 border-[1px] rounded-xl">
            <input
              type="search"
              placeholder="Search.."
              className="w-full pl-4 pr-10 rounded-xl border-gray-600"
            />
            <button className="absolute right-2">
              <Search className="h-20 w-5" />
            </button>
          </div>

          {/* Utility Icons */}
          <div className="flex items-center space-x-6 text-black">


            <Link href="/product" className="flex flex-col items-center text-black">
              <button>
                <ShoppingCart className="h-6 w-6" />
              </button>
              <span className="text-xs">Cart</span>
            </Link>

            <Link href="/profile" className="flex flex-col items-center text-black">
              <button>
                <User /> </button>
              <span className="text-xs">Profile</span>
            </Link>
          </div>
        </div>

        {/* Drawer */}
        {drawerOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setDrawerOpen(false)}
          ></div>
        )}
        <div
          className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 ${drawerOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          tabIndex="-1"
          aria-labelledby="drawer-label"
        >
          <div className="flex items-center justify-between mb-4">

            <Link href="/" className="flex items-center">
              <Image
                src={"/logo.png"}
                width={500}
                height={500}
                className="w-40"
                alt="LOGO"
              />
            </Link>
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              className="text-black-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <nav>
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.title} className="flex justify-between items-center">
                  <span className="flex gap-4">
                    <Image
                      src={item.icon}
                      width={50}
                      height={50}
                      alt="item.title"
                    />
                    <Link
                      href={item.href}
                      className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 rounded-lg text-sm font-bold text-black hover:text-[#63128A]"
                      onClick={() => setDrawerOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </span>
                  <span>
                    {item.hasDropdown && <ChevronRight className="h-4 w-4" />}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
          <div className="text-gray-600 font-semibold p-1 my-3 cursor-pointer">
            My Account
            <ul className="text-black font-semibold flex flex-col gap-2 my-3">
              <li>
                Login
              </li>
              <li>
                Create an Account
              </li>
            </ul>
          </div>
          <div className="py-5">
            <Image
              src={'/menuicons/sidebarbanner.png'}
              width={300}
              height={120}
              className="w-auto h-auto"
            />
          </div>
          <div className="text-[10px] text-center">
            @OnlyPets Powered By <Link href="https://www.google.com">
              <span className="font-semibold text-black">Alphabet Technology</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar1;
