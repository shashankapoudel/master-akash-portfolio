import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { CiPhone } from "react-icons/ci";
import Schedule from '../components/schedule';
import { FaPhoneAlt } from "react-icons/fa";
import SocialCard from '../components/socialCard';

const Contact = () => {
    const navigate = useNavigate();

    return (
        <div className="flex w-full  ">

            <div className="flex flex-col lg:flex-row  lg:m-6 m-0 lg:border border-[#3c5551]  w-full  font-playfair-display h-full tracking-wider p-2">

                <div className="flex flex-col items-center lg:w-1/2 w-full md:w-full text-white p-6 gap-2">
                    <h1 className="align-text-top text-[#a7594d] font-bold text-4xl md:text-5xl">Akash Bagale</h1>

                    <div className='flex  mr-auto items-center justify-center gap-1 text-xl md:text-2xl lg:text-xl'>
                        <FaPhoneAlt className=' text-[#a7594d]' />
                        <p className='text-start mr-auto  font-medium text-[#a7594d]'><span className='font-semibold text-[#a7594d]' >Contact us at:</span></p>
                    </div>

                    <div className='flex items-center justify-center mr-auto text-xl gap-1'>
                        <CgMail className='text-[#a7594d] text-xl font-semibold' />
                        <p className='text-start mr-auto text-[#a7594d]'> <span className='font-semibold text-[#a7594d]'>Gmail: </span>akashbagale@gmail.com</p>
                    </div>

                    <div className='mr-auto text-xl font-playfair-display'>
                        <p className='text-xl font-semibold text-[#a7594d]'>Office contact:</p>
                        <p className='text-left text-[#a7594d]'><span className='font-semibold text-[#a7594d]'>Nepal office: </span> +977- 9851013923, +977- 9849779890</p>
                        <p className='text-left text-[#a7594d]'><span className='font-semibold text-[#a7594d]'>Hongkong office:  </span>+852 - 5112 6782,  +852 9416 9123</p>
                    </div>

                    <div className=' flex flex-col items-center justify-center'>
                        <p className='text-3xl text-[#a7594d] font-semibold'>Youtube</p>
                        <a href='https://www.youtube.com/@Yogi_akash/featured '><FaYoutube className=' text-6xl text-red-500' /></a>
                    </div>

                    <div className='flex flex-col  mt-4'>
                        <p className='text-2xl font-playfair-display text-start mr-auto font-semibold text-[#a7594d]'>Social media links:</p>

                        <div className='flex gap-8 items-center justify-center p-4'>
                            <a href='https://www.facebook.com/soundhealinginstructor '><FaFacebook className='text-2xl text-[#a7594d]' /></a>
                            <a href='https://www.instagram.com/soundhealing.hk/'><FaInstagram className='text-2xl text-[#a7594d]' /></a>
                        </div>
                    </div>

                </div>

                <div className="w-100 lg:border-2 border border-[#3c5551] lg:m-4 m-2"></div>

                <div className='lg:w-1/2 w-full flex flex-col items-center p-4 text-white tracking-widest gap-4'>

                    <h1 className='font-semibold text-2xl text-[#a7594d]'>Make Call Appointment</h1>

                    <Schedule />
                </div>
            </div>
            {/* <SocialCard /> */}
        </div>

    );
};

export default Contact;

