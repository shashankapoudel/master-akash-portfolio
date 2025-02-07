// import React from 'react'
// import { FaLightbulb } from 'react-icons/fa';
// const Quotes = () => {
//     return (
//         <div className='mt-2'>
//             <h1 className='flex items-center justify-center text-[#022B4A] font-bold text-2xl lg:text-3xl gap-1'>My Quotes </h1>

//             <div className=' grid grid-cols-1 lg:grid-cols-2 mt-3'>

//                 <div className='flex flex-col lg:flex-row md:flex-row justify-center items-center p-4 '>
//                     <img
//                         src='/Images/homePhoto.jpg'
//                         className='w-64 h-64 rounded-custom object-cover'
//                     />

//                     <div className=' flex p-2 md:p-8 lg:p-8 bg-[#FFFFFF] rounded-2xl text-[#022B4A] font-semibold text-2xl
//                  font-marck-script'>
//                         <p> <span className='font-extrabold text-4xl'> " </span> When sound resonates with your soul, healing becomes effortless

//                         </p>
//                     </div>

//                 </div>

//                 <div className='flex flex-col lg:flex-row md:flex-row justify-center items-center p-2 lg:p-4'>
//                     <img
//                         src='/Images/Quotes/Quote1.jpg'
//                         className='w-64 h-64 rounded-custom object-cover'
//                     />

//                     <div className=' flex p-2 md:p-8 lg:p-8 bg-[#FFFFFF] rounded-2xl text-[#022B4A] font-semibold text-2xl
//                     font-marck-script'>
//                         <p> <span className='font-extrabold text-4xl'> " </span> Singing Bowl is a medicine for thousands of diseases
//                         </p>
//                     </div>

//                 </div>

//             </div>

//         </div >
//     )
// }

// export default Quotes


import React, { useState, useEffect } from 'react';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
const Quotes = () => {
    const quotesData = [
        {
            image: '/Images/Quotes/Quote2.jpg',
            text: 'Meditation can be like a battle with yourself, your thoughts,your body ',
        },
        {
            image: '/Images/Quotes/Quote1.jpg',
            text: 'Singing Bowl is a medicine for thousands of diseases',
        },
        {
            image: '/Images/Quotes/Quote1.jpg',
            text: 'Healing vibrations are the bridge between mind and spirit',
        },
        {
            image: '/Images/Quotes/Quote1.jpg',
            text: 'Harmony in sound creates harmony in life',
        }
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 2) % quotesData.length);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setIndex((prev) => prev === 0 ? quotesData.length - 1 : prev - 1)
    }

    const nextSlide = () => {
        setIndex((prev) => prev >= quotesData.length ? 0 : prev + 1)
    }

    return (
        <div className='mt-2'>
            <h1 className='flex items-center justify-center text-[#022B4A] font-bold text-2xl lg:text-3xl gap-1'>My Quotes</h1>

            <div className='flex h-auto'>
                <button
                    className='text-black bg-opacity-50 p-0 lg:p-1 rounded-full hover:bg-opacity-70 transition text-3xl'
                    onClick={prevSlide}
                >
                    <GrFormPrevious />
                </button>
                <div className='grid grid-cols-1 lg:grid-cols-2 mt-3'>
                    {[0, 1].map(offset => {
                        const quoteIndex = (index + offset) % quotesData.length;
                        const quote = quotesData[quoteIndex];

                        return (
                            <div key={quoteIndex} className='flex flex-col lg:flex-row md:flex-row justify-center items-center p-4 cursor-pointer hover:scale-95'>
                                <img
                                    src={quote.image}
                                    className='w-64 h-64 rounded-custom object-cover'
                                    alt="Quote"
                                />

                                <div className='flex p-2 md:p-6 lg:p-7 bg-[#FFFFFF] rounded-2xl text-[#022B4A] font-medium text-2xl font-marck-script'>
                                    <p> <span className='font-medium text-4xl'> " </span> {quote.text} <span className='font-medium text-4xl'> " </span> </p>
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
