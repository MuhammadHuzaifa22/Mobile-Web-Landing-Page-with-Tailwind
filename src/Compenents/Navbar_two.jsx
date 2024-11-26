import React from 'react'
import { CiMail } from "react-icons/ci";
import { MdOutlineCall } from "react-icons/md";

const NavbarTwo = () => {
  return (
    <>
    <div className='hidden xs:hidden sm:block'>
    <div className="bg-[#388fcb] p-[16px] dm-serif text-white px-[50px] flex items-center justify-between text-md ">

{/* Left box */}
<div className="flex items-center gap-[20px]">
<div className="inline-flex items-center gap-[5px]">
<CiMail className='text-md xs:text-lg sm:text-lg md:text-xl font-medium'/>
<p>info@abc.com</p>
</div>
<div className="inline-flex items-center gap-[5px]">
<MdOutlineCall className='text-xl font-medium'/>
<p>+123 456 789</p>
</div>
</div>


{/* right box */}
<div className='flex items-center gap-[5px]'>
  <p>Privacy Policy</p>
  <div className='border-[1px] w-[1px] h-[20px] border-white'></div>
  <p>Terms and Condition</p>
</div>

</div>
    </div>
    </>
  )
}

export default NavbarTwo