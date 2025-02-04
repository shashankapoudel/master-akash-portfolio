import React from 'react'
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

const SocialCard = () => {
    return (

        <div className='flex flex-col items-center justify-center gap-8 border w-full p-2 md:p-5 lg:p-5 bg-[#1E5A86] font-playfair-display rounded-2xl mt-10'>
            <h1 className='text-2xl font-semibold text-white'>Join Our Community</h1>

            <p className=' text-xl md:text-2xl lg:text-2xl font-normal md:font-semibold lg:font-semibold text-white text-center'>Join our social media platforms to learn more about our latest updates and insights</p>

            <div className='flex gap-8 text-3xl text-white'>
                <div className='flex gap-8 items-center justify-center p-4'>
                    <a href='https://www.facebook.com/soundhealinginstructor '><FaFacebook className=' text-xl md:text-2xl lg:text-3xl text-white transition-transform duration-300  ease-out  hover:scale-125' /></a>

                    <a href='https://www.instagram.com/soundhealing.hk/'><FaInstagram className='text-xl md:text-2xl lg:text-3xl text-white transition-transform duration-300  ease-out  hover:scale-125' /></a>

                    <a href='https://www.youtube.com/@Yogi_akash/featured '><FaYoutube className='text-xl md:text-2xl lg:text-3xl text-white transition-transform duration-300  ease-out  hover:scale-125' /></a>
                </div>
            </div>
        </div>

    )
}

export default SocialCard

