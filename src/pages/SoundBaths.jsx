import React from 'react'

const SoundBaths = () => {

    const Services =
        [

            {
                title: ' Private Sound Healing - One-to-One Sound Healing Experience',
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
                link: '/services/private-session'
            },


            {
                title: 'Group Sound Bath and Healing',
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
                link: '/services/privatesession'
            },

        ]


    return (
        <div className='min-h-screen p-4 lg:p-8'>

            <h1 className='font-bold text-2xl text-center'>Sound Bath and Relaxation</h1>

            <div className='flex flex-col gap-8'>

                <div className='flex flex-col-reverse xl:flex-row w-full'>
                    <div className='w-full xl:w-1/2 p-3 md:p-6 xl:p-8 text-base md:text-lg lg:text-base mt-5  font-poppins text-justify max-w-4xl '>
                        <p className=' tracking-wider text-[#666666]'>
                            A <strong>Sound Bath and Relaxation</strong> session is a deeply immersive and restorative experience designed to help you unwind, de-stress, and enter a state of profound relaxation. Unlike a typical "bath," you remain fully clothed and comfortably lie down while being bathed in a symphony of resonant sounds.<br />
                            <br />
                            During a session, a practitioner plays a variety of therapeutic sound instruments like singing bowls, gongs, and chimes, creating a continuous wave of harmonious vibrations. These sounds are specifically chosen for their ability to slow down brainwave activity, transitioning you from a beta (awake, alert) to an alpha or even theta state (relaxed, meditative, dream-like). This gentle shift in brain activity helps to calm the nervous system, release tension, and promote deep cellular relaxation.<br />
                            <br />
                            The experience is often described as feeling deeply peaceful, rejuvenating, and even transformative. It can lead to reduced stress and anxiety, improved sleep quality, heightened clarity, and a profound sense of inner calm, allowing your mind and body to reset and recharge.

                        </p>
                    </div>

                    <div className='w-full xl:w-1/2 p-3 md:p-6 lg:p-12 '>
                        <img
                            src='/Images/sound_bath_relaxation.jpg'
                            className=' rounded-lg w-full'
                            loading='lazy'
                        />
                    </div>
                </div>




                <div className='flex flex-col lg:flex-row gap-12 '>

                    {Services.map((service) => (

                        < div className="bg-white shadow-md rounded-lg p-3 lg:p-12 space-y-4 relative">

                            <h3 className="text-xl font-bold text-gray-800 text-center">{service.title}</h3>

                            <img src={service.image}
                                alt={service.title}
                                className="w-full h-auto  object-cover rounded-lg"
                                loading='lazy'
                            />

                            <p className="text-gray-600">{service.description}</p>

                            <div>
                                <h4 className="font-semibold text-gray-800">
                                    What's Included:
                                </h4>
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

export default SoundBaths
