
// import React, { useState } from 'react';
// import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

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
//             prevIndex >= chunks.length - imagesPerPage ? 0 : prevIndex + 1
//         );
//     };

//     const prevSlide = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex <= 0 ? chunks.length - 1 : prevIndex - 1
//         );
//     };

//     return (
//         <div className='p-4'>
//             <h1 className='text-center text-3xl font-semibold text-[#111111]'>Gallery</h1>

//             <div className='flex flex-col lg:flex-row  items-center justify-center mt-4 bg-[#FFFFFF] p-4 border rounded-custom'>
//                 <button
//                     className='text-white bg-black bg-opacity-50 p-0 lg:p-1 rounded-full hover:bg-opacity-70 transition'
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

//                             <div
//                                 key={index}
//                                 className='w-full flex-shrink-0 grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4 px-0'
//                             >
//                                 {chunk.map((image, idx) => (

//                                     <div
//                                         key={idx}
//                                         className={`relative transition-all duration-300 ease-in-out ${idx === 1 ? 'scale-125 z-10' : 'scale-90 blur-sm'
//                                             }`}
//                                     >
//                                         <img
//                                             className='object-cover rounded-md shadow-lg w-full hover:scale-105 cursor-pointer'
//                                             src={image}
//                                             alt={`Gallery image ${index * imagesPerPage + idx + 1}`}
//                                         />
//                                     </div>
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



import React, { useEffect, useState } from 'react';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import PhotoModal from './PhotoModal';

const GalleryCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const images = [
        '/Images/Gallery/Image1.jpg',
        '/Images/Gallery/Image2.jpg',
        '/Images/Gallery/Image3.jpg',
        '/Images/Gallery/Image4.jpg',
        '/Images/Gallery/Image5.jpg',
    ];

    const imagesPerPage = 3;

    useEffect(() => {
        let interval;
        if (!isHovered) {
            interval = setInterval(() => {
                setCurrentIndex((prev) => prev >= images.length - imagesPerPage ? 0 : prev + 1)
            }, 5000);
        }
        return () => clearInterval(interval);

    }, [isHovered, imagesPerPage, images.length])

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex >= images.length - imagesPerPage ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex <= 0 ? images.length - imagesPerPage : prevIndex - 1
        );
    };


    const openModal = (img) => {
        setSelectedImage(img)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedImage('')
    }

    return (
        <div className='p-4'>
            <h1 className='text-center text-3xl font-semibold text-[#111111]'>Gallery</h1>

            <div className='flex flex-col lg:flex-row items-center justify-center mt-4 bg-[#FFFFFF] p-4 border rounded-3xl'

            >
                <button
                    className='text-white bg-black bg-opacity-50 p-0 lg:p-1 rounded-full hover:bg-opacity-70 transition'
                    onClick={prevSlide}
                >
                    <GrFormPrevious />
                </button>

                <div className='overflow-hidden w-full'>
                    <div
                        className='flex transition-transform duration-500 ease-in-out'
                        style={{ transform: `translateX(-${currentIndex * (100 / imagesPerPage)}%)` }}
                    >
                        {images.map((image, idx) => (
                            <div
                                key={idx}
                                className={`w-full flex-shrink-0 transition-all duration-300 ease-in-out ${idx === currentIndex + 1 ? 'scale-125 z-10' : 'scale-90 blur-sm'
                                    }`}
                                style={{ width: `${100 / imagesPerPage}%` }}
                            >
                                <img
                                    onClick={() => openModal(image)}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    className='object-cover rounded-md shadow-lg w-full hover:scale-105 cursor-pointer lg:h-96 h-full'
                                    src={image}
                                    alt={`Gallery image ${idx + 1}`}
                                />
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

            {isModalOpen && (
                <PhotoModal
                    closeModal={closeModal}
                    selectedImage={selectedImage}
                />
            )}

        </div >
    );
};

export default GalleryCard;