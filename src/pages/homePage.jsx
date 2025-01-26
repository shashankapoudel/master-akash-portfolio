
// import React from 'react';
// import ServiceCard from '../components/ServiceCard';
// import GalleryCard from '../components/GalleryCard';


// const Home = () => {
//     return (
//         <div className=' m-2 lg:m-6'>

//             <div className="flex flex-col lg:flex-row justify-between p-4 gap-4">

//                 <div className="flex items-center justify-center w-full lg:w-1/2 order-none lg:order-1 p-0 lg:p-6">
//                     <img
//                         src="/Images/homePhoto.jpg"
//                         alt="HomePage photo"
//                         className="w-auto h-full object-cover lg:rounded-none"
//                     />
//                 </div>

//                 <div className="w-full lg:w-1/2 flex flex-col items-center p-0 lg:p-8 py-4">

//                     <p className="flex items-start justify-start text-3xl font-semibold tracking-widest text-[#3c5551] font-poppins  text-start">
//                         Akash Bagale
//                     </p>

//                     <p className="text-[#666666] font-medium lg:text-lg text-sm font-poppins lg:tracking-wide tracking-normal text-justify max-w-4xl py-4">
//                         Akash Banjara is a visionary sound healer, meditation guide, and yoga expert dedicated to transforming lives through ancient practices and modern insights. Rooted in the spiritual essence of Nepal and inspired by the dynamic energy of Hong Kong, Akash has built a global community of individuals seeking inner harmony and holistic wellness. His journey is a testament to the profound impact of sound healing, meditation, and yoga in cultivating peace, happiness, and purpose.Akash Banjara is a certified sound healer and meditation teacher with extensive experience in conducting workshops, retreats, and personalized sessions. He has guided numerous practitioners and wellness enthusiasts in their journeys to achieve mental clarity, emotional balance, and physical well-being. With a portfolio spanning diverse audiences and cultures, Akash’s expertise is both profound and adaptable, making his services highly sought-after worldwide
//                     </p>
//                 </div>

//             </div>

//             <div className='p-0 lg:p-8'>
//                 <ServiceCard />
//             </div>
//             <div className='p-0 lg:p-8'>
//                 <GalleryCard />
//             </div>
//         </div>
//     );
// };

// export default Home;




// import React, { useState, useEffect } from 'react';
// import ServiceCard from '../components/ServiceCard';
// import GalleryCard from '../components/GalleryCard';
// import { motion, AnimatePresence } from 'framer-motion';

// const Home = () => {
//     const images = [
//         '/Images/homePhoto.jpg',
//         '/Images/services.jpg',
//     ];

//     const [currentImageIndex, setCurrentImageIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//         }, 4000);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className='m-2 lg:m-6'>

//             <div className="flex flex-col lg:flex-row justify-between p-4 gap-4">

//                 <div className="flex items-center justify-center w-full lg:w-1/2 order-none lg:order-1 p-0  lg:p-6">
//                     <motion.div
//                         key={images[currentImageIndex]}
//                         initial={{ opacity: 0, x: -50 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         exit={{ opacity: 0, x: 50 }}
//                         transition={{ duration: 0.8 }}
//                         className=""
//                     >
//                         <img
//                             src={images[currentImageIndex]}
//                             alt={`HomePage photo ${currentImageIndex + 1}`}
//                             className="w-auto h-full object-cover lg:rounded-none px-0 lg:px-6"
//                         />
//                     </motion.div>
//                 </div>

//                 <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-0 lg:p-8 py-4">
//                     <p className="flex items-start justify-start text-3xl font-semibold tracking-widest text-[#3c5551] font-poppins text-start">
//                         Akash Banjara
//                     </p>

//                     <p className="text-[#666666] font-medium lg:text-lg text-sm font-poppins lg:tracking-wide tracking-normal text-justify max-w-4xl py-4">
//                         Akash Banjara is a soulful sound healer, meditation guide, and yoga expert devoted to helping others find peace and purpose. Rooted in Nepal’s spiritual heritage and inspired by Hong Kong’s vibrant energy, Akash weaves ancient wisdom with modern insights to create transformative experiences. Through his retreats, workshops, and personal sessions, he has guided countless individuals toward inner harmony, emotional balance, and holistic wellness. Akash’s journey is one of connection and healing, inspiring a global community to embrace joy, clarity, and the beauty of mindful living.
//                     </p>
//                 </div>
//             </div>

//             <div className='p-0 lg:p-8'>
//                 <ServiceCard />
//             </div>
//             <div className='p-0 lg:p-8'>
//                 <GalleryCard />
//             </div>
//         </div>
//     );
// };

// export default Home;




import React, { useState, useEffect } from 'react';
import ServiceCard from '../components/ServiceCard';
import GalleryCard from '../components/GalleryCard';
import { motion, AnimatePresence } from 'framer-motion';

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

    return (
        <div className='m-2 lg:m-6'>
            <div className="flex flex-col lg:flex-row justify-between p-4 gap-4">
                <div className="flex items-center justify-center w-full lg:w-1/2 order-none lg:order-1 p-0 lg:p-8">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentImageIndex}
                            initial={{ opacity: 0, x: -30, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 0.95 }}
                            exit={{ opacity: 0, x: 50, scale: 0.9 }}
                            transition={{ duration: 0.9, ease: 'easeInOut' }}
                            className="relative overflow-hidden shadow-xl rounded-lg"
                        >
                            <img
                                src={images[currentImageIndex]}
                                alt={`HomePage photo ${currentImageIndex + 1}`}
                                className="w-auto h-full object-cover transform transition-transform duration-500 hover:scale-[1.03]"
                            />

                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 4, ease: 'linear' }}
                                    className="h-full bg-[#3c5551]"
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <motion.div
                    className="w-full lg:w-1/2 flex flex-col items-center justify-center p-0 lg:p-8 py-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <motion.p
                        className="flex items-start justify-start text-3xl font-semibold tracking-widest text-[#3c5551] font-poppins text-start mb-4"
                        whileHover={{ scale: 1.02 }}
                    >
                        Akash Banjara
                    </motion.p>

                    <motion.p
                        className="text-[#666666] font-medium lg:text-lg text-sm font-poppins lg:tracking-wide tracking-normal text-justify max-w-4xl py-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        Akash Banjara is a soulful sound healer, meditation guide, and yoga expert devoted to helping others find peace and purpose. Rooted in Nepal’s spiritual heritage and inspired by Hong Kong’s vibrant energy, Akash weaves ancient wisdom with modern insights to create transformative experiences. Through his retreats, workshops, and personal sessions, he has guided countless individuals toward inner harmony, emotional balance, and holistic wellness. Akash’s journey is one of connection and healing, inspiring a global community to embrace joy, clarity, and the beauty of mindful living.
                    </motion.p>
                </motion.div>
            </div>

            <motion.div
                className='p-0 lg:p-8'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <ServiceCard />
            </motion.div>

            <motion.div
                className='p-0 lg:p-8'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                <GalleryCard />
            </motion.div>
        </div>
    );
};

export default Home;