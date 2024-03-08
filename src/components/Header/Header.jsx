import Image from "next/image";
import React from "react";
import logo from "@/assets/Evaly_logo.png";
import cartIcon from "@/assets/shopping-cart.png";
import { FaRegUser } from "react-icons/fa";
import { RiHome2Line } from "react-icons/ri";
import { FiShoppingBag } from "react-icons/fi";
import { CgNotes } from "react-icons/cg";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <div className="shadow pt-4">
        <div className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md max-w-screen-sm mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between flex-grow">
              <Link href="/">
                <Image
                  src={logo}
                  alt="Logo"
                  width={150}
                  height={35}
                  className="md:w-[150px] w-20"
                />
              </Link>
              <div className="hidden md:block w-full xl:ml-16 xl:mr-[12rem] lg:mx-10 md:mx-8">
                <div className="flex">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search in evaly"
                    className="bg-gray-200 md:px-4 px-3 rounded-s-md focus:outline-none w-full"
                  />
                  <button className="bg-gray-900 text-white px-4 py-3 font-semibold rounded-e-md">
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <Link href="/cart">
                {/* <AiOutlineShoppingCart className="md:text-5xl text-3xl mr-1 border border-transparent hover:border hover:border-gray-200 p-1 rounded-lg" /> */}
                <Image
                  src={cartIcon}
                  alt="Cart Icon"
                  width={40}
                  className="mr-1 border-2 border-transparent hover:border-2 hover:border-gray-200 p-1 rounded-lg"
                ></Image>
              </Link>
              <Link href="/signin">
                <div className="flex items-center border-2 border-transparent hover:border-2 hover:border-gray-200 p-2 md:py-2 md:px-4 rounded-lg">
                  <FaRegUser className="text-2xl md:mr-2" />
                  <span className="hidden md:block">Sign In</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="md:hidden block w-full mt-3">
            <div className="flex">
              <input
                type="text"
                name="search"
                placeholder="Search in evaly"
                className="bg-gray-200 py-3 px-4 rounded-s-md focus:outline-none w-full"
              />
              <button className="bg-gray-900 text-white px-4 py-3 font-semibold rounded-e-md">
                Search
              </button>
            </div>
          </div>
        </div>
        <hr className="mt-4 md:block hidden" />
        <div className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md max-w-screen-sm mx-auto px-4 md:block hidden">
          <div className="flex items-center py-4 space-x-4">
            <Link href="/">
              <div className="flex items-center space-x-2 font-semibold">
                <RiHome2Line />
                <span>Home</span>
              </div>
            </Link>
            <Link href="/shops">
              <div className="flex items-center space-x-2 font-semibold">
                <FiShoppingBag />
                <span>Shop</span>
              </div>
            </Link>
            <Link href="/categories">
              <div className="flex items-center space-x-2 font-semibold">
                <CgNotes />
                <span>Categories</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
