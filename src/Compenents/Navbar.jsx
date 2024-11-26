import React from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import image from "/src/assets/Images/Vector-D85HoUSX.png";
import '../index.css';


const Navbar = () => {
  return (
    <div className="flex items-center justify-center p-[20px] pt-[30px]">
      {/* left side logo image */}
      <div className="block xs:block sm:hidden justify-start">
        <img src={image} alt="" className="h-[30px] xs:h-[30px] sm:h-[40px]" />
      </div>

{/* center nav links */}
      <div className="sm:flex md:flex lg:flex items-center sm:gap-[15px] md:gap-[20px] justify-center hidden xs:hidden dm-serif">
        <a className="text-md xs:text-lg sm:text-lg md:text-xl border-effect cursor-pointer">Home</a>
        <a className="text-md xs:text-lg sm:text-lg md:text-xl border-effect cursor-pointer">About Us</a>
        <a className="text-md xs:text-lg sm:text-lg md:text-xl border-effect cursor-pointer">Wholesale</a>
        <img src={image} alt="" className="h-[40px] cursor-pointer" />
        <a className="text-md xs:text-lg sm:text-lg md:text-xl border-effect cursor-pointer">Services</a>
        <a className="text-md xs:text-lg sm:text-lg md:text-xl border-effect cursor-pointer">News</a>
        <a className="text-md xs:text-lg sm:text-lg md:text-xl border-effect cursor-pointer">How It Works</a>
      </div>

      {/* right side dropdown */}
      <div className=" block xs:block sm:hidden md:hidden lg:hidden ml-auto">
        <div className="dropdown">
          <div tabIndex={0} role="button">
            <HiMiniBars3 className="text-lg  xs:text-xl" />
          </div>
          <ul
            tabIndex={0}
            className="menu-sm dropdown-content bg-base-100 z-[1] mt-3  p-2 shadow-lg ml-[-80px] flex flex-col gap-[10px] text-start dm-serif"
          >
            <li>
              <a className="text-md xs:text-lg sm:text-lg md:text-xl">Home</a>
            </li>
            <li>
              <a className="text-md xs:text-lg sm:text-lg md:text-xl">
                About Us
              </a>
            </li>
            <li>
              <a className="text-md xs:text-lg sm:text-lg md:text-xl">
                Wholesale
              </a>
            </li>
            <li>
              <a className="text-md xs:text-lg sm:text-lg md:text-xl">
                Services
              </a>
            </li>
            <li>
              <a className="text-md xs:text-lg sm:text-lg md:text-xl">News</a>
            </li>
            <li>
              <a className="text-md xs:text-lg sm:text-lg md:text-xl">
                How It Works
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
