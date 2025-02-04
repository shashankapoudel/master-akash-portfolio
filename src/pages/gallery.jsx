



import React, { useState } from 'react';

const eventsData = [
    {
        id: 1,
        name: 'Meditation and Mindfulness',
        images: [
            'homePhoto.jpg',
            'homePhoto.jpg',
            'homePhoto.jpg',
            'homePhoto.jpg',
            'homePhoto.jpg',
            'homePhoto.jpg',
        ],
    },
    {
        id: 2,
        name: 'Sound Healing Therapy',
        images: [
            'homePhoto.jpg',
            'homePhoto.jpg',
            'homePhoto.jpg',
            'homePhoto.jpg',
            'homePhoto.jpg',
        ],
    },
    {
        id: 3,
        name: 'Spiritual Events and Retreats',
        images: [
            'homePhoto.jpg',
            'homePhoto.jpg',
            'homePhoto.jpg',
            'homePhoto.jpg',
            'homePhoto.jpg',
        ],
    },
    {
        id: 4,
        name: 'Sound Baths and Relaxation',
        images: [
            'homePhoto.jpg',
            'homePhoto.jpg',
            'homePhoto.jpg',
            'homePhoto.jpg',
            'homePhoto.jpg',
        ],
    },
    {
        id: 5,
        name: 'Yoga and Energy Awakening',
        images: [
            'homePhoto.jpg',
            'homePhoto.jpg',
            'homePhoto.jpg',
            'homePhoto.jpg',
            'homePhoto.jpg',
        ],
    },
    {
        id: 6,
        name: 'Healing and welness workshops',
        images: [
            'homePhoto.jpg',
            'homePhoto.jpg',
            'homePhoto.jpg',
            'homePhoto.jpg',
            'homePhoto.jpg',
        ],
    },
];

const Gallery = () => {
    const [openedEvent, setOpenedEvent] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleEventImages = (eventId) => {
        setOpenedEvent(openedEvent === eventId ? null : eventId);
    };

    const filteredEvents = eventsData.filter((event) =>
        event.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
                        <div className="event-images grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                            {event.images.map((image, index) => (
                                <div key={index} className="image-card">
                                    <img
                                        src={`/Images/${image}`}
                                        alt={`${event.name} event ${index + 1}`}
                                        className="rounded-lg w-full"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Gallery;


