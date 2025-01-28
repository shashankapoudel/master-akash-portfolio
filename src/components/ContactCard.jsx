import React from 'react'
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';

const ContactCard = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1 className='flex items-center justify-center text-[#022B4A] text-center text-2xl lg:text-3xl font-bold gap-2'>Let's get in touch <FaEnvelope className=' text-xl lg:text-2xl' /> </h1>
            <div className="flex flex-col lg:flex-row  p-4 lg:p-12 w-full justify-between gap-5 lg:gap-8">
                <div className=' w-full lg:w-1/2'>
                    <img
                        src='/Images/homePhoto.jpg'
                        className='object-cover rounded-lg'
                    />
                </div>

                <div className='w-full lg:w-1/2 flex flex-col gap-3 lg:gap-5'>

                    <p className='text-[#666666]'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur nesciunt dolores ipsa nostrum non dolorum corrupti rem pariatur nisi, ad labore officia eius eum impedit dolor quasi explicabo quis consectetur.
                    </p>

                    <div className='flex items-center justify-center mr-auto lg:text-lg text-base gap-1'>
                        <CgMail className='text-[#03385F] text-lg font-semibold' />
                        <p className='text-start mr-auto text-[#666666]'> <span className='font-semibold text-[#03385F]'>Mail: </span>akashbanjara@gmail.com</p>
                    </div>


                    <div className='flex items-center justify-center mr-auto gap-2'>
                        <FaPhoneAlt className=' text-[#03385F] text-base' />
                        <p className='text-left text-[#666666] text-base lg:text-lg tracking-wide'><span className='font-semibold text-lg text-[#03385F] tracking-wider'>Nepal office: </span> +977- 9851013923, +977- 9849779890</p>
                    </div>

                    <div className='flex items-center justify-center mr-auto gap-2'>
                        <FaPhoneAlt className=' text-[#03385F]  text-base' />
                        <p className='text-left text-[#666666] text-base lg:text-lg tracking-normal'><span className='font-semibold text-[#03385F] tracking-wider'>Hongkong office:  </span>+852 - 5112 6782,  +852 9416 9123</p>
                    </div>

                    <button
                        onClick={() => navigate('/contact')}
                        className='flex items-start justify-center bg-[#044F86] w-full lg:w-1/2 text-white p-2 text-center bg-gradient-to-r from-[#044F86] to-[#0A6EB5] transition-transform duration-300  ease-out  hover:scale-105 '>
                        Book an appointment
                    </button>

                    <div className='flex flex-col mt-4 justify-center items-center'>
                        <div className='flex gap-8 items-center justify-center p-4'>
                            <a href='https://www.facebook.com/soundhealinginstructor '><FaFacebook className=' text-xl md:text-2xl lg:text-3xl text-[#1877F2]' /></a>
                            <a href='https://www.instagram.com/soundhealing.hk/'><FaInstagram className='text-xl md:text-2xl lg:text-3xl text-[#E4405F]' /></a>
                            <a href='https://www.youtube.com/@Yogi_akash/featured '><FaYoutube className='text-xl md:text-2xl lg:text-3xl text-[#FF0000]' /></a>
                        </div>

                    </div>
                </div>
            </div>




        </div>
    )
}


export default ContactCard
