

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const services = [

    {
        title: 'Meditation and Mindfulness',
        description:
            'Meditation and Mindfulness offer pathways to cultivating inner peace and a deeper connection with the present moment. Its practice of training your attention and awareness to achieve mental clarity and emotional calm.We offer various types of meditation, including guided meditations to help you focus, breathing exercises(pranayama) to regulate your energy, and mindfulness practices that teach you to observe your thoughts and feelings without judgment.Engaging in regular meditation and mindfulness practices can bring numerous benefits.',

        image: '/Images/meditation_mindfulness.jpg',
        route: '/services/meditation&mindfulness'
    },

    {
        title: 'Sound Healing Therapy',
        description:
            'Sound Healing Therapy is an ancient holistic practice that utilizes the power of sound vibrations to promote physical, mental, and emotional well-being. This therapeutic approach is based on the principle that everything in the universe, including our bodies, vibrates at a specific frequency. When we experience stress, illness, or imbalance, our vibrational frequency can become disrupted.During a sound healing session, our skilled practitioners use a variety of sacred sound instruments such as Tibetan singing bowls, gongs, tuning forks, chimes, and vocalizations. ',
        image: '/Images/sound_healing_therapy.jpg',
        route: '/services/soundhealing'
    },

    {
        title: 'Sound Baths and Relaxation',
        description:
            'A Sound Bath and Relaxation session is a deeply immersive and restorative experience designed to help you unwind, de-stress, and enter a state of profound relaxation. Unlike a typical "bath," you remain fully clothed and comfortably lie down while being bathed in a symphony of resonant sounds.During a session, a practitioner plays a variety of therapeutic sound instruments like singing bowls, gongs, and chimes, creating a continuous wave of harmonious vibrations.These sounds are specifically chosen for their ability to slow down brainwave activity, transitioning you from a beta(awake, alert) to an alpha or even theta state(relaxed, meditative, dream- like). ',
        image: '/Images/sound_bath_relaxation.jpg ',
        route: '/services/soundbaths'
    },

    {
        title: 'Sound Healing Workshops',
        description:
            'Our Sound Healing Workshops offer a unique opportunity to delve deeper into the transformative world of sound. These immersive workshops are designed for individuals seeking to learn about the principles of sound healing, understand its practical applications, and even discover how to use sound for personal well-being or to help others.Led by our experienced master, Akash, who brings a wealth of knowledge from traditional and Himalayan sound healing techniques, these workshops combine theoretical understanding with hands - on practice.',
        image: '/Images/sound_healing_workshop.jpg',
        route: '/services/healingworkshop'
    },

    {
        title: 'Yoga and Energy Awakening',
        description:
            'Yoga and Energy Awakening is a holistic practice that integrates physical postures (asanas), breathing techniques (pranayama), and meditation to harmonize the body, mind, and spirit. Its a journey of self-discovery and a potent tool for unlocking your inner vitality and cultivating a profound sense of well-being.Our sessions focus on guiding you through a series of mindful movements and deliberate breathing exercises designed to stretch and strengthen the body, improve flexibility, and enhance circulation.',
        image: '/Images/yoga_energy.jpg',
        route: '/services/yoga&energy'
    },

    {
        title: 'Spiritual Events and Retreat',
        description:
            'In our increasingly busy lives, filled with constant demands and stresses, its easy to lose touch with our inner selves and the peace we crave.We often find ourselves overwhelmed, leading to a myriad of problems for our mind, body, and spirit.It is in these moments that we truly need to take a deliberate break, step away from the everyday grind, and dedicate time to healing and recharging our mind and body.Our Spiritual Retreats and Events offer a vital opportunity to do just that.These immersive experiences are carefully curated to provide a sanctuary where you can escape the noise of daily life and embark on a journey of self- discovery and rejuvenation. ',
        image: '/Images/Spiritual_Event_Retreats/11.JPG',
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



