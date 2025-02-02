

import React from 'react';
import CompanyCard from '../components/CompanyCard';
import Quotes from '../components/Quotes';
import ContactCard from '../components/ContactCard';
import { motion } from 'framer-motion';
import { FaUser, FaHistory, FaTrophy } from 'react-icons/fa';
import { FaHandsHelping } from 'react-icons/fa';
import { WiDirectionRight } from "react-icons/wi";
import ServiceSegment from '../components/ServiceSegment';

const About = () => {
    return (
        <div className='m-2 lg:m-4 tracking-wide'>

            <div className='p-3 md:p-5 lg:p-10 flex flex-col gap-16 items-center'>

                <div className='w-full'>
                    <h2 className="flex gap-1 items-center justify-center text-2xl lg:text-3xl font-bold text-[#022B4A] mb-2 text-center">
                        About me <FaUser className="text-2xl" />
                    </h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='flex flex-col md:flex-col lg:flex-row gap-8 items-stretch'
                    >

                        <div className='w-full lg:w-1/2 h-full flex items-center'>
                            <img
                                src='/Images/homePhoto.jpg'
                                alt='About Me'
                                className='rounded-lg shadow-lg w-full h-auto object-cover'
                            />
                        </div>

                        <div className='w-full lg:w-1/2 flex items-center'>
                            <p className="text-[#666666] leading-relaxed font-poppins">
                                I am Master Akash Banjara, a Senior Nepalese Singing Bowl Healing Master, deeply rooted in the spiritual traditions of the Himalayas. My journey into sound healing began in the tranquil mountains of Gorkha, Nepal, where I was captivated by the soothing vibrations of traditional singing bowls. Drawn to their ability to calm the mind and heal the body, I immersed myself in the study of sound frequencies and their profound effects on human consciousness.
                                <br />
                                What started as a personal quest for balance and inner peace soon evolved into a lifelong mission to share the transformative power of sound healing with the world. Over the years, I have honed my craft, blending ancient wisdom with modern scientific knowledge to create unique and deeply healing experiences. My work is driven by a passion to help others achieve mental clarity, emotional balance, and physical well-being through the universal language of music and sound.
                                <br />
                                I am also a skilled musician, proficient in playing a variety of traditional and modern instruments, including singing bowls, gongs, conches, handbells, flutes, and handpans. My compositions and music productions reflect my dedication to merging therapeutic soundscapes with artistic expression.
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className='flex flex-col items-center justify-center py-8 w-full'>
                    <h2 className="flex items-center justify-center gap-1 text-2xl lg:text-3xl font-bold text-[#022B4A] mb-2 text-center">
                        My Background <FaHistory className="text-xl lg:text-2xl" />
                    </h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='flex flex-col-reverse md:flex-col-reverse lg:flex-row gap-8 items-stretch w-full'
                    >
                        <div className='w-full lg:w-1/2 flex items-center'>
                            <p className="text-[#666666] leading-relaxed font-poppins">
                                Born in the sacred Himalayas of Gorkha, Nepal, my spiritual journey began at a young age. I was deeply inspired by the rich cultural and spiritual heritage of my homeland, which led me to study with revered sages and scholars in monasteries and temples across Nepal and India. My formal training in sound healing, yoga, meditation, and energy transformation took place in the monastic regions of northern India, where I learned under the guidance of renowned Himalayan yoga masters.
                                <br />
                                My expertise spans a wide range of healing practices, including yoga, sound therapy, Reiki, meditation, mantra chanting, and energy transformation. I have combined these traditional methods with modern scientific research to develop innovative sound therapy techniques that address chronic conditions such as cancer, stroke, migraines, and arthritis. I have also created specialized treatments for pregnant women and immunity enhancement, achieving clinically proven results.
                                <br />
                                As a certified sound healer and meditation teacher, I have conducted workshops, retreats, and personalized sessions for diverse audiences worldwide. My ability to adapt my teachings to different cultures and individuals has made my services highly sought-after across the globe.
                            </p>
                        </div>

                        <div className='w-full lg:w-1/2 h-full flex items-center'>
                            <img
                                src='/Images/homePhoto.jpg'
                                alt='About Me'
                                className='rounded-lg shadow-lg w-full h-auto object-cover'
                            />
                        </div>

                    </motion.div>
                </div>


                <div className='flex flex-col items-center justify-center py-8 w-full'>
                    <h2 className="flex items-center justify-center gap-1 text-2xl lg:text-3xl font-bold text-[#022B4A] mb-2 text-center">
                        My Achievements <FaTrophy className="text-xl lg:text-2xl" />
                    </h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='flex flex-col md:flex-col lg:flex-row gap-8 items-stretch w-full'
                    >
                        <div className=' relative w-full lg:w-1/2 h-full flex items-center'>

                            <div className="absolute top-2 left-2 w-full h-full bg-teal-900 rounded-lg -rotate-2"></div>
                            <img
                                src='/Images/homePhoto.jpg'
                                alt='About Me'
                                className=' relative rounded-lg shadow-lg w-full h-auto object-cover'
                            />
                        </div>

                        <div className='w-full lg:w-1/2 flex items-center'>
                            <p className="text-[#666666] leading-relaxed font-poppins">
                                With over a decade of experience in sound therapy and teaching, I have touched the lives of thousands of individuals worldwide. I have healed tens of thousands through my transformative sound therapy sessions and trained countless students in the art of natural healing. My work has been recognized by the Nepalese government, making me the first sound therapist to receive official qualifications in this field.
                                <br />
                                I founded the International School of Natural Sound Healing, which has established healing centers and branches in multiple countries. My teachings and techniques have reached a global audience, and I have been invited to share my wisdom in countries such as Germany, Vietnam, Taiwan, Malaysia, Thailand, and Italy.
                                <br />
                                In addition to my healing work, I am an accomplished musician and composer. I have produced and published my own music albums, blending therapeutic soundscapes with artistic expression. My collaborations with fellow sound therapy practitioners have further enriched my contributions to the field.
                                <br />
                                My greatest achievement lies in the countless individuals who have found peace, balance, and healing through my work. Their stories of transformation inspire me to continue my mission of spreading the healing power of sound to every corner of the world.
                            </p>
                        </div>

                    </motion.div>
                </div>

            </div>

            <div className='flex flex-col p-4 md:p-5 lg:p-8 border-t border-b w-full'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <ServiceSegment />
                    {/* <div>
                        <h1 className='flex items-center justify-center text-2xl lg:text-3xl font-bold text-[#022B4A] gap-1'>My Services <FaHandsHelping className=" text-2xl lg:text-3xl" /></h1>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4 font-poppins w-full'>
                        <div>
                            <h1 className='text-[#022B4A] font-bold'>Service name</h1>
                            <p className='text-[#666666]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque veritatis amet fugiat sunt aliquid inventore laboriosam obcaecati perferendis quasi quam? Vitae hic delectus mollitia vel nesciunt expedita dicta consequatur dolor.</p>
                        </div>

                        <div>
                            <h1 className='text-[#022B4A] font-bold'>Service name</h1>
                            <p className='text-[#666666]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque veritatis amet fugiat sunt aliquid inventore laboriosam obcaecati perferendis quasi quam? Vitae hic delectus mollitia vel nesciunt expedita dicta consequatur dolor.</p>
                        </div>

                        <div>
                            <h1 className='text-[#022B4A] font-bold'>Service name</h1>
                            <p className='text-[#666666]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque veritatis amet fugiat sunt aliquid inventore laboriosam obcaecati perferendis quasi quam? Vitae hic delectus mollitia vel nesciunt expedita dicta consequatur dolor.</p>
                        </div>

                        <div>
                            <h1 className='text-[#022B4A] font-bold'>Service name</h1>
                            <p className='text-[#666666]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque veritatis amet fugiat sunt aliquid inventore laboriosam obcaecati perferendis quasi quam? Vitae hic delectus mollitia vel nesciunt expedita dicta consequatur dolor.</p>
                        </div>

                        <button
                            className='flex items-center hover:text-[#3c5551] rounded-md lg:absolute bottom-1 right-6 transition-transform duration-300 ease-out hover:scale-105'
                            href='/services'
                        >
                            Learn more<WiDirectionRight className='text-3xl' />
                        </button> */}
                    {/* </div> */}
                </motion.div>
            </div >


            <div className='p-4 md:p-5 lg:p-12 font-poppins w-full'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <CompanyCard />
                </motion.div>
            </div>

            <div className='p-4 md:p-5 lg:p-12 font-poppins w-full'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Quotes />
                </motion.div>
            </div>

            <div className='p-4 md:p-5 lg:p-12 font-poppins w-full'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <ContactCard />
                </motion.div>
            </div>

        </div >
    );
};

export default About;






// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";


// export default function About() {
//     const images = [

//         "/Images/homePhoto.jpg",
//         "/Images/Gallery/Image3.jpg",
//         "/Images/Gallery/Image5.jpg",




//     ];
//     const [currentImage, setCurrentImage] = useState(images[0]);
//     const [index, setIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setIndex((prevIndex) => (prevIndex + 1) % images.length);
//             setCurrentImage(images[(index + 1) % images.length]);
//         }, 5000); // Change every 5 seconds

//         return () => clearInterval(interval);
//     }, [index]);

//     return (
//         <div className="relative w-full h-full ">
//             {/* Background Image with Framer Motion Animation */}
//             <div className="absolute top-0 left-0 w-full ">
//                 <AnimatePresence>
//                     <motion.div
//                         key={currentImage}
//                         initial={{ opacity: 0, scale: 1 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         exit={{ opacity: 0, scale: 1.1 }}
//                         transition={{ duration: 1.5, ease: "easeInOut" }}
//                         className="fixed top-30 left-0 w-full h-full bg-cover bg-center"
//                         style={{ backgroundImage: `url(${currentImage})` }}
//                         viewport={{ amount: 0.2 }}
//                     />
//                 </AnimatePresence>

//                 {/* Gradient Overlay for Better Contrast */}
//                 <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
//             </div>

//             {/* Floating Content */}
//             <div className="relative z-10 flex flex-col items-center justify-center min-h-[250vh] p-10 space-y-10">
//                 <motion.p
//                     className="text-lg text-white drop-shadow-md p-10 backdrop-blur-md"
//                     initial={{ x: -50, opacity: 0 }} // Initial state (off-screen to the left)
//                     whileInView={{ x: 0, opacity: 1 }} // Animate when in view
//                     transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }} // Animation settings
//                     viewport={{ once: false, amount: 0.2 }} // Trigger every time, when 20% of the element is in view
//                 >
//                     <motion.h1
//                         className="text-5xl font-bold text-[#666666] drop-shadow-md"
//                         initial={{ y: -30, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         transition={{ duration: 1, ease: "easeOut" }}
//                         viewport={{ amount: 0.2 }}
//                     >
//                         About me
//                     </motion.h1>
//                     I am Master Akash Banjara, a Senior Nepalese Singing Bowl Healing Master, deeply rooted in the spiritual traditions of the Himalayas. My journey into sound healing began in the tranquil mountains of Gorkha, Nepal, where I was captivated by the soothing vibrations of traditional singing bowls. Drawn to their ability to calm the mind and heal the body, I immersed myself in the study of sound frequencies and their profound effects on human consciousness.
//                     <br />
//                     What started as a personal quest for balance and inner peace soon evolved into a lifelong mission to share the transformative power of sound healing with the world. Over the years, I have honed my craft, blending ancient wisdom with modern scientific knowledge to create unique and deeply healing experiences. My work is driven by a passion to help others achieve mental clarity, emotional balance, and physical well-being through the universal language of music and sound.
//                     <br />
//                     I am also a skilled musician, proficient in playing a variety of traditional and modern instruments, including singing bowls, gongs, conches, handbells, flutes, and handpans. My compositions and music productions reflect my dedication to merging therapeutic soundscapes with artistic expression.
//                 </motion.p>
//             </div>

//             <div className="relative z-10 flex flex-col items-center justify-center min-h-[200vh] p-10 space-y-10">
//                 <motion.p
//                     className="text-lg text-white drop-shadow-md p-10 backdrop-blur-md"
//                     initial={{ x: -100, opacity: 0 }} // Initial state (off-screen to the left)
//                     whileInView={{ x: 0, opacity: 1 }} // Animate when in view
//                     transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} // Animation settings
//                     viewport={{ once: false, amount: 0.2 }} // Trigger every time, when 20% of the element is in view
//                 >
//                     <motion.h1
//                         className="text-5xl font-bold text-[#666666] drop-shadow-md"
//                         initial={{ y: -30, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         transition={{ duration: 1, ease: "easeOut" }}
//                         viewport={{ amount: 0.2 }}
//                     >
//                         My Background
//                     </motion.h1>
//                     Born in the sacred Himalayas of Gorkha, Nepal, my spiritual journey began at a young age. I was deeply inspired by the rich cultural and spiritual heritage of my homeland, which led me to study with revered sages and scholars in monasteries and temples across Nepal and India. My formal training in sound healing, yoga, meditation, and energy transformation took place in the monastic regions of northern India, where I learned under the guidance of renowned Himalayan yoga masters.
//                     <br />
//                     My expertise spans a wide range of healing practices, including yoga, sound therapy, Reiki, meditation, mantra chanting, and energy transformation. I have combined these traditional methods with modern scientific research to develop innovative sound therapy techniques that address chronic conditions such as cancer, stroke, migraines, and arthritis. I have also created specialized treatments for pregnant women and immunity enhancement, achieving clinically proven results.
//                     <br />
//                     As a certified sound healer and meditation teacher, I have conducted workshops, retreats, and personalized sessions for diverse audiences worldwide. My ability to adapt my teachings to different cultures and individuals has made my services highly sought-after across the globe.
//                 </motion.p>
//             </div>

//             <div className="relative z-10 flex flex-col items-center justify-center min-h-[200vh] p-10 space-y-10">
//                 <motion.p
//                     className="text-lg text-white drop-shadow-md p-10 backdrop-blur-md"
//                     initial={{ x: -100, opacity: 0 }} // Initial state (off-screen to the left)
//                     whileInView={{ x: 0, opacity: 1 }} // Animate when in view
//                     transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} // Animation settings
//                     viewport={{ once: false, amount: 0.2 }} // Trigger every time, when 20% of the element is in view
//                 >
//                     <motion.h1
//                         className="text-5xl font-bold text-[#666666] drop-shadow-md"
//                         initial={{ y: -30, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         transition={{ duration: 1, ease: "easeOut" }}
//                         viewport={{ amount: 0.2 }}
//                     >
//                         My Achievements
//                     </motion.h1>
//                     With over a decade of experience in sound therapy and teaching, I have touched the lives of thousands of individuals worldwide. I have healed tens of thousands through my transformative sound therapy sessions and trained countless students in the art of natural healing. My work has been recognized by the Nepalese government, making me the first sound therapist to receive official qualifications in this field.
//                     <br /><br />
//                     I founded the International School of Natural Sound Healing, which has established healing centers and branches in multiple countries. My teachings and techniques have reached a global audience, and I have been invited to share my wisdom in countries such as Germany, Vietnam, Taiwan, Malaysia, Thailand, and Italy.
//                     <br /><br />
//                     In addition to my healing work, I am an accomplished musician and composer. I have produced and published my own music albums, blending therapeutic soundscapes with artistic expression. My collaborations with fellow sound therapy practitioners have further enriched my contributions to the field.
//                     <br /><br />
//                     My greatest achievement lies in the countless individuals who have found peace, balance, and healing through my work. Their stories of transformation inspire me to continue my mission of spreading the healing power of sound to every corner of the world.
//                 </motion.p>
//             </div>


//         </div>
//     );
// }



// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function About() {
//     const images = [
//         "/Images/homePhoto.jpg",
//         "/Images/Gallery/Image3.jpg",
//         "/Images/Gallery/Image5.jpg",
//     ];

//     const [currentImage, setCurrentImage] = useState(images[0]);
//     const [index, setIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setIndex((prevIndex) => (prevIndex + 1) % images.length);
//             setCurrentImage(images[(index + 1) % images.length]);
//         }, 5000); // Change every 5 seconds

//         return () => clearInterval(interval);
//     }, [index]);

//     return (
//         <div className="relative w-full min-h-screen overflow-hidden">
//             {/* Background Image with Framer Motion Animation */}
//             <div className="absolute top-0 left-0 w-full h-full">
//                 <AnimatePresence>
//                     <motion.div
//                         key={currentImage}
//                         initial={{ opacity: 0, scale: 1 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         exit={{ opacity: 0, scale: 1.1 }}
//                         transition={{ duration: 1.5, ease: "easeInOut" }}
//                         className="fixed top-0 left-0 w-full h-full bg-cover bg-center"
//                         style={{ backgroundImage: `url(${currentImage})` }}
//                     />
//                 </AnimatePresence>

//                 {/* Gradient Overlay for Better Contrast */}
//                 <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
//             </div>

//             {/* Floating Content - Appears on Scroll */}
//             <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 space-y-8">
//                 {/* About Me Section */}
//                 <motion.div
//                     className="max-w-4xl w-full bg-black/50 backdrop-blur-md rounded-lg p-8 shadow-lg"
//                     initial={{ y: 100, opacity: 0 }}
//                     whileInView={{ y: 0, opacity: 1 }}
//                     transition={{ duration: 0.8, ease: "easeOut" }}
//                     viewport={{ once: true, amount: 0.2 }}
//                 >
//                     <motion.h1
//                         className="text-5xl font-bold text-white mb-6"
//                         initial={{ y: -30, opacity: 0 }}
//                         whileInView={{ y: 0, opacity: 1 }}
//                         transition={{ duration: 1, ease: "easeOut" }}
//                     >
//                         About Me
//                     </motion.h1>
//                     <p className="text-lg text-white leading-relaxed">
//                         I am Master Akash Banjara, a Senior Nepalese Singing Bowl Healing Master, deeply rooted in the spiritual traditions of the Himalayas. My journey into sound healing began in the tranquil mountains of Gorkha, Nepal, where I was captivated by the soothing vibrations of traditional singing bowls. Drawn to their ability to calm the mind and heal the body, I immersed myself in the study of sound frequencies and their profound effects on human consciousness.
//                         <br /><br />
//                         What started as a personal quest for balance and inner peace soon evolved into a lifelong mission to share the transformative power of sound healing with the world. Over the years, I have honed my craft, blending ancient wisdom with modern scientific knowledge to create unique and deeply healing experiences. My work is driven by a passion to help others achieve mental clarity, emotional balance, and physical well-being through the universal language of music and sound.
//                         <br /><br />
//                         I am also a skilled musician, proficient in playing a variety of traditional and modern instruments, including singing bowls, gongs, conches, handbells, flutes, and handpans. My compositions and music productions reflect my dedication to merging therapeutic soundscapes with artistic expression.
//                     </p>
//                 </motion.div>
//             </div>

//             {/* My Background Section */}
//             <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 space-y-8">
//                 <motion.div
//                     className="max-w-4xl w-full bg-black/50 backdrop-blur-md rounded-lg p-8 shadow-lg"
//                     initial={{ y: 100, opacity: 0 }}
//                     whileInView={{ y: 0, opacity: 1 }}
//                     transition={{ duration: 0.8, ease: "easeOut" }}
//                     viewport={{ once: true, amount: 0.2 }}
//                 >
//                     <motion.h1
//                         className="text-5xl font-bold text-white mb-6"
//                         initial={{ y: -30, opacity: 0 }}
//                         whileInView={{ y: 0, opacity: 1 }}
//                         transition={{ duration: 1, ease: "easeOut" }}
//                     >
//                         My Background
//                     </motion.h1>
//                     <p className="text-lg text-white leading-relaxed">
//                         Born in the sacred Himalayas of Gorkha, Nepal, my spiritual journey began at a young age. I was deeply inspired by the rich cultural and spiritual heritage of my homeland, which led me to study with revered sages and scholars in monasteries and temples across Nepal and India. My formal training in sound healing, yoga, meditation, and energy transformation took place in the monastic regions of northern India, where I learned under the guidance of renowned Himalayan yoga masters.
//                         <br /><br />
//                         My expertise spans a wide range of healing practices, including yoga, sound therapy, Reiki, meditation, mantra chanting, and energy transformation. I have combined these traditional methods with modern scientific research to develop innovative sound therapy techniques that address chronic conditions such as cancer, stroke, migraines, and arthritis. I have also created specialized treatments for pregnant women and immunity enhancement, achieving clinically proven results.
//                         <br /><br />
//                         As a certified sound healer and meditation teacher, I have conducted workshops, retreats, and personalized sessions for diverse audiences worldwide. My ability to adapt my teachings to different cultures and individuals has made my services highly sought-after across the globe.
//                     </p>
//                 </motion.div>
//             </div>

//             {/* My Achievements Section */}
//             <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 space-y-8">
//                 <motion.div
//                     className="max-w-4xl w-full bg-black/50 backdrop-blur-md rounded-lg p-8 shadow-lg"
//                     initial={{ y: 100, opacity: 0 }}
//                     whileInView={{ y: 0, opacity: 1 }}
//                     transition={{ duration: 0.8, ease: "easeOut" }}
//                     viewport={{ once: true, amount: 0.2 }}
//                 >
//                     <motion.h1
//                         className="text-5xl font-bold text-white mb-6"
//                         initial={{ y: -30, opacity: 0 }}
//                         whileInView={{ y: 0, opacity: 1 }}
//                         transition={{ duration: 1, ease: "easeOut" }}
//                     >
//                         My Achievements
//                     </motion.h1>
//                     <p className="text-lg text-white leading-relaxed">
//                         With over a decade of experience in sound therapy and teaching, I have touched the lives of thousands of individuals worldwide. I have healed tens of thousands through my transformative sound therapy sessions and trained countless students in the art of natural healing. My work has been recognized by the Nepalese government, making me the first sound therapist to receive official qualifications in this field.
//                         <br /><br />
//                         I founded the International School of Natural Sound Healing, which has established healing centers and branches in multiple countries. My teachings and techniques have reached a global audience, and I have been invited to share my wisdom in countries such as Germany, Vietnam, Taiwan, Malaysia, Thailand, and Italy.
//                         <br /><br />
//                         In addition to my healing work, I am an accomplished musician and composer. I have produced and published my own music albums, blending therapeutic soundscapes with artistic expression. My collaborations with fellow sound therapy practitioners have further enriched my contributions to the field.
//                         <br /><br />
//                         My greatest achievement lies in the countless individuals who have found peace, balance, and healing through my work. Their stories of transformation inspire me to continue my mission of spreading the healing power of sound to every corner of the world.
//                     </p>
//                 </motion.div>
//             </div>
//         </div>
//     );
// }