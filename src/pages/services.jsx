
// import React from 'react';

// const services = [
//     {
//         title: 'Meditation and Mindfulness',
//         image: '/Images/homePhoto.jpg',
//         description: 'In a world filled with distractions, finding inner peace can feel like a distant dream. Yogi Akash offers personalized meditation guidance to help you reconnect with your inner self, achieve mental clarity, and cultivate lasting tranquilityWhether you are new to meditation or an experienced practitioner, Yogi Akash’s step-by-step guidance is designed to deepen your practice. Learn powerful techniques such as mindful breathing, mantra repetition, and visualization to unlock your potential for self-awareness.Through Yogi Akash’s guidance, you will experience a profound shift in your mental and emotional well-being. From reducing stress to fostering emotional resilience, his teachings are a gateway to a healthier, happier you',
//         whatIncluded: [
//             'Guided meditation and breathing exercises',
//             'Sound healing session with singing bowls',
//             'Relaxation techniques to reduce stress'
//         ],
//         benefits: ['Enhanced focus', 'Stress relief', 'Emotional balance'],
//         duration: '45 mins',
//         location: 'Outdoor or private studio',
//         cta: 'Book my session!',
//     },
//     {
//         title: 'Sound Healing classes',
//         image: '/Images/homePhoto.jpg',
//         description: 'Sound has the power to heal, uplift, and rejuvenate. Yogi Akash’s Sound Healing Classes are designed to harness the vibrational energy of sound to balance your body, mind, and spirit. Discover a profound sense of harmony through the ancient art of sound therapy.In these classes, you will explore the mystical vibrations of singing bowls, the grounding resonance of gongs, and the calming tones of Tingsha cymbals. Learn how these powerful tools can realign your energy, reduce stress, and promote deep relaxation.',
//         whatIncluded: [
//             'Introduction to sound healing and its benefits',
//             'Practical sessions using instruments like singing bowls, gongs, and Tingsha cymbals',
//             'Learning how to use sound to release emotional blockages',
//             'Techniques for self-healing and healing others',

//         ],
//         benefits: ['Relieves stress, anxiety, and tension', 'Promotes better sleep and relaxation', 'Balances energy centers (chakras)', 'Facilitates emotional release and spiritual awakening'],
//         duration: '2 hours',
//         location: 'Workshop studio',
//         cta: 'Book a workshop now!',
//     },
//     {
//         title: 'Retreat Centers',
//         image: '/Images/homePhoto.jpg',
//         description: 'Enjoy serene retreat locations with meditation, yoga, and guided activities for total relaxation.',
//         whatIncluded: [
//             'Access to beautiful retreat locations',
//             'Guided meditation and yoga sessions',
//             'Healthy meals and relaxing environments'
//         ],
//         benefits: ['Complete rejuvenation', 'Increased mindfulness', 'Digital detox'],
//         duration: 'Weekend',
//         location: 'Various serene retreat locations',
//         cta: 'Explore Retreats',
//     },
//     {
//         title: 'Spiritual and Mental Growth Activities',
//         image: '/Images/homePhoto.jpg',
//         description: 'Explore a variety of activities aimed at improving your mental clarity, emotional intelligence, and spiritual growth.',
//         whatIncluded: [
//             'Workshops on mindfulness and personal growth',
//             'Interactive group sessions',
//             'Personalized coaching sessions'
//         ],
//         benefits: ['Improved clarity', 'Stronger emotional intelligence', 'Growth mindset'],
//         duration: '2 hours',
//         location: 'Local studio or virtual options',
//         cta: 'Join a session today!',
//     },
// ];

// const ServiceCard = ({ service }) => {
//     return (
//         <div className="bg-white shadow-md rounded-lg p-3 lg:p-12 space-y-4">

//             <h3 className="text-xl font-bold text-gray-800 text-center">{service.title}</h3>

//             <img src={service.image} />
//             <p className="text-gray-600">{service.description}</p>

//             <div>
//                 <h4 className="font-semibold text-gray-800">What's Included:</h4>
//                 <ul className="list-disc list-inside text-gray-600">
//                     {service.whatIncluded.map((item, index) => (
//                         <li key={index}>{item}</li>
//                     ))}
//                 </ul>
//             </div>

//             <div>
//                 <h4 className="font-semibold text-gray-800">Benefits:</h4>
//                 <ul className="list-disc list-inside text-gray-600">
//                     {service.benefits.map((item, index) => (
//                         <li key={index}>{item}</li>
//                     ))}
//                 </ul>
//             </div>

//             <p className="text-gray-600">
//                 <strong>Duration:</strong> {service.duration}
//             </p>
//             <p className="text-gray-600">
//                 <strong>Location:</strong> {service.location}
//             </p>
//             <button className="bg-gradient-to-r from-[#044F86] to-[#0A6EB5]  text-white px-4 py-2 rounded hover:bg-blue-400 transition-transform duration-300  ease-out  hover:scale-105">
//                 {service.cta}
//             </button>
//         </div>
//     );
// };

// const ServicesPage = () => {
//     return (
//         <div className="flex flex-col p-3 lg:p-8 leading-[1.3125rem] tracking-wide border">
//             <div className="relative  py-12 px-8 border">
//                 <div className=" mx-auto flex justify-between items-center relative ">


//                     <div className="bg-[#A7594D] text-white p-5 px-8 rounded-md shadow-md w-1/4 relative">
//                         <h3 className="font-bold text-lg">Meditation and Mindfulness</h3>
//                         <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
//                             <li>Alleviates stress and anxiety</li>
//                             <li>Improves mental clarity and focus</li>
//                             <li>Promotes emotional balance and physical healing</li>
//                         </ul>

//                         {/* <div className="absolute top-0 right-[-40px] h-[2px] w-40 bg-gray-400 transform rotate-45"></div> */}
//                     </div>


//                     <div className="bg-[#A7594D] text-white p-5 rounded-md shadow-md w-1/4 relative">
//                         <h3 className="font-bold text-lg">Singing bowl and handicrafts</h3>
//                         <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
//                             <li>Alleviates stress and anxiety</li>
//                             <li>Improves mental clarity and focus</li>
//                             <li>Promotes emotional balance and physical healing</li>
//                         </ul>
//                         {/* <div className="absolute top-1/2 left-[-20px] h-[2px] w-[40px] bg-gray-400 transform -translate-y-1/2 rotate-[-45deg]"></div> */}
//                     </div>


//                     <div className="relative w-full flex justify-center items-center">
//                         <img
//                             src="/Images/Service1.png"
//                             alt="Sound Healing"
//                             className=" w-1/2 object-cover mix-blend-multiply"
//                         />
//                     </div>


//                     <div className="bg-[#A7594D] text-white p-5 rounded-md shadow-md w-1/4 relative">
//                         <h3 className="font-bold text-lg">Retreat centers</h3>
//                         <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
//                             <li>Alleviates stress and anxiety</li>
//                             <li>Improves mental clarity and focus</li>
//                             <li>Promotes emotional balance and physical healing</li>
//                         </ul>
//                         {/* <div className="absolute top-1/2 right-[-20px] h-[2px] w-[40px] bg-gray-400 transform -translate-y-1/2 rotate-[-45deg]"></div> */}
//                     </div>


//                     <div className="bg-[#A7594D] text-white p-5 rounded-md shadow-md w-1/4 relative">
//                         <h3 className="font-bold text-lg">Spiritual and mental growth activities</h3>
//                         <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
//                             <li>Alleviates stress and anxiety</li>
//                             <li>Improves mental clarity and focus</li>
//                             <li>Promotes emotional balance and physical healing</li>
//                         </ul>

//                         {/* <div className="absolute top-1/2 left-[-20px] h-[2px] w-[40px] bg-gray-400 transform -translate-y-1/2 rotate-[45deg]"></div> */}
//                     </div>

//                 </div>
//             </div>

//             <div className="max-w-8xl mx-auto lg:mx-2 space-y-12  mt-12 p-4">

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
//                     {services.map((service, index) => (
//                         <ServiceCard key={index} service={service} />
//                     ))}
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default ServicesPage;





// import React from 'react';
// import { MdOutlineHorizontalRule } from "react-icons/md";

// const services = [
//     {
//         title: 'Meditation and Mindfulness',
//         image: '/Images/homePhoto.jpg',
//         description: 'In a world filled with distractions, finding inner peace can feel like a distant dream. Yogi Akash offers personalized meditation guidance to help you reconnect with your inner self, achieve mental clarity, and cultivate lasting tranquilityWhether you are new to meditation or an experienced practitioner, Yogi Akash’s step-by-step guidance is designed to deepen your practice. Learn powerful techniques such as mindful breathing, mantra repetition, and visualization to unlock your potential for self-awareness.Through Yogi Akash’s guidance, you will experience a profound shift in your mental and emotional well-being. From reducing stress to fostering emotional resilience, his teachings are a gateway to a healthier, happier you',
//         whatIncluded: [
//             'Guided meditation and breathing exercises',
//             'Sound healing session with singing bowls',
//             'Relaxation techniques to reduce stress'
//         ],
//         benefits: ['Enhanced focus', 'Stress relief', 'Emotional balance'],
//         duration: '45 mins',
//         location: 'Outdoor or private studio',
//         cta: 'Book my session!',
//     },
//     {
//         title: 'Sound Healing classes',
//         image: '/Images/homePhoto.jpg',
//         description: 'Sound has the power to heal, uplift, and rejuvenate. Yogi Akash’s Sound Healing Classes are designed to harness the vibrational energy of sound to balance your body, mind, and spirit. Discover a profound sense of harmony through the ancient art of sound therapy.In these classes, you will explore the mystical vibrations of singing bowls, the grounding resonance of gongs, and the calming tones of Tingsha cymbals. Learn how these powerful tools can realign your energy, reduce stress, and promote deep relaxation.',
//         whatIncluded: [
//             'Introduction to sound healing and its benefits',
//             'Practical sessions using instruments like singing bowls, gongs, and Tingsha cymbals',
//             'Learning how to use sound to release emotional blockages',
//             'Techniques for self-healing and healing others',

//         ],
//         benefits: ['Relieves stress, anxiety, and tension', 'Promotes better sleep and relaxation', 'Balances energy centers (chakras)', 'Facilitates emotional release and spiritual awakening'],
//         duration: '2 hours',
//         location: 'Workshop studio',
//         cta: 'Book a workshop now!',
//     },
//     {
//         title: 'Retreat Centers',
//         image: '/Images/homePhoto.jpg',
//         description: 'Enjoy serene retreat locations with meditation, yoga, and guided activities for total relaxation.',
//         whatIncluded: [
//             'Access to beautiful retreat locations',
//             'Guided meditation and yoga sessions',
//             'Healthy meals and relaxing environments'
//         ],
//         benefits: ['Complete rejuvenation', 'Increased mindfulness', 'Digital detox'],
//         duration: 'Weekend',
//         location: 'Various serene retreat locations',
//         cta: 'Explore Retreats',
//     },
//     {
//         title: 'Spiritual and Mental Growth Activities',
//         image: '/Images/homePhoto.jpg',
//         description: 'Explore a variety of activities aimed at improving your mental clarity, emotional intelligence, and spiritual growth.',
//         whatIncluded: [
//             'Workshops on mindfulness and personal growth',
//             'Interactive group sessions',
//             'Personalized coaching sessions'
//         ],
//         benefits: ['Improved clarity', 'Stronger emotional intelligence', 'Growth mindset'],
//         duration: '2 hours',
//         location: 'Local studio or virtual options',
//         cta: 'Join a session today!',
//     },
// ];

// const ServiceCard = ({ service }) => {
//     return (
//         <div className="bg-white shadow-md rounded-lg p-3 lg:p-12 space-y-4">

//             <h3 className="text-xl font-bold text-gray-800 text-center">{service.title}</h3>

//             <img src={service.image} />
//             <p className="text-gray-600">{service.description}</p>

//             <div>
//                 <h4 className="font-semibold text-gray-800">What's Included:</h4>
//                 <ul className="list-disc list-inside text-gray-600">
//                     {service.whatIncluded.map((item, index) => (
//                         <li key={index}>{item}</li>
//                     ))}
//                 </ul>
//             </div>

//             <div>
//                 <h4 className="font-semibold text-gray-800">Benefits:</h4>
//                 <ul className="list-disc list-inside text-gray-600">
//                     {service.benefits.map((item, index) => (
//                         <li key={index}>{item}</li>
//                     ))}
//                 </ul>
//             </div>

//             <p className="text-gray-600">
//                 <strong>Duration:</strong> {service.duration}
//             </p>
//             <p className="text-gray-600">
//                 <strong>Location:</strong> {service.location}
//             </p>
//             <button className="bg-gradient-to-r from-[#044F86] to-[#0A6EB5]  text-white px-4 py-2 rounded hover:bg-blue-400 transition-transform duration-300  ease-out  hover:scale-105">
//                 {service.cta}
//             </button>
//         </div>
//     );
// };

// const ServicesPage = () => {
//     return (
//         <div className="flex flex-col p-3 lg:p-8 leading-[1.3125rem] tracking-normal">

//             <div className="p-8 items-center justify-center">

//                 <div className="flex  items-center  relative font-poppins ">



//                     <div className="absolute top-0 left-20 flex flex-col  gap-2 bg-[#A7594D] text-white p-2 rounded-md shadow-md w-1/3 items-center justify-center">
//                         <h3 className="font-bold text-lg">Meditation and Mindfulness</h3>
//                         <p className='flex items-center justify-center'> Calm your mind and find peace through meditation techniques.</p>
//                     </div>


//                     <div className="absolute flex flex-col items-center justify-center gap-2 bg-[#A7594D] text-white p-2  rounded-md shadow-md w-1/3">
//                         <h3 className="font-bold text-lg">Sound Healing Therapy</h3>
//                         <p> Calm your mind and find peace through meditation techniques.</p>
//                     </div>

//                     <div className="absolute bottom-0 left-10 flex flex-col items-center justify-center gap-2 bg-[#A7594D] text-white p-2 rounded-md shadow-md w-1/3">
//                         <h3 className="font-bold text-lg">Spiritual Events and retreats</h3>
//                         <p> Take a break from daily life to recharge and Reconnect with yourself
//                         </p>
//                     </div>


//                     <div className=" w-full flex justify-center items-center">
//                         <img
//                             src="/Images/Service1.png"
//                             alt="Sound Healing"
//                             className="w-1/3 pl-2 object-cover mix-blend-multiply"
//                         />
//                     </div>


//                     <div className="absolute top-0 right-28 items-center justify-center flex flex-col gap-2 bg-[#A7594D] text-white p-2 rounded-md shadow-md w-1/3">
//                         <h3 className="font-bold text-lg">Sound Baths and relaxation</h3>
//                         <p> Enjoy soothing sounds that melt away stress and bring deep relaxation.
//                         </p>
//                     </div>

//                     <div className="absolute right-10 items-center justify-center flex flex-col gap-2 bg-[#A7594D] text-white p-2 rounded-md shadow-md w-1/3">
//                         <h3 className="font-bold text-lg">Yoga and Energy awakening</h3>
//                         <p>Move, breathe, and connect with your inner energy through yoga.
//                         </p>
//                     </div>


//                     <div className="absolute bottom-0 right-16 flex flex-col items-center justify-center gap-2 bg-[#A7594D] text-white p-2 rounded-md shadow-md w-1/3">
//                         <h3 className="font-bold text-lg">Healing & welness workshops</h3>
//                         <p>Healing workshops that help you heal, grow, and feel better</p>
//                     </div>

//                 </div>
//             </div>

//             <div className="max-w-8xl mx-auto lg:mx-2 space-y-12  mt-12 p-4">

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
//                     {services.map((service, index) => (
//                         <ServiceCard key={index} service={service} />
//                     ))}
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default ServicesPage;


import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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

const ServiceCard = ({ service }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-3 lg:p-12 space-y-4">
            <h3 className="text-xl font-bold text-gray-800 text-center">{service.title}</h3>
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-lg" />
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
            <button className="bg-gradient-to-r from-[#044F86] to-[#0A6EB5] text-white px-4 py-2 rounded hover:bg-blue-400 transition-transform duration-300 ease-out hover:scale-105">
                {service.cta}
            </button>
        </div>
    );
};

const ServicesPage = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="flex flex-col p-3 lg:p-8 leading-[1.3125rem] tracking-normal">
            <div className="p-8 items-center justify-center">
                <div className="flex items-center relative font-poppins" ref={ref}>
                    {/* Animated Elements */}

                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="absolute top-0 left-20 flex flex-col gap-2 bg-[#A7594D] text-white p-2  shadow-md w-1/3 items-center justify-center rounded-custom"
                    >
                        <h3 className="font-bold text-lg">Meditation and Mindfulness</h3>
                        <p className="flex items-center justify-center text-center">Calm your mind and find peace through meditation techniques.</p>
                    </motion.div>

                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="absolute flex flex-col items-center justify-center gap-2 bg-[#A7594D] text-white p-2 rounded-custom shadow-md w-1/3"
                    >
                        <h3 className="font-bold text-lg">Sound Healing Therapy</h3>
                        <p className='text-center'>Calm your mind and find peace through meditation techniques.</p>
                    </motion.div>

                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="absolute bottom-0 left-10 flex flex-col items-center justify-center gap-2 bg-[#A7594D] text-white p-2 rounded-custom shadow-md w-1/3"
                    >
                        <h3 className="font-bold text-lg">Spiritual Events and Retreats</h3>
                        <p className='text-center'>Take a break from daily life to recharge and reconnect with yourself.</p>
                    </motion.div>

                    <div className="w-full flex justify-center items-center">
                        <img
                            src="/Images/Service1.png"
                            alt="Sound Healing"
                            className="w-1/3 pl-2 object-cover mix-blend-multiply"
                        />
                    </div>

                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="absolute top-0 right-28 items-center justify-center flex flex-col gap-2 bg-[#A7594D] text-white p-2 rounded-custom shadow-md w-1/3"
                    >
                        <h3 className="font-bold text-lg">Sound Baths and Relaxation</h3>
                        <p className='text-center'>Enjoy soothing sounds that melt away stress and bring deep relaxation.</p>
                    </motion.div>

                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 1.0 }}
                        className="absolute right-10 items-center justify-center flex flex-col gap-2 bg-[#A7594D] text-white p-2 rounded-custom shadow-md w-1/3"
                    >
                        <h3 className="font-bold text-lg">Yoga and Energy Awakening</h3>
                        <p className='text-center'>Move, breathe, and connect with your inner energy through yoga.</p>
                    </motion.div>

                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="absolute bottom-0 right-16 flex flex-col items-center justify-center gap-2 bg-[#A7594D] text-white p-2 rounded-custom shadow-md w-1/3"
                    >
                        <h3 className="font-bold text-lg">Healing & Wellness Workshops</h3>
                        <p className='text-center'>Healing workshops that help you heal, grow, and feel better.</p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-8xl mx-auto lg:mx-2 space-y-12 mt-12 p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;

