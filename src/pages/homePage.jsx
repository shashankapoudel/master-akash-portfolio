// import React, { useState, useEffect } from 'react';
// import ServiceCard from '../components/ServiceCard';
// import GalleryCard from '../components/GalleryCard';
// import { motion, AnimatePresence } from 'framer-motion';
// import { GrFormPrevious } from "react-icons/gr";
// import { GrFormNext } from "react-icons/gr";
// import { useNavigate } from 'react-router-dom';
// import SocialCard from '../components/socialCard';
// import StatsCounter from '../components/StatsCounter';

// const Home = () => {
//     const images = [
//         '/Images/home1.jpeg',
//         '/Images/homePhoto.jpg',
//         '/Images/homePhoto3.png',
//         '/Images/homePhoto4.png',
//     ];

//     const [currentImageIndex, setCurrentImageIndex] = useState(0);
//     const [isHovered, setIsHovered] = useState(false)
//     const [direction, setDirection] = useState(1);

//     useEffect(() => {
//         let interval;
//         if (!isHovered) {
//             interval = setInterval(() => {

//                 setDirection(1);
//                 setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);

//             }, 4000);
//         }
//         return () => clearInterval(interval);
//     }, [isHovered]);

//     const handleNext = () => {
//         setDirection(1);
//         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     };

//     const handlePrevious = () => {
//         setDirection(-1);
//         setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//     };

//     return (
//         <div className='p-2 md:p-5 lg:p-6'>

//             <div className="flex flex-col lg:flex-row md:flex-col justify-between gap-4 shadow-lg p-2">

//                 <div className="flex flex-col items-center justify-center w-full lg:w-1/2 order-none lg:order-1 p-4 ">

//                     <div className="w-full">

//                         <img
//                             src={images[currentImageIndex]}
//                             alt={`HomePage photo ${currentImageIndex + 1}`}
//                             className=" w-full h-[250px] md:h-[450px] object-contain px-0 lg:px-6 md:px-4"
//                             loading="lazy"
//                         />

//                     </div>

//                     <div className="flex bottom-0 left-1/2 mt-2 w-full items-center justify-center gap-2">

//                         <button
//                             onClick={handlePrevious}
//                             className="bg-black bg-opacity-50 bg-transparent text-gray-800 rounded-full hover:bg-opacity-70 transition text-xl"
//                         >
//                             <GrFormPrevious />
//                         </button>

//                         <button
//                             onClick={handleNext}
//                             className="text-gray-800 bg-black bg-opacity-50 bg-transparent text-xl  rounded-full hover:bg-opacity-70 transition"
//                         >
//                             <GrFormNext />
//                         </button>

//                     </div>

//                 </div>

//                 <div className="w-full lg:w-1/2 flex flex-col justify-center p-0 md:p-4 lg:p-8 py-4">

//                     <div className='flex items-end justify-end '>
//                         <p className="flex text-center lg:text-end text-xl md:text-3xl lg:text-3xl font-bold md:font-semibold  text-[#3c5551] font-poppins">
//                             Himalayas master Akash Banjara
//                         </p>
//                     </div>

//                     <p className="text-[#666666] font-medium lg:text-lg text-sm md:text-xl font-poppins text-justify max-w-4xl py-4">
//                         Akash Banjara is a visionary spiritual teacher, sound healer, and meditation guide with over 20 years of experience. Born into a musical family in Nepal, his journey is deeply rooted in the wisdom of Himalayan yogis and gurus. Blending ancient teachings with modern insights, Akash inspires individuals worldwide to find peace, clarity, and purpose through yoga, meditation, and transformative sound healing. Known for his humility, compassion, and profound connection to his heritage, he creates uplifting experiences that nurture inner harmony and holistic wellness.His journey is a testament to the profound impact of sound healing, meditation, and yoga in cultivating peace, happiness, and purpose. <br />
//                     </p>

//                     <a
//                         href='/about'
//                         className='text-right font-poppins text-[#a7594d] font-semibold text-lg '>
//                         Read more..
//                     </a>
//                 </div>
//             </div>

//             <div className='p-0 md:p-4 lg:p-8'>
//                 <ServiceCard />
//             </div>

//             <div className='p-0 md:p-4 lg:p-8'>
//                 <GalleryCard />
//             </div>

//             <div className='p-0 md:p-4 lg:p-8'>
//                 <StatsCounter />
//             </div>

//             <div className=' mt-4 mb-4'>
//                 <SocialCard />
//             </div>

//         </div>
//     );
// };

// export default Home;






import React, { useState, useEffect } from 'react';
import ServiceCard from '../components/ServiceCard';
import GalleryCard from '../components/GalleryCard';
import { motion, AnimatePresence } from 'framer-motion';
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import SocialCard from '../components/socialCard';
import StatsCounter from '../components/StatsCounter';

const Home = () => {
    const images = [
        '/Images/home1.jpeg',
        '/Images/homePhoto.jpg',
        '/Images/homePhoto3.png',
        '/Images/homePhoto4.png',
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false)
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        let interval;
        if (!isHovered) {
            interval = setInterval(() => {

                setDirection(1);
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);

            }, 4000);
        }
        return () => clearInterval(interval);
    }, [isHovered]);

    const handleNext = () => {
        setDirection(1);
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevious = () => {
        setDirection(-1);
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className=''>


            <div className="lg:relative md:relative flex flex-col gap-4">

                <div className="lg:relative md:relative w-full">
                    <img
                        src="/Images/homePhoto.jpg"
                        alt='testimonial image'
                        className="object-cover w-full lg:h-[550px]  h-auto"
                        loading='lazy'
                    />

                    <div className="lg:absolute md:absolute inset-0 flex flex-col justify-center items-center text-center   gap-4 lg:gap-8 p-2 lg:top-32 ">

                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 2 }}
                            className=" text-center lg:w-2/3 bg-[#a7594d] lg:bg-opacity-40 bg-opacity-50 p-5"
                        // className=" text-center w-2/3"
                        >

                            <p className='text-[#FFFFFF] font-normal font-poppins text-xl tracking-wider'>
                                Akash Banjara is a visionary spiritual teacher, sound healer, and meditation guide with over 20 years of experience. Born into a musical family in Nepal, his journey is deeply rooted in the wisdom of Himalayan yogis and gurus. Blending ancient teachings with modern insights, Akash inspires individuals worldwide to find peace, clarity, and purpose through yoga, meditation, and transformative sound healing. Known for his humility, compassion, and profound connection to his heritage, he creates uplifting experiences that nurture inner harmony and holistic wellness.His journey is a testament to the profound impact of sound healing, meditation, and yoga in cultivating peace, happiness, and purpose.
                            </p>

                        </motion.div>
                    </div>

                </div>
            </div>


            <div className='p-2 md:p-5 lg:p-6'>

                <div className='p-0 md:p-4 lg:p-8'>
                    <ServiceCard />
                </div>

                <div className='p-0 md:p-4 lg:p-8'>
                    <GalleryCard />
                </div>

                <div className='p-0 md:p-4 lg:p-8'>
                    <StatsCounter />
                </div>

                <div className=' mt-4 mb-4'>
                    <SocialCard />
                </div>
            </div>

        </div>
    );
};

export default Home;
