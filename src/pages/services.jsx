import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

''
const services =
    [
        {
            title: ' Pain Relief Therapy',
            image: '/Images/Sound_Healing_Therapy/Pain Relief_1.jpg',
            description: "Our Pain Relief Therapy is a gentle, yet powerful, way to soothe your body's aches and discomforts. It uses the deep, targeted vibrations of singing bowls placed directly on or near the areas where you feel pain. As the bowls are played, their gentle resonance travels through your tissues, helping to release stubborn tension and break up energetic blockages. This process not only eases physical pain but also improves circulation, allowing your body to naturally begin its healing journey.",
            whatIncluded: [
                "The gentle resonance of the singing bowls travels through the body's tissues. This process is believed to help release stubborn tension and break up energetic blockages that may be contributing to pain. By applying these vibrations, the therapy can soothe physical aches and discomfort, and it's particularly helpful for those dealing with chronic pain, muscle aches, or physical tension from stress or old injuries.This therapy doesn't just mask symptoms. It works with your body's own energy to promote natural healing. The vibrations can help improve circulation, allowing for better blood flow and assisting your body in its recovery process.Additionally, the gentle nature of the therapy means there are no harsh side effects."
            ],
            benefits: ['It directly addresses muscle tension and localized pain',
                'The vibrations are believed to help calm inflammation throughout the body',
                'It promotes better blood flow, which can help your body heal more effectively',
                "It's a peaceful and gentle approach to managing pain without the need for conventional treatments or medication"
            ],
            duration: 'A typical session lasts between one and one and a half hours, offering a peaceful and calming experience that can leave you feeling more at ease in your own body',

            location: 'Local studio or virtual options',

            cta: 'Join a session today!',
        },


        {
            title: 'Head Therapy ',
            image: '/Images/Sound_Healing_Therapy/Head Therapy_1.jpg',

            description: ' Head therapy is a specialized treatment that focuses on the mind and consciousness. It involves placing singing bowls directly on the head, particularly near the Crown and Third Eye chakras. As the bowls are played, their vibrations resonate through the skull, calming the mind and stimulating these key energy centers. This helps to quiet mental chatter, enhance intuition, and promote a sense of inner peace and clarity.',

            whatIncluded: "As the bowls are played, their vibrations resonate through the skull, delivering a calming effect directly to the mind. This process is believed to help quiet mental chatter, allowing for a state of deep tranquility. By stimulating the Crown and Third Eye chakras, the therapy aims to enhance intuition and promote a sense of inner peace and clarity. This direct application of sound to the head can be a powerful way to awaken and balance the mind.This therapy is particularly suited for individuals who experience mental fatigue, overthinking, or a lack of focus. It's also a valuable practice for those on a spiritual journey, as it can help them connect more deeply with their inner wisdom and enhance their intuition.",

            benefits: ['It helps to clear the mind and improve concentration', 'The vibrations work to calm the constant stream of thoughts, providing a sense of mental quiet.', 'By stimulating the Third Eye chakra, the therapy can improve intuition and insight.', 'It creates a profound sense of calm and mental relaxation, helping you achieve a state of inner peace.', 'Creates a profound sense of calm and mental relaxation.'],

            duration: 'A typical session lasts between one and one and a half hours, offering a dedicated period for mental and spiritual rejuvenation.',

            location: 'Local studio or virtual options',

            cta: 'Book a session today!',
        },

        {
            title: 'Seven Chakra Therapy ',
            image: '/Images/Sound_Healing_Therapy/Seven_chakra_Therapy.jpg',
            description: ' The body has seven major energy centers, or chakras, each with its own unique vibrational frequency and purpose. Seven Chakra Therapy uses a specific set of singing bowls, each tuned to the corresponding note of a chakra (Root, Sacral, Solar Plexus, Heart, Throat, Third Eye, and Crown). By playing the bowls in a sequence along the body, this therapy helps to activate, cleanse, and balance each chakra. ',

            whatIncluded: "This therapy uses a specialized set of singing bowls, each tuned to the note of a specific chakra, to restore balance and harmony within the body. The Root Chakra is connected to grounding and stability, the Sacral Chakra to creativity and emotions, the Solar Plexus Chakra to personal power and digestion, the Heart Chakra to love and compassion, the Throat Chakra to communication and expression, the Third Eye Chakra to intuition and insight, and the Crown Chakra to spiritual connection. By playing the bowls in a specific sequence along the body, the therapy activates, cleanses, and balances each chakra, allowing energy to flow freely throughout the body and promoting physical health, emotional well-being, and spiritual harmony.",

            benefits: ["It restores the natural flow of energy through the body's chakras.", 'It helps to release blocked emotions and promotes emotional healing', 'It strengthens the connection between the body, mind, and spirit.', 'It improves overall physical, mental, and spiritual health.'],

            duration: 'A typical session lasts between one and one and a half hours, providing a comprehensive and deeply restorative experience for the entire body.',

            location: 'Local studio or virtual options',

            cta: 'Book a session today!',
        },

        {
            title: 'Natural Sound Therapy ',

            image: '/Images/Sound_Healing_Therapy/Natural Therapy.jpg',

            description: 'Natural Sound Therapy combines the soothing sounds of nature with healing instruments like singing bowls and chimes. The sounds of birds, flowing water, and gentle wind are blended with the vibrations of instruments to create a truly immersive and restorative experience. This therapy helps to ground you in the present moment, connecting your inner being with the peace and harmony of the natural world. It allows your mind, body, and soul to be transformed, leaving you feeling refreshed and renewed.',

            whatIncluded: "This therapy aims to ground you in the present moment by harmonizing your inner being with the peace and tranquility of the natural world. The combined sounds help to soothe the nervous system, reduce stress, and promote a profound state of mind-body-soul relaxation. This process allows for a sense of transformation and renewal, leaving you feeling refreshed and revitalized.This therapy is particularly well-suited for individuals who feel disconnected from nature or who are looking to escape the hustle and stress of urban life. It provides a tranquil sanctuary for the mind, offering a unique and powerful way to relax and find inner peace."
            ,
            benefits: ["It helps you connect with the calming and stabilizing energy of nature.", 'It promotes a deep state of peace and harmony.', 'The blended sounds work to soothe the nervous system, helping to alleviate stress.', 'It leaves you feeling revitalized and at one with the world.'],

            duration: 'A typical session lasts between one and one and a half hours, providing a comprehensive and deeply restorative experience for the entire body.',

            location: 'Local studio or virtual options',

            cta: 'Book a session today!',
        },

        {
            title: 'Relaxation Therapy ',

            image: '/Images/Sound_Healing_Therapy/Relaxation_therapy.jpg',

            description: 'Relaxation Therapy is a dedicated session designed to help you achieve a profound state of rest for your mind, body, and soul. Using a variety of healing instruments, this therapy guides you into a state similar to Savasana, the final resting pose in yoga. As you lie down in a comfortable position, the gentle, flowing sounds and vibrations wash over you, encouraging every part of your being to release tension. This allows you to experience a state of complete calm, where you can let go of all physical and mental stress',

            whatIncluded: "During the session, you will lie in a comfortable position, similar to Savasana, the final resting pose in yoga. The gentle, flowing sounds and vibrations from the healing instruments will wash over you, encouraging every part of your being to let go of stress. This process helps you achieve a state of complete calm, allowing you to 'turn off' your mind and enter a state of deep peace.This therapy is ideal for anyone dealing with stress, anxiety, or insomnia. If you find it difficult to unwind at the end of the day, this session provides a perfect environment for deep relaxation. It serves as a powerful tool for self-care, helping you restore your energy and find a peaceful center amidst the chaos of daily life.",

            benefits: ["It guides the body and mind into a state of deep rest, helping you to de-stress completely.", 'It helps to release physical and mental tension that has built up over time.', 'By promoting a state of calm, it can lead to better, more restorative sleep.', 'It allows your body to recharge and find a state of balance.'],

            duration: 'A typical session lasts between one and one and a half hours, offering a dedicated period for you to let go and find inner peace.',

            location: 'Local studio or virtual options',

            cta: 'Book a session today!',
        },

        {
            title: 'Energy Balancing Therapy ',
            image: '/Images/Sound_Healing_Therapy/Energy balancing.jpg',
            description: "Our bodies contain a complex network of energetic systems, including Auras and Kundalini energy. Imbalances in these systems can manifest as physical and emotional problems. Energy Balancing Therapy uses the powerful frequencies of sound healing instruments to clear blockages and restore the natural flow of energy. The vibrations work to harmonize your body's subtle energies, bringing them into alignment and creating a feeling of stability and well- being.This therapy helps you feel centered and in control of your own energy.",

            whatIncluded: "This therapy uses the powerful frequencies of sound healing instruments to clear blockages and realign the body's subtle energies. The vibrations from the instruments work to harmonize these energies, creating a feeling of stability and well-being. By bringing these systems into alignment, the therapy helps you feel centered and in control of your own energy.This therapy is particularly beneficial for those who feel their energy is erratic, whether it's too high or too low. It can help individuals who experience unexplained mood swings, persistent fatigue, or a general feeling of being 'off'. It is also an excellent choice for people who work in high-stress environments and need to clear out stagnant or negative energy to restore their internal balance.",

            benefits: ["It balances the body's subtle energy systems.", 'It helps to restore a sense of energy and vitality.', 'It works to regulate emotions and reduce mood swings.', 'It creates a deep sense of peace and inner harmony.'],

            duration: ' A typical session lasts between one and one and a half hours, offering a dedicated period for you to realign your energetic systems and restore your sense of well-being.',

            location: 'Local studio or virtual options',
            cta: 'Book a session today!',
        },

        {
            title: 'Aura Cleansing Therapy ',
            image: '/Images/homePhoto.jpg',

            description: "Your aura is an energy field that surrounds your body, and it can collect negative or stagnant energy from your environment and daily interactions. Aura Cleansing Therapy uses singing bowls and other healing instruments to clear this field. The sounds and vibrations act as a gentle energetic broom, sweeping away any unwanted energy and leaving your aura feeling clean, bright, and protected. This process not only purifies your energy but also strengthens your own protective shield.",

            whatIncluded: "This therapy uses the sounds and vibrations of singing bowls and other healing instruments to act as a 'gentle energetic broom', sweeping away unwanted energy. This process not only purifies your energy field but also helps to restore its natural brightness and strength. By clearing your aura, the therapy helps to strengthen your own protective energetic shield.This therapy is ideal for anyone who feels emotionally drained, is easily overwhelmed by the energies of others, or is in need of a complete energetic reset. It can be particularly helpful after a period of stress, a difficult conversation, or spending time in a crowded environment. By cleansing your aura, you can regain a sense of lightness, peace, and control over your personal energy.",

            benefits: ["It effectively removes stagnant or unwanted energy from your aura.", 'It helps to restore a sense of energy and vitality.', 'It works to regulate emotions and reduce mood swings.', 'It creates a deep sense of peace and inner harmony.'],

            duration: ' A typical session lasts between one and one and a half hours, offering a dedicated period for you to realign your energetic systems and restore your sense of well-being.',

            location: 'Local studio or virtual options',
            cta: 'Book a session today!',
        },

    ]


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
            delayChildren: 0.3,
        },
    },
};


const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
};


const item1Variants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
};


const ServiceCard = ({ service }) => {

    return (
        <div className="bg-white shadow-md rounded-lg p-3 lg:p-12 space-y-4 flex flex-col gap-2">

            <Helmet>
                <title>Sound Healing ,Yoga & Spiritual Services | Yogi Akash (Akash Banjara) from Nepal</title>
                <meta
                    name="description"
                    content="Explore sound healing, yoga, and meditation services by Yogi Akash (Akash Banjara) — a Nepalese master with 20+ years of experience in the Himalayan tradition."
                />
                <meta
                    name="keywords"
                    content="Yogi Akash services, sound healing Nepal, yoga classes Nepal, meditation guidance Nepal, Akash Banjara services, Himalayan healing practices"
                />
                <link rel="canonical" href="https://www.yogiakash.com/services" />
            </Helmet>

            <h3 className="text-xl font-bold text-gray-800 text-center">{service.title}</h3>

            <img src={service.image}
                alt={service.title}
                className="w-full h-auto p-2 object-cover rounded-lg"
                loading='lazy'
            />

            <p className="text-[#666666]">{service.description}</p>

            <div>
                <h4 className="font-semibold text-gray-600">What's Included:</h4>
                <ul className="list-disc list-inside text-[#666666]">

                    <div >{service.whatIncluded}</div>

                </ul>
            </div>

            <div>
                <h4 className="font-semibold text-gray-600">Benefits:</h4>
                <ul className="list-disc list-inside text-[#666666]">
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

            <a
                href='https://docs.google.com/forms/d/1qxY65pySNKGWH8xoxSKBMtolXi20s39wciC3KiNs21o/edit'
                target="_blank"
                rel="noopener noreferrer"
                className=" bg-gradient-to-r from-[#044F86] to-[#0A6EB5] text-white px-4 py-2 rounded hover:bg-blue-400 transition-transform duration-300 ease-out hover:scale-105 text-center ">
                {service.cta}
            </a>

        </div>
    );
};

const ServicesPage = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const [showNewContent, setShowNewContent] = useState(false);

    const handleButtonClick = () => {
        setShowNewContent(!showNewContent);
    };

    const navigate = useNavigate()

    return (
        <div className="flex flex-col p-4 lg:p-8 tracking-normal w-full gap-10 border mt-4">

            <Helmet>
                <title>Sound Healing & Yoga Services | Yogi Akash (Akash Banjara) from Nepal</title>
                <meta
                    name="description"
                    content="Explore sound healing, yoga, and meditation services by Yogi Akash (Akash Banjara) — a Nepalese master with 20+ years of experience in the Himalayan tradition."
                />
                <meta
                    name="keywords"
                    content="Yogi Akash services, sound healing Nepal, yoga classes Nepal, meditation guidance Nepal, Akash Banjara services, Himalayan healing practices Calm your mind "
                />
                <link rel="canonical" href="https://www.yogiakash.com/services" />
            </Helmet>


            {!showNewContent ? (
                <div className="p-4 md:p-4 lg:p-8 items-center w-full mt-4">
                    <motion.div
                        ref={ref}
                        className="flex flex-col gap-4 lg:gap-0 items-center justify-center lg:relative font-poppins"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        viewport={{ amount: 0.2 }}
                    >

                        <a
                            target="_blank" rel="noopener noreferrer"
                            href='/services/meditation&mindfulness'
                            className='cursor-pointer'
                        >
                            <motion.div
                                variants={itemVariants}
                                className="lg:absolute lg:top-0 lg:left-20 flex flex-col gap-2 bg-[#A7594D] text-white p-2 shadow-md w-full lg:w-1/3 items-center justify-center rounded-custom-1-sm lg:rounded-custom-1 py-2 px-4 md:p-3 lg:p-2 "
                            >
                                <h3 className="font-semibold text-base md:text-xl lg:text-xl text-center">Meditation and Mindfulness</h3>
                                <p className="flex items-center justify-center text-center text-sm md:text-xl lg:text-sm">Calm your mind and find peace through meditation techniques.</p>
                            </motion.div>
                        </a>

                        <a href='/services/soundhealing' target="_blank" rel="noopener noreferrer"  >
                            <motion.div
                                variants={itemVariants}
                                className="lg:absolute bottom-32 left-10 flex flex-col items-center justify-center gap-2 bg-[#A7594D] text-white p-2 rounded-custom-2-sm lg:rounded-custom-2 shadow-md w-full lg:w-1/3 py-2 px-4 lg:py-2 lg:px-4 md:p-3"
                            >
                                <h3 className="font-semibold text-base md:text-xl lg:text-xl text-center">Sound Healing Therapy</h3>
                                <p className='text-center text-sm md:text-xl lg:text-sm'>Calm your mind and find peace through meditation techniques.</p>
                            </motion.div>
                        </a>

                        <a
                            target="_blank" rel="noopener noreferrer"
                            href='/services/spiritualevents'
                            className='cursor-pointer'
                            
                        >
                            <motion.div
                                variants={itemVariants}
                                className="lg:absolute bottom-0 left-10 flex flex-col items-center justify-center gap-2 bg-[#A7594D] text-white py-2 lg:px-4 px-3 rounded-custom-3-sm lg:rounded-custom-3 shadow-md w-full lg:w-1/3"
                            >
                                <h3 className="font-bold text-base md:text-xl lg:text-xl text-center">Spiritual Events and Retreats</h3>
                                <p className='text-center text-sm md:text-xl lg:text-sm'>Take a break from daily life to recharge and reconnect with yourself.</p>
                            </motion.div>
                        </a>

                        <div className="w-full flex justify-center items-center">
                            <img
                                src="/Images/Service2.png"
                                alt="Sound Healing"
                                className="w-full lg:w-1/3 pr-4 object-cover mix-blend-multiply"
                                loading='lazy'
                            />
                        </div>

                        <a
                            target="_blank" rel="noopener noreferrer"
                            className='cursor-pointer'
                            href='/services/soundbaths'
                        >
                            <motion.div
                                variants={item1Variants}
                                className="lg:absolute top-0 right-20 items-center justify-center flex flex-col gap-2 bg-[#A7594D] text-white py-2 px-4 rounded-custom-4-sm lg:rounded-custom-4 shadow-md w-full md:w-3/4 lg:w-1/3"
                            >
                                <h3 className="font-bold text-base md:text-xl lg:text-xl text-center">Sound Baths and Relaxation</h3>
                                <p className='flex justify-center items-center text-center text-sm md:text-xl lg:text-sm'>Enjoy soothing sounds that melt away stress and bring deep relaxation.</p>
                            </motion.div>
                        </a>

                        <a
                            target="_blank" rel="noopener noreferrer"
                            href='/services/yoga&energy'
                            className='cursor-pointer'
                        >
                            <motion.div
                                variants={item1Variants}
                                className="lg:absolute bottom-32 right-10 items-center justify-center flex flex-col gap-2 bg-[#A7594D] text-white p-2 rounded-custom-5-sm lg:rounded-custom-5 shadow-md w-full lg:w-1/3 py-2 px-4"
                            >
                                <h3 className="font-bold text-base md:text-xl lg:text-xl text-center">Yoga and Energy Awakening</h3>
                                <p className='text-center text-sm'>Move, breathe, and connect with your inner energy through yoga.</p>
                            </motion.div>
                        </a>

                        <a
                            target="_blank" rel="noopener noreferrer"
                            className='cursor-pointer'
                            href='/services/healingworkshop'
                        >
                            <motion.div
                                variants={item1Variants}
                                className="lg:absolute bottom-0 right-16 flex flex-col items-center justify-center gap-2 bg-[#A7594D] text-white p-2 rounded-custom-6-sm lg:rounded-custom-6 shadow-md w-full lg:w-1/3 py-2 px-4"
                            >
                                <h3 className="font-bold text-base md:text-xl lg:text-xl text-center">Sound Healing Workshops</h3>
                                <p className='text-center text-sm'>Healing workshops that help you heal, grow, and feel better.</p>
                            </motion.div>
                        </a>

                    </motion.div>

                </div>
            ) : (
                <div className="flex p-8 items-center w-full mt-4">

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 ">
                        {services.map((service, index) => (
                            <ServiceCard
                                className='w-full'
                                key={index} service={service} />
                        ))}
                    </div>

                </div>
            )}

            <div className='flex items-center justify-center'>

                {
                    !showNewContent ? (

                        <FaAngleDoubleDown
                            className='text-3xl cursor-pointer text-[#044F86]'
                            onClick={handleButtonClick}
                        />
                    ) : (
                        <FaAngleDoubleUp
                            className='text-3xl cursor-pointer text-[#044F86]'
                            onClick={handleButtonClick}
                        />
                    )
                }

            </div>
        </div>
    );
};

export default ServicesPage;

