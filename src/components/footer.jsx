import React from 'react'
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[#a7594d] w-full p-3 lg:p-8 flex flex-col lg:flex-row items-center justify-center lg:justify-between bottom-0 gap-4 lg:gap-0'>

            <div>
                <img className='lg:w-auto h-8 lg:h-16 md:h-16 w-44 transition-transform duration-300 hover:scale-105 mix-blend-multiply'
                    src='/Images/LogoName.png' />
            </div>

            <div className='flex  text-white gap-3 md:gap-4 lg:gap-6 text-sm lg:text-xl'>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'text-[#3c5551]' : 'hover:text-[#3c5551]'
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/services"
                    className={({ isActive }) =>
                        isActive ? 'text-[#3c5551]' : 'hover:text-[#3c5551]'
                    }
                >
                    Services
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? 'text-[#3c5551]' : 'hover:text-[#3c5551]'
                    }
                >
                    About
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive ? 'text-[#3c5551]' : 'hover:text-[#3c5551]'
                    }
                >
                    Contact
                </NavLink>
                <NavLink
                    to="/gallery"
                    className={({ isActive }) =>
                        isActive ? 'text-[#3c5551]' : 'hover:text-[#3c5551]'
                    }
                >
                    Gallery
                </NavLink>
                <NavLink
                    to="/blogs"
                    className={({ isActive }) =>
                        isActive ? 'text-[#3c5551]' : 'hover:text-[#3c5551]'
                    }
                >
                    Blogs
                </NavLink>
            </div>

            <div className='flex gap-6 lg:gap-12 '>

                <div>
                    <a href=''><FaYoutube className=' text-xl md:text-2xl lg:text-3xl text-white' /></a>
                </div>

                <div>
                    <a href=''><FaFacebook className='text-xl md:text-2xl lg:text-3xl text-white' /></a>
                </div>

                <div>
                    <a href=''><FaInstagram className='text-xl md:text-2xl lg:text-3xl text-white' /></a>
                </div>

            </div>

        </div>
    )
}

export default Footer
