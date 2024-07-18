"use client";

import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineShoppingCart } from "react-icons/md";

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";

const CustomNavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Home", href: "#" },
    { id: 2, text: "Music", href: "#music" },
    { id: 3, text: "Books", href: "#books" },
    { id: 4, text: "About Us", href: "#about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-black text-white text-center z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center pl-4 md:pl-0">
            <Image
              src={"/dehybrid.png"}
              alt={"De-Hybrid Logo"}
              width={50}
              height={50}
            />
            <div className="text-lg md:text-2xl font-bold">De-Hybrid</div>
          </div>
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
          <div className="flex space-between hidden md:flex">
            <IoSearch className="mr-5" size={24} />
            <MdOutlineShoppingCart size={24} />
          </div>
          <div onClick={handleNav} className="block md:hidden pr-4 md:pr-0">
            {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <div className="pt-8 mb-8 flex justify-center">
          <Image
            src={"/dehybrid.png"}
            alt={"De-Hybrid Logo"}
            // className="w-full"
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
      </ul>
    </nav>
  );
};

export default CustomNavBar;
