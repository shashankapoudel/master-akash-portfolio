
import React from 'react';
import { motion } from 'framer-motion';
import { PiUserSoundBold } from "react-icons/pi";
import { GiMeditation } from "react-icons/gi";
import { GiHealing } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { RiSoundModuleLine } from "react-icons/ri";
import { GiHiveMind } from "react-icons/gi";


const services = [
    {
        SN: <GiMeditation />,
        name: 'Meditation and Mindfulness',
        description: 'Connect and explore the world of Meditation Connect and explore the world ofn'
    },
    {
        SN: <PiUserSoundBold />,
        name: 'Sound Healing Therapy',
        description: 'Immerse yourself in the soothing vibrations of singing bowls and ancient sound healing techniques.'
    },
    {
        SN: <GiHiveMind />,
        name: 'Spiritual Events and Retreat',
        description: 'Elevate your retreat with calming vibrations that enhance meditation and emotional well-being.'
    },
    {
        SN: <RiSoundModuleLine />,
        name: 'Sound Baths and Relaxation',
        description: 'Immerse yourself in the soothing vibrations of a sound bath, a meditative experience that promotes deep relaxation, stress relief, and inner harmony. '
    },
    {
        SN: <GrYoga />,
        name: 'Yoga and Energy Awakening',
        description: 'Enhance your yoga practice and awaken your inner energy with powerful vibrational therapys'
    },
    {
        SN: <GiHealing />,
        name: 'Healing and welness workshops',
        description: 'Join our transformative workshops designed to restore balance, reduce stress, and promote overall well-being.  '
    },
];

const ServiceSegment = () => {

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <div className='flex items-center flex-col gap-4 p-0 lg:p-2'>
            <h1 className='text-2xl lg:text-3xl font-bold text-[#022B4A] mb-2 text-center'>My Services</h1>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className='grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-16'
            >
                {services.map((service) => (
                    <motion.div
                        key={service.SN}
                        variants={cardVariants}
                        className='font-poppins flex flex-col items-center justify-center'
                    >
                        {/* <h1 className='text-center text-[#022B4A] font-bold text-3xl'>
                            {service.SN}<span className='text-[#022B4A] font-semibold text-3xl'>.</span>
                        </h1> */}

                        <h1 className='text-center text-[#022B4A] font-bold text-4xl'>
                            {service.SN}



                            
                        </h1>

                        <p className='text-center text-[#022B4A] font-semibold text-lg lg:text-xl md:text-xl'>
                            {service.name}<span className='font-normal text-xl'>:</span>
                        </p>

                        <p className='text-center text-base lg:text-lg md:text-lg text-[#666666]'>{service.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default ServiceSegment;
