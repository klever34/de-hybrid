"use client";

import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import React, { useState, useContext } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import AppContext from "@context/AppContext";

const CustomNavBar = () => {
  const [nav, setNav] = useState(false);
  const { data } = useContext(AppContext);
  const cartItemCount = data.cart.totalCount;

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Home", href: "/home" },
    { id: 2, text: "Music", href: "/home#music" },
    { id: 3, text: "Books", href: "/home#books" },
    { id: 4, text: "About Us", href: "/home#about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-black text-white text-center z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center pl-4 md:pl-0">
            <Image
              src={"/dehybrid.png"}
              alt={"De-Hybrid Logo"}
              width={50}
              height={50}
            />
            <div className="text-lg md:text-2xl font-bold">De-Hybrid</div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="p-4 hover:bg-[#ffffff] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
              >
                <Link href={item.href}>{item.text}</Link>
              </li>
            ))}
          </ul>

          {/* Search & Cart Icons */}
          <div className="flex space-x-6 hidden md:flex">
            <IoSearch size={24} />
            <Link href="/cart" className="relative">
              <MdOutlineShoppingCart size={28} />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div onClick={handleNav} className="block md:hidden pr-4 md:pr-0">
            {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={`fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-gray-900 bg-[#000300] ease-in-out duration-500 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Mobile Logo */}
        <div className="pt-8 mb-8 flex justify-center">
          <Image
            src={"/dehybrid.png"}
            alt={"De-Hybrid Logo"}
            width={50}
            height={50}
          />
          <div className="text-sm pt-2 font-bold">De-Hybrid</div>
        </div>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-[#ffffff] duration-300 hover:text-black cursor-pointer border-gray-600"
            onClick={handleNav}
          >
            <Link href={item.href}>{item.text}</Link>
          </li>
        ))}

        {/* Mobile Cart Icon */}
        <li className="p-4 flex items-center justify-center">
          <Link href="/cart" className="relative flex items-center">
            <MdOutlineShoppingCart size={28} />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartItemCount}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default CustomNavBar;
