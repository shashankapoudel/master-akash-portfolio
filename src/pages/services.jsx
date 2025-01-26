
import React from 'react';

const services = [
    {
        title: 'Meditation and Sound Healing',
        image: '/Images/homePhoto.jpg',
        description: ' Meditation and sound healing Rebalance Your Mind, Body, and Spirit Immerse yourself in the transformative power of meditation and sound healing. Our sessions guide you to a state of deep relaxation, inner peace, and heightened awareness, using ancient techniques and healing sounds.',
        whatIncluded: [
            'Guided meditation and breathing exercises',
            'Sound healing session with singing bowls',
            'Relaxation techniques to reduce stress'
        ],
        benefits: ['Enhanced focus', 'Stress relief', 'Emotional balance'],
        duration: '45 mins',
        location: 'Outdoor or private studio',
        cta: 'Book my session!',
    },
    {
        title: 'Singing Bowl and Handicrafts',
        image: '/Images/homePhoto.jpg',
        description: 'Learn the art of using singing bowls for relaxation and healing, along with crafting your own bowl.',
        whatIncluded: [
            'Introduction to singing bowls and their history',
            'Hands-on session with singing bowls',
            'Guidance on crafting and customizing bowls'
        ],
        benefits: ['Cultural learning', 'Stress relief', 'Therapeutic experience'],
        duration: '2 hours',
        location: 'Workshop studio',
        cta: 'Book a workshop now!',
    },
    {
        title: 'Retreat Centers',
        image: '/Images/homePhoto.jpg',
        description: 'Enjoy serene retreat locations with meditation, yoga, and guided activities for total relaxation.',
        whatIncluded: [
            'Access to beautiful retreat locations',
            'Guided meditation and yoga sessions',
            'Healthy meals and relaxing environments'
        ],
        benefits: ['Complete rejuvenation', 'Increased mindfulness', 'Digital detox'],
        duration: 'Weekend',
        location: 'Various serene retreat locations',
        cta: 'Explore Retreats',
    },
    {
        title: 'Spiritual and Mental Growth Activities',
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
        cta: 'Join a session today!',
    },
];

const ServiceCard = ({ service }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-8 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
            <img src={service.image} />
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
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                {service.cta}
            </button>
        </div>
    );
};

const ServicesPage = () => {
    return (
        <div className="flex flex-col bg-gray-100 min-h-screen p-14 leading-[1.3125rem] tracking-wider ">
            <div className="relative bg-gray-100 py-2 px-8">
                <div className=" mx-auto flex flex-wrap justify-between items-center relative ">


                    <div className="bg-[#A7594D] text-white p-5 px-8 rounded-md shadow-md w-1/4 relative">
                        <h3 className="font-bold text-lg">Meditation and sound healing</h3>
                        <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                            <li>Alleviates stress and anxiety</li>
                            <li>Improves mental clarity and focus</li>
                            <li>Promotes emotional balance and physical healing</li>
                        </ul>

                        {/* <div className="absolute top-0 right-[-40px] h-[2px] w-40 bg-gray-400 transform rotate-45"></div> */}
                    </div>


                    <div className="bg-[#A7594D] text-white p-5 rounded-md shadow-md w-1/4 relative">
                        <h3 className="font-bold text-lg">Singing bowl and handicrafts</h3>
                        <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                            <li>Alleviates stress and anxiety</li>
                            <li>Improves mental clarity and focus</li>
                            <li>Promotes emotional balance and physical healing</li>
                        </ul>
                        {/* <div className="absolute top-1/2 left-[-20px] h-[2px] w-[40px] bg-gray-400 transform -translate-y-1/2 rotate-[-45deg]"></div> */}
                    </div>


                    <div className="relative w-full flex justify-center items-center">
                        <img
                            src="/Images/services.jpg"
                            alt="Sound Healing"
                            className=" w-1/3 max-h-[389px]  shadow-lg object-cover"
                        />
                    </div>


                    <div className="bg-[#A7594D] text-white p-5 rounded-md shadow-md w-1/4 relative">
                        <h3 className="font-bold text-lg">Retreat centers</h3>
                        <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                            <li>Alleviates stress and anxiety</li>
                            <li>Improves mental clarity and focus</li>
                            <li>Promotes emotional balance and physical healing</li>
                        </ul>
                        {/* <div className="absolute top-1/2 right-[-20px] h-[2px] w-[40px] bg-gray-400 transform -translate-y-1/2 rotate-[-45deg]"></div> */}
                    </div>


                    <div className="bg-[#A7594D] text-white p-5 rounded-md shadow-md w-1/4 relative">
                        <h3 className="font-bold text-lg">Spiritual and mental growth activities</h3>
                        <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                            <li>Alleviates stress and anxiety</li>
                            <li>Improves mental clarity and focus</li>
                            <li>Promotes emotional balance and physical healing</li>
                        </ul>

                        {/* <div className="absolute top-1/2 left-[-20px] h-[2px] w-[40px] bg-gray-400 transform -translate-y-1/2 rotate-[45deg]"></div> */}
                    </div>
                </div>
            </div>

            <div className="max-w-8xl mx-auto lg:mx-2 space-y-12  mt-12 p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;


