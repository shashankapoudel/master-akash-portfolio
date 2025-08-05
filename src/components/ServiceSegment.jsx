
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
        description: 'Calm your mind and find peace through meditation techniques.'
    },

    {
        SN: <GiHiveMind />,
        name: 'Spiritual Events and Retreat',
        description: 'Take a break from daily life to recharge and reconnect with yourself.'
    },

    {
        SN: <RiSoundModuleLine />,
        name: 'Sound Baths and Relaxation',
        description: 'Enjoy soothing sounds that melt away stress and bring deep relaxation.'
    },

    {
        SN: <GrYoga />,
        name: 'Yoga and Energy Awakening',
        description: 'Move, breathe, and connect with your inner energy through yoga.'
    },

    {
        SN: <GiHealing />,
        name: 'Sound Healing Workshops',
        description: 'Healing workshops that help you heal, grow, and feel better.'
    },

    {
        SN: <GiHealing />,
        name: 'Sound Healing Therapy',
        description: 'Join our session to experience sound healing with our skilled practitioners where they use a variety of sacred sound instruments.'
    }
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
        <div className='flex items-center justify-center flex-col gap-4 p-0 lg:p-2'>
            <h1 className='text-2xl lg:text-3xl font-bold text-[#022B4A] mb-2 text-center'>Services</h1>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className='grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-16 justify-center'
            >
                {services.map((service, index) => (
                    <motion.div
                        key={service.SN}
                        variants={cardVariants}
                        className='font-poppins flex flex-col items-center justify-center'
                    // className={`font-poppins flex flex-col items-center justify-center ${services.length % 3 !== 0 && index >= 3 ? "md:col-span-2 lg:col-span-1" : ""
                    //     }`}
                    >

                        <h1 className='text-center text-[#022B4A] font-bold text-4xl'>
                            {service.SN}
                        </h1>

                        <p className='text-center text-[#022B4A] font-semibold text-lg lg:text-xl md:text-xl'>
                            {service.name}<span className='font-normal text-xl'></span>
                        </p>

                        <p className='text-center text-base lg:text-lg md:text-lg text-[#666666]'>
                            {service.description}
                        </p>

                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default ServiceSegment;
