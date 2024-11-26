import React from "react";
import mobileImage from '/src/assets/Images/stock-Blicq8JI.png';
import MobileCards from "./MobileCards";
import "../index.css";

const MobileStock = () => {
  return (
    <div>
      {/* Upper Text Section */}
      <div className="my-[50px] text-center flex flex-col gap-[30px]">
        <img src={mobileImage} alt="mobile-stock-logo" className="mx-auto w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px]"/>
        <p className=" dm-serif text-lg md:text-lg lg:text-xl px-[50px] sm:px-[70px] md:px-[100px] lg:px-[150px] font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo eum minima provident, beatae aspernatur minus illum!</p>
      </div>

      {/* Mobile Cards Section */}
      <div>
        <div className="flex items-center gap-[10px] justify-between xs:justify-between sm:justify-center my-[20px] flex-wrap mx-[20px]">
        <MobileCards/>
        <MobileCards/>
        <MobileCards/>
        <MobileCards/>
        </div>
     </div>
    </div>
  );
};

export default MobileStock;
