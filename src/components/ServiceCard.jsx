

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const services = [

    {
        title: 'Meditation and Mindfulness',
        description:
            'In a world filled with distractions, finding inner peace can feel like a distant dream. Yogi Akash offers personalized meditation guidance to help you reconnect with your inner self, achieve mental clarity, and cultivate lasting tranquility. Through carefully designed techniques, including breath awareness, visualization, and mantra meditation, these sessions allow you to release stress, enhance focus, and develop emotional resilience. Whether you are a beginner or someone looking to deepen your practice, Yogi Akash provides expert support to help you integrate meditation into your daily life and unlock its profound benefits.',
        image: '/Images/meditation_mindfulness.jpg',
        route: '/services/meditation&mindfulness'
    },

    {
        title: 'Sound Healing Therapy',
        description:
            'With years of experience in sound therapy and a deep understanding of vibrational healing, Yogi Akash brings a unique blend of ancient wisdom and modern insights to his classes. Whether you are a curious beginner or an experienced practitioner, these sessions use the soothing frequencies of singing bowls, gongs, and other sound instruments to guide you into deep relaxation. The vibrations help in reducing stress, releasing emotional blockages, and promoting a sense of harmony and well-being. Attendees often report feeling lighter, more centered, and deeply rejuvenated after each session, making it a powerful tool for relaxation and holistic healing.',
        image: '/Images/sound_healing_therapy.jpg',
        route: '/services/soundhealing'
    },

    {
        title: 'Sound Baths and Relaxation',
        description:
            'Discover a uniquely personal journey of healing through sound. Our private sound healing sessions are meticulously crafted to resonate with your individual needs, focusing on your specific feelings and energetic landscape.Stepping away from group environments, a private session provides an unparalleled sanctuary for open expression, fostering deep energetic balance and a more profound inner connection.If you are looking to manage stress, gain clarity, or simply cultivate a deeper relationship with yourself, this session offers a gentle, supportive space for personalized healing on your terms.',
        image: '/Images/sound_bath_relaxation.jpg',
        route: '/services/soundbaths'
    },

    {
        title: 'Sound Healing Workshops',
        description:
            'Yoga is a holistic practice that extends beyond physical postures to awaken the body’s energy and unlock hidden potential. Yogi Akash’s sessions are designed to help practitioners cultivate strength, flexibility, and mindfulness through asanas, pranayama, and guided meditation. By incorporating energy awakening techniques, these sessions enhance vitality, improve mental clarity, and foster a deeper connection between mind, body, and spirit. Whether you are seeking to enhance your physical health, deepen your spiritual journey, or release stagnant energy, these sessions provide a transformative experience that aligns you with your inner power and true self.',
        image: '/Images/sound_healing_workshop.jpg',
        route: '/services/healingworkshop'
    },

    {
        title: 'Yoga and Energy Awakening',
        description:
            'Yoga is a holistic practice that extends beyond physical postures to awaken the body’s energy and unlock hidden potential. Yogi Akash’s sessions are designed to help practitioners cultivate strength, flexibility, and mindfulness through asanas, pranayama, and guided meditation. By incorporating energy awakening techniques, these sessions enhance vitality, improve mental clarity, and foster a deeper connection between mind, body, and spirit. Whether you are seeking to enhance your physical health, deepen your spiritual journey, or release stagnant energy, these sessions provide a transformative experience that aligns you with your inner power and true self.',
        image: '/Images/Gallery/Yoga/1.jpg',
        route: '/services/yoga&energy'
    },

    {
        title: 'Spiritual Events and Retreat',
        description:
            'Yoga is a holistic practice that extends beyond physical postures to awaken the body’s energy and unlock hidden potential. Yogi Akash’s sessions are designed to help practitioners cultivate strength, flexibility, and mindfulness through asanas, pranayama, and guided meditation. By incorporating energy awakening techniques, these sessions enhance vitality, improve mental clarity, and foster a deeper connection between mind, body, and spirit. Whether you are seeking to enhance your physical health, deepen your spiritual journey, or release stagnant energy, these sessions provide a transformative experience that aligns you with your inner power and true self.',
        image: '/Images/Gallery/Yoga/1.jpg',
        route: '/services/spiritualevents'
    },


];

const ServiceCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false)
    const [isVisible, setIsVisible] = useState(true);
    const componentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => {
            if (componentRef.current) {
                observer.unobserve(componentRef.current);
            }
        };
    }, []);

    useEffect(() => {
        let interval;
        if (!isHovered && isVisible) {
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
            }, 6000);
        }

        return () => clearInterval(interval);
    }, [isHovered, isVisible]);

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
    }
    const handleNext = () => {
        setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    };
    return (
        <div className='flex flex-col gap-2 relative mt-4 p-4 font-poppins min-h-200vh'>
            <h1 className='text-center text-3xl font-semibold text-[#111111] '>Services</h1>

            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className='grid place-items-center mt-2'
            >

                <div className='flex flex-col gap-4 w-full p-5 lg:p-8 border border-[#E6E7F3] bg-[#FFFFFF] rounded-3xl lg:rounded-card-custom shadow-sm'>

                    <h1 className='text-[#022B4A] font-bold text-lg md:text-xl lg:text-xl text-center '>
                        {services[currentIndex].title}
                    </h1>

                    <div className='flex flex-col lg:flex-row md:flex-col gap-4 lg:gap-8 '>

                        <div className='w-full md:w-full lg:w-1/2 p-0 lg:p-4'>

                            <img
                                className='w-full h-96 object-cover rounded-home-custom-sm lg:rounded-home-custom mb-4'
                                src={services[currentIndex].image}
                                alt={services[currentIndex].title}
                                loading="lazy"
                            />

                        </div>

                        <div className='w-full md:w-full lg:w-1/2 flex flex-col items-start justify-start p-0 lg:p-4 gap-4'>

                            <p className='text-[#666666] p-0 lg:p-2 text-sm lg:text-lg md:text-xl '>
                                {services[currentIndex].description}
                            </p>

                            <div className='w-full flex flex-col md:flex-row justify-normal lg:justify-between items-center gap-2 lg:gap-8'>
                                <a
                                    href="https://docs.google.com/forms/d/1qxY65pySNKGWH8xoxSKBMtolXi20s39wciC3KiNs21o/edit"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full  bg-[#044F86] rounded-md p-2 text-white mt-2 bg-gradient-to-r from-[#044F86] to-[#0A6EB5] transition-transform duration-300 ease-out hover:scale-105 items-center text-center"
                                >
                                    Book my session
                                </a>

                                <a
                                    href={services[currentIndex].route}
                                    className='w-full  bg-[#044F86] rounded-md p-2 text-white mt-2 bg-gradient-to-r from-[#044F86] to-[#0A6EB5] transition-transform duration-300 ease-out hover:scale-105 items-center text-center'
                                >
                                    See more...
                                </a>
                            </div>

                        </div>

                    </div>

                    <div className='flex items-center justify-center gap-3'>

                        <button
                            className="text-white bg-black bg-opacity-50  rounded-full hover:bg-opacity-70 transition"
                            onClick={handlePrevious}>
                            <GrFormPrevious />
                        </button>

                        <button
                            className="text-white bg-black bg-opacity-50  rounded-full hover:bg-opacity-70 transition"
                            onClick={handleNext}>
                            <GrFormNext />
                        </button>

                    </div>
                </div>
            </div >
        </div >
    );
};

export default ServiceCard;



