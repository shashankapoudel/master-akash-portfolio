import React from 'react'
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-[#a7594d] w-full p-8 flex items-center justify-between bottom-0'>


            <div>
                <img className='lg:w-auto h-16 w-44 transition-transform duration-300 hover:scale-105 mix-blend-multiply'
                    src='/Images/logo1.jpg' />
            </div>




            <div className='flex  text-white gap-6 text-x'>
                <a className='hover:text-[#3c5551]' href='/'>Home</a>
                <a className='hover:text-[#3c5551]' href='/services'>Services</a>
                <a className='hover:text-[#3c5551]' href='/contact'>Contact</a>
                <a className='hover:text-[#3c5551]' href='/gallery'>Gallery</a>
                <a className='hover:text-[#3c5551]' href='/blogs'>Blogs</a>
                <a className='hover:text-[#3c5551]' href='/testimonials'>Testimonials</a>
            </div>

            <div className='flex gap-12'>

                <div>
                    <a href=''><FaYoutube className='text-3xl text-white' /></a>
                </div>

                <div>
                    <a href=''><FaFacebook className='text-3xl text-white' /></a>
                </div>

                <div>
                    <a href=''><FaInstagram className='text-3xl text-white' /></a>
                </div>

            </div>

        </div>
    )
}

export default Footer
