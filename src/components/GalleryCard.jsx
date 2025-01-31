
// import React, { useState } from 'react';
// import { GrFormPrevious } from "react-icons/gr";
// import { GrFormNext } from "react-icons/gr";

// const GalleryCard = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const images = [
//         '/Images/homePhoto.jpg',
//         '/Images/homePhoto.jpg',
//         '/Images/homePhoto.jpg',
//         '/Images/homePhoto.jpg',
//         '/Images/homePhoto.jpg',
//         '/Images/homePhoto.jpg',
//         '/Images/homePhoto.jpg',
//         '/Images/homePhoto.jpg',
//     ];

//     const imagesPerPage = 3;
//     const chunks = [];

//     for (let i = 0; i < images.length; i += imagesPerPage) {
//         chunks.push(images.slice(i, i + imagesPerPage));
//     }

//     const nextSlide = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex >= chunks.length - 1 ? 0 : prevIndex + 1
//         );
//     };

//     const prevSlide = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex <= 0 ? chunks.length - 1 : prevIndex - 1
//         );
//     };

//     return (
//         <div className=' p-4 lg:p-8'>
//             <h1 className='text-center text-3xl font-semibold text-[#111111]'>Gallery</h1>
//             <div className='flex items-center justify-center mt-4'>

//                 <button
//                     className='text-white bg-black bg-opacity-50  p-0 lg:p-1 rounded-full hover:bg-opacity-70 transition'
//                     onClick={prevSlide}
//                 >
//                     <GrFormPrevious />
//                 </button>

//                 <div className='overflow-hidden w-full'>
//                     <div
//                         className='flex transition-transform duration-500 ease-in-out'
//                         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//                     >
//                         {chunks.map((chunk, index) => (
//                             <div key={index} className='w-full flex-shrink-0 grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 px-0 lg:px-2'>
//                                 {chunk.map((image, idx) => (
//                                     <img
//                                         key={idx}
//                                         className='object-cover rounded-md shadow-lg'
//                                         src={image}
//                                         alt={`Gallery image ${index * imagesPerPage + idx + 1}`}
//                                     />
//                                 ))}
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 <button
//                     className='text-white bg-black bg-opacity-50 p-0 lg:p-1 rounded-full hover:bg-opacity-70 transition'
//                     onClick={nextSlide}
//                 >
//                     <GrFormNext />

//                 </button>
//             </div>
//         </div>
//     );
// };

// export default GalleryCard;



import React, { useState } from 'react';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

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

    const imagesPerPage = 3;
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
        <div className='p-4'>
            <h1 className='text-center text-3xl font-semibold text-[#111111]'>Gallery</h1>

            <div className='flex flex-col lg:flex-row  items-center justify-center mt-4 bg-[#FFFFFF] p-4 border rounded-custom'>
                <button
                    className='text-white bg-black bg-opacity-50 p-0 lg:p-1 rounded-full hover:bg-opacity-70 transition'
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

                            <div
                                key={index}
                                className='w-full flex-shrink-0 grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4 px-0'
                            >
                                {chunk.map((image, idx) => (

                                    <div
                                        key={idx}
                                        className={`relative transition-all duration-300 ease-in-out ${idx === 1 ? 'scale-125 z-10' : 'scale-90 blur-sm'
                                            }`}
                                    >
                                        <img
                                            className='object-cover rounded-md shadow-lg w-full hover:scale-105 cursor-pointer'
                                            src={image}
                                            alt={`Gallery image ${index * imagesPerPage + idx + 1}`}
                                        />
                                    </div>
                                ))}
                            </div>

                        ))}
                    </div>

                </div>

                <button
                    className='text-white bg-black bg-opacity-50 p-0 lg:p-1 rounded-full hover:bg-opacity-70 transition'
                    onClick={nextSlide}
                >
                    <GrFormNext />
                </button>
            </div>
        </div>
    );
};

export default GalleryCard;