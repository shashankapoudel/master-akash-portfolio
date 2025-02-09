import React, { useState } from 'react';

const eventsData = [
    {
        id: 1,
        name: 'Meditation and Mindfulness',
        images: [
            '/Images/homePhoto.jpg',
            '/Images/homePhoto.jpg',
            '/Images/homePhoto.jpg',
            '/Images/homePhoto.jpg',
            '/Images/homePhoto.jpg',
            '/Images/homePhoto.jpg',

        ],
    },

    {
        id: 2,
        name: 'Sound Healing Therapy',
        images: [
            '/Images/homePhoto.jpg',
            '/Images/homePhoto.jpg',
            '/Images/homePhoto.jpg',
            '/Images/homePhoto.jpg',
            '/Images/homePhoto.jpg',
            '/Images/homePhoto.jpg',
        ],
    },

    {
        id: 3,
        name: 'Spiritual Events and Retreats',
        images: [
            '/Images/homePhoto.jpg',
            '/Images/homePhoto.jpg',
            '/Images/homePhoto.jpg',
            '/Images/homePhoto.jpg',
            '/Images/homePhoto.jpg',
            '/Images/homePhoto.jpg',
        ],
    },

    {
        id: 4,
        name: 'Sound Baths and Relaxation',
        images: [
            '/Images/homePhoto.jpg',
            '/Images/homePhoto.jpg',
            '/Images/homePhoto.jpg',
            '/Images/homePhoto.jpg',
            '/Images/homePhoto.jpg',
            '/Images/homePhoto.jpg',
        ],
    },
    {
        id: 5,
        name: 'Yoga and Energy Awakening',
        images: [
            '/Images/homePhoto.jpg',
            '/Images/homePhoto.jpg',
            '/Images/homePhoto.jpg',
            '/Images/homePhoto.jpg',
            '/Images/homePhoto.jpg',
            '/Images/homePhoto.jpg',
        ],
    },
    {
        id: 6,
        name: 'Healing and welness workshops',
        images: [
            '/Images/homePhoto.jpg',
            '/Images/homePhoto.jpg',
            '/Images/homePhoto.jpg',
            '/Images/Service1.png',
            '/Images/homePhoto.jpg',
            '/Images/homePhoto.jpg',
        ],
    },
];

const Gallery = () => {
    const [openedEvent, setOpenedEvent] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState("")

    const toggleEventImages = (eventId) => {
        setOpenedEvent(openedEvent === eventId ? null : eventId);
    };

    const filteredEvents = eventsData.filter((event) =>
        event.name.toLowerCase().includes(searchQuery.toLowerCase())
    );


    const handleClick = (image) => {
        setIsOpen(true)
        openModal(image)

    }

    const openModal = (img) => {
        setSelectedImage(img)
        setIsOpen(true)
    }

    const closeModal = () => {
        setSelectedImage("")
        setIsOpen(false)
    }

    return (
        <div className=" m-8 min-h-screen p-3 lg:p-6 ">
            <h1 className="text-2xl font-semibold text-center mb-4 text-[#111111]">Event Gallery</h1>

            <div className="mb-8 flex justify-center">
                <input
                    type="text"
                    placeholder="Search for an event..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="px-4 py-2 border rounded-lg w-full lg:w-1/3"
                />
            </div>

            {filteredEvents.length === 0 && (
                <p className="text-center text-lg text-red-500">No events found</p>
            )}

            {filteredEvents.map((event) => (
                <div key={event.id} className=" mb-4">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleEventImages(event.id)}
                    >
                        <h2 className="text-xl font-semibold text-[#323232]">{event.name}</h2>
                        <span className="text-lg">{openedEvent === event.id ? '▲' : '▼'}</span>
                    </div>


                    {openedEvent === event.id && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                            {event.images.map((image, index) => (
                                <div key={index} className="image-card">
                                    <img
                                        src={image}
                                        alt={`${event.name} event ${index + 1}`}
                                        className="rounded-lg w-full cursor-pointer"
                                        onClick={() => handleClick(image)}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
            {
                isOpen && (
                    <div
                        className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-0'
                        onClick={closeModal}
                    >
                        <div className='relative max-w-2xl p-4'>

                            <img
                                className='w-full h-auto max-h-[80vh] object-contain rounded-lg'
                                src={selectedImage}
                                alt='Enlarged gallery image'
                            />
                            <button
                                className='absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-xl hover:bg-opacity-70 transition text-4xl w-16'
                                onClick={closeModal}
                            >
                                &times;
                            </button>

                        </div>
                    </div>

                )
            }
        </div>

    );
};

export default Gallery;

