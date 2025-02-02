
import React from 'react';
import { motion } from 'framer-motion';

const services = [
    {
        SN: '01',
        name: 'Meditation and Mindfulness',
        description: 'Connect and explore the world of Meditation Connect and explore the world ofn'
    },
    {
        SN: '02',
        name: 'Meditation and Mindfulness',
        description: 'Connect and explore the world of Meditation Connect and explore the world of'
    },
    {
        SN: '03',
        name: 'Meditation and Mindfulness',
        description: 'Connect and explore the world of Meditation Connect and explore the world of'
    },
    {
        SN: '04',
        name: 'Meditation and Mindfulness',
        description: 'Connect and explore the world of Meditation Connect and explore the world of'
    },
    {
        SN: '05',
        name: 'Meditation and Mindfulness',
        description: 'Connect and explore the world of Meditation Connect and explore the world of'
    },
    {
        SN: '06',
        name: 'Meditation and Mindfulness',
        description: 'Connect and explore the world of Meditation Connect and explore the world of '
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
        <div className='flex items-center flex-col border gap-4 p-2'>
            <h1 className='text-2xl lg:text-3xl font-bold text-[#022B4A] mb-2 text-center'>My Services</h1>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className='grid sm:grid-cols-1 lg:grid-cols-3 gap-16'
            >
                {services.map((service) => (
                    <motion.div
                        key={service.SN}
                        variants={cardVariants}
                        className='font-poppins'
                    >
                        <h1 className='text-center text-[#022B4A] font-bold text-3xl'>
                            {service.SN}<span className='text-[#022B4A] font-semibold text-3xl'>.</span>
                        </h1>
                        <p className='text-center text-[#022B4A] font-semibold text-xl'>
                            {service.name}<span className='font-normal text-xl'>:</span>
                        </p>
                        <p className='text-center text-lg text-[#666666]'>{service.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default ServiceSegment;
