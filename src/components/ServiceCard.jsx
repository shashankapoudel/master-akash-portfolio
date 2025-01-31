// import React from 'react'

// const ServiceCard = () => {
//     return (
//         <div className='flex flex-col gap-2 relative mt-4 p-4 font-poppins'>

//             <h1 className='text-center text-3xl font-semibold text-[#111111]'>Services</h1>

//             <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-2'>

//                 <div className=' flex flex-col items-center p-4 lg:p-12 border border-[#E6E7F3] bg-[#FFFFFF] rounded-lg'>
//                     <h1 className='text-[#022B4A] font-bold'>Meditation and Mindfulness</h1>
//                     <img
//                         className='w-full rounded-md mb-4'
//                         src='/Images/homePhoto.jpg'
//                     />
//                     <p className='text-[#666666]  font-poppins'>In a world filled with distractions, finding inner peace can feel like a distant dream. Yogi Akash offers personalized meditation guidance to help you reconnect with your inner self, achieve mental clarity, and cultivate lasting tranquility.</p>

//                     <button
//                         className='w-full bg-[#044F86] rounded-md p-2 text-white mt-2  bg-gradient-to-r from-[#044F86] to-[#0A6EB5] transition-transform duration-300  ease-out  hover:scale-105  '
//                     >
//                         Book my session
//                     </button>
//                 </div>

//                 <div className='flex flex-col items-center p-4 lg:p-12 border border-[#E6E7F3] bg-[#FFFFFF] rounded-lg'>
//                     <h1 className='text-[#022B4A] font-bold'>Sound Baths and Relaxation</h1>
//                     <img
//                         className='w-full rounded-md mb-4'
//                         src='/Images/homePhoto.jpg'
//                     />
//                     <p className='text-[#666666]'>With years of experience in sound therapy and a deep understanding of vibrational healing, Yogi Akash brings a unique blend of ancient wisdom and modern insights to his classes. Whether you are a curious beginner or an experienced practitioner, his guidance will empower you to unlock the full potential of sound healing.</p>

//                     <button
//                         className=' w-full  bg-[#044F86] rounded-md p-2 text-white mt-2  bg-gradient-to-r from-[#044F86] to-[#0A6EB5] transition-transform duration-300  ease-out  hover:scale-105'
//                     >
//                         Book my session
//                     </button>
//                 </div>

//                 <div className='flex flex-col items-center p-4 lg:p-12 border border-[#E6E7F3] bg-[#FFFFFF] rounded-lg'>

//                     <h1 className='text-[#022B4A] font-bold'>Sound Healing Therapy</h1>
//                     <img
//                         className='w-full rounded-md mb-4'
//                         src='/Images/homePhoto.jpg'
//                     />
//                     <p className='text-[#666666]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque veritatis amet fugiat sunt aliquid inventore laboriosam obcaecati perferendis quasi quam? Vitae hic delectus mollitia vel nesciunt expedita dicta consequatur dolor.</p>

//                     <button
//                         className='w-full bg-[#044F86] rounded-md p-2 text-white mt-2  bg-gradient-to-r from-[#044F86] to-[#0A6EB5] transition-transform duration-300  ease-out  hover:scale-105'
//                     >
//                         Book my session
//                     </button>

//                 </div>

//                 <div className='flex flex-col items-center p-4 lg:p-12 border border-[#E6E7F3] bg-[#FFFFFF] rounded-lg'>
//                     <h1 className='text-[#022B4A] font-bold'>Yoga and Energy Awakening</h1>
//                     <img
//                         className='w-full rounded-md mb-4'
//                         src='/Images/homePhoto.jpg'
//                     />
//                     <p className='text-[#666666]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque veritatis amet fugiat sunt aliquid inventore laboriosam obcaecati perferendis quasi quam? Vitae hic delectus mollitia vel nesciunt expedita dicta consequatur dolor.</p>

//                     <button
//                         className='w-full flex items-center justify-center bg-[#044F86] rounded-md p-2 text-white mt-2  bg-gradient-to-r from-[#044F86] to-[#0A6EB5] transition-transform duration-300  ease-out  hover:scale-105 '
//                     >
//                         Book my session
//                     </button>
//                 </div>

//             </div>

//         </div>
//     )
// }

// export default ServiceCard





import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
    {
        title: '1. Meditation and Mindfulness',
        description:
            'In a world filled with distractions, finding inner peace can feel like a distant dream. Yogi Akash offers personalized meditation guidance to help you reconnect with your inner self, achieve mental clarity, and cultivate lasting tranquility.',
        image: '/Images/homePhoto.jpg',
    },
    {
        title: '2. Sound Baths and Relaxation',
        description:
            'With years of experience in sound therapy and a deep understanding of vibrational healing, Yogi Akash brings a unique blend of ancient wisdom and modern insights to his classes. Whether you are a curious beginner or an experienced practitioner.',
        image: '/Images/homePhoto.jpg',
    },
    {
        title: '3. Sound Healing Therapy',
        description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque veritatis amet fugiat sunt aliquid inventore laboriosam obcaecati perferendis quasi quam? Vitae hic delectus mollitia vel nesciunt expedita dicta consequatur dolor.',
        image: '/Images/homePhoto.jpg',
    },
    {
        title: '4. Yoga and Energy Awakening',
        description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque veritatis amet fugiat sunt aliquid inventore laboriosam obcaecati perferendis quasi quam? Vitae hic delectus mollitia vel nesciunt expedita dicta consequatur dolor.',
        image: '/Images/homePhoto.jpg',
    },
];

const ServiceCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        let interval;
        if (!isHovered) {
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
            }, 3000); // Change service every 5 seconds
        }

        return () => clearInterval(interval);
    }, [isHovered]);

    return (
        <div className='flex flex-col gap-2 relative mt-4 p-4 font-poppins'>
            <h1 className='text-center text-3xl font-semibold text-[#111111]'>Services</h1>

            <div className='grid place-items-center mt-2'>
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        aria-live='polite'
                        aria-atomic='true'
                        className='flex flex-col gap-4 w-full p-5 lg:p-8 border border-[#E6E7F3]  bg-[#FFFFFF]  rounded-3xl lg:rounded-custom'
                    >
                        <h1 className='text-[#022B4A] font-bold text-xl text-center'>
                            {services[currentIndex].title}
                        </h1>
                        <div className='flex flex-col lg:flex-row md:flex-col gap-4 lg:gap-8'>

                            <div className='w-full md:w-full lg:w-1/2 p-0 lg:p-4'>
                                <img
                                    className='w-full object-cover rounded-custom lg:rounded-home-custom mb-4'
                                    src={services[currentIndex].image}
                                    alt={services[currentIndex].title}
                                />
                            </div>

                            <div className='w-full md:w-full lg:w-1/2 flex flex-col items-start justify-start p-0 lg:p-4 gap-4'>

                                <p className='text-[#666666] p-0 lg:p-2'>
                                    {services[currentIndex].description}
                                </p>

                                <button
                                    className=' w-full lg:w-1/2 bg-[#044F86] rounded-md p-2 text-white mt-2 bg-gradient-to-r from-[#044F86] to-[#0A6EB5] transition-transform duration-300 ease-out hover:scale-105'
                                >
                                    Book my session
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ServiceCard;



