
// import React, { useEffect, useState } from 'react';
// import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

// const eventsData = [
//     {
//         id: 1,
//         name: 'Meditation and Mindfulness',
//         images: [
//             '/Images/Gallery/Meditation_Mindfulness/1.JPG',
//             '/Images/Gallery/Meditation_Mindfulness/2.JPG',
//             '/Images/Gallery/Meditation_Mindfulness/3.JPG',
//             '/Images/Gallery/Meditation_Mindfulness/4.JPG',
//             '/Images/Gallery/Meditation_Mindfulness/5.JPG',
//             '/Images/Gallery/Meditation_Mindfulness/6.JPG',
//         ],
//     },
//     {
//         id: 2,
//         name: 'Sound Healing Therapy',
//         images: [
//             '/Images/Gallery/Sound_Healing/1.JPG',
//             '/Images/Gallery/Sound_Healing/2.JPG',
//             '/Images/Gallery/Sound_Healing/3.JPG',
//             '/Images/Gallery/Sound_Healing/4.JPG',
//             '/Images/Gallery/Sound_Healing/5.JPG',
//             '/Images/Gallery/Sound_Healing/6.JPG',
//             '/Images/Gallery/Sound_Healing/7.JPG',
//             '/Images/Gallery/Sound_Healing/8.JPG',
//             '/Images/Gallery/Sound_Healing/9.JPG',
//         ],
//     },
//     {
//         id: 3,
//         name: 'Spiritual Events and Retreats',
//         images: [
//             '/Images/Gallery/Spiritual_Events/1.JPG',
//             '/Images/Gallery/Spiritual_Events/2.JPG',
//             '/Images/Gallery/Spiritual_Events/3.JPG',
//             '/Images/Gallery/Spiritual_Events/4.JPG',
//             '/Images/Gallery/Spiritual_Events/5.JPG',
//             '/Images/Gallery/Spiritual_Events/6.JPG',
//             '/Images/Gallery/Spiritual_Events/7.JPG',
//             '/Images/Gallery/Spiritual_Events/7.JPG',
//             '/Images/Gallery/Spiritual_Events/7.JPG',

//         ],
//     },
//     {
//         id: 4,
//         name: 'Sound Baths and Relaxation',
//         images: [
//             '/Images/homePhoto.jpg',
//             '/Images/homePhoto.jpg',
//             '/Images/homePhoto.jpg',
//             '/Images/homePhoto.jpg',
//             '/Images/homePhoto.jpg',
//             '/Images/homePhoto.jpg',
//         ],
//     },
//     {
//         id: 5,
//         name: 'Yoga and Energy Awakening',
//         images: [
//             '/Images/Gallery/Yoga/1.jpg',
//         ],
//     },
//     {
//         id: 6,
//         name: 'Healing and welness workshops',
//         images: [
//             '/Images/Gallery/Healing_Wellness/1.JPG',

//         ],
//     },

// ];

// const Gallery = () => {
//     const [openedEvents, setOpenedEvents] = useState(new Set());
//     const [searchQuery, setSearchQuery] = useState('');
//     const [selectedImage, setSelectedImage] = useState({ image: null, index: -1, eventId: null });

//     const [expandedImages, setExpandedImages] = useState(new Set());

//     useEffect(() => {
//         const handleKeyDown = (e) => {
//             if (!selectedImage.image) return;

//             if (e.key === 'ArrowRight') {
//                 next();
//             } else if (e.key === 'ArrowLeft') {
//                 previous();
//             } else if (e.key === 'Escape') {
//                 setSelectedImage({ image: null, index: -1, eventId: null });
//             }
//         };

//         document.addEventListener('keydown', handleKeyDown);
//         return () => {
//             document.removeEventListener('keydown', handleKeyDown);
//         };
//     }, [selectedImage]);

//     const handleImageClick = (image, index, eventId) => {
//         setSelectedImage({ image, index, eventId })

//     }

//     const toggleEventImages = (eventId) => {
//         setOpenedEvents((prev) => {
//             const newOpened = new Set(prev);
//             newOpened.has(eventId) ? newOpened.delete(eventId) : newOpened.add(eventId);
//             return newOpened;
//         });
//     };

//     const toggleLoadMore = (eventId) => {
//         setExpandedImages((prev) => {
//             const newExpanded = new Set(prev);
//             newExpanded.has(eventId) ? newExpanded.delete(eventId) : newExpanded.add(eventId);
//             return newExpanded;
//         });
//     };

//     const filteredEvents = eventsData.filter((event) =>
//         event.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     const previous = () => {
//         const event = eventsData.find((e) => e.id === selectedImage.eventId)
//         if (event) {
//             const newIndex = (selectedImage.index - 1 + event.images.length) % event.images.length;
//             setSelectedImage({ image: event.images[newIndex], index: newIndex, eventId: selectedImage.eventId })
//         }
//     }

//     const next = () => {
//         const event = eventsData.find((e) => e.id === selectedImage.eventId);
//         if (event) {
//             const newIndex = (selectedImage.index + 1) % event.images.length;
//             setSelectedImage({ image: event.images[newIndex], index: newIndex, eventId: selectedImage.eventId });
//         }
//     }

//     return (
//         <div className="m-8 min-h-screen p-3 lg:p-6">
//             <h1 className="lg:text-3xl md:text-3xl text-2xl font-semibold text-center mb-4 text-[#111111]">Event Gallery</h1>

//             <div className="mb-8 flex justify-center">
//                 <input
//                     type="text"
//                     placeholder="Search for an event..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="px-4 py-2 border rounded-lg w-full lg:w-1/3"
//                 />
//             </div>

//             {filteredEvents.length === 0 && (
//                 <p className="text-center text-lg text-red-500">No events found</p>
//             )}

//             {filteredEvents.map((event) => {
//                 const isExpanded = expandedImages.has(event.id);
//                 const displayedImages = isExpanded ? event.images : event.images.slice(0, 5);

//                 return (
//                     <div key={event.id} className="mb-4">
//                         <div
//                             className="flex justify-between items-center cursor-pointer"
//                             onClick={() => toggleEventImages(event.id)}
//                         >
//                             <h2 className="lg:text-xl md:text-2xl text-lg font-semibold text-[#323232]">{event.name}</h2>
//                             <span className="text-lg">{openedEvents.has(event.id) ? '▲' : '▼'}</span>
//                         </div>

//                         {openedEvents.has(event.id) && (

//                             <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-1">
//                                 {displayedImages.map((image, index) => (
//                                     <img
//                                         key={index}
//                                         src={image}
//                                         alt={`${event.name} event ${index + 1}`}
//                                         className="mb-0 w-full rounded-lg p-1"
//                                         loading="lazy"
//                                         onClick={() => handleImageClick(image, index, event.id)}
//                                     />
//                                 ))}
//                             </div>

//                         )}

//                         {event.images.length > 3 && openedEvents.has(event.id) && (
//                             <button
//                                 onClick={() => toggleLoadMore(event.id)}
//                                 className="mt-4 text-blue-600 hover:underline"
//                             >
//                                 {isExpanded ? 'Show Less' : 'Load More'}
//                             </button>
//                         )}
//                     </div>
//                 );
//             })}

//             {selectedImage.image && (
//                 <div className='flex fixed inset-0 items-center justify-between p-6 bg-black bg-opacity-65'>

//                     <button
//                         onClick={(e) => {
//                             e.stopPropagation();
//                             previous();
//                         }}
//                         className='text-white bg-black bg-opacity-50 p-0 lg:p-2 rounded-full hover:bg-opacity-70
//                          transition'
//                     >
//                         <GrFormPrevious className='text-2xl' />
//                     </button>

//                     <div
//                         className="flex items-center justify-center   bg-opacity-70">

//                         <div className="relative max-w-2xl p-4">
//                             <img
//                                 className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
//                                 src={selectedImage.image}
//                                 alt="Enlarged gallery image"
//                             />

//                             <button
//                                 className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-xl hover:bg-opacity-70 transition text-4xl w-16"
//                                 onClick={() => setSelectedImage({ image: null, index: -1, eventId: null })}
//                             >
//                                 &times;
//                             </button>
//                         </div>
//                     </div>

//                     <button
//                         onClick={(e) => {
//                             e.stopPropagation();
//                             next();
//                         }}
//                         className='text-white bg-black bg-opacity-75 p-0 lg:p-2 rounded-full hover:bg-opacity-70 transition text-3xl font-extrabold'
//                     >
//                         <GrFormNext className='text-2xl' />
//                     </button>

//                 </div>
//             )}
//         </div>
//     );
// };

// export default Gallery;

import React, { useEffect, useState } from 'react';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

const eventsData = [
    {
        id: 1,
        name: 'Meditation and Mindfulness',
        images: [
            '/Images/Gallery/Meditation_Mindfulness/1.JPG',
            '/Images/Gallery/Meditation_Mindfulness/2.JPG',
            '/Images/Gallery/Meditation_Mindfulness/3.JPG',
            '/Images/Gallery/Meditation_Mindfulness/4.JPG',
            '/Images/Gallery/Meditation_Mindfulness/5.JPG',
            '/Images/Gallery/Meditation_Mindfulness/6.JPG',
        ],
    },
    {
        id: 2,
        name: 'Sound Healing Therapy',
        images: [
            '/Images/Gallery/Sound_Healing/1.JPG',
            '/Images/Gallery/Sound_Healing/2.JPG',
            '/Images/Gallery/Sound_Healing/3.JPG',
            '/Images/Gallery/Sound_Healing/4.JPG',
            '/Images/Gallery/Sound_Healing/5.JPG',
            '/Images/Gallery/Sound_Healing/6.JPG',
            '/Images/Gallery/Sound_Healing/7.JPG',
            '/Images/Gallery/Sound_Healing/8.JPG',
            '/Images/Gallery/Sound_Healing/9.JPG',
        ],
    },
    {
        id: 3,
        name: 'Spiritual Events and Retreats',
        images: [
            '/Images/Gallery/Spiritual_Events/1.JPG',
            '/Images/Gallery/Spiritual_Events/2.JPG',
            '/Images/Gallery/Spiritual_Events/3.JPG',
            '/Images/Gallery/Spiritual_Events/4.JPG',
            '/Images/Gallery/Spiritual_Events/5.JPG',
            '/Images/Gallery/Spiritual_Events/6.JPG',
            '/Images/Gallery/Spiritual_Events/7.JPG',
            '/Images/Gallery/Spiritual_Events/7.JPG',
            '/Images/Gallery/Spiritual_Events/7.JPG',
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
            '/Images/Gallery/Yoga/1.jpg',
        ],
    },
    {
        id: 6,
        name: 'Healing and welness workshops',
        images: [
            '/Images/Gallery/Healing_Wellness/1.JPG',
        ],
    },
];

const Gallery = () => {
    const [selectedEvent, setSelectedEvent] = useState("All");
    const [selectedImage, setSelectedImage] = useState({ image: null, index: -1, eventId: null });

    const events = ['Meditation and Mindfulness', 'Yoga and Energy Awakening', 'Healing and welness workshops', 'Sound Baths and Relaxation', 'Spiritual Events and Retreats', 'Sound Healing Therapy'];

    const filteredEvents =
        selectedEvent === "All"
            ? eventsData
            : eventsData.filter((event) => event.name === selectedEvent);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!selectedImage.image) return;

            if (e.key === 'ArrowRight') {
                next();
            } else if (e.key === 'ArrowLeft') {
                previous();
            } else if (e.key === 'Escape') {
                setSelectedImage({ image: null, index: -1, eventId: null });
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedImage]);

    const handleImageClick = (image, index, eventId) => {
        setSelectedImage({ image, index, eventId });
    };

    const previous = () => {
        const event = eventsData.find((e) => e.id === selectedImage.eventId);
        if (event) {
            const newIndex = (selectedImage.index - 1 + event.images.length) % event.images.length;
            setSelectedImage({ image: event.images[newIndex], index: newIndex, eventId: selectedImage.eventId });
        }
    };

    const next = () => {
        const event = eventsData.find((e) => e.id === selectedImage.eventId);
        if (event) {
            const newIndex = (selectedImage.index + 1) % event.images.length;
            setSelectedImage({ image: event.images[newIndex], index: newIndex, eventId: selectedImage.eventId });
        }
    };

    return (
        <div className="p-8 min-h-screen">

            <div className="mb-8 flex flex-col justify-center items-center gap-2">
                <h1 className="lg:text-3xl md:text-3xl text-2xl font-semibold text-start  text-[#111111]">Event Gallery</h1>
                <select
                    value={selectedEvent}
                    onChange={(e) => setSelectedEvent(e.target.value)}
                    className="px-4 py-2 border rounded-lg w-full lg:w-1/3"
                >
                    <option value="All">All</option>
                    {events.map((event, index) => (
                        <option key={index} value={event}>
                            {event}
                        </option>
                    ))}
                </select>
            </div>

            {selectedEvent === "All" ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                    {eventsData.flatMap((event) =>
                        event.images.map((image, index) => (
                            <img
                                key={`${event.id}-${index}`}
                                src={image}
                                alt={`${event.name} event ${index + 1}`}
                                className="w-full h-full object-cover cursor-pointer"
                                loading="lazy"
                                onClick={() => handleImageClick(image, index, event.id)}
                            />
                        ))
                    )}
                </div>
            ) : (
                filteredEvents.map((event) => (
                    <div key={event.id} className="mb-4">
                        <h2 className="lg:text-xl md:text-2xl text-lg font-semibold text-[#323232] mb-2">
                            {event.name}
                        </h2>
                        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-1">
                            {event.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`${event.name} event ${index + 1}`}
                                    className="mb-0 w-full rounded-lg p-1 cursor-pointer"
                                    loading="lazy"
                                    onClick={() => handleImageClick(image, index, event.id)}
                                />
                            ))}
                        </div>
                    </div>
                ))
            )}

            {selectedImage.image && (
                <div className="flex fixed inset-0 items-center justify-between p-6 bg-black bg-opacity-65 z-50">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            previous();
                        }}
                        className="text-white bg-black bg-opacity-50 p-0 lg:p-2 rounded-full hover:bg-opacity-70 transition"
                    >
                        <GrFormPrevious className="text-2xl" />
                    </button>

                    <div className="flex items-center justify-center bg-opacity-70">
                        <div className="relative max-w-2xl p-4">
                            <img
                                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                                src={selectedImage.image}
                                alt="Enlarged gallery"
                            />
                            <button
                                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-xl hover:bg-opacity-70 transition text-4xl w-16"
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
                        className="text-white bg-black bg-opacity-75 p-0 lg:p-2 rounded-full hover:bg-opacity-70 transition text-3xl font-extrabold"
                    >
                        <GrFormNext className="text-2xl" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Gallery;
