"use client";

import Link from "next/link";
import { IoSearch } from "react-icons/io5";

import { MdOutlineShoppingCart } from "react-icons/md";

export function CustomNavBar() {
  return (
    <>
      <header className="fixed w-full bg-black text-white px-28">
        <div className="container flex justify-between items-center py-8">
          <div className="flex items-center">
            <div className="text-2xl font-bold">De-hybrid</div>
          </div>
          <div>
            <Link href={"#"} className="mr-20">
              Home
            </Link>
            <Link href={"#"} className="mr-20">
              Music
            </Link>
            <Link href={"#"} className="mr-20">
              Books
            </Link>
            <Link href={"#"} className="mr-20">
              Shop
            </Link>
            <Link href={"#"}>About Us</Link>
          </div>
          <div className="flex space-between">
            <IoSearch className="mr-5" size={24} />
            <MdOutlineShoppingCart size={24} />
          </div>
        </div>
      </header>
    </>
  );
}
