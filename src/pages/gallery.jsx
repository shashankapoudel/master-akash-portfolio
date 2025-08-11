import React, { useEffect, useState } from 'react';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

const eventsData = [
    {
        id: 1,
        name: 'Yoga and Energy Awakening',
        images: [
            '/Images/yoga/1.jpg',
            '/Images/yoga/2.jpg',
            '/Images/yoga/3.jpg',
            '/Images/yoga/4.jpg',
            '/Images/yoga/6.jpg',
            '/Images/yoga/7.jpg',
            '/Images/yoga/9.jpg',
            '/Images/yoga/10.jpg',
            '/Images/yoga/11.jpg',
            '/Images/yoga/12.jpg',
            '/Images/yoga/13.jpg',
            '/Images/yoga/14.jpg',
            '/Images/yoga/15.jpg',
            '/Images/yoga/16.jpg',
            '/Images/yoga/17.jpg',
            '/Images/yoga/18.jpg',
            '/Images/yoga/19.jpg',
            '/Images/yoga/20.jpg',
            '/Images/yoga/21.jpg',
            '/Images/yoga/22.jpg',
        ],
    },
    {
        id: 2,
        name: 'Certification',
        images: Array.from({ length: 65 }, (_, i) => `/Images/Certificate/${i + 1}.jpg`),
    },
    {
        id: 3,
        name: 'Sound Baths and Relaxation',
        images: [
            '/Images/soundbath/1.jpg',
            '/Images/soundbath/2.jpg',
            '/Images/soundbath/3.jpg',
            '/Images/soundbath/4.jpg',
            '/Images/soundbath/5.jpg',
            '/Images/soundbath/6.jpg',
            '/Images/soundbath/7.jpg',
            '/Images/soundbath/8.jpg',
            '/Images/soundbath/9.jpg',
            '/Images/soundbath/10.jpg',
            '/Images/soundbath/11.jpg',
            '/Images/soundbath/12.jpg',
            '/Images/soundbath/13.jpg',
            '/Images/soundbath/14.jpg',
            '/Images/soundbath/15.jpg',
            '/Images/soundbath/16.jpg',
            '/Images/soundbath/17.jpg',
            '/Images/soundbath/18.jpg',
            '/Images/soundbath/19.jpg',
            '/Images/soundbath/20.jpg',
            '/Images/soundbath/21.jpg',
            '/Images/soundbath/22.jpg',
            '/Images/soundbath/23.jpg',
            '/Images/soundbath/24.jpg',
            '/Images/soundbath/25.jpg',
            '/Images/soundbath/26.jpg',
            '/Images/soundbath/27.jpg',
            '/Images/soundbath/28.jpg',
            '/Images/soundbath/29.jpg',
            '/Images/soundbath/30.jpg',
            '/Images/soundbath/31.jpg',
            '/Images/soundbath/32.jpg',

        ],
    },

    {
        id: 4,
        name: 'Sound Healing Workshops',
        images: [
            '/Images/Sound_healing_workshop/1.jpg',
            '/Images/Sound_healing_workshop/2.jpg',
            '/Images/Sound_healing_workshop/3.jpg',
            '/Images/Sound_healing_workshop/4.jpg',
            '/Images/Sound_healing_workshop/5.jpg',
            '/Images/Sound_healing_workshop/6.jpeg',
            '/Images/Sound_healing_workshop/7.jpeg',
            '/Images/Sound_healing_workshop/8.jpeg',
            '/Images/Sound_healing_workshop/9.jpeg',
        ],
    },
    {
        id: 5,
        name: 'Spiritual Events and Retreats',
        images: [
            '/Images/Spiritual_Event_Retreats/1.jpg',
            '/Images/Spiritual_Event_Retreats/2.JPG',
            '/Images/Spiritual_Event_Retreats/3.JPG',
            '/Images/Spiritual_Event_Retreats/4.JPG',
            '/Images/Spiritual_Event_Retreats/5.JPG',
            '/Images/Spiritual_Event_Retreats/7.JPG',
            '/Images/Spiritual_Event_Retreats/8.JPG',
            '/Images/Spiritual_Event_Retreats/9.JPG',
            '/Images/Spiritual_Event_Retreats/10.JPG',
            '/Images/Spiritual_Event_Retreats/11.JPG',
            '/Images/Spiritual_Event_Retreats/12.JPG',
            '/Images/Spiritual_Event_Retreats/13.JPG',
            '/Images/Spiritual_Event_Retreats/14.JPG',
            '/Images/Spiritual_Event_Retreats/15.JPG',
            '/Images/Spiritual_Event_Retreats/16.JPG',
            '/Images/Spiritual_Event_Retreats/17.JPG',
        ],
    },
];

const Gallery = () => {
    const [selectedEvent, setSelectedEvent] = useState('All');
    const [activeImages, setActiveImages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedImage, setSelectedImage] = useState({ image: null, index: -1, eventId: null });

    const imagesPerPage = 10;

    // Recalculate images whenever event or page changes
    useEffect(() => {
        let images = [];

        if (selectedEvent === 'All') {
            images = eventsData.flatMap((event) =>
                event.images.map((img, idx) => ({
                    image: img,
                    index: idx,
                    eventId: event.id,
                    eventName: event.name,
                }))
            );
        } else {
            const event = eventsData.find((e) => e.name === selectedEvent);
            if (event) {
                images = event.images.map((img, idx) => ({
                    image: img,
                    index: idx,
                    eventId: event.id,
                    eventName: event.name,
                }));
            }
        }

        setActiveImages(images);
        setCurrentPage(1);
    }, [selectedEvent]);


    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = activeImages.slice(indexOfFirstImage, indexOfLastImage);
    const totalPages = Math.max(1, Math.ceil(activeImages.length / imagesPerPage));

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!selectedImage.image) return;

            if (e.key === 'ArrowRight') next();
            else if (e.key === 'ArrowLeft') previous();
            else if (e.key === 'Escape') {
                setSelectedImage({ image: null, index: -1, eventId: null });
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage]);

    const handleImageClick = (image, index, eventId) => {
        setSelectedImage({ image, index, eventId });
    };

    const previous = () => {
        const event = eventsData.find((e) => e.id === selectedImage.eventId);
        if (!event) return;
        const newIndex = (selectedImage.index - 1 + event.images.length) % event.images.length;
        setSelectedImage({ image: event.images[newIndex], index: newIndex, eventId: event.id });
    };

    const next = () => {
        const event = eventsData.find((e) => e.id === selectedImage.eventId);
        if (!event) return;
        const newIndex = (selectedImage.index + 1) % event.images.length;
        setSelectedImage({ image: event.images[newIndex], index: newIndex, eventId: event.id });
    };

    const eventNames = eventsData.map((e) => e.name);

    return (
        <div className="p-8 min-h-screen">
            <div className="mb-8 flex flex-col justify-center items-center gap-2">
                <h1 className="text-2xl md:text-3xl font-semibold text-[#111]">Event Gallery</h1>
                <select
                    value={selectedEvent}
                    onChange={(e) => setSelectedEvent(e.target.value)}
                    className="px-4 py-2 border rounded-lg w-full lg:w-1/3"
                >
                    <option value="All">All</option>
                    {eventNames.map((name) => (
                        <option key={name} value={name}>
                            {name}
                        </option>
                    ))}
                </select>
            </div>


            <div
                onContextMenu={(e) => e.preventDefault()}
                className="grid grid-cols-2  md:grid-cols-4 gap-2"
            >
                {currentImages.map((item, idx) => (
                    <img
                        key={`${item.eventId}-${item.index}`}
                        draggable={false}
                        src={item.image}
                        alt={`${item.eventName} ${item.index + 1}`}
                        className="w-full h-full object-cover cursor-pointer rounded"
                        loading="lazy"
                        onClick={() => handleImageClick(item.image, item.index, item.eventId)}
                    />
                ))}
                {currentImages.length === 0 && (
                    <p className="col-span-full text-center text-gray-500">No images found.</p>
                )}
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center mt-6 space-x-2 flex-wrap">

                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 border rounded ${currentPage === 1
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-white text-[#333] hover:bg-[#bb2821] hover:text-white'
                            }`}
                    >
                        Prev
                    </button>

                    {[...Array(totalPages).keys()].map((_, i) => {
                        const page = i + 1;
                        return (

                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-4 py-2 border rounded ${page === currentPage
                                    ? 'bg-[#bb2821] text-white'
                                    : 'bg-white text-[#333] hover:bg-[#bb2821] hover:text-white'
                                    }`}
                            >
                                {page}
                            </button>

                        );
                    })}

                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 border rounded ${currentPage === totalPages
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-white text-[#333] hover:bg-[#bb2821] hover:text-white'
                            }`}
                    >
                        Next
                    </button>

                </div>
            )}


            {selectedImage.image && (
                <div className="flex fixed inset-0 items-center justify-between p-6 bg-black bg-opacity-70 z-50">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            previous();
                        }}
                        className="text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70"
                    >
                        <GrFormPrevious className="text-2xl" />
                    </button>

                    <div className="flex items-center justify-center bg-opacity-70">
                        <div onContextMenu={(e) => e.preventDefault()} className="relative max-w-2xl p-4">
                            <img
                                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                                src={selectedImage.image}
                                alt="Enlarged gallery"
                                loading="lazy"
                                draggable={false}
                            />
                            <button
                                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-1 rounded-xl hover:bg-opacity-70 text-2xl w-12"
                                onClick={() => setSelectedImage({ image: null, index: -1, eventId: null })}
                            >
                                &times;
                            </button>
                        </div>
                    </div>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            next();
                        }}
                        className="text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70"
                    >
                        <GrFormNext className="text-2xl" />
                    </button>

                </div>
            )}
        </div>
    );
};

export default Gallery;
