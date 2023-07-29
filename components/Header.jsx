import React, { useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="container w-full mx-auto px-10 py-8">
      <div className="flex justify-between text-gray-900 px-2 pb-3 border-b border-gray-600">
        <div>
          <Link href="/">
            <span className="font-bold text-2xl">Blogger.</span>
          </Link>
        </div>
        <div className="hidden md:flex gap-6">
          <Link href="/">
            <span className="text-gray-800 font-semibold hover:text-gray-500 duration-300">
              Home
            </span>
          </Link>
          <Link href="/about">
            <span className="text-gray-800 font-semibold hover:text-gray-500 duration-300">
              About
            </span>
          </Link>
          <Link href="/contact">
            <span className="text-gray-800 font-semibold hover:text-gray-500 duration-300">
              Contact
            </span>
          </Link>
        </div>
        <div className="cursor-pointer hover:scale-110 duration-300 md:hidden">
          <MenuIcon onClick={() => setNavbar(!navbar)} />
        </div>
      </div>
      <div
        className={
          navbar
            ? "bg-gray-900 px-20 transform translate-y-1 py-4 duration-500"
            : "transform -translate-y-[200%] duration-500 absolute"
        }
      >
        <div className="flex flex-col gap-4">
          <Link onClick={() => setNavbar(!navbar)} href="/">
            <span className="text-gray-300 hover:text-gray-500 duration-300">
              Home
            </span>
          </Link>
          <Link onClick={() => setNavbar(!navbar)} href="/about">
            <span className="text-gray-300 hover:text-gray-500 duration-300">
              About
            </span>
          </Link>
          <Link onClick={() => setNavbar(!navbar)} href="/contact">
            <span className="text-gray-300 hover:text-gray-500 duration-300">
              Contact
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
