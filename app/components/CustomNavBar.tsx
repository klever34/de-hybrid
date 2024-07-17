"use client";

import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineShoppingCart } from "react-icons/md";

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const CustomNavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Home", href: "#" },
    { id: 2, text: "Music", href: "#" },
    { id: 3, text: "Books", href: "#" },
    { id: 4, text: "Shop", href: "#" },
    { id: 5, text: "About Us", href: "#" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-black text-white text-center z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold">De-hybrid</div>
          </div>
          <ul className="hidden md:flex">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
              >
                {item.text}
              </li>
            ))}
          </ul>
          <div className="flex space-between hidden md:flex">
            <IoSearch className="mr-5" size={24} />
            <MdOutlineShoppingCart size={24} />
          </div>
          <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
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
        <div className="text-2xl font-bold">De-hybrid</div>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
            onClick={handleNav}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CustomNavBar;

// import React, { useState } from "react";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// const CustomNavBar = () => {
//   // State to manage the navbar's visibility
//   const [nav, setNav] = useState(false);

//   // Toggle function to handle the navbar's display
//   const handleNav = () => {
//     setNav(!nav);
//   };

//   // Array containing navigation items
//   const navItems = [
//     { id: 1, text: "Home" },
//     { id: 2, text: "Company" },
//     { id: 3, text: "Resources" },
//     { id: 4, text: "About" },
//     { id: 5, text: "Contact" },
//   ];

//   return (
//     <div className="bg-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
//       {/* Logo */}
//       <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>

//       {/* Desktop Navigation */}
//       <ul className="hidden md:flex">
//         {navItems.map((item) => (
//           <li
//             key={item.id}
//             className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
//           >
//             {item.text}
//           </li>
//         ))}
//       </ul>

//       {/* Mobile Navigation Icon */}
//       <div onClick={handleNav} className="block md:hidden">
//         {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//       </div>

//       {/* Mobile Navigation Menu */}
//       <ul
//         className={
//           nav
//             ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
//             : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
//         }
//       >
//         {/* Mobile Logo */}
//         <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>

//         {/* Mobile Navigation Items */}
//         {navItems.map((item) => (
//           <li
//             key={item.id}
//             className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
//           >
//             {item.text}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CustomNavBar;
