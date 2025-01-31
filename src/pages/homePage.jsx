import React, { useState, useEffect } from 'react';
import ServiceCard from '../components/ServiceCard';
import GalleryCard from '../components/GalleryCard';
import { motion, AnimatePresence } from 'framer-motion';
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const images = [
        '/Images/homePhoto.jpg',
        '/Images/services.jpg',
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false)


    useEffect(() => {
        let interval;
        if (!isHovered) {
            interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 4000);
        }

        return () => clearInterval(interval);
    }, [isHovered]);

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevious = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className='m-2 md:m-4 lg:m-6'>
            <div className="flex flex-col lg:flex-row md:flex-col justify-between p-4 gap-4">

                <div className="flex flex-col items-center justify-center w-full lg:w-1/2 order-none lg:order-1 p-0 lg:p-6">
                    <motion.div
                        key={images[currentImageIndex]}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 0 }}
                        transition={{ duration: 0.8 }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <img
                            src={images[currentImageIndex]}
                            alt={`HomePage photo ${currentImageIndex + 1}`}
                            className="w-full h-auto object-contain px-0 lg:px-7"
                        />
                    </motion.div>

                    <div className="flex bottom-0 left-1/2 mt-2 w-full items-center justify-center gap-2">
                        <button
                            onClick={handlePrevious}
                            className="text-white bg-black bg-opacity-50  rounded-full hover:bg-opacity-70 transition"
                        >
                            <GrFormPrevious />
                        </button>
                        <button
                            onClick={handleNext}
                            className="text-white bg-black bg-opacity-50  rounded-full hover:bg-opacity-70 transition"
                        >
                            <GrFormNext />
                        </button>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-0 md:p-4 lg:p-8 py-4">
                    <p className="flex items-start justify-start text-3xl font-semibold tracking-widest text-[#3c5551] font-poppins text-start">
                        Akash Banjara
                    </p>

                    <p className="text-[#666666] font-medium lg:text-lg text-sm font-poppins lg:tracking-wide tracking-normal text-justify max-w-4xl py-4">
                        Akash Banjara is a visionary spiritual teacher, sound healer, and meditation guide with over 20 years of experience. Born into a musical family in Nepal, his journey is deeply rooted in the wisdom of Himalayan yogis and gurus. Blending ancient teachings with modern insights, Akash inspires individuals worldwide to find peace, clarity, and purpose through yoga, meditation, and transformative sound healing. Known for his humility, compassion, and profound connection to his heritage, he creates uplifting experiences that nurture inner harmony and holistic wellness.His journey is a testament to the profound impact of sound healing, meditation, and yoga in cultivating peace, happiness, and purpose.
                    </p>
                </div>
            </div>



            <div className='p-0 md:p-4 lg:p-8'>
                <ServiceCard />
            </div>

            <div className='p-0 md:p-4 lg:p-8'>
                <GalleryCard />
            </div>
        </div>
    );
};

export default Home;
