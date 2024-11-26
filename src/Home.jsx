import React from "react";
import Navbar from "./Compenents/Navbar";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";
import mobileImage from "/src/assets/Images/mobile-BLJNY4DN.png";
import "./index.css";
import PeopleRegister from "./Compenents/PeopleRegister";
import AutoScroller from "./Compenents/AutoScroller";
import MobileStock from "./Compenents/MobileStock";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const Home = () => {
  return (
    <div>
      <div className="bg-[#f2fbff] ">
        <Navbar />
        {/* hero */}
        <div className="flex items-center  justify-between justify-between px-[50px] slide-top mt-[100px] flex-wrap md:flex-wrap lg:flex-nowrap">
          {/* left side hero */}
          <div className="flex flex-col gap-[50px] w-full md:w-full lg:w-[550px] p-[15px] xs:p-[10px]">
            <h1 className=" dm-serif text-[35px] xs:text-[40px] sm:text-[45px] md:text-[50px] lg:text-[60px] font-semibold">
              Largest <span className="text-[#388fcb]">Wholesalers</span> of{" "}
              <span className="text-[#388fcb]">Mobiles Phones</span>
            </h1>
            <p className="tracking-in-expand text-md xs:text-lg sm:text-lg md:text-xl dm-serif">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              laudantium iusto magni inventore, eius delectus aliquam sed atque
              ullam voluptatem!
            </p>
            {/* learn more btn*/}
            <p className="text-md xs:text-lg sm:text-lg md:text-xl inline-flex items-center gap-[10px] text-[#388fcb] dm-serif">
              Learn More
              <FaArrowRightLong className="mt-[3px] hover:text-[22px] cursor-pointer" />
            </p>
            {/* input */}
            <div className="flex items-center gap-[10px] flex-wrap xs:flex-wrap sm:flex-nowrap dm-serif">
              <input
                type="text"
                className="w-[200px]  xs:w-[250px] sm:w-[300px] border-[1px] rounded-full border-blue-500 p-[5px] xs:p-[7px] sm:p-[10px]"
              />
              <button className="text-xs xs:text-sm py-[10px] border-[#22c55e] border-[1px] rounded-full inline-flex items-center gap-[5px] bg-[#22c55e]  text-white hover:bg-white hover:text-[#22c55e]  px-[15px]">
                Subscribe
                <FaArrowRightLong className="" />
              </button>
              <button className="text-xs xs:text-sm w-[100px] justify-center py-[10px] border-[#388fcb] border-[1px] rounded-full inline-flex items-center gap-[2px] bg-[#388fcb]  text-white hover:bg-white hover:text-[#388fcb]">
                <FaArrowDown />
                Stock list
              </button>
            </div>
          </div>
          {/* right side hero */}
          <div className="mx-auto md:mx-auto lg:mx-0">
            <img
              src={mobileImage}
              alt="mobile-image"
              className="w-full  md:w-full h-[350px] xs:h-[400px] sm:h-[450px] md:h-[500px]  mx-auto md:mx-auto lg:mx-none"
            />
          </div>
        </div>

        {/* Poeple Register Component */}
        <div className="px-[60px]">
          <PeopleRegister />
        </div>

        {/* Auto Scroller  */}
        <div className="py-[50px]">
          <AutoScroller />
        </div>
      </div>

      {/* Mobile Stock Component */}
      <MobileStock />

      {/* Footer Arrows */}
      <div className="flex items-center gap-[10px] justify-center my-[20px] mt-[50px]">
        {/* left arrow */}
        <div className="text-lg p-[5px] rounded-full border-green-500 text-green-500 hover:bg-green-500 hover:text-white border-[2px] w-fit">
        <IoIosArrowBack />
        </div>
         <div className="w-[80px] bg-green-500  hover:bg-green-600 h-[20px] rounded-full"></div>

         <div className="flex items-center gap-[10px]">
         <div className="w-[20px] h-[20px] rounded-full bg-slate-300 hover:bg-slate-400"></div>
         <div className="w-[20px] h-[20px] rounded-full bg-slate-300 hover:bg-slate-400"></div>
         </div>

         <div className="text-lg p-[5px] rounded-full border-green-500 text-green-500 hover:bg-green-500 hover:text-white border-[2px] w-fit">
         <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};

export default Home;
