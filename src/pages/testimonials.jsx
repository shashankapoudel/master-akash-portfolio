import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';



const Testimonials = () => {

    const navigate = useNavigate()
    const testimonials = [
        {
            name: "Joe Lingten",
            text: "This was a life-changing experience! The sound healing sessions truly helped me find inner peace.",
            image: "/Images/user1.jpg"
        },
        {
            name: "Sophia Carter",
            text: "A transformative journey filled with wisdom and tranquility. Highly recommend to anyone seeking spiritual growth.",
            image: "/Images/user2.jpg"
        },
        {
            name: "Rahul Verma",
            text: "The meditation techniques taught here have helped me immensely in reducing stress and staying focused.",
            image: "/Images/user3.jpg"
        },
        {
            name: "Emily Smith",
            text: "A beautiful experience with an amazing teacher. The energy of the place is truly magical!",
            image: "/Images/user4.jpg"
        },
        {
            name: "David Johnson",
            text: "I felt deeply connected with myself after attending the retreat. The sound healing was phenomenal!",
            image: "/Images/user5.jpg"
        },
        {
            name: "Linda Perez",
            text: "I found inner peace and harmony through the guided meditations. The best decision of my life!",
            image: "/Images/user6.jpg"
        }
    ];

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
        <div className='flex flex-col gap-8 bg-gradient-to-b from-[#f9f9f9] to-[#eaeaea]'>

            <div className="lg:relative md:relative flex flex-col justify-center items-center gap-4">
                {/* Image Container */}
                <div className="lg:relative md:relative w-full">
                    <img
                        src="/Images/Get in touch.jpg"
                        className="object-cover w-full lg:h-[500px]  h-auto"
                    />


                    <div className="lg:absolute md:absolute inset-0 flex flex-col justify-center items-center text-center bg-black lg:bg-opacity-40 bg-opacity-50  gap-4 lg:gap-8 p-2">

                        <div className='flex lg:flex-row md:flex-row flex-col gap-2'>
                            <motion.h1
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-white font-semibold font-marck-script text-2xl lg:text-4xl md:text-4xl"
                            >
                                🌿 Yogi Akash
                            </motion.h1>

                            <motion.h1
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="text-white font-semibold font-playfair-display text-xl lg:text-3xl md:text-3xl"
                            >
                                | Transformational Healing & Wisdom 🌿
                            </motion.h1>
                        </div>

                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.9 }}
                            className=" text-center">
                            <p className='text-white font-semibold font-playfair-display text-2xl lg:text-4xl md:text-4xl'>"Awaken Your Soul with the Healing Touch of Sound & Meditation"</p>
                        </motion.div>
                    </div>
                </div>
            </div>


            <div className="flex justify-center items-center">

            </div>

            <div className='flex flex-col gap-6 lg:m-8 lg:p-4 m-2 p-2'>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <h1 className=' text-[#666666] font-semibold font-playfair-display text-2xl lg:text-3xl'>Our wall of love</h1>
                    <p className=' text-[#666666] font-medium font-playfair-display text-xl lg:text-2xl'>See What Our Students & Seekers Say </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="hidden"
                    className='grid grid-cols-1 lg:grid-cols-3 gap-8 '>

                    <motion.div
                        variants={cardVariants}
                        className='p-6 shadow-lg rounded-lg bg-white flex flex-col gap-4 transform transition-all hover:shadow-xl'>
                        <div className='flex items-center gap-2'>
                            <img
                                src='/Images/homePhoto.jpg'
                                className='object-cover w-8 h-8 rounded-md'
                            />
                            <h1 className='text-[#666666] text-lg font-bold font-marck-script'>Joe lingten</h1>
                        </div>
                        <p className='text-[#666666] font-medium font-playfair-display italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui vitae maiores consequatur ullam. Qui, labore laborum iure facilis illo voluptates quisquam ullam, at architecto cumque error numquam laboriosam recusandae.</p>
                    </motion.div>

                    <motion.div
                        variants={cardVariants}
                        className='p-6 shadow-lg rounded-lg bg-white flex flex-col gap-4 transform transition-all hover:shadow-xl'>
                        <div className='flex items-center gap-2'>
                            <img
                                src='/Images/homePhoto.jpg'
                                className='object-cover w-8 h-8 rounded-md'
                            />
                            <h1 className='text-[#666666] text-lg font-bold font-marck-script'>Joe lingten</h1>
                        </div>
                        <p className='text-[#666666] font-medium font-playfair-display italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui vitae maiores consequatur ullam. Qui, labore laborum iure facilis illo voluptates quisquam ullam, at architecto cumque error numquam laboriosam recusandae.</p>
                    </motion.div>

                    <motion.div
                        variants={cardVariants}
                        className='p-6 shadow-lg rounded-lg bg-white flex flex-col gap-4 transform transition-all hover:shadow-xl'>
                        <div className='flex items-center gap-2'>
                            <img
                                src='/Images/homePhoto.jpg'
                                className='object-cover w-8 h-8 rounded-md'
                            />
                            <h1 className='text-[#666666] text-lg font-bold font-marck-script'>Joe lingten</h1>
                        </div>
                        <p className='text-[#666666] font-medium font-playfair-display italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui vitae maiores consequatur ullam. Qui, labore laborum iure facilis illo voluptates quisquam ullam, at architecto cumque error numquam laboriosam recusandae.</p>
                    </motion.div>

                    <motion.div
                        variants={cardVariants}
                        className='p-6 shadow-lg rounded-lg bg-white flex flex-col gap-4 transform transition-all hover:shadow-xl'>
                        <div className='flex items-center gap-2'>
                            <img
                                src='/Images/homePhoto.jpg'
                                className='object-cover w-8 h-8 rounded-md'
                            />
                            <h1 className='text-[#666666] text-lg font-bold font-marck-script'>Joe lingten</h1>
                        </div>
                        <p className='text-[#666666] font-medium font-playfair-display italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui vitae maiores consequatur ullam. Qui, labore laborum iure facilis illo voluptates quisquam ullam, at architecto cumque error numquam laboriosam recusandae.</p>
                    </motion.div>

                    <motion.div
                        variants={cardVariants}
                        className='p-6 shadow-lg rounded-lg bg-white flex flex-col gap-4 transform transition-all hover:shadow-xl'>
                        <div className='flex items-center gap-2'>
                            <img
                                src='/Images/homePhoto.jpg'
                                className='object-cover w-8 h-8 rounded-md'
                            />
                            <h1 className='text-[#666666] text-lg font-bold font-marck-script'>Joe lingten</h1>
                        </div>
                        <p className='text-[#666666] font-medium font-playfair-display italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui vitae maiores consequatur ullam. Qui, labore laborum iure facilis illo voluptates quisquam ullam, at architecto cumque error numquam laboriosam recusandae.</p>

                    </motion.div>

                    <motion.div
                        variants={cardVariants}
                        className='p-6 shadow-lg rounded-lg bg-white flex flex-col gap-4 transform transition-all hover:shadow-xl'>
                        <div className='flex items-center gap-2'>
                            <img
                                src='/Images/homePhoto.jpg'
                                className='object-cover w-8 h-8 rounded-md'
                            />
                            <h1 className='text-[#666666] text-lg font-bold font-marck-script'>Joe lingten</h1>
                        </div>
                        <p className='text-[#666666] font-medium font-playfair-display italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui vitae maiores consequatur ullam. Qui, labore laborum iure facilis illo voluptates quisquam ullam, at architecto cumque error numquam laboriosam recusandae.</p>
                    </motion.div>

                    <motion.div
                        variants={cardVariants}
                        className='p-6 shadow-lg rounded-lg bg-white flex flex-col gap-4 transform transition-all hover:shadow-xl'>
                        <div className='flex items-center gap-2'>
                            <img
                                src='/Images/homePhoto.jpg'
                                className='object-cover w-8 h-8 rounded-md'
                            />
                            <h1 className='text-[#666666] text-lg font-bold font-marck-script'>Joe lingten</h1>
                        </div>
                        <p className='text-[#666666] font-medium font-playfair-display italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui vitae maiores consequatur ullam. Qui, labore laborum iure facilis illo voluptates quisquam ullam, at architecto cumque error numquam laboriosam recusandae.</p>
                    </motion.div>

                    <motion.div
                        variants={cardVariants}
                        className='p-6 shadow-lg rounded-lg bg-white flex flex-col gap-4 transform transition-all hover:shadow-xl'>
                        <div className='flex items-center gap-2'>
                            <img
                                src='/Images/homePhoto.jpg'
                                className='object-cover w-8 h-8 rounded-md'
                            />
                            <h1 className='text-[#666666] text-lg font-bold font-marck-script'>Joe lingten</h1>
                        </div>
                        <p className='text-[#666666] font-medium font-playfair-display italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui vitae maiores consequatur ullam. Qui, labore laborum iure facilis illo voluptates quisquam ullam, at architecto cumque error numquam laboriosam recusandae.</p>
                    </motion.div>


                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='flex justify-center items-center my-12'
            >
                <button onClick={() => navigate('/contact')}
                    className='bg-[#4CAF50] text-white font-semibold font-playfair-display text-xl lg:text-2xl px-8 py-4 rounded-lg hover:bg-[#45a049] transition-all'>
                    Join Us Today
                </button>
            </motion.div>

        </div >

    )
}

export default Testimonials



