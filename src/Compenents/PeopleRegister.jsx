import React from "react";
import { CiInstagram } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdContacts } from "react-icons/io";
import '../index.css';


const PeopleRegister = () => {
  return (
    <>
      <div className="flex items-center gap-[10px] flex-wrap justify-center xs:justify-center sm:justify-start">
        {/* instagram */}
        <div className=" rounded-full w-fit text-xl text-white p-[10px] bg-gradiant hover:shadow-xl shadow-black transition duration-200">
          <CiInstagram />
        </div>

        {/* facebook */}
        <div className=" rounded-full w-fit text-xl text-white p-[10px] bg-gradiant  hover:shadow-xl shadow-black transition duration-200">
        <FaFacebook />
        </div>

        {/* Linkedin */}
        <div className=" rounded-full w-fit text-xl text-white p-[10px] bg-gradiant  hover:shadow-xl shadow-black transition duration-200">
        <FaLinkedin />
        </div>

        {/* Twitter */}
        <div className=" rounded-full w-fit text-xl text-white p-[10px] bg-gradiant  hover:shadow-xl shadow-black transition duration-200">
        <FaXTwitter />
        </div>

        {/* Register Text */}
        <div className="ml-[10px] mt-[15px] xs:mt-[10px] sm:mt-[0px]">
            <p className="font-semibold text-gradiant inline-flex items-center mt-[-10px]"><IoMdContacts className="text-4xl font-semibold text-[#22c55e]"/>400K People Registered</p>
        </div>
      </div>
    </>
  );
};

export default PeopleRegister;
