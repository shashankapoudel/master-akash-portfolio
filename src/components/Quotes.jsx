
import React, { useState, useEffect } from 'react';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

const Quotes = () => {
    const quotesData = [
        {
            image: '/Images/Quotes/Quote2.jpg',
            text: 'Meditation can be like a battle with yourself, your thoughts, your body',
        },
        // {
        //     image: '/Images/Quotes/Quote1.jpg',
        //     text: 'Singing Bowl is a medicine for thousands of diseases',
        // },
        {
            image: '/Images/Quotes/Quote3.jpg',
            text: 'Healing vibrations are the bridge between body, mind and spirit',
        },
    ];

    const [index, setIndex] = useState(0);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        // Handle automatic quote change
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % quotesData.length);
        }, 6000);


        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Track screen size to determine whether to show 1 or 2 quotes
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const prevSlide = () => {
        setIndex(prev => (prev === 0 ? quotesData.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setIndex(prev => (prev + 1) % quotesData.length);
    };

    return (
        <div className='mt-2'>
            <h1 className='flex items-center justify-center text-[#022B4A] font-bold text-2xl lg:text-3xl gap-1'>My Quotes</h1>

            <div className='flex items-center justify-center'>
                <button
                    className='text-black bg-opacity-50 p-0 lg:p-1 rounded-full hover:bg-opacity-70 transition text-3xl'
                    onClick={prevSlide}
                >
                    <GrFormPrevious />
                </button>

                <div className='grid grid-cols-1 lg:grid-cols-2 mt-3'>
                    {[0, isLargeScreen ? 1 : null].map((offset, i) => {
                        if (offset === null) return null; // Only show one quote in smaller screens
                        const quoteIndex = (index + offset) % quotesData.length;
                        const quote = quotesData[quoteIndex];

                        return (
                            <div key={i} className='flex flex-col lg:flex-row md:flex-row justify-center items-center p-4 cursor-pointer hover:scale-95 transition'>
                                <img
                                    src={quote.image}
                                    className='lg:w-72 lg:h-72 w-64 h-64 rounded-custom object-cover'
                                    alt="Quote"
                                />

                                <div className='flex p-2 md:p-6 lg:p-7 bg-[#FFFFFF] rounded-2xl text-[#022B4A] font-medium text-2xl font-marck-script'>
                                    <p>
                                        <span className='font-medium text-4xl'> " </span>
                                        {quote.text}
                                        <span className='font-medium text-4xl'> " </span>
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <button
                    className='text-black bg-opacity-50 p-0 lg:p-1 rounded-full hover:bg-opacity-70 transition text-3xl'
                    onClick={nextSlide}
                >
                    <GrFormNext />
                </button>
            </div>
        </div>
    );
};

export default Quotes;
