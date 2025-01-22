

// import React, { useEffect, useRef, useState } from 'react';

// const Services = () => {
//     const [isVisible, setIsVisible] = useState({
//         box1: false,
//         box2: false,
//         box3: false,
//         box4: false,
//     });

//     const [imagePosition, setImagePosition] = useState(0);

//     const box1Ref = useRef(null);
//     const box2Ref = useRef(null);
//     const box3Ref = useRef(null);
//     const box4Ref = useRef(null);

//     const observeVisibility = (ref, box) => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 // Trigger visibility when the box enters the viewport
//                 if (entry.isIntersecting) {
//                     setIsVisible((prevState) => ({ ...prevState, [box]: true }));
//                 }
//             },
//             { threshold: 0.25, rootMargin: '0px 0px -100px 0px' } // Trigger when 25% of the box is visible
//         );
//         if (ref.current) observer.observe(ref.current);
//     };

//     useEffect(() => {
//         observeVisibility(box1Ref, 'box1');
//         observeVisibility(box2Ref, 'box2');
//         observeVisibility(box3Ref, 'box3');
//         observeVisibility(box4Ref, 'box4');


//         const handleScroll = () => {
//             const scrollY = window.scrollY;
//             setImagePosition(scrollY * 0.3);
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <div className="flex flex-col items-center justify-center m-20  gap-10">
//             <div className='relative w-full'>

//                 <div className="w-full flex items-center justify-center p-6 ">
//                     <img
//                         src="/Images/services.jpg"
//                         alt="Service Photo"
//                         className="lg:w-1/2 lg:h-1/2 w-full h-full object-contain"

//                     />
//                 </div>

//                 <div
//                     ref={box1Ref}
//                     className={`p-10 lg:w-1/5 sm:w-1/4 w-1/4 bg-[#3c5551] absolute top-0 left-0 text-white transform ${isVisible.box1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-100px]'
//                         } transition-all duration-1000 ease-in-out`}
//                 >
//                     Meditation and sound healing
//                 </div>

//                 <div
//                     ref={box2Ref}
//                     className={`p-10 w-1/5 bg-[#3c5551] absolute bottom-0 left-0 text-white transform ${isVisible.box2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100px]'
//                         } transition-all duration-1000 ease-in-out`}
//                 >
//                     Retreat centers
//                 </div>

//                 <div
//                     ref={box3Ref}
//                     className={`p-10 w-1/5 bg-[#3c5551] absolute top-0 right-0 text-white transform ${isVisible.box3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100px]'
//                         } transition-all duration-1000 ease-in-out`}
//                 >
//                     Singing bowl and handicrafts
//                 </div>

//                 <div
//                     ref={box4Ref}
//                     className={`p-10 w-1/5 bg-[#3c5551] absolute bottom-0 right-0 text-white transform ${isVisible.box4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-100px]'
//                         } transition-all duration-1000 ease-in-out`}
//                 >
//                     Spiritual and mental growth activities
//                 </div>
//             </div>

//             <div className='w-full  grid lg:grid-cols-2  sm:grid-cols-1 gap-4 '>
//                 <div className='border h-auto p-4'>
//                     <h1 className='text-center font-semibold text-3xl text-white font-playfair-display p-2'>
//                         Meditation and Sound healing
//                     </h1>
//                     <p className='text-white font-playfair-display tracking-widest text-xl leading-relaxed'>
//                         Meditation and sound healing Rebalance Your Mind, Body, and Spirit
//                         Immerse yourself in the transformative power of meditation and sound healing. Our sessions guide you to a state of deep relaxation, inner peace, and heightened awareness, using ancient techniques and healing sounds.
//                         <br />
//                         <p className='font-semibold text-2xl'>🌟 What We Offer </p>

//                         Guided Meditation: Experience tranquility with personalized sessions designed to relieve stress and enhance mindfulness.<br />
//                         Sound Healing Therapy: Rejuvenate with the soothing vibrations of singing bowls, gongs, and other sacred instruments.<br />

//                         <p className='font-semibold text-2xl'>✨ Benefits</p>
//                         Alleviates stress and anxiety<br />
//                         Improves mental clarity and focus<br />
//                         Promotes emotional balance and physical healing<br />


//                         <p className='font-semibold text-2xl'>  🕰️ Session Duration</p>
//                         Choose from 30-minute, 60-minute, or customized sessions tailored to your needs.<br />


//                         <p className='font-semibold text-2xl'>🌍 Location </p>
//                         Join us at our serene retreat in [Your Location] or book online sessions to experience healing from the comfort of your home.<br />


//                         <p className='font-semibold text-2xl'> 💬 Discover True Harmony </p>
//                         Embark on a journey to self-discovery and holistic well-being.
//                         <br />
//                         Book Your Session Today!
//                     </p>
//                 </div>



//                 <div className='border h-auto p-4'>
//                     <h1 className='text-center font-semibold text-2xl text-white font-playfair-display'>
//                         Retreat Packages
//                     </h1>
//                     <p className='text-white font-playfair-display tracking-widest text-xl leading-relaxed'>
//                         🌄 Experience Tranquility in Nepal’s Natural Beauty<br />
//                         Escape the hustle of daily life and immerse yourself in the serenity of Nepal with our exclusive retreat packages. Designed to rejuvenate your mind, body, and soul, these retreats combine mindfulness practices with unforgettable adventures.<br />


//                         <p className='font-semibold text-2xl'>  ✨ What’s Included</p>

//                         Meditation & Sound Healing: Reconnect with yourself through calming meditative practices and the soothing vibrations of sound healing.<br />

//                         Explore Pokhara: Soak in the breathtaking views of the Annapurna range, serene lakes, and spiritual landmarks.<br />

//                         Discover Chitwan: Engage in nature walks, jungle safaris, and other recreational activities in the lush wilderness.<br />

//                         Recreational Activities: Yoga, nature hikes, cultural explorations, and more to refresh your spirit.<br />


//                         <p className='font-semibold text-2xl'> ⏳ Duration</p>

//                         Choose from retreat packages ranging from 3 to 20 days, crafted to fit your schedule and needs.<br />

//                         <p className='font-semibold text-2xl'> 🌍 Booking Details<br /></p>
//                         Ready to start your journey?<br />
//                         <a className='text-blue-800 pt-2 text-2xl' href='https://saktiyogaschool.com/book-online'>Book Your Retreat Here</a>
//                     </p>
//                 </div>

//                 <div className='border h-auto'>
//                     <h1 className='text-center'>
//                         Meditation and sound healing
//                     </h1>
//                     <p></p>
//                 </div>

//                 <div className='border h-auto'>
//                     <h1 className='text-center'>
//                         Meditation and sound healing
//                     </h1>
//                     <p></p>
//                 </div>

//                 <div className='border h-auto'>
//                     <h1 className='text-center'>
//                         Meditation and sound healing
//                     </h1>
//                     <p></p>
//                 </div>


//             </div>
//         </div>
//     );
// };

// export default Services;





import React from 'react';

const services = [
    {
        title: 'Meditation and Sound Healing',
        image: '/Images/homePhoto.jpg',
        description: ' Meditation and sound healing Rebalance Your Mind, Body, and Spirit Immerse yourself in the transformative power of meditation and sound healing. Our sessions guide you to a state of deep relaxation, inner peace, and heightened awareness, using ancient techniques and healing sounds.',
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
        title: 'Singing Bowl and Handicrafts',
        image: '/Images/homePhoto.jpg',
        description: 'Learn the art of using singing bowls for relaxation and healing, along with crafting your own bowl.',
        whatIncluded: [
            'Introduction to singing bowls and their history',
            'Hands-on session with singing bowls',
            'Guidance on crafting and customizing bowls'
        ],
        benefits: ['Cultural learning', 'Stress relief', 'Therapeutic experience'],
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
        <div className="bg-white shadow-md rounded-lg p-8 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
            <img src={service.image} />
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
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                {service.cta}
            </button>
        </div>
    );
};

const ServicesPage = () => {
    return (
        <div className="flex flex-col bg-gray-100 min-h-screen p-14 leading-[1.3125rem] tracking-wider ">
            <div className="relative bg-gray-100 py-2 px-8">
                <div className=" mx-auto flex flex-wrap justify-between items-center relative ">


                    <div className="bg-[#A7594D] text-white p-5 px-8 rounded-md shadow-md w-1/4 relative">
                        <h3 className="font-bold text-lg">Meditation and sound healing</h3>
                        <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                            <li>Alleviates stress and anxiety</li>
                            <li>Improves mental clarity and focus</li>
                            <li>Promotes emotional balance and physical healing</li>
                        </ul>

                        {/* <div className="absolute top-0 right-[-40px] h-[2px] w-40 bg-gray-400 transform rotate-45"></div> */}
                    </div>


                    <div className="bg-[#A7594D] text-white p-5 rounded-md shadow-md w-1/4 relative">
                        <h3 className="font-bold text-lg">Singing bowl and handicrafts</h3>
                        <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                            <li>Alleviates stress and anxiety</li>
                            <li>Improves mental clarity and focus</li>
                            <li>Promotes emotional balance and physical healing</li>
                        </ul>
                        {/* <div className="absolute top-1/2 left-[-20px] h-[2px] w-[40px] bg-gray-400 transform -translate-y-1/2 rotate-[-45deg]"></div> */}
                    </div>


                    <div className="relative w-full flex justify-center items-center">
                        <img
                            src="/Images/services.jpg"
                            alt="Sound Healing"
                            className=" w-1/3 max-h-[389px]  shadow-lg object-cover"
                        />
                    </div>


                    <div className="bg-[#A7594D] text-white p-5 rounded-md shadow-md w-1/4 relative">
                        <h3 className="font-bold text-lg">Retreat centers</h3>
                        <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                            <li>Alleviates stress and anxiety</li>
                            <li>Improves mental clarity and focus</li>
                            <li>Promotes emotional balance and physical healing</li>
                        </ul>
                        {/* <div className="absolute top-1/2 right-[-20px] h-[2px] w-[40px] bg-gray-400 transform -translate-y-1/2 rotate-[-45deg]"></div> */}
                    </div>


                    <div className="bg-[#A7594D] text-white p-5 rounded-md shadow-md w-1/4 relative">
                        <h3 className="font-bold text-lg">Spiritual and mental growth activities</h3>
                        <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                            <li>Alleviates stress and anxiety</li>
                            <li>Improves mental clarity and focus</li>
                            <li>Promotes emotional balance and physical healing</li>
                        </ul>

                        {/* <div className="absolute top-1/2 left-[-20px] h-[2px] w-[40px] bg-gray-400 transform -translate-y-1/2 rotate-[45deg]"></div> */}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto space-y-12  mt-12 p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;


