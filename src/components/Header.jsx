import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className='flex items-center w-full xl:w-[85%] justify-between mx-auto mb-[2rem]'>
        <div className="logo w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem] cursor-pointer">
            <img src={logo} alt="logo" />
        </div>

        <nav className='text-white text-[8px] sm:text-[14px] xl:text-[18px]'>
            <ul className='flex items-center gap-[.3rem] sm:gap-[.8rem] md:gap-[1.2rem] '>
                <li>
                    <a href="#" className='border-b border-white duration-500'>Home</a>
                </li>
                <li>
                    <a href="" className='border-b border-transparent hover:border-white duration-500'>About Us</a>
                </li>
                <li>
                    <a href="" className='border-b border-transparent hover:border-white duration-500'>Testimonials</a>
                </li>
                <li>
                    <a href="" className='border-b border-transparent hover:border-white duration-500'>Contact Us</a>
                </li>
            </ul>
        </nav>

        <div>
            <button className='bg-white text-black text-[12px] md:text-[16px] font-medium px-3 md:px-6 py-1 md:py-2 rounded-full border border-transparent hover:bg-transparent hover:border-white hover:text-white duration-500'>Sign up</button>
        </div>
    </div>
  )
}

export default Header