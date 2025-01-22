



import React, { useState } from 'react';

const eventsData = [
    {
        id: 1,
        name: 'Yoga Retreat',
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
        name: 'Sound Healing',
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
        name: 'Meditation Workshop',
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
        <div className="gallery-container m-8 h-screen">
            <h1 className="text-2xl font-bold text-center mb-6">Event Gallery</h1>

            <div className="mb-4 flex justify-center">
                <input
                    type="text"
                    placeholder="Search for an event..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="px-4 py-2 border rounded-lg w-1/2"
                />
            </div>

            {filteredEvents.length === 0 && (
                <p className="text-center text-lg text-red-500">No events found</p>
            )}

            {filteredEvents.map((event) => (
                <div key={event.id} className=" mb-6">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleEventImages(event.id)}
                    >
                        <h2 className="text-xl font-bold text-[#a7594d]">{event.name}</h2>
                        <span className="text-lg">{openedEvent === event.id ? '▲' : '▼'}</span>
                    </div>


                    {openedEvent === event.id && (
                        <div className="event-images grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
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


