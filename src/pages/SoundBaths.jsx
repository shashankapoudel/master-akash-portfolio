import React from 'react'
import { Helmet } from 'react-helmet'

const SoundBaths = () => {

    const Services =
        [

            {
                title: ' Private Sound Healing - One-to-One Sound Healing Experience',
                image: '/Images/homePhoto.jpg',
                description: "Discover a uniquely personal journey of healing through sound. Our private sound healing sessions are meticulously crafted to resonate with your individual needs, focusing on your specific feelings and energetic landscape.Stepping away from group environments, a private session provides an unparalleled sanctuary for open expression,fostering deep energetic balance and a more profound inner connection.If you're looking to manage stress, gain clarity, orsimplycultivate a deeper relationship with yourself, this session offers a gentle, supportive space for personalized healing on your terms.",
                whatIncluded: [
                    'Step into a tranquil environment bathed in soft, calming lighting, infused with soothing aromatherapy, and filled with sacred, resonant sounds.',
                    "We'll begin with guided intention- setting or calming breathwork to help you ease into a state of deep receptivity.",
                    "Experience a comprehensive sound bath where an array of healing instruments are thoughtfully positioned around you, creating a cocoon of harmonious vibrations.",
                    "Moments of peaceful reflection are woven in, allowing for deep integration of your experience.",
                    "Conclude your session in a warm, supportive space where you can share insights and feel truly centered before gently re-engaging with the world",
                ],
                benefits: ['Each session begins with a focused conversation to understand your current emotional, mental, or physical state.', 'Directly experience how sound can shift your energy, soothe your nervous system, and facilitate deep emotional release.', 'Instruments are carefully selected and played based on your specific intentions and energy field.', 'Your sound journey is uniquely designed for your individual needs, whether you seek grounding, cleansing, emotional opening, or deep rest.'],
                duration: '60 or 90 minutes',
                location: 'Local studio or virtual options',
                cta: 'Join a session today!',
                link: '/services/private-session'
            },


            {
                title: 'Group Sound Bath and Healing',
                image: '/Images/Group_Soundbath.jpg',
                description: 'Step into the power of collective healing through sound. Our group sound healing sessions (5–10 participants) are designed to bring people together in a shared field of vibration and resonance. While each individual experiences their own unique journey, the collective energy of the group creates a deeply enriching and uplifting atmosphere.Much like a private session, group sound healing offers relaxation, emotional release, and energetic balance.The difference lies in the shared space, where the presence of others enhances the vibrations, amplifies intentions, and fosters a sense of connection and belonging.Whether with friends, family, colleagues, or fellow seekers, a group sound bath is a beautiful way to heal together.',
                whatIncluded: [
                    'A serene environment with calming lights, soothing scents, and resonant healing sounds.',
                    'Guided breathwork or meditation to align the group’s intentions.',
                    'A full sound bath where instruments are played in ways that envelop the group in harmonious vibrations.',
                    'Quiet moments of integration, allowing everyone to absorb and reflect on their experience.',
                    'Closing circle for optional sharing, leaving participants connected, grounded, and uplifted',
                ],
                benefits: ['Begin with a short collective check-in or guided intention-setting to harmonize the group’s energy.', 'Experience the healing vibrations of crystal and Tibetan bowls, gongs, chimes, and other instruments that resonate throughout the shared space.', 'The group energy often enhances relaxation, grounding, and emotional release, while creating a sense of unity.', 'Perfect for those who wish to journey together—sharing peace, joy, and transformation in a community setting.'],
                duration: '60 or 90 minutes',
                location: 'Local studio or virtual options',
                cta: 'Book a session today!',
                link: '/services/group-session'
            },

        ]


    return (
        <div className='min-h-screen p-4 lg:p-8'>

            <Helmet>
                <title>Sound Bath</title>
                <meta
                    name="description"
                    content="Explore sound bath by Yogi Akash (Akash Banjara) -a Nepalese master with 20+ years of experience in the Himalayan tradition."
                />
                <meta
                    name="keywords"
                    content="Yogi Akash services, Sound Healing Nepal, Sound Healing Workshop, Akash Banjara services,"
                />
                <link rel="canonical" href="https://www.yogiakash.com/services/healingworkshop" />
            </Helmet>

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
                                    What to expect:
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
