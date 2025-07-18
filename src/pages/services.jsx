
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const services = [

    {
        title: 'Meditation and Mindfulness',
        image: '/Images/homePhoto.jpg',
        description: 'In a world filled with distractions, finding inner peace can feel like a distant dream. Yogi Akash offers personalized meditation guidance to help you reconnect with your inner self, achieve mental clarity, and cultivate lasting tranquility. Whether you are new to meditation or an experienced practitioner, Yogi Akash’s step-by-step guidance is designed to deepen your practice. Learn powerful techniques such as mindful breathing, mantra repetition, and visualization to unlock your potential for self-awareness. Through Yogi Akash’s guidance, you will experience a profound shift in your mental and emotional well-being. From reducing stress to fostering emotional resilience, his teachings are a gateway to a healthier, happier you.',

        whatIncluded: [
            'Guided meditation and breathing exercises',
            'Sound healing session with singing bowls',
            'Relaxation techniques to reduce stress'
        ],

        benefits: ['Enhanced focus', 'Stress relief', 'Emotional balance'],
        duration: '45 mins',
        location: 'Outdoor or private studio',
        cta: 'Book my session!',
    },

    {
        title: 'Sound Healing classes',
        image: '/Images/homePhoto.jpg',
        description: 'Sound has the power to heal, uplift, and rejuvenate. Yogi Akash’s Sound Healing Classes are designed to harness the vibrational energy of sound to balance your body, mind, and spirit. Discover a profound sense of harmony through the ancient art of sound therapy. In these classes, you will explore the mystical vibrations of singing bowls, the grounding resonance of gongs, and the calming tones of Tingsha cymbals. Learn how these powerful tools can realign your energy, reduce stress, and promote deep relaxation.',
        whatIncluded: [
            'Introduction to sound healing and its benefits',
            'Practical sessions using instruments like singing bowls, gongs, and Tingsha cymbals',
            'Learning how to use sound to release emotional blockages',
            'Techniques for self-healing and healing others',
        ],
        benefits: ['Relieves stress, anxiety, and tension', 'Promotes better sleep and relaxation', 'Balances energy centers (chakras)', 'Facilitates emotional release and spiritual awakening'],
        duration: '2 hours',
        location: 'Workshop studio',
        cta: 'Book a workshop now!',
    },


    {
        title: 'Retreat Centers',
        image: '/Images/homePhoto.jpg',
        description: 'Enjoy serene retreat locations with meditation, yoga, and guided activities for total relaxation.',
        whatIncluded: [
            'Access to beautiful retreat locations',
            'Guided meditation and yoga sessions',
            'Healthy meals and relaxing environments'
        ],
        benefits: ['Complete rejuvenation', 'Increased mindfulness', 'Digital detox'],
        duration: 'Weekend',
        location: 'Various serene retreat locations',
        cta: 'Explore Retreats',
    },


    {
        title: 'Spiritual and Mental Growth Activities',
        image: '/Images/homePhoto.jpg',
        description: 'Explore a variety of activities aimed at improving your mental clarity, emotional intelligence, and spiritual growth.',
        whatIncluded: [
            'Workshops on mindfulness and personal growth',
            'Interactive group sessions',
            'Personalized coaching sessions'
        ],
        benefits: ['Improved clarity', 'Stronger emotional intelligence', 'Growth mindset'],
        duration: '2 hours',
        location: 'Local studio or virtual options',
        cta: 'Join a session today!',
    },

];


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
            delayChildren: 0.3,
        },
    },
};


const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
};


const item1Variants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
};


const ServiceCard = ({ service }) => {

    return (
        <div className="bg-white shadow-md rounded-lg p-3 lg:p-12 space-y-4">
            <h3 className="text-xl font-bold text-gray-800 text-center">{service.title}</h3>

            <img src={service.image}
                alt={service.title}
                className="w-full h-auto p-4 object-cover rounded-lg"
                loading='lazy'
            />

            <p className="text-gray-600">{service.description}</p>

            <div>
                <h4 className="font-semibold text-gray-800">What's Included:</h4>
                <ul className="list-disc list-inside text-gray-600">
                    {service.whatIncluded.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h4 className="font-semibold text-gray-800">Benefits:</h4>
                <ul className="list-disc list-inside text-gray-600">
                    {service.benefits.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <p className="text-gray-600">
                <strong>Duration:</strong> {service.duration}
            </p>

            <p className="text-gray-600">
                <strong>Location:</strong> {service.location}
            </p>

            <a
                href='https://docs.google.com/forms/d/1qxY65pySNKGWH8xoxSKBMtolXi20s39wciC3KiNs21o/edit'
                target="_blank"
                rel="noopener noreferrer"
                className=" bg-gradient-to-r from-[#044F86] to-[#0A6EB5] text-white px-4 py-2 rounded hover:bg-blue-400 transition-transform duration-300 ease-out hover:scale-105">
                {service.cta}
            </a>

        </div>
    );
};

const ServicesPage = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const [showNewContent, setShowNewContent] = useState(false);

    const handleButtonClick = () => {
        setShowNewContent(!showNewContent);
    };

    const navigate = useNavigate()

    return (
        <div className="flex flex-col p-4 lg:p-8 tracking-normal w-full gap-10 border mt-4">

            {!showNewContent ? (
                <div className="p-4 md:p-4 lg:p-8 items-center w-full mt-4">
                    <motion.div
                        ref={ref}
                        className="flex flex-col gap-4 lg:gap-0 items-center justify-center lg:relative font-poppins"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        viewport={{ amount: 0.2 }}
                    >

                        <div
                            onClick={() => navigate('/services/meditation&mindfulness')}
                            className='cursor-pointer'
                        >
                            <motion.div
                                variants={itemVariants}
                                className="lg:absolute lg:top-0 lg:left-20 flex flex-col gap-2 bg-[#A7594D] text-white p-2 shadow-md w-full lg:w-1/3 items-center justify-center rounded-custom-1-sm lg:rounded-custom-1 py-2 px-4 md:p-3 lg:p-2 "
                            >
                                <h3 className="font-semibold text-base md:text-xl lg:text-xl text-center">Meditation and Mindfulness</h3>
                                <p className="flex items-center justify-center text-center text-sm md:text-xl lg:text-sm">Calm your mind and find peace through meditation techniques.</p>
                            </motion.div>
                        </div>

                        <a href='/services/soundhealingtherapy' target="_blank" rel="noopener noreferrer">
                            <motion.div
                                variants={itemVariants}
                                className="lg:absolute bottom-32 left-10 flex flex-col items-center justify-center gap-2 bg-[#A7594D] text-white p-2 rounded-custom-2-sm lg:rounded-custom-2 shadow-md w-full lg:w-1/3 py-2 px-4 lg:py-2 lg:px-4 md:p-3"
                            >
                                <h3 className="font-semibold text-base md:text-xl lg:text-xl text-center">Sound Healing Therapy</h3>
                                <p className='text-center text-sm md:text-xl lg:text-sm'>Calm your mind and find peace through meditation techniques.</p>
                            </motion.div>
                        </a>

                        <div
                            onClick={() => navigate('/services/spiritualevents')}
                            className='cursor-pointer'
                        >
                            <motion.div
                                variants={itemVariants}
                                className="lg:absolute bottom-0 left-10 flex flex-col items-center justify-center gap-2 bg-[#A7594D] text-white py-2 lg:px-4 px-3 rounded-custom-3-sm lg:rounded-custom-3 shadow-md w-full lg:w-1/3"
                            >
                                <h3 className="font-bold text-base md:text-xl lg:text-xl text-center">Spiritual Events and Retreats</h3>
                                <p className='text-center text-sm md:text-xl lg:text-sm'>Take a break from daily life to recharge and reconnect with yourself.</p>
                            </motion.div>
                        </div>

                        <div className="w-full flex justify-center items-center">
                            <img
                                src="/Images/Service2.png"
                                alt="Sound Healing"
                                className="w-full lg:w-1/3 pr-4 object-cover mix-blend-multiply"
                                loading='lazy'
                            />
                        </div>

                        <div
                            className='cursor-pointer'
                            onClick={() => navigate('/services/souundbaths')}
                        >
                            <motion.div
                                variants={item1Variants}
                                className="lg:absolute top-0 right-20 items-center justify-center flex flex-col gap-2 bg-[#A7594D] text-white py-2 px-4 rounded-custom-4-sm lg:rounded-custom-4 shadow-md w-full md:w-3/4 lg:w-1/3"
                            >
                                <h3 className="font-bold text-base md:text-xl lg:text-xl text-center">Sound Baths and Relaxation</h3>
                                <p className='flex justify-center items-center text-center text-sm md:text-xl lg:text-sm'>Enjoy soothing sounds that melt away stress and bring deep relaxation.</p>
                            </motion.div>
                        </div>

                        <div
                            onClick={() => navigate('/services/yoga&energy')}
                            className='cursor-pointer'
                        >
                            <motion.div
                                variants={item1Variants}

                                className="lg:absolute bottom-32 right-10 items-center justify-center flex flex-col gap-2 bg-[#A7594D] text-white p-2 rounded-custom-5-sm lg:rounded-custom-5 shadow-md w-full lg:w-1/3 py-2 px-4"
                            >
                                <h3 className="font-bold text-base md:text-xl lg:text-xl text-center">Yoga and Energy Awakening</h3>
                                <p className='text-center text-sm'>Move, breathe, and connect with your inner energy through yoga.</p>
                            </motion.div>
                        </div>

                        <div
                            className='cursor-pointer'
                            onClick={() => navigate('/services/healing&welness')}
                        >
                            <motion.div
                                variants={item1Variants}
                                className="lg:absolute bottom-0 right-16 flex flex-col items-center justify-center gap-2 bg-[#A7594D] text-white p-2 rounded-custom-6-sm lg:rounded-custom-6 shadow-md w-full lg:w-1/3 py-2 px-4"
                            >
                                <h3 className="font-bold text-base md:text-xl lg:text-xl text-center">Healing & Wellness Workshops</h3>
                                <p className='text-center text-sm'>Healing workshops that help you heal, grow, and feel better.</p>
                            </motion.div>
                        </div>

                    </motion.div>

                </div>
            ) : (
                <div className="p-4 md:p-4 lg:p-8 items-center w-full mt-4">

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 ">
                        {services.map((service, index) => (
                            <ServiceCard
                                className='w-full'
                                key={index} service={service} />
                        ))}
                    </div>

                </div>
            )}

            <div className='flex items-center justify-center'>

                {
                    !showNewContent ? (

                        <FaAngleDoubleDown
                            className='text-3xl cursor-pointer text-[#044F86]'
                            onClick={handleButtonClick}
                        />
                    ) : (
                        <FaAngleDoubleUp
                            className='text-3xl cursor-pointer text-[#044F86]'
                            onClick={handleButtonClick}
                        />
                    )
                }

            </div>
        </div>
    );
};

export default ServicesPage;

