import React from 'react'
import iphoneImg from '/src/assets/Images/iphone14pro-VduFgrM1.png';
import "../index.css";

const MobileCards = () => {
  return (
    <>
    <div className='rounded-lg shadow-lg p-[15px]  border-[2px] border-black w-[230px] xs:w-[250px] sm:-w-[270px] md:w-[290px] flex flex-col justify-center text-center gap-[10px] bg-[#f2fbff] hover:-translate-y-2 mx-auto xs:mx-auto sm:mx-0'>
    <img src={iphoneImg} alt="iphone-img" className='h-[110px] w-[110px] mx-auto'/>
    {/* Heading */}
    <p className=' dm-serif text-lg md:text-lg lg:text-xl font-semibold'>Iphone 14 Pro Max</p>
    {/* text */}
    <p className='dm-serif text-xs xs:text-sm'>Lorem ipsum dolor sit, amet consectetur</p>
    </div>
    </>
  )
}

export default MobileCards