import React from 'react'

const YogaAndEnergy = () => {
    return (
        <div className='min-h-screen p-4 lg:p-8'>

            <div className='flex flex-col-reverse xl:flex-row w-full'>
                <div className='w-full xl:w-1/2 p-3 md:p-6 xl:p-10 text-base md:text-lg lg:text-base mt-2  font-poppins text-justify max-w-4xl'>
                    <p className=' tracking-wider'>
                        Yoga and Energy Awakening is a holistic practice that integrates physical postures (asanas), breathing techniques (pranayama), and meditation to harmonize the body, mind, and spirit. It's a journey of self-discovery and a potent tool for unlocking your inner vitality and cultivating a profound sense of well-being.
                        <br />
                        <br />
                        Our sessions focus on guiding you through a series of mindful movements and deliberate breathing exercises designed to stretch and strengthen the body, improve flexibility, and enhance circulation. Beyond the physical benefits, yoga is a powerful practice for awakening and balancing your energy centers (chakras), releasing stagnant energy, and fostering a free flow of vital life force (prana) throughout your system.
                        <br />
                        <br />
                        Practicing Yoga and Energy Awakening can lead to a multitude of benefits, including increased physical strength and flexibility, reduced stress, improved mental clarity and focus, enhanced emotional balance, and a deeper connection to your inner self. It's an invitation to move, breathe, and connect with the subtle energies that govern your being, leading to a more vibrant and harmonious existence.


                    </p>
                </div>

                <div className='w-full xl:w-1/2 p-3 md:p-6 lg:p-10'>
                    <img
                        src='/Images/yoga_energy.jpg'
                        className=' rounded-lg w-full'
                        loading='lazy'
                    />
                </div>
            </div>

        </div>
    )
}

export default YogaAndEnergy
