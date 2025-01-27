import React, { useState, useEffect } from 'react';
import ServiceCard from '../components/ServiceCard';
import GalleryCard from '../components/GalleryCard';
import { motion, AnimatePresence } from 'framer-motion';
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const Home = () => {
    const images = [
        '/Images/homePhoto.jpg',
        '/Images/services.jpg',
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevious = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className='m-2 lg:m-6'>
            <div className="flex flex-col lg:flex-row md:flex-col justify-between p-4 gap-4">

                <div className="flex flex-col items-center justify-center w-full lg:w-1/2 order-none lg:order-1 p-0 lg:p-4">
                    <motion.div
                        key={images[currentImageIndex]}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src={images[currentImageIndex]}
                            alt={`HomePage photo ${currentImageIndex + 1}`}
                            className="w-auto h-full object-cover lg:rounded-none px-0 lg:px-8"
                        />
                    </motion.div>

                    <div className="flex bottom-0 left-1/2 mt-2 w-full items-center justify-center gap-2">
                        <button
                            onClick={handlePrevious}
                            className="text-white bg-black bg-opacity-50 p-1 rounded-full hover:bg-opacity-70 transition"
                        >
                            <GrFormPrevious />
                        </button>
                        <button
                            onClick={handleNext}
                            className="text-white bg-black bg-opacity-50 p-1 rounded-full hover:bg-opacity-70 transition"
                        >
                            <GrFormNext />
                        </button>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-0 lg:p-8 py-4">
                    <p className="flex items-start justify-start text-3xl font-semibold tracking-widest text-[#3c5551] font-poppins text-start">
                        Akash Banjara
                    </p>

                    <p className="text-[#666666] font-medium lg:text-lg text-sm font-poppins lg:tracking-wide tracking-normal text-justify max-w-4xl py-4">
                        Akash Banjara is a soulful sound healer, meditation guide, and yoga expert devoted to helping others find peace and purpose. Rooted in Nepal’s spiritual heritage and inspired by Hong Kong’s vibrant energy, Akash weaves ancient wisdom with modern insights to create transformative experiences. Through his retreats, workshops, and personal sessions, he has guided countless individuals toward inner harmony, emotional balance, and holistic wellness. Akash’s journey is one of connection and healing, inspiring a global community to embrace joy, clarity, and the beauty of mindful living.
                    </p>
                </div>
            </div>



            <div className='p-0 lg:p-8'>
                <ServiceCard />
            </div>
            <div className='p-0 lg:p-8'>
                <GalleryCard />
            </div>
        </div>
    );
};

export default Home;
