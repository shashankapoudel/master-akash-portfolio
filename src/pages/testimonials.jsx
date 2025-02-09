import React from 'react'
import { motion } from 'framer-motion'

const Testimonials = () => {
    return (
        <div className='flex flex-col gap-8'>

            <div className="lg:relative flex flex-col justify-center items-center gap-4">
                {/* Image Container */}
                <div className="lg:relative w-full">
                    <img
                        src="/Images/Get in touch.jpg"
                        className="object-cover w-full lg:h-[500px] h-auto"
                    />

                    {/* Text Overlay */}
                    <div className="lg:absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-40  gap-4 lg:gap-8 p-2">

                        <div className='flex lg:flex-row flex-col gap-2'>
                            <motion.h1
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-white font-semibold font-marck-script text-2xl lg:text-4xl"
                            >
                                🌿 Yogi Akash
                            </motion.h1>

                            <motion.h1
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="text-white font-semibold font-playfair-display text-xl lg:text-3xl"
                            >
                                | Transformational Healing & Wisdom 🌿
                            </motion.h1>
                        </div>

                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.9 }}
                            className=" text-center">
                            <p className='text-white font-semibold font-marck-script text-2xl lg:text-4xl'>"Awaken Your Soul with the Healing Touch of Sound & Meditation"</p>
                        </motion.div>
                    </div>
                </div>
            </div>


            {/* <div className='flex flex-col justify-center items-center gap-4'>
                <div className='flex '>
                    <motion.h1
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-[#666666] text-center font-semibold font-marck-script text-4xl"
                    >
                        🌿 Yogi Akash
                    </motion.h1>

                    <motion.h1
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-[#666666] text-center font-semibold font-playfair-display text-4xl"
                    >
                        | Transformational Healing & Wisdom 🌿
                    </motion.h1>
                </div>
                <div>
                    <img
                        src='/Images/Get in touch.jpg'
                        className='object-cover'
                    />
                </div>
            </div> */}

            <div className="flex justify-center items-center">

            </div>

            <div className='flex flex-col gap-6 lg:m-8 lg:p-4 m-2 p-2'>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <h1 className=' text-[#666666] font-medium font-playfair-display text-2xl lg:text-3xl'>Our wall of love</h1>
                    <p className=' text-[#666666] font-medium font-playfair-display text-xl lg:text-2xl'>See What Our Students & Seekers Say </p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 '>

                    <div className=' p-6 shadow-md flex flex-col gap-2'>
                        <p className='text-[#666666] font-medium font-playfair-display '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui vitae maiores consequatur ullam. Qui, labore laborum iure facilis illo voluptates quisquam ullam, at architecto cumque error numquam laboriosam recusandae.</p>
                        <div className='flex items-center gap-2'>
                            <img
                                src='/Images/homePhoto.jpg'
                                className='object-cover w-8 h-8 rounded-md'
                            />
                            <h1 className='text-[#666666] text-lg font-bold font-marck-script'>Joe lingten</h1>
                        </div>
                    </div>

                    <div className=' p-6 shadow-md flex flex-col gap-2'>
                        <p className='text-[#666666] font-medium font-playfair-display '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui vitae maiores consequatur ullam. Qui, labore laborum iure facilis illo voluptates quisquam ullam, at architecto cumque error numquam laboriosam recusandae.</p>
                        <div className='flex items-center gap-2'>
                            <img
                                src='/Images/homePhoto.jpg'
                                className='object-cover w-8 h-8 rounded-md'
                            />
                            <h1 className='text-[#666666] text-lg font-bold font-marck-script'>Joe lingten</h1>
                        </div>
                    </div>

                    <div className=' p-6 shadow-md flex flex-col gap-2'>
                        <p className='text-[#666666] font-medium font-playfair-display '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui vitae maiores consequatur ullam. Qui, labore laborum iure facilis illo voluptates quisquam ullam, at architecto cumque error numquam laboriosam recusandae.</p>
                        <div className='flex items-center gap-2'>
                            <img
                                src='/Images/homePhoto.jpg'
                                className='object-cover w-8 h-8 rounded-md'
                            />
                            <h1 className='text-[#666666] text-lg font-bold font-marck-script'>Joe lingten</h1>
                        </div>
                    </div>

                    <div className=' p-6 shadow-md flex flex-col gap-2'>
                        <p className='text-[#666666] font-medium font-playfair-display '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui vitae maiores consequatur ullam. Qui, labore laborum iure facilis illo voluptates quisquam ullam, at architecto cumque error numquam laboriosam recusandae.</p>
                        <div className='flex items-center gap-2'>
                            <img
                                src='/Images/homePhoto.jpg'
                                className='object-cover w-8 h-8 rounded-md'
                            />
                            <h1 className='text-[#666666] text-lg font-bold font-marck-script'>Joe lingten</h1>
                        </div>
                    </div>

                    <div className=' p-6 shadow-md flex flex-col gap-2'>
                        <p className='text-[#666666] font-medium font-playfair-display '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui vitae maiores consequatur ullam. Qui, labore laborum iure facilis illo voluptates quisquam ullam, at architecto cumque error numquam laboriosam recusandae.</p>
                        <div className='flex items-center gap-2'>
                            <img
                                src='/Images/homePhoto.jpg'
                                className='object-cover w-8 h-8 rounded-md'
                            />
                            <h1 className='text-[#666666] text-lg font-bold font-marck-script'>Joe lingten</h1>
                        </div>
                    </div>

                    <div className=' p-6 shadow-md flex flex-col gap-2'>
                        <p className='text-[#666666] font-medium font-playfair-display '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui vitae maiores consequatur ullam. Qui, labore laborum iure facilis illo voluptates quisquam ullam, at architecto cumque error numquam laboriosam recusandae.</p>
                        <div className='flex items-center gap-2'>
                            <img
                                src='/Images/homePhoto.jpg'
                                className='object-cover w-8 h-8 rounded-md'
                            />
                            <h1 className='text-[#666666] text-lg font-bold font-marck-script'>Joe lingten</h1>
                        </div>
                    </div>

                    <div className=' p-6 shadow-md flex flex-col gap-2'>
                        <p className='text-[#666666] font-medium font-playfair-display '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui vitae maiores consequatur ullam. Qui, labore laborum iure facilis illo voluptates quisquam ullam, at architecto cumque error numquam laboriosam recusandae.</p>
                        <div className='flex items-center gap-2'>
                            <img
                                src='/Images/homePhoto.jpg'
                                className='object-cover w-8 h-8 rounded-md'
                            />
                            <h1 className='text-[#666666] text-lg font-bold font-marck-script'>Joe lingten</h1>
                        </div>
                    </div>

                    <div className=' p-6 shadow-md flex flex-col gap-2'>
                        <p className='text-[#666666] font-medium font-playfair-display '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui vitae maiores consequatur ullam. Qui, labore laborum iure facilis illo voluptates quisquam ullam, at architecto cumque error numquam laboriosam recusandae.</p>
                        <div className='flex items-center gap-2'>
                            <img
                                src='/Images/homePhoto.jpg'
                                className='object-cover w-8 h-8 rounded-md'
                            />
                            <h1 className='text-[#666666] text-lg font-bold font-marck-script'>Joe lingten</h1>
                        </div>
                    </div>



                </div>
            </div>

        </div >
    )
}

export default Testimonials
