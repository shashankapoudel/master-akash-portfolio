// import React from 'react'

// const GalleryCard = () => {
//     return (
//         <div className='flex flex-col p-8'>

//             <h1 className='text-center text-3xl font-semibold text-[#111111]'>Gallery</h1>
//             <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4'>

//                 <img
//                     className='w-full rounded-md mb-4'
//                     src='/Images/homePhoto.jpg'
//                 />
//                 <img
//                     className='w-full rounded-md mb-4'
//                     src='/Images/homePhoto.jpg'
//                 />
//                 <img
//                     className='w-full rounded-md mb-4'
//                     src='/Images/homePhoto.jpg'
//                 />
//                 <img
//                     className='w-full rounded-md mb-4'
//                     src='/Images/homePhoto.jpg'
//                 />
//                 <img
//                     className='w-full rounded-md mb-4'
//                     src='/Images/homePhoto.jpg'
//                 />
//                 <img
//                     className='w-full rounded-md mb-4'
//                     src='/Images/homePhoto.jpg'
//                 />
//                 <img
//                     className='w-full rounded-md mb-4'
//                     src='/Images/homePhoto.jpg'
//                 />
//                 <img
//                     className='w-full rounded-md mb-4'
//                     src='/Images/homePhoto.jpg'
//                 />
//             </div>

//         </div>
//     )
// }

// export default GalleryCard








import React, { useState } from 'react';
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const GalleryCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        '/Images/homePhoto.jpg',
        '/Images/homePhoto.jpg',
        '/Images/homePhoto.jpg',
        '/Images/homePhoto.jpg',
        '/Images/homePhoto.jpg',
        '/Images/homePhoto.jpg',
        '/Images/homePhoto.jpg',
        '/Images/homePhoto.jpg',
    ];

    const imagesPerPage = 4;
    const chunks = [];

    for (let i = 0; i < images.length; i += imagesPerPage) {
        chunks.push(images.slice(i, i + imagesPerPage));
    }

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex >= chunks.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex <= 0 ? chunks.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className='p-8'>
            <h1 className='text-center text-3xl font-semibold text-[#111111]'>Gallery</h1>
            <div className='flex items-center justify-center mt-4'>
                <button
                    className='text-white bg-black bg-opacity-50 p-1 rounded-full hover:bg-opacity-70 transition'
                    onClick={prevSlide}
                >
                    <GrFormPrevious />
                </button>

                <div className='overflow-hidden w-full'>
                    <div
                        className='flex transition-transform duration-500 ease-in-out'
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {chunks.map((chunk, index) => (
                            <div key={index} className='w-full flex-shrink-0 grid grid-cols-4 gap-4 px-2'>
                                {chunk.map((image, idx) => (
                                    <img
                                        key={idx}
                                        className='object-cover rounded-md shadow-lg'
                                        src={image}
                                        alt={`Gallery image ${index * imagesPerPage + idx + 1}`}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    className='text-white bg-black bg-opacity-50 p-1 rounded-full hover:bg-opacity-70 transition'
                    onClick={nextSlide}
                >
                    <GrFormNext />

                </button>
            </div>
        </div>
    );
};

export default GalleryCard;