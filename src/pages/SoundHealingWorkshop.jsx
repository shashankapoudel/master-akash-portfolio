import React from 'react'

const SoundHealingWorkshop = () => {

    const Services =
        [

            {
                title: 'Basic Sound Healer - Certificate Course ',
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
                title: 'Advanced Sound Healer - Certificate Course',
                image: '/Images/homePhoto.jpg',
                description: 'This Master Level Sound Healing course is designed to provide students with a comprehensive understanding of sound healing principles, techniques, and practices.',
                whatIncluded: [
                    'Advanced Training with Sound Healing Instruments',
                    'Comprehensive Theory and Practical Application',
                    'Guided Self-Healing and Facilitator Techniques'
                ],
                benefits: ['Enhanced Healing Abilities', 'Deepened Spiritual Connection', 'Professional Certification and Confidence'],
                duration: '2 hours',
                location: 'Local studio or virtual options',
                cta: 'Book a session today!',
                link: '/services/advsoundhealingcourse'
            },

        ]

    return (
        <div className='p-4 lg:p-8  min-h-screen  flex flex-col items-center justify-center'>

            <h1 className='font-bold text-2xl text-center'>Sound Healing Workshop</h1>
            <div className='flex flex-col gap-8'>

                <div className='flex flex-col-reverse xl:flex-row w-full'>
                    <div className='w-full xl:w-1/2 p-3 md:p-6 xl:p-10 text-base md:text-lg lg:text-base mt-2  font-poppins text-justify max-w-4xl'>
                        <p className=' tracking-wider'>
                            Our <strong>Sound Healing Workshops</strong> offer a unique opportunity to delve deeper into the transformative world of sound. These immersive workshops are designed for individuals seeking to learn about the principles of sound healing, understand its practical applications, and even discover how to use sound for personal well-being or to help others.<br />
                            <br />
                            Led by our experienced master, Akash, who brings a wealth of knowledge from traditional and Himalayan sound healing techniques, these workshops combine theoretical understanding with hands-on practice. You'll learn about the science behind sound healing, explore different sound instruments, understand how vibrations affect the body and mind, and develop practical skills for conducting sound healing sessions for yourself or others.
                            <br />
                            <br />
                            Our workshops are more than just classes; they are a journey of discovery and empowerment. Participants gain valuable insights into ancient healing traditions, develop a deeper connection with sound, and acquire practical tools to integrate sound healing into their lives, fostering greater balance, harmony, and well-being.


                        </p>
                    </div>

                    <div className='w-full xl:w-1/2 p-3 md:p-6 lg:p-6'>
                        <img
                            src='/Images/sound_healing_workshop.jpg'
                            className=' rounded-lg w-full'
                            loading='lazy'
                        />
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row gap-12 '>

                    {Services.map((service) => (

                        < div className="bg-white shadow-md rounded-lg p-5 lg:p-8 space-y-4">

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

export default SoundHealingWorkshop
