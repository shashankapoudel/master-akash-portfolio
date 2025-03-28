

// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { GrFormPrevious } from "react-icons/gr";
// import { GrFormNext } from "react-icons/gr";

// const services = [
//     {
//         title: ' Meditation and Mindfulness',
//         description:
//             'In a world filled with distractions, finding inner peace can feel like a distant dream. Yogi Akash offers personalized meditation guidance to help you reconnect with your inner self, achieve mental clarity, and cultivate lasting tranquility.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque veritatis amet fugiat sunt aliquid inventore laboriosam obcaecati perferendis quasi quam? Vitae hic delectus mollitia vel nesciunt expedita dicta consequatur dolor.',
//         image: '/Images/homePhoto.jpg',
//     },
//     {
//         title: 'Sound Baths and Relaxation',
//         description:
//             'With years of experience in sound therapy and a deep understanding of vibrational healing, Yogi Akash brings a unique blend of ancient wisdom and modern insights to his classes. Whether you are a curious beginner or an experienced practitioner.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque veritatis amet fugiat sunt aliquid inventore laboriosam obcaecati perferendis quasi quam? Vitae hic delectus mollitia vel nesciunt expedita dicta consequatur dolor.',
//         image: '/Images/homePhoto.jpg',
//     },
//     {
//         title: ' Sound Healing Therapy',
//         description:
//             'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque veritatis amet fugiat sunt aliquid inventore laboriosam obcaecati perferendis quasi quam? Vitae hic delectus mollitia vel nesciunt expedita dicta consequatur dolor.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque veritatis amet fugiat sunt aliquid inventore laboriosam obcaecati perferendis quasi quam? Vitae hic delectus mollitia vel nesciunt expedita dicta consequatur dolor.',
//         image: '/Images/homePhoto.jpg',
//     },
//     {
//         title: 'Yoga and Energy Awakening',
//         description:
//             'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque veritatis amet fugiat sunt aliquid inventore laboriosam obcaecati perferendis quasi quam? Vitae hic delectus mollitia vel nesciunt expedita dicta consequatur dolor.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque veritatis amet fugiat sunt aliquid inventore laboriosam obcaecati perferendis quasi quam? Vitae hic delectus mollitia vel nesciunt expedita dicta consequatur dolor.',
//         image: '/Images/homePhoto.jpg',
//     },
// ];

// const ServiceCard = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [isHovered, setIsHovered] = useState(false)
//     const [isVisible, setIsVisible] = useState(true);
//     const componentRef = useRef(null);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 setIsVisible(entry.isIntersecting);
//             },
//             { threshold: 0.1 }
//         );

//         if (componentRef.current) {
//             observer.observe(componentRef.current);
//         }

//         return () => {
//             if (componentRef.current) {
//                 observer.unobserve(componentRef.current);
//             }
//         };
//     }, []);

//     useEffect(() => {
//         let interval;
//         if (!isHovered && isVisible) {  // Only auto-change when visible
//             interval = setInterval(() => {
//                 setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
//             }, 3000);
//         }

//         return () => clearInterval(interval);
//     }, [isHovered, isVisible]);

//     const handlePrevious = () => {
//         setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
//     }
//     const handleNext = () => {
//         setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
//     };


//     return (
//         <div className='flex flex-col gap-2 relative mt-4 p-4 font-poppins'>
//             <h1 className='text-center text-3xl font-semibold text-[#111111]'>Services</h1>

//             <div className='grid place-items-center mt-2'>
//                 <AnimatePresence mode='wait'>
//                     <motion.div
//                         key={currentIndex}
//                         initial={{ opacity: 0, x: 100 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         exit={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.3 }}
//                         viewport={{ once: true }}
// onMouseEnter={() => setIsHovered(true)}
// onMouseLeave={() => setIsHovered(false)}
//                         aria-live='polite'
//                         aria-atomic='true'
//                         className='flex flex-col gap-4 w-full p-5 lg:p-8 border border-[#E6E7F3]  bg-[#FFFFFF]  rounded-3xl lg:rounded-card-custom'
//                     >
//                         <h1 className='text-[#022B4A] font-bold text-xl text-center'>
//                             {services[currentIndex].title}
//                         </h1>
//                         <div className='flex flex-col lg:flex-row md:flex-col gap-4 lg:gap-8'>

//                             <div className='w-full md:w-full lg:w-1/2 p-0 lg:p-4'>
//                                 <img
//                                     className='w-full object-cover rounded-home-custom-sm lg:rounded-home-custom mb-4'
//                                     src={services[currentIndex].image}
//                                     alt={services[currentIndex].title}
//                                 />
//                             </div>

//                             <div className='w-full md:w-full lg:w-1/2 flex flex-col items-start justify-start p-0 lg:p-4 gap-4'>

//                                 <p className='text-[#666666] p-0 lg:p-2 text-sm lg:text-lg '>
//                                     {services[currentIndex].description}
//                                 </p>

//                                 <button
//                                     className=' w-full lg:w-1/2 bg-[#044F86] rounded-md p-2 text-white mt-2 bg-gradient-to-r from-[#044F86] to-[#0A6EB5] transition-transform duration-300 ease-out hover:scale-105'
//                                 >
//                                     Book my session
//                                 </button>
//                             </div>
//                         </div>

//                         <div className='flex items-center justify-center gap-3'>
//                             <button
//                                 className="text-white bg-black bg-opacity-50  rounded-full hover:bg-opacity-70 transition"
//                                 onClick={handlePrevious}>
//                                 <GrFormPrevious />
//                             </button>
//                             <button
//                                 className="text-white bg-black bg-opacity-50  rounded-full hover:bg-opacity-70 transition"
//                                 onClick={handleNext}>
//                                 <GrFormNext />
//                             </button>
//                         </div>
//                     </motion.div>
//                 </AnimatePresence>
//             </div>
//         </div>
//     );
// };

// export default ServiceCard;





import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const services = [
    {
        title: 'Meditation and Mindfulness',
        description:
            'In a world filled with distractions, finding inner peace can feel like a distant dream. Yogi Akash offers personalized meditation guidance to help you reconnect with your inner self, achieve mental clarity, and cultivate lasting tranquility. Through carefully designed techniques, including breath awareness, visualization, and mantra meditation, these sessions allow you to release stress, enhance focus, and develop emotional resilience. Whether you are a beginner or someone looking to deepen your practice, Yogi Akash provides expert support to help you integrate meditation into your daily life and unlock its profound benefits.',
        image: '/Images/homePhoto.jpg',
    },
    {
        title: 'Sound Baths and Relaxation',
        description:
            'With years of experience in sound therapy and a deep understanding of vibrational healing, Yogi Akash brings a unique blend of ancient wisdom and modern insights to his classes. Whether you are a curious beginner or an experienced practitioner, these sessions use the soothing frequencies of singing bowls, gongs, and other sound instruments to guide you into deep relaxation. The vibrations help in reducing stress, releasing emotional blockages, and promoting a sense of harmony and well-being. Attendees often report feeling lighter, more centered, and deeply rejuvenated after each session, making it a powerful tool for relaxation and holistic healing.',
        image: '/Images/homePhoto.jpg',
    },
    {
        title: 'Sound Healing Therapy',
        description:
            'Sound healing therapy is a transformative experience that utilizes the power of sound vibrations to promote deep relaxation, emotional balance, and physical healing. Yogi Akash integrates the ancient practice of singing bowl therapy with modern sound healing techniques to create a personalized approach tailored to each individual’s needs. The resonant frequencies work to release energy blockages, harmonize the mind and body, and restore inner balance. Whether you seek relief from stress, anxiety, or simply wish to experience the rejuvenating effects of sound therapy, these sessions provide a peaceful and deeply immersive healing journey.',
        image: '/Images/homePhoto.jpg',
    },
    {
        title: 'Yoga and Energy Awakening',
        description:
            'Yoga is a holistic practice that extends beyond physical postures to awaken the body’s energy and unlock hidden potential. Yogi Akash’s sessions are designed to help practitioners cultivate strength, flexibility, and mindfulness through asanas, pranayama, and guided meditation. By incorporating energy awakening techniques, these sessions enhance vitality, improve mental clarity, and foster a deeper connection between mind, body, and spirit. Whether you are seeking to enhance your physical health, deepen your spiritual journey, or release stagnant energy, these sessions provide a transformative experience that aligns you with your inner power and true self.',
        image: '/Images/homePhoto.jpg',
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

                <div className='flex flex-col gap-4 w-full p-5 lg:p-8 border border-[#E6E7F3]  bg-[#FFFFFF]  rounded-3xl lg:rounded-card-custom shadow-sm'>
                    <h1 className='text-[#022B4A] font-bold text-lg md:text-xl lg:text-xl text-center '>
                        {services[currentIndex].title}
                    </h1>
                    <div className='flex flex-col lg:flex-row md:flex-col gap-4 lg:gap-8 '>

                        <div className='w-full md:w-full lg:w-1/2 p-0 lg:p-4'>
                            <img
                                className='w-full object-cover rounded-home-custom-sm lg:rounded-home-custom mb-4'
                                src={services[currentIndex].image}
                                alt={services[currentIndex].title}
                                loading="lazy"
                            />
                        </div>

                        <div className='w-full md:w-full lg:w-1/2 flex flex-col items-start justify-start p-0 lg:p-4 gap-4'>

                            <p className='text-[#666666] p-0 lg:p-2 text-sm lg:text-lg md:text-lg '>
                                {services[currentIndex].description}
                            </p>

                            <button
                                className=' w-full lg:w-1/2 bg-[#044F86] rounded-md p-2 text-white mt-2 bg-gradient-to-r from-[#044F86] to-[#0A6EB5] transition-transform duration-300 ease-out hover:scale-105'
                            >
                                Book my session
                            </button>
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



