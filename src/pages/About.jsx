
import React, { useState } from 'react';
import CompanyCard from '../components/CompanyCard';
import Quotes from '../components/Quotes';
import ContactCard from '../components/ContactCard';
import { motion } from 'framer-motion';
// import { FaUser, FaHistory, FaTrophy } from 'react-icons/fa';
// import { FaHandsHelping } from 'react-icons/fa';
// import { WiDirectionRight } from "react-icons/wi";
import ServiceSegment from '../components/ServiceSegment';
import PhotoModal from '../components/PhotoModal';

const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState("")

    const openModal = (image) => {
        setSelectedImage(image)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setSelectedImage("")
        setIsModalOpen(false)
    }


    const handleClick = (index) => {
        setIsModalOpen(true)
        openModal(Images[index])
    }

    const Images = [
        '/Images/Gallery/Image1.jpg',
        '/Images/Gallery/Image2.jpg',
        '/Images/Gallery/Image3.jpg',
        '/Images/Gallery/Image4.jpg',
        '/Images/Gallery/Image5.jpg',
        '/Images/Gallery/Image3.jpg',
        '/Images/Gallery/Image4.jpg',
        '/Images/Gallery/Image5.jpg',
    ];




    return (
        <div className='m-2 lg:m-4 tracking-wide'>

            <div className='p-3 md:p-8 lg:p-10 flex flex-col gap-8 lg:gap-16 items-center'>

                <div className='w-full'>
                    <h2 className="flex gap-1 items-center justify-center text-2xl lg:text-3xl font-bold text-[#022B4A] mb-2 text-center">
                        About me
                    </h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='flex flex-col md:flex-col lg:flex-row gap-8'
                    >
                        <div className='relative w-full lg:w-1/2 h-full flex items-center mt-2 gap-2'>
                            <div className="absolute top-2 left-2 w-full h-full bg-[#a7594d] rounded-lg -rotate-1"></div>
                            <img
                                src='/Images/homePhoto.jpg'
                                alt='About Me'
                                className='relative rounded-lg shadow-lg w-full h-auto object-cover'
                                loading='lazy'
                            />
                        </div>

                        <div className='w-full lg:w-1/2 flex items-center'>
                            <p className="text-[#666666] leading-relaxed font-poppins text-sm lg:text-base md:text-lg tracking-wider  text-justify ">
                                I am Master Akash Banjara, a Senior Nepalese Singing Bowl Healing Master, deeply rooted in the spiritual traditions of the Himalayas. My journey into sound healing began in the tranquil mountains of Gorkha, Nepal, where I was captivated by the soothing vibrations of traditional singing bowls. Drawn to their ability to calm the mind and heal the body, I immersed myself in the study of sound frequencies and their profound effects on human consciousness.
                                <br />
                                What started as a personal quest for balance and inner peace soon evolved into a lifelong mission to share the transformative power of sound healing with the world. Over the years, I have honed my craft, blending ancient wisdom with modern scientific knowledge to create unique and deeply healing experiences. My work is driven by a passion to help others achieve mental clarity, emotional balance, and physical well-being through the universal language of music and sound.
                                <br />
                                I am also a skilled musician, proficient in playing a variety of traditional and modern musical instruments, including singing bowls, gongs, conches, handbells, flutes, and handpans. My compositions and music productions reflect my dedication to merging therapeutic soundscapes with artistic expression.
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className='flex flex-col items-center justify-center py-8 w-full'>
                    <h2 className="flex items-center justify-center gap-1 text-2xl lg:text-3xl font-bold text-[#022B4A] mb-2 text-center">
                        My Background
                    </h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='flex flex-col-reverse md:flex-col-reverse lg:flex-row gap-8 items-stretch w-full'
                    >
                        <div className='w-full lg:w-1/2 flex items-center mt-2'>
                            <p className="text-[#666666] leading-relaxed font-poppins text-sm lg:text-base md:text-lg tracking-wider  text-justify ">
                                Born in the sacred Himalayas of Gorkha, Nepal, my spiritual journey began at a young age. I was deeply inspired by the rich cultural and spiritual heritage of my homeland, which led me to study with revered sages and scholars in monasteries and temples across Nepal and India. My formal training in sound healing, yoga, meditation, and energy transformation took place in the monastic regions of northern India, where I learned under the guidance of renowned Himalayan yoga masters.
                                <br />
                                My expertise spans a wide range of healing practices, including yoga, sound therapy, Reiki, meditation, mantra chanting, and energy transformation. I have combined these traditional methods with modern scientific research to develop innovative sound therapy techniques that address chronic conditions such as cancer, stroke, migraines, and arthritis. I have also created specialized treatments for pregnant women and immunity enhancement, achieving clinically proven results.
                                <br />
                                As a certified sound healer and meditation teacher, I have conducted workshops, retreats, and other various personalized sessions for my diverse  audiences around the world. My ability to adapt my teachings to different cultures and individuals has made my services highly sought-after across the globe.
                            </p>
                        </div>

                        <div className='relative w-full lg:w-1/2 h-full flex items-center'>
                            <div className="absolute top-2 left-2 w-full h-full bg-[#a7594d] rounded-lg -rotate-1"></div>
                            <img
                                src='/Images/homePhoto.jpg'
                                alt='About Me'
                                className='relative rounded-lg shadow-lg w-full h-auto object-cover'
                                loading='lazy'
                            />
                        </div>

                    </motion.div>
                </div>


                <div className='flex flex-col items-center justify-center py-8 w-full h-auto'>
                    <h2 className="flex items-center justify-center gap-1 text-2xl lg:text-3xl font-bold text-[#022B4A] mb-2 text-center">
                        My Achievements
                    </h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='flex flex-col md:flex-col lg:flex-row gap-8 items-stretch w-full'
                    >
                        <div className=' w-full lg:w-1/2 h-full flex items-center mt-2 gap-2'>

                            {/* <div className="absolute top-2 left-2 w-full h-full bg-[#a7594d] rounded-lg -rotate-1"></div> */}
                            <div className='grid grid-cols-2 lg:grid-cols-4 justify-center w-full gap-2'>
                                {
                                    Images.map((img, index) => (
                                        <img
                                            onClick={() => handleClick(index)}
                                            key={index}
                                            src={img}
                                            alt='About Me'
                                            className='rounded-lg shadow-lg w-full lg:h-[240px] h-[140px] md:h-[240px] object-cover cursor-pointer hover:scale-105'
                                            loading='lazy'
                                        />
                                    ))
                                }
                            </div>
                        </div>
                        {isModalOpen && (
                            <PhotoModal
                                closeModal={closeModal}
                                selectedImage={selectedImage}
                            />
                        )}

                        <div className='w-full lg:w-1/2 flex items-center'>
                            <p className="text-[#666666] leading-relaxed font-poppins text-sm lg:text-base md:text-lg tracking-wider  text-justify text-justify-last">
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



