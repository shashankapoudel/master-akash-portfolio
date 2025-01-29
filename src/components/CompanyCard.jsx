// import React from 'react'

// const CompanyCard = () => {

//     return (
//         <div className='flex flex-col gap-4 mt-4 '>
//             <h1 className='flex items-center justify-center text-[#022B4A] text-2xl lg:text-3xl font-bold'>Companies </h1>

//             <div className='grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-4 lg:gap-6 mt-2'>

//                 <a href='https://www.singingbowlsmaster.com/en/' target="_blank">
//                     <div className='flex flex-col items-center justify-center p-2 gap-2 border shadow-md cursor-pointer '>
//                         <img
//                             className='rounded-full w-64 h-64 object-cover p-2'
//                             src='/Images/NSHIS.png'
//                         />
//                         <h1 className='text-[#03385F] font-semibold text-center'>Natural Sound Healing International School</h1>
//                     </div>
//                 </a>

//                 <a href='https://www.soundhealinghk.com/' target="_blank">
//                     <div className='flex flex-col items-center justify-center p-2 gap-2 border shadow-md cursor-pointer '>
//                         <img
//                             className='rounded-full w-64 h-64 object-cover'
//                             src='/Images/honghandmade.png'
//                         />
//                         <h1 className='text-[#03385F] font-semibold text-center'>Hongkong Handmade Singing Bowl Expert</h1>
//                     </div>
//                 </a>

//                 <a href='https://www.himalayascraftnepal.com/' target="_blank">
//                     <div className='flex flex-col items-center justify-center p-4 gap-2 border shadow-md cursor-pointer '>
//                         <img
//                             className='rounded-full w-64 h-64 object-cover'
//                             src='/Images/HCN.png'
//                         />
//                         <h1 className='text-[#03385F] font-semibold text-center'>Himalayas Craft Nepal</h1>
//                     </div>
//                 </a>

//                 <a href='https://saktiyogaschool.com/' target="_blank">
//                     <div className='flex flex-col items-center justify-center p-5 gap-2 border shadow-md cursor-pointer '>
//                         <img
//                             className='rounded-full w-64 h-64 object-cover p-2'
//                             src='/Images/SYS.png'
//                         />
//                         <h1 className='text-[#03385F] font-semibold text-center'>Sakti Yoga School</h1>
//                     </div>
//                 </a>

//                 <a href='https://www.soundhealinghk.com/' target="_blank">
//                     <div className='flex flex-col items-center justify-center p-5 gap-2 border shadow-md cursor-pointer '>
//                         <img
//                             className='rounded-full w-64 h-64 object-cover p-2'
//                             src='/Images/SHHK.png'
//                         />
//                         <h1 className='text-[#03385F] font-semibold text-center'>Sound Healing Hongkong</h1>
//                     </div>
//                 </a>




//             </div>
//         </div>
//     )
// }

// export default CompanyCard







import React from 'react';
import { motion } from 'framer-motion';

const CompanyCard = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Stagger animation for cards
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: "hidden", // Reset animation when out of view
    };

    return (
        <div className='flex flex-col gap-4 mt-4'>
            <h1 className='flex items-center justify-center text-[#022B4A] text-2xl lg:text-3xl font-bold'>
                Companies
            </h1>

            <motion.div
                className='grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-4 lg:gap-6 mt-2'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                exit="hidden"
                viewport={{ amount: 0.2 }} // Re-animates when 20% is visible
            >

                <motion.div variants={cardVariants}>
                    <a href='https://www.singingbowlsmaster.com/en/' target="_blank" rel="noopener noreferrer">
                        <div className='flex flex-col items-center justify-center p-2 gap-2 border shadow-md cursor-pointer transition-transform duration-300 ease-out hover:scale-105'>
                            <img
                                className='rounded-full w-64 h-64 object-cover p-2'
                                src='/Images/NSHIS.png'
                                alt='Natural Sound Healing International School'
                            />
                            <h1 className='text-[#03385F] font-semibold text-center'>
                                Natural Sound Healing International School
                            </h1>
                        </div>
                    </a>
                </motion.div>

                <motion.div variants={cardVariants}>
                    <a href='https://www.soundhealinghk.com/' target="_blank" rel="noopener noreferrer">
                        <div className='flex flex-col items-center justify-center p-2 gap-2 border shadow-md cursor-pointer transition-transform duration-300 ease-out hover:scale-105'>
                            <img
                                className='rounded-full w-64 h-64 object-cover'
                                src='/Images/honghandmade.png'
                                alt='Hongkong Handmade Singing Bowl Expert'
                            />
                            <h1 className='text-[#03385F] font-semibold text-center'>
                                Hongkong Handmade Singing Bowl Expert
                            </h1>
                        </div>
                    </a>
                </motion.div>

                <motion.div variants={cardVariants}>
                    <a href='https://www.himalayascraftnepal.com/' target="_blank" rel="noopener noreferrer">
                        <div className='flex flex-col items-center justify-center p-2 gap-2 border shadow-md cursor-pointer transition-transform duration-300 ease-out hover:scale-105'>
                            <img
                                className='rounded-full w-64 h-64 object-cover'
                                src='/Images/HCN.png'
                                alt='Himalayas Craft Nepal'
                            />
                            <h1 className='text-[#03385F] font-semibold text-center'>
                                Himalayas Craft Nepal
                                <br />
                                <br />
                            </h1>
                        </div>
                    </a>
                </motion.div>

                <motion.div variants={cardVariants}>
                    <a href='https://saktiyogaschool.com/' target="_blank" rel="noopener noreferrer">
                        <div className='flex flex-col items-center justify-center p-2 gap-2 border shadow-md cursor-pointer transition-transform duration-300 ease-out hover:scale-105'>
                            <img
                                className='rounded-full w-64 h-64 object-cover p-2'
                                src='/Images/SYS.png'
                                alt='Sakti Yoga School'
                            />
                            <h1 className='text-[#03385F] font-semibold text-center'>
                                Sakti Yoga School
                                <br />
                                <br />
                            </h1>
                        </div>
                    </a>
                </motion.div>

                <motion.div variants={cardVariants}>
                    <a href='https://www.soundhealinghk.com/' target="_blank" rel="noopener noreferrer">
                        <div className='flex flex-col items-center justify-center p-2 gap-2 border shadow-md cursor-pointer transition-transform duration-300 ease-out hover:scale-105'>
                            <img
                                className='rounded-full w-64 h-64 object-cover p-2'
                                src='/Images/SHHK.png'
                                alt='Sound Healing Hongkong'
                            />
                            <h1 className='text-[#03385F] font-semibold text-center'>
                                Sound Healing Hongkong
                                <br />
                                <br />
                            </h1>
                        </div>
                    </a>
                </motion.div>

            </motion.div>
        </div>
    );
};

export default CompanyCard;

