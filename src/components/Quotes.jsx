
import React, { useState, useEffect } from 'react';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

const Quotes = () => {
    const quotesData = [

        {
            image: '/Images/Quotes/1.png',
            text: 'Meditation can be like a battle with yourself, your thoughts, your body',
        },

        {
            image: '/Images/Quotes/2.png',
            text: 'Peace is the result of retraining your mind to process life as it is, rather than as you think it should be',
        },

        {
            image: '/Images/Quotes/3.png',
            text: 'Meditation is silence, energising and fulfilling. Silent is the eloquent expression of the inexpressible.',
        },

        {
            image: '/Images/Quotes/4.png',
            text: 'Happiness comes, not by helplessly wishing for it, but by dreaming, thinking and living it in all circumstances.',
        },

        {
            image: '/Images/Quotes/5.png',
            text: 'Healing vibrations are the bridge between body, mind and spirit',
        },

        {
            image: '/Images/Quotes/6.png',
            text: 'The body benefits from movement, and the mind benefits from stillness',
        },

        {
            image: '/Images/Quotes/7.png',
            text: 'When breath control is correct, mind control is possible',
        },

        {
            image: '/Images/Quotes/8.png',
            text: 'Yoga does not just change the way we see things, it transforms the person who sees',
        },

        {
            image: '/Images/Quotes/9.png',
            text: 'When you find peace within yourself, you become the kind of person who can live at peace with others.',
        },

    ];

    const [index, setIndex] = useState(0);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

    useEffect(() => {

        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % quotesData.length);
        }, 6000);


        return () => clearInterval(interval);
    }, []);

    useEffect(() => {

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
                                    loading="lazy"
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
