import React from 'react'
import Marquee from 'react-fast-marquee'
import img1 from '/src/assets/Images/mobilepng-3Xn7wnNO.png';
import img2 from '/src/assets/Images/download.png';
import img3 from '/src/assets/Images/headphone-g-Jyvr-S.png';
import '../index.css';

const AutoScroller = () => {
  return (
    <div className=' px-[60px] dotsBg mt-[50px]'>
    <Marquee speed={100} direction="right">
    <div className='flex items-center gap-[10px]'>
        <img src={img1} alt="scrolling-image" />
        <img src={img2} alt="scrolling-image" />
        <img src={img3} alt="scrolling-image" />
        <img src={img2} alt="scrolling-image" />
        <img src={img3} alt="scrolling-image" />
        <img src={img1} alt="scrolling-image" />
        <img src={img2} alt="scrolling-image" />
        <img src={img3} alt="scrolling-image" />
        <img src={img1} alt="scrolling-imagev" />
    </div>
    </Marquee>
    </div>
  )
}

export default AutoScroller