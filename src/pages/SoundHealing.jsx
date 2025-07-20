import React from 'react'

const SoundHealing = () => {

    const Services =
        [

            {
                title: ' Pain Relief Therapy',
                image: '/Images/homePhoto.jpg',
                description: ' Discover a uniquely personal journey of healing through sound.Our private sound healing sessions are meticulously crafted to resonate with your individual needs, focusing on your specific feelings and energetic landscape.',
                whatIncluded: [
                    'Focused conversation to understand your current emotional, mental, or physical state',
                    'Explore how the unique vibrations of crystal and Tibetan bowls, chimes, gongs, and other healing instruments',
                    'Personalized coaching sessions'
                ],
                benefits: ['Improved clarity', 'Stronger emotional intelligence', 'Growth mindset'],
                duration: '2 hours',
                location: 'Local studio or virtual options',
                cta: 'Join a session today!',
            },


            {
                title: 'Head Therapy ',
                image: '/Images/homePhoto.jpg',
                description: 'Explore a variety of activities aimed at improving your mental clarity, emotional intelligence, and spiritual growth.',
                whatIncluded: [
                    'Workshops on mindfulness and personal growth',
                    'Interactive group sessions',
                    'Personalized coaching sessions'
                ],
                benefits: ['Improved clarity', 'Stronger emotional intelligence', 'Growth mindset'],
                duration: '2 hours',
                location: 'Local studio or virtual options',
                cta: 'Book a session today!',
            },
            {
                title: 'Seven Chakra Therapy ',
                image: '/Images/homePhoto.jpg',
                description: 'Explore a variety of activities aimed at improving your mental clarity, emotional intelligence, and spiritual growth.',
                whatIncluded: [
                    'Workshops on mindfulness and personal growth',
                    'Interactive group sessions',
                    'Personalized coaching sessions'
                ],
                benefits: ['Improved clarity', 'Stronger emotional intelligence', 'Growth mindset'],
                duration: '2 hours',
                location: 'Local studio or virtual options',
                cta: 'Book a session today!',
            },

        ]


    return (
        <div className='min-h-screen p-8'>

            <div className='flex gap-12 '>

                {Services.map((service) => (

                    < div className="bg-white shadow-md rounded-lg p-3 lg:p-5 space-y-4">

                        <h3 className="text-xl font-bold text-gray-800 text-center">{service.title}</h3>

                        <img src={service.image}
                            alt={service.title}
                            className="w-full h-auto p-1 object-cover rounded-lg"
                            loading='lazy'
                        />

                        <p className="text-gray-600">{service.description}</p>

                        <div>
                            <h4 className="font-semibold text-gray-800">What's Included:</h4>
                            <ul className="list-disc list-inside text-gray-600">
                                {service.whatIncluded.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-gray-800">Benefits:</h4>
                            <ul className="list-disc list-inside text-gray-600">
                                {service.benefits.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <p className="text-gray-600">
                            <strong>Duration:</strong> {service.duration}
                        </p>

                        <p className="text-gray-600">
                            <strong>Location:</strong> {service.location}
                        </p>

                        <button>
                            <a
                                href='https://docs.google.com/forms/d/1qxY65pySNKGWH8xoxSKBMtolXi20s39wciC3KiNs21o/edit'
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-[#044F86] to-[#0A6EB5] text-white px-4 py-2 rounded hover:bg-blue-400">
                                {service.cta}
                            </a>
                        </button>

                    </div>
                ))
                }
            </div>


        </div >
    )
}

export default SoundHealing
