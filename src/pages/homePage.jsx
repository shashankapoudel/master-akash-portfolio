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
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import SocialCard from '../components/socialCard';
import StatsCounter from '../components/StatsCounter';
import { Helmet } from "react-helmet-async";



const Home = () => {
    const images = [
        '/Images/home1.jpeg',
        '/Images/homePhoto.jpg',
        '/Images/homePhoto3.png',
        '/Images/homePhoto4.png',
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [direction, setDirection] = useState(1);
    const [showText, setShowText] = useState(true);

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

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setShowText(scrollTop < 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNext = () => {
        setDirection(1);
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevious = () => {
        setDirection(-1);
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div>

            <Helmet>
                <title>Yogi Akash - Akash Banjara | Sound Healing & Yoga in Nepal</title>
                <meta
                    name="description"
                    content="Official website of Yogi Akash (Akash Banjara) — sound healer, yoga teacher, and meditation guide from Nepal with over 20 years of experience."
                />
                <meta
                    name="keywords"
                    content="Yogi Akash, Akash Banjara, sound healing Nepal, yoga teacher Nepal, meditation guide"
                />
            </Helmet>

            <div className="flex flex-col lg:hidden p-1">

                <img
                    src="/Images/home5.jpg"
                    alt="Yogi Akash - Akash Banjara sound healing and yoga in Nepal"
                    className="object-cover w-full h-[250px]"
                />

                <div className="  p-6">
                    <h1 className="text-[#666666] font-medium text-base  font-poppins text-justify max-w-4xl py-4">
                        Yogi Akash, also known as Akash Banjara, is a visionary spiritual teacher, sound healer, and meditation guide with over 20 years of experience. Born into a musical family in Nepal, his journey is deeply rooted in the wisdom of Himalayan yogis and gurus. Blending ancient teachings with modern insights, Akash Banjara inspires individuals worldwide to find peace, clarity, and purpose through yoga, meditation, and transformative sound healing. Known for his humility, compassion, and profound connection to his heritage, he creates uplifting experiences that nurture inner harmony and holistic wellness. The journey of Akash Banjara is a testament to the profound impact of sound healing, meditation, and yoga in cultivating peace, happiness, and purpose.
                    </h1>
                </div>

            </div>


            <div className="relative hidden lg:block">
                <div className="w-full relative">

                    <img
                        src="/Images/home5.jpg"
                        alt="Yogi Akash - Akash Banjara sound healing and yoga in Nepal"
                        className="object-cover w-full h-[550px]"
                        loading='lazy'
                    />

                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center gap-4 lg:gap-8 p-2 top-0">
                        <AnimatePresence>
                            {showText && (
                                <motion.div
                                    key="text"
                                    initial={{ y: 100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -100, opacity: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-center w-2/3 bg-[#a7594d] bg-opacity-40 p-5"
                                >

                                    <p className='text-white font-normal font-poppins text-xl tracking-wider'>
                                        Akash Banjara is a visionary spiritual teacher, sound healer, and meditation guide with over 20 years of experience. Born into a musical family in Nepal, his journey is deeply rooted in the wisdom of Himalayan yogis and gurus. Blending ancient teachings with modern insights, Akash inspires individuals worldwide to find peace, clarity, and purpose through yoga, meditation, and transformative sound healing. Known for his humility, compassion, and profound connection to his heritage, he creates uplifting experiences that nurture inner harmony and holistic wellness. His journey is a testament to the profound impact of sound healing, meditation, and yoga in cultivating peace, happiness, and purpose.
                                    </p>

                                    <a
                                        className='font-bold text-xl  text-[#ffffff]'
                                        href='/about'>Read more about Akash Banjara...
                                    </a>

                                </motion.div>
                            )}
                        </AnimatePresence>
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

                <div className='mt-4 mb-4'>
                    <SocialCard />
                </div>

            </div>
        </div>
    );
};

export default Home;
