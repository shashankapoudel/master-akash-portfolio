// import React from 'react'
// import CompanyCard from '../components/CompanyCard'
// import Quotes from '../components/Quotes'
// import ContactCard from '../components/ContactCard'
// import { motion } from 'framer-motion';
// import { FaUser, FaHistory, FaTrophy } from 'react-icons/fa';

// const About = () => {
//     return (
//         <div className='m-2 lg:m-4 tracking-wider'>

//             <div className='p-4 lg:p-8 relative'>
//                 <img
//                     className='w-full h-auto object-contain'
//                     src='/Images/homePhoto.jpg'
//                 />
//             </div>

//             <div className='p-4 lg:p-12 flex flex-col gap-4'>

//                 <div className='py-4'>
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.2 }}
//                     >
//                         <h2 className=" flex gap-1  items-center text-3xl font-bold text-[#022B4A] mb-2">About me<FaUser className="text-2xl" />
//                         </h2>
//                         <p className="text-[#666666] leading-relaxed text-lg tracking-wide font-poppins">
//                             I am Master Akash Banjara, a Senior Nepalese Singing Bowl Healing Master, deeply rooted in the spiritual traditions of the Himalayas. My journey into sound healing began in the tranquil mountains of Gorkha, Nepal, where I was captivated by the soothing vibrations of traditional singing bowls. Drawn to their ability to calm the mind and heal the body, I immersed myself in the study of sound frequencies and their profound effects on human consciousness.

//                             What started as a personal quest for balance and inner peace soon evolved into a lifelong mission to share the transformative power of sound healing with the world. Over the years, I have honed my craft, blending ancient wisdom with modern scientific knowledge to create unique and deeply healing experiences. My work is driven by a passion to help others achieve mental clarity, emotional balance, and physical well-being through the universal language of music and sound.

//                             I am also a skilled musician, proficient in playing a variety of traditional and modern instruments, including singing bowls, gongs, conches, handbells, flutes, and handpans. My compositions and music productions reflect my dedication to merging therapeutic soundscapes with artistic expression.
//                         </p>
//                     </motion.div>
//                 </div>

//                 <div className='py-4'>
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.2 }}
//                     >
//                         <h2 className="flex items-center gap-2 text-3xl font-bold text-[#022B4A] mb-2">My Background<FaHistory className="text-2xl " /></h2>
//                         <p className="text-[#666666] leading-relaxed text-lg tracking-wide font-poppins">
//                             Born in the sacred Himalayas of Gorkha, Nepal, my spiritual journey began at a young age. I was deeply inspired by the rich cultural and spiritual heritage of my homeland, which led me to study with revered sages and scholars in monasteries and temples across Nepal and India. My formal training in sound healing, yoga, meditation, and energy transformation took place in the monastic regions of northern India, where I learned under the guidance of renowned Himalayan yoga masters.

//                             My expertise spans a wide range of healing practices, including yoga, sound therapy, Reiki, meditation, mantra chanting, and energy transformation. I have combined these traditional methods with modern scientific research to develop innovative sound therapy techniques that address chronic conditions such as cancer, stroke, migraines, and arthritis. I have also created specialized treatments for pregnant women and immunity enhancement, achieving clinically proven results.

//                             As a certified sound healer and meditation teacher, I have conducted workshops, retreats, and personalized sessions for diverse audiences worldwide. My ability to adapt my teachings to different cultures and individuals has made my services highly sought-after across the globe.
//                         </p>
//                     </motion.div>
//                 </div>

//                 <div className='py-4'>
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.2 }}
//                     >
//                         <h2 className="flex items-center text-3xl font-bold text-[#022B4A] mb-2 gap-1">My Achievements  <FaTrophy className="text-2xl" /></h2>

//                         <p className="text-[#666666] leading-relaxed text-lg tracking-wide font-poppins">
//                             With over a decade of experience in sound therapy and teaching, I have touched the lives of thousands of individuals worldwide. I have healed tens of thousands through my transformative sound therapy sessions and trained countless students in the art of natural healing. My work has been recognized by the Nepalese government, making me the first sound therapist to receive official qualifications in this field.
//                             <br />
//                             I founded the International School of Natural Sound Healing, which has established healing centers and branches in multiple countries. My teachings and techniques have reached a global audience, and I have been invited to share my wisdom in countries such as Germany, Vietnam, Taiwan, Malaysia, Thailand, and Italy.
//                             <br />
//                             In addition to my healing work, I am a accomplished musician and composer. I have produced and published my own music albums, blending therapeutic soundscapes with artistic expression. My collaborations with fellow sound therapy practitioners have further enriched my contributions to the field.

//                             My greatest achievement lies in the countless individuals who have found peace, balance, and healing through my work. Their stories of transformation inspire me to continue my mission of spreading the healing power of sound to every corner of the world.
//                         </p>
//                     </motion.div>
//                 </div>
//             </div>

//             <div className='flex flex-col p-5 lg:p-12 gap-4 relative border-t border-b '>
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.2 }}
//                 >
//                     <div>
//                         <h1 className='text-center text-3xl font-bold text-[#022B4A]'>My Services</h1>
//                         <p></p>
//                     </div>

//                     <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-2 text-lg font-poppins'>
//                         <div className=''>
//                             <h1 className='text-[#022B4A] font-bold'>Service name</h1>
//                             <p className='text-[#666666]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque veritatis amet fugiat sunt aliquid inventore laboriosam obcaecati perferendis quasi quam? Vitae hic delectus mollitia vel nesciunt expedita dicta consequatur dolor.</p>
//                         </div>

//                         <div>
//                             <h1 className='text-[#022B4A] font-bold'>Service name</h1>
//                             <p className='text-[#666666]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque veritatis amet fugiat sunt aliquid inventore laboriosam obcaecati perferendis quasi quam? Vitae hic delectus mollitia vel nesciunt expedita dicta consequatur dolor.</p>
//                         </div>

//                         <div>
//                             <h1 className='text-[#022B4A] font-bold'>Service name</h1>
//                             <p className='text-[#666666]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque veritatis amet fugiat sunt aliquid inventore laboriosam obcaecati perferendis quasi quam? Vitae hic delectus mollitia vel nesciunt expedita dicta consequatur dolor.</p>
//                         </div>

//                         <div>
//                             <h1 className='text-[#022B4A] font-bold'>Service name</h1>
//                             <p className='text-[#666666]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque veritatis amet fugiat sunt aliquid inventore laboriosam obcaecati perferendis quasi quam? Vitae hic delectus mollitia vel nesciunt expedita dicta consequatur dolor.</p>
//                         </div>

//                         <button
//                             className='hover:text-[#3c5551] rounded-md lg:absolute bottom-1 right-6'
//                             href='/services'>Learn more
//                         </button>
//                     </div>
//                 </motion.div>
//             </div>


//             <div className='p-4 lg:p-12  font-poppins'>
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.2 }}
//                 >
//                     <CompanyCard />
//                 </motion.div>
//             </div>

//             <div className='p-4 lg:p-12 font-poppins'>
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.2 }}
//                 >
//                     <Quotes />
//                 </motion.div>
//             </div>

//             <div className='p-4 lg:p-12  font-poppins'>
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.2 }}
//                 >
//                     <ContactCard />
//                 </motion.div>
//             </div>

//         </div >
//     )
// }

// export default About








import React from 'react';
import CompanyCard from '../components/CompanyCard';
import Quotes from '../components/Quotes';
import ContactCard from '../components/ContactCard';
import { motion } from 'framer-motion';
import { FaUser, FaHistory, FaTrophy } from 'react-icons/fa';
import { FaHandsHelping } from 'react-icons/fa';
import { WiDirectionRight } from "react-icons/wi";




const About = () => {
    return (
        <div className='m-2 lg:m-4 tracking-wide'>

            {/* Hero Image */}
            {/* <div className='p-4 lg:p-8 relative'>
                <img
                    className='w-full h-auto object-contain'
                    src='/Images/homePhoto.jpg'
                    alt='Home'
                />
            </div> */}


            <div className='p-3 lg:p-9 flex flex-col gap-5'>


                <div className=''>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='flex flex-col lg:flex-row gap-8 items-center'
                    >

                        <div className='w-full lg:w-1/2 h-full'>
                            <img
                                src='/Images/homePhoto.jpg'
                                alt='About Me'
                                className='rounded-lg shadow-lg w-full h-full object-cover'
                            />
                        </div>


                        <div className='w-full lg:w-1/2'>
                            <h2 className="flex gap-1 items-center justify-center lg:justify-normal text-2xl lg:text-3xl font-bold text-[#022B4A] mb-2">
                                About me <FaUser className="text-2xl" />
                            </h2>
                            <p className="text-[#666666] leading-relaxed font-poppins">
                                I am Master Akash Banjara, a Senior Nepalese Singing Bowl Healing Master, deeply rooted in the spiritual traditions of the Himalayas. My journey into sound healing began in the tranquil mountains of Gorkha, Nepal, where I was captivated by the soothing vibrations of traditional singing bowls. Drawn to their ability to calm the mind and heal the body, I immersed myself in the study of sound frequencies and their profound effects on human consciousness.
                                <br /><br />
                                What started as a personal quest for balance and inner peace soon evolved into a lifelong mission to share the transformative power of sound healing with the world. Over the years, I have honed my craft, blending ancient wisdom with modern scientific knowledge to create unique and deeply healing experiences. My work is driven by a passion to help others achieve mental clarity, emotional balance, and physical well-being through the universal language of music and sound.
                                <br /><br />
                                I am also a skilled musician, proficient in playing a variety of traditional and modern instruments, including singing bowls, gongs, conches, handbells, flutes, and handpans. My compositions and music productions reflect my dedication to merging therapeutic soundscapes with artistic expression.
                            </p>
                        </div>
                    </motion.div>
                </div>


                <div className='py-8'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='flex flex-col lg:flex-row gap-8 items-center'
                    >
                        <div className='w-full lg:w-1/2'>
                            <h2 className="flex items-center justify-center gap-1 text-2xl lg:text-3xl font-bold text-[#022B4A] mb-2 text-center">
                                My Background <FaHistory className="text-xl lg:text-2xl" />
                            </h2>
                            <p className="text-[#666666] leading-relaxed font-poppins">
                                Born in the sacred Himalayas of Gorkha, Nepal, my spiritual journey began at a young age. I was deeply inspired by the rich cultural and spiritual heritage of my homeland, which led me to study with revered sages and scholars in monasteries and temples across Nepal and India. My formal training in sound healing, yoga, meditation, and energy transformation took place in the monastic regions of northern India, where I learned under the guidance of renowned Himalayan yoga masters.
                                <br /><br />
                                My expertise spans a wide range of healing practices, including yoga, sound therapy, Reiki, meditation, mantra chanting, and energy transformation. I have combined these traditional methods with modern scientific research to develop innovative sound therapy techniques that address chronic conditions such as cancer, stroke, migraines, and arthritis. I have also created specialized treatments for pregnant women and immunity enhancement, achieving clinically proven results.
                                <br /><br />
                                As a certified sound healer and meditation teacher, I have conducted workshops, retreats, and personalized sessions for diverse audiences worldwide. My ability to adapt my teachings to different cultures and individuals has made my services highly sought-after across the globe.
                            </p>
                        </div>

                        <div className='w-full lg:w-1/2 h-full'>
                            <img
                                src='/Images/homePhoto.jpg'
                                alt='About Me'
                                className='rounded-lg shadow-lg w-full h-full object-cover'
                            />
                        </div>

                    </motion.div>
                </div>



                <div className='py-4'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="flex items-center justify-center text-2xl lg:text-3xl font-bold text-[#022B4A] mb-2 gap-1">
                            My Achievements <FaTrophy className="text-xl lg:text-2xl" />
                        </h2>
                        <p className="text-[#666666] leading-relaxed font-poppins">
                            With over a decade of experience in sound therapy and teaching, I have touched the lives of thousands of individuals worldwide. I have healed tens of thousands through my transformative sound therapy sessions and trained countless students in the art of natural healing. My work has been recognized by the Nepalese government, making me the first sound therapist to receive official qualifications in this field.
                            <br /><br />
                            I founded the International School of Natural Sound Healing, which has established healing centers and branches in multiple countries. My teachings and techniques have reached a global audience, and I have been invited to share my wisdom in countries such as Germany, Vietnam, Taiwan, Malaysia, Thailand, and Italy.
                            <br /><br />
                            In addition to my healing work, I am an accomplished musician and composer. I have produced and published my own music albums, blending therapeutic soundscapes with artistic expression. My collaborations with fellow sound therapy practitioners have further enriched my contributions to the field.
                            <br /><br />
                            My greatest achievement lies in the countless individuals who have found peace, balance, and healing through my work. Their stories of transformation inspire me to continue my mission of spreading the healing power of sound to every corner of the world.
                        </p>
                    </motion.div>
                </div>
            </div>


            <div className='flex flex-col p-4 lg:p-8 gap-4 relative border-t border-b'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div>
                        <h1 className='flex items-center justify-center text-2xl lg:text-3xl font-bold text-[#022B4A] gap-1'>My Services <FaHandsHelping className=" text-2xl lg:text-3xl" /></h1>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4  font-poppins'>
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
                            className='flex items-center hover:text-[#3c5551] rounded-md lg:absolute bottom-1 right-6 transition-transform duration-300  ease-out  hover:scale-105'
                            href='/services'
                        >
                            Learn more<WiDirectionRight className='text-3xl' />

                        </button>
                    </div>
                </motion.div>
            </div>


            <div className='p-4 lg:p-12 font-poppins'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <CompanyCard />
                </motion.div>
            </div>


            <div className='p-4 lg:p-12 font-poppins'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Quotes />
                </motion.div>
            </div>


            <div className='p-4 lg:p-12 font-poppins'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <ContactCard />
                </motion.div>
            </div>
        </div>
    );
};

export default About;