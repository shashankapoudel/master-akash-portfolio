// import React from 'react'

// const Services = () => {
//     return (
//         <div className='flex flex-col items-center justify-center m-20 gap-12 '>
//             <div className='relative w-full'>
//                 <div className='w-full flex items-center justify-center p-6 '>
//                     <img
//                         src="../public/images/services2.jpg"
//                         alt="Service Photo"
//                         className="w-1/2 h-1/2 object-contain"
//                     />
//                 </div>

//                 <div className='p-10 w-1/5 bg-[#3c5551] absolute top-0 left-0 text-white'>
//                     Meditation and sound healing
//                 </div>

//                 <div className='p-10 w-1/5 bg-[#3c5551] absolute bottom-0 left-0 text-white'>
//                     Retreat centers
//                 </div>

//                 <div className='p-10 w-1/5 bg-[#3c5551] absolute top-0 right-0 text-white'>
//                     singing bowl and handicrafts
//                 </div>

//                 <div className='p-10 w-1/5 bg-[#3c5551] absolute bottom-0 right-0 text-white'>
//                     Spiritual and mental growth activities
//                 </div>
//             </div>


//             <div className='w-full grid grid-cols-3 gap-4'>
//                 <div className='border h-auto'>
//                     <h1 className='text-center'>
//                         Meditation and sound healing
//                     </h1>
//                     <p></p>
//                 </div>
//                 <div className=' border h-20'></div>
//                 <div className=' border h-20'></div>
//                 <div className=' border h-20'></div>
//                 <div className='border h-20'></div>
//                 <div className=' border h-20'></div>

//             </div>

//         </div>
//     )
// }

// export default Services






import React, { useEffect, useRef, useState } from 'react';

const Services = () => {
    const [isVisible, setIsVisible] = useState({
        box1: false,
        box2: false,
        box3: false,
        box4: false,
    });

    const [imagePosition, setImagePosition] = useState(0);

    const box1Ref = useRef(null);
    const box2Ref = useRef(null);
    const box3Ref = useRef(null);
    const box4Ref = useRef(null);

    const observeVisibility = (ref, box) => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Trigger visibility when the box enters the viewport
                if (entry.isIntersecting) {
                    setIsVisible((prevState) => ({ ...prevState, [box]: true }));
                }
            },
            { threshold: 0.25, rootMargin: '0px 0px -100px 0px' } // Trigger when 25% of the box is visible
        );
        if (ref.current) observer.observe(ref.current);
    };

    useEffect(() => {
        observeVisibility(box1Ref, 'box1');
        observeVisibility(box2Ref, 'box2');
        observeVisibility(box3Ref, 'box3');
        observeVisibility(box4Ref, 'box4');


        const handleScroll = () => {
            const scrollY = window.scrollY;
            setImagePosition(scrollY * 0.3);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center m-20  gap-10">
            <div className='relative w-full'>

                <div className="w-full flex items-center justify-center p-6 ">
                    <img
                        src="/Images/services2.jpg"
                        alt="Service Photo"
                        className="lg:w-1/2 lg:h-1/2 w-full h-full object-contain"

                    />
                </div>

                <div
                    ref={box1Ref}
                    className={`p-10 lg:w-1/5 sm:w-1/4 w-1/4 bg-[#3c5551] absolute top-0 left-0 text-white transform ${isVisible.box1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-100px]'
                        } transition-all duration-1000 ease-in-out`}
                >
                    Meditation and sound healing
                </div>

                <div
                    ref={box2Ref}
                    className={`p-10 w-1/5 bg-[#3c5551] absolute bottom-0 left-0 text-white transform ${isVisible.box2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100px]'
                        } transition-all duration-1000 ease-in-out`}
                >
                    Retreat centers
                </div>

                <div
                    ref={box3Ref}
                    className={`p-10 w-1/5 bg-[#3c5551] absolute top-0 right-0 text-white transform ${isVisible.box3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100px]'
                        } transition-all duration-1000 ease-in-out`}
                >
                    Singing bowl and handicrafts
                </div>

                <div
                    ref={box4Ref}
                    className={`p-10 w-1/5 bg-[#3c5551] absolute bottom-0 right-0 text-white transform ${isVisible.box4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-100px]'
                        } transition-all duration-1000 ease-in-out`}
                >
                    Spiritual and mental growth activities
                </div>
            </div>

            <div className='w-full  grid lg:grid-cols-2  sm:grid-cols-1 gap-4 '>
                <div className='border h-auto p-4'>
                    <h1 className='text-center font-semibold text-3xl text-white font-playfair-display p-2'>
                        Meditation and Sound healing
                    </h1>
                    <p className='text-white font-playfair-display tracking-widest text-xl leading-relaxed'>
                        Meditation and sound healing Rebalance Your Mind, Body, and Spirit
                        Immerse yourself in the transformative power of meditation and sound healing. Our sessions guide you to a state of deep relaxation, inner peace, and heightened awareness, using ancient techniques and healing sounds.
                        <br />
                        <p className='font-semibold text-2xl'>🌟 What We Offer </p>

                        Guided Meditation: Experience tranquility with personalized sessions designed to relieve stress and enhance mindfulness.<br />
                        Sound Healing Therapy: Rejuvenate with the soothing vibrations of singing bowls, gongs, and other sacred instruments.<br />

                        <p className='font-semibold text-2xl'>✨ Benefits</p>
                        Alleviates stress and anxiety<br />
                        Improves mental clarity and focus<br />
                        Promotes emotional balance and physical healing<br />


                        <p className='font-semibold text-2xl'>  🕰️ Session Duration</p>
                        Choose from 30-minute, 60-minute, or customized sessions tailored to your needs.<br />


                        <p className='font-semibold text-2xl'>🌍 Location </p>
                        Join us at our serene retreat in [Your Location] or book online sessions to experience healing from the comfort of your home.<br />


                        <p className='font-semibold text-2xl'> 💬 Discover True Harmony </p>
                        Embark on a journey to self-discovery and holistic well-being.
                        <br />
                        Book Your Session Today!
                    </p>
                </div>



                <div className='border h-auto p-4'>
                    <h1 className='text-center font-semibold text-2xl text-white font-playfair-display'>
                        Retreat Packages
                    </h1>
                    <p className='text-white font-playfair-display tracking-widest text-xl leading-relaxed'>
                        🌄 Experience Tranquility in Nepal’s Natural Beauty<br />
                        Escape the hustle of daily life and immerse yourself in the serenity of Nepal with our exclusive retreat packages. Designed to rejuvenate your mind, body, and soul, these retreats combine mindfulness practices with unforgettable adventures.<br />


                        <p className='font-semibold text-2xl'>  ✨ What’s Included</p>

                        Meditation & Sound Healing: Reconnect with yourself through calming meditative practices and the soothing vibrations of sound healing.<br />

                        Explore Pokhara: Soak in the breathtaking views of the Annapurna range, serene lakes, and spiritual landmarks.<br />

                        Discover Chitwan: Engage in nature walks, jungle safaris, and other recreational activities in the lush wilderness.<br />

                        Recreational Activities: Yoga, nature hikes, cultural explorations, and more to refresh your spirit.<br />


                        <p className='font-semibold text-2xl'> ⏳ Duration</p>

                        Choose from retreat packages ranging from 3 to 20 days, crafted to fit your schedule and needs.<br />

                        <p className='font-semibold text-2xl'> 🌍 Booking Details<br /></p>
                        Ready to start your journey?<br />
                        <a className='text-blue-800 pt-2 text-2xl' href='https://saktiyogaschool.com/book-online'>Book Your Retreat Here</a>
                    </p>
                </div>

                <div className='border h-auto'>
                    <h1 className='text-center'>
                        Meditation and sound healing
                    </h1>
                    <p></p>
                </div>

                <div className='border h-auto'>
                    <h1 className='text-center'>
                        Meditation and sound healing
                    </h1>
                    <p></p>
                </div>

                <div className='border h-auto'>
                    <h1 className='text-center'>
                        Meditation and sound healing
                    </h1>
                    <p></p>
                </div>


            </div>
        </div>
    );
};

export default Services;
