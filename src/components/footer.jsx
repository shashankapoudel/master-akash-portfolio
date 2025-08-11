import React from 'react'
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[#a7594d] w-full p-3 lg:p-8 flex flex-col lg:flex-row items-center justify-center lg:justify-between bottom-0 gap-4 lg:gap-0'>

            <div>
                <img
                    className='lg:w-auto h-8 lg:h-16 md:h-16 w-44 transition-transform duration-300 hover:scale-105 mix-blend-multiply'
                    loading='lazy'
                    alt='footer-image'
                    src='/Images/Logo_Footer.png'
                />
            </div>

            <div className='flex  text-white gap-3 md:gap-4 lg:gap-6 text-sm md:text-xl lg:text-xl'>

                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'text-[#28282E]' : 'hover:text-[#3c5551]'
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/services"
                    className={({ isActive }) =>
                        isActive ? 'text-[#28282E]' : 'hover:text-[#3c5551]'
                    }
                >
                    Services
                </NavLink>

                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? 'text-[#28282E]' : 'hover:text-[#3c5551]'
                    }
                >
                    About
                </NavLink>

                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive ? 'text-[#28282E]' : 'hover:text-[#3c5551]'
                    }
                >
                    Contact
                </NavLink>

                <NavLink
                    to="/gallery"
                    className={({ isActive }) =>
                        isActive ? 'text-[#28282E]' : 'hover:text-[#3c5551]'
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

                <NavLink
                    to="/faq"
                    className={({ isActive }) =>
                        isActive ? 'text-[#3c5551]' : 'hover:text-[#3c5551]'
                    }
                >
                    Faq
                </NavLink>

            </div>

            <div className='flex gap-6 lg:gap-12 '>

                <div>
                    <a href='https://www.facebook.com/healingmasterakash' target="_blank" rel="noopener noreferrer" >
                        <FaFacebook className='text-xl md:text-2xl lg:text-2xl text-white hover:scale-125' />
                    </a>
                </div>

                <div>
                    <a href='https://www.instagram.com/soundhealing.hk/' target="_blank" rel="noopener noreferrer">
                        <FaInstagram className='text-xl md:text-2xl lg:text-2xl text-white hover:scale-125' />
                    </a>
                </div>

                <div>
                    <a href='https://www.youtube.com/@Healingmaster_akash' target="_blank" rel="noopener noreferrer">
                        <FaYoutube className=' text-xl md:text-2xl lg:text-2xl text-white hover:scale-125' />
                    </a>
                </div>

            </div>

        </div>
    )
}

export default Footer
