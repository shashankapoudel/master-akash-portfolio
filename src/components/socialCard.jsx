import React from 'react'
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

const SocialCard = () => {
    return (

        <div className='flex flex-col items-center justify-center gap-6 border w-full p-5 bg-[#3c5551] font-playfair-display'>
            <h1 className='text-2xl font-semibold text-white'>Join Our Community</h1>
            <p className='text-2xl font-semibold text-white'>Join our social media platforms to learn more about our latest updates and insights</p>

            <div className='flex gap-8 text-3xl text-white'>
                <div>
                    <a href='https://www.youtube.com/@jurisnepal'><FaYoutube className='icons' /></a>
                </div>
                <div>
                    <a href='https://www.facebook.com/jurisacademynepal/'><FaFacebook className='icons' /></a>
                </div>
                <div>
                    <a href='https://www.instagram.com/jurisacademynepal/'><FaInstagram className='icons' /></a>
                </div>
            </div>
        </div>

    )
}

export default SocialCard
