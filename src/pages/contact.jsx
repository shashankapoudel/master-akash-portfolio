import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { CiPhone } from "react-icons/ci";
import Schedule from '../components/schedule';
import { FaPhoneAlt } from "react-icons/fa";
import SocialCard from '../components/socialCard';
import { MdPersonalInjury } from "react-icons/md";
import { RiHomeOfficeLine } from "react-icons/ri";

const Contact = () => {
    const navigate = useNavigate();

    return (
        <div className="flex  w-full  ">

            <div className="flex flex-col lg:flex-row lg:m-8 m-0 lg:border  w-full  font-playfair-display h-full lg:tracking-wider tracking-wide bg-[#FFFFFF]">

                <div className="flex flex-col items-center lg:w-1/2 w-full md:w-full  p-6 lg:p-10 gap-2 lg:gap-2">

                    <img
                        src='/Images/homePhoto.jpg'
                        className='w-32 h-32 rounded-full object-cover'
                    />
                    <h1 className="align-text-top text-[#111111] font-semibold text-3xl md:text-4xl lg:text-3xl">Akash Banjara</h1>

                    <div className='flex items-center justify-center mr-auto lg:text-lg text-base gap-1'>
                        <CgMail className='text-[#03385F] text-lg font-semibold' />
                        <a
                            href="mailto:akashbanjara@gmail.com"
                            className='text-start mr-auto text-[#666666] hover:underline'>
                            <span className=' text-[#03385F]'>Mail: </span>
                            akashbanjara@gmail.com
                        </a>
                    </div>


                    <div className='flex flex-col  justify-center mr-auto'>
                        <h1 className='flex text-start text-[#03385F] gap-1 text-base lg:text-lg  items-center'><MdPersonalInjury />Personal Contact:</h1>

                        <div className='flex items-center justify-center mr-auto gap-2 px-2 lg:px-4 '>
                            <FaPhoneAlt className='text-[#03385F] text-base' />
                            <a href="tel:+9779851013923" className='text-left text-[#666666] text-base lg:text-lg tracking-wide hover:underline'>
                                <span className='text-lg text-[#03385F] tracking-wider'>Nepal: </span> +977-9851013923
                            </a>
                        </div>


                        <div className='flex items-center justify-center mr-auto gap-2 px-2 lg:px-4'>
                            <FaPhoneAlt className=' text-[#03385F]  text-base' />
                            <a href='tel: +85251126782' className='hover:underline'>
                                <p className='text-left text-[#666666] text-base lg:text-lg tracking-wide'><span className=' text-[#03385F] tracking-wider'>Hongkong:  </span>+852 - 5112 6782</p>
                            </a>
                        </div>

                    </div>


                    <div className='flex flex-col  justify-center mr-auto'>
                        <h1 className='flex text-start text-[#03385F] gap-1 text-base lg:text-lg  items-center'><RiHomeOfficeLine />
                            Office Contact:</h1>


                        <div className='flex items-center justify-center mr-auto gap-2 px-2 lg:px-4 '>
                            <FaPhoneAlt className='text-[#03385F] text-base' />
                            <a href="tel:+9779849779890" className='text-left text-[#666666] text-base lg:text-lg tracking-wide hover:underline'>
                                <span className='text-lg text-[#03385F] tracking-wider'>Nepal office(Kapil): </span> +977-9849779890
                            </a>
                        </div>

                        <div className='flex items-center justify-center mr-auto gap-2 px-2 lg:px-4'>
                            <FaPhoneAlt className=' text-[#03385F]  text-base' />
                            <a href='tel: +85294169123' className='hover:underline'>
                                <p className='text-left text-[#666666] text-base lg:text-lg tracking-wide'><span className=' text-[#03385F] tracking-wider'>Hongkong office(Catherine):  </span>+852 - 9416 9123</p>
                            </a>
                        </div>

                    </div>

                    <div className='flex flex-col  mt-4'>
                        <p className='text-2xl font-playfair-display text-start mr-auto font-semibold text-[#03385F]'>Social media links:</p>

                        <div className='flex gap-8 items-center justify-center p-4'>
                            <a href='https://www.facebook.com/soundhealinginstructor '><FaFacebook className='text-2xl text-[#1877F2]' /></a>
                            <a href='https://www.instagram.com/soundhealing.hk/'><FaInstagram className='text-2xl text-[#E4405F]' /></a>
                            <a href='https://www.youtube.com/@Yogi_akash/featured '><FaYoutube className=' text-2xl text-[#FF0000]' /></a>
                        </div>

                    </div>

                </div>

                <div className="lg:border-2 border border-[#3c5551] lg:m-6 m-2"></div>

                <div className='lg:w-1/2 w-full flex flex-col items-center p-4 text-white tracking-widest gap-4'>
                    <Schedule />
                </div>

            </div>

        </div>

    );
};

export default Contact;

