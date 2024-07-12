import React from 'react';
import hero_img from '../assets/hero-img.png';

const Hero = () => {
  return (
    <div className='w-full py-[1.7rem] md:py-[2rem] px-[.7rem] md:px-[2rem] xl:px-[4rem] bg-[#111111] h-fit xl:h-[78%] rounded-[2rem] border border-white flex flex-col md:flex-row items-center justify-between'>
        <div className='text-white flex flex-col gap-[2rem] w-full xl:w-[65%]'> 
            <h1 className='hd text-4xl sm:text-5xl md:text-6xl text-center md:text-start'>
                Shop Our Stunning <br className='hidden xl:block' /> Shoe Collection
            </h1>
            <p className='txt text-center text-[10px] sm:text-[14px] md:text-[15px] md:text-start'>
            We believe that every step you take should be a statement of <br className='hidden xl:block' /> confidence and individuality. Our meticulously crafted footwear <br className='hidden xl:block' /> blends timeless elegance with modern innovation.
            </p>
            <div className='font-semibold hero-btns flex items-center gap-[1.5rem] md:gap-[2rem] mx-auto md:mx-px '>
                <button className='px-6 py-2 bg-white text-black rounded-full hover:bg-transparent hover:text-white duration-500 border border-transparent hover:border-white'>Buy now</button>
                <button className='px-6 py-2 bg-transparent text-white rounded-full border border-white hover:bg-white hover:text-black duration-500'>Explore</button>
            </div>
        </div>
        <div className='group group-hover-effect perspective flex flex-col relative'>
            <img src={hero_img} alt="hero-image" className='transform transition-transform duration-500 group-hover-3d' />
            {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-tr from-[#888A8FF0] via-lime-50 to-transparent opacity-75 blur-lg rounded-full"></div> */}
            <div className=' w-[80%] md:w-[15rem] xl:w-[22rem] group-hover-3d group: h-[0.3rem] bg-white transform transition-transform duration-500 blur-[17px] rounded-full absolute left-[4rem] md:left-[5rem] xl:left-[9rem] xl:bottom-[3rem] bottom-0 md:bottom-[.5rem]'></div>
        </div>
    </div>
  )
}

export default Hero