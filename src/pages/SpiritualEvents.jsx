import React from 'react'

const SpiritualEvents = () => {

    const Services =

        [

            {
                title: 'Nepal Yoga and Healing Retreat ',
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



        ]


    return (
        <div className='min-h-screen p-8 flex flex-col items-center justify-center'>

            <h1 className='font-bold text-2xl'>Spiritual Events and Retreats</h1>
            <div className='flex flex-col gap-8 items-center justify-center'>

                <div className='flex flex-col-reverse xl:flex-row w-full'>
                    <div className='w-full xl:w-1/2 p-3 md:p-6 xl:p-9 text-base md:text-lg lg:text-base mt-2  font-poppins text-justify max-w-4xl'>


                        <p className=' tracking-wider'>
                            In our increasingly busy lives, filled with constant demands and stresses, it's easy to lose touch with our inner selves and the peace we crave. We often find ourselves overwhelmed, leading to a myriad of problems for our mind, body, and spirit. It is in these moments that we truly need to take a deliberate break, step away from the everyday grind, and dedicate time to healing and recharging our mind and body.

                            <br />
                            Our Spiritual Retreats and Events offer a vital opportunity to do just that. These immersive experiences are carefully curated to provide a sanctuary where you can escape the noise of daily life and embark on a journey of self-discovery and rejuvenation. Whether it's a multi-day retreat or a focused event, each offering is designed to foster a deeper connection with your inner self, promote holistic well-being, and help you find clarity and purpose.<br />

                            Through a blend of guided meditations, sound healing sessions, yoga, mindfulness practices, and transformative workshops, our retreats and events provide a supportive environment for personal growth, emotional healing, and spiritual awakening. It's an invitation to pause, breathe, reconnect with your true essence, and return to your life feeling refreshed, revitalized, and deeply aligned.
                        </p>

                    </div>

                    <div className='w-full xl:w-1/2 p-3 md:p-6 lg:p-8'>
                        <img
                            src='/Images/spiritual.jpg'
                            className=' rounded-lg w-full'
                            loading='lazy'
                        />
                    </div>
                </div>



                <div className='flex w-full lg:w-1/2'>

                    {Services.map((service) => (

                        < div className="bg-white shadow-md rounded-lg p-3 lg:p-8 space-y-4">

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

                            <div className='w-full flex flex-col md:flex-row justify-normal lg:justify-between items-center gap-2 lg:gap-8'>
                                <a
                                    href='https://docs.google.com/forms/d/1qxY65pySNKGWH8xoxSKBMtolXi20s39wciC3KiNs21o/edit'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-center w-full bg-gradient-to-r from-[#044F86] to-[#0A6EB5] text-white px-4 py-2 rounded hover:bg-blue-400">
                                    {service.cta}
                                </a>

                                <a
                                    href={service.link}
                                    className='text-center w-full bg-gradient-to-r from-[#044F86] to-[#0A6EB5] text-white px-4 py-2 rounded hover:bg-blue-400'
                                >
                                    Read more..
                                </a>
                            </div>

                        </div>
                    ))
                    }
                </div>
            </div>


        </div >
    )
}

export default SpiritualEvents
