import React from 'react'
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-[#a7594d] w-full p-6 flex items-center justify-around  bottom-0 '>

            <div className='flex flex-col text-white gap-2 text-xl px-4 '>
                <a className='hover:text-[#3c5551]' href='/'>Home</a>
                <a className='hover:text-[#3c5551]' href='/services'>Services</a>
                <a className='hover:text-[#3c5551]' href='/contact'>Contact</a>
            </div>

            <div className='flex gap-24'>

                <div>
                    <a href=''><FaYoutube className='text-4xl text-white' /></a>
                </div>

                <div>
                    <a href=''><FaFacebook className='text-4xl text-white' /></a>
                </div>

                <div>
                    <a href=''><FaInstagram className='text-4xl text-white' /></a>
                </div>

            </div>

        </div>
    )
}

export default Footer
