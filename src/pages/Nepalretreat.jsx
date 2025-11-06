import React from 'react'

const itinerary = [
    {
        day: "Day 1",
        destination: "Kathmandu Arrival",
        activities:
            "Welcome to Kathmandu International Airport (KTM), transfer to the hotel, and Welcome Dinner.",
    },
    {
        day: "Day 2",
        destination: "Kathmandu - Nagarkot",
        activities:
            "Sightseeing: Pashupatinath Temple, Boudhanath Stupa, & Bhaktapur Durbar Square. Drive to Nagarkot for an overnight stay.",
    },
    {
        day: "Day 3",
        destination: "Nagarkot - Pokhara",
        activities:
            "Morning Yoga/Meditation. Drive to KTM Airport for a flight to Pokhara. Boating on Phewa Lake and visiting Tal Barahi Temple.",
    },
    {
        day: "Day 4",
        destination: "Pokhara - Ghandruk",
        activities:
            "Morning Yoga/Meditation. Sightseeing: Davis Fall, Gupteshwor Cave & World Peace Stupa. Drive approximately 4 hours to Ghandruk Village.",
    },
    {
        day: "Day 5",
        destination: "Ghandruk - Pokhara",
        activities:
            "Sunrise Yoga/Meditation with Himalayan views. Drive back to Pokhara. Free time for optional activities (Paragliding, etc.).",
    },
    {
        day: "Day 6",
        destination: "Pokhara - Chitwan",
        activities:
            "Morning Yoga/Meditation. Drive approximately 5 hours to Chitwan National Park. Jungle activities and Tharu Cultural Dance.",
    },
    {
        day: "Day 7",
        destination: "Chitwan - Kathmandu",
        activities:
            "Canoe ride and Elephant Breeding Centre visit. Flight to Kathmandu. Visit Swayambhunath Stupa. Farewell Dinner.",
    },
    {
        day: "Day 8",
        destination: "Final Departure",
        activities:
            "Transfer to Tribhuvan International Airport (KTM) for your final departure.",
    },
];


const NepalRetreat = () => {
    return (
        <div className='min-h-screen p-3 lg:p-8'>

            <h1 className='font-bold text-2xl lg:text-3xl text-center'>Body, Mind and Soul Rejuvenation Retreat</h1>

            <div className='flex items-center justify-center w-full mt-4'>
                <img
                    src='/Images/Retreat.jpg'
                    className='w-full lg:w-3/4 object-cover h-full lg:h-[450px]'
                />
            </div>

            <div className='w-full p-2 lg:p-4 flex flex-col items-center justify-center mt-4'>

                <div className='w-full lg:w-3/4 flex flex-col items-start justify-center gap-4'>

                    <div className=''>
                        <h1 className='font-bold text-lg'>What is 'Retreat'?</h1>
                        <p className='text-[#666666]'>A Retreat is a special time when you are off from the stresses of your busy life. It is a purposeful spiritual voyage or health getaway that includes practices such as Yoga, meditation, and holistic healing, and is used to rejuvenate, renew, and re-energize your mind, body, and spirit.<br />
                            During a retreat, you walk away and rest from your external stressful experiences, then your normal self, in terms of joy and balance, and well-being, is restored. It is a chance to get still, take a better look at yourself, and walk back to your day-to-day existence totally refreshed.
                        </p>
                    </div>

                    <div className=''>
                        <h1 className='font-bold text-lg'>7 Nights / 8 Days | Yoga, Meditation & Healing Journey</h1>
                        <p className='text-[#666666]'>
                            Unwind and leave your hectic schedule behind by going on a life-changing trip to Nepal, the ultimate spiritual refuge. Our 8-Day Body, Mind, and Emotional Cleansing Yoga Trip will make you unplugged and reconnected with yourself.<br />
                            You can immerse yourself in the most spectacular landscape of the world: in the grandeur of the Himalayas and still lakes, in the green forest, and the religious caves. Yogis and sages have long been meditating in these lands for centuries, and now you can as well. This is the time to renew your mind, revive your body, and rejuvenate your spirit with yoga sessions, daily meditation, and the rich tranquility of nature.
                        </p>
                    </div>

                    <div className="">
                        <h1 className="font-bold text-xl mb-4">Why this retreat?</h1>
                        <ul className="space-y-3 text-[#666666] list-disc list-inside leading-relaxed">
                            <li>Rejuvenate and re-energize your body, mind, and emotions.</li>
                            <li>Deepen your yoga and meditation practice in a peaceful environment.</li>
                            <li>Detoxify through natural and mindful living.</li>
                            <li>Connect with like-minded individuals from around the world.</li>
                            <li>Experience authentic Nepali culture, food, and nature.</li>
                        </ul>
                    </div>

                    <div className="">
                        <h1 className="font-bold text-xl mb-4">Retreat Highlights:</h1>
                        <ul className="space-y-2 text-[#666666] list-disc list-inside leading-relaxed">
                            <li>Yoga/ meditation classes with professional instructors.</li>
                            <li>Nagarkot and Ghandruk Sunrise yoga.</li>
                            <li>Sacred walk: Pashupatinath, Boudhanath, and Swayambhunath.</li>
                            <li>Idyllic moments at the lakeside in Pokhara.</li>
                            <li>Peace Stupa, caves, and waterfalls tour.</li>
                            <li>Evening cultural and jungle safari in Chitwan.</li>
                        </ul>
                    </div>

                </div>


                <div className='w-full lg:w-3/4 p-0 lg:p-6'>
                    <h2 className='text-lg font-semibold mb-4'>Short internary review:</h2>
                    <div>
                        <table className='min-w-full'>
                            <thead className=' text-gray-800'>
                                <tr>
                                    <th className='border border-gray-400 text-left w-20 lg:w-24 px-1 lg:px-4 py-2'>DAY</th>
                                    <th className='border border-gray-400 text-left w-20 lg:w-24 px-1 lg:px-4 py-2'>DESTINATION</th>
                                    <th className='border border-gray-400 text-left w-20 lg:w-24 px-1 lg:px-4 py-2'>KEY ACTIVITIES</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    itinerary.map((i, index) => (
                                        <tr key={index}>
                                            <td className='border border-gray-400 text-gray px-1 lg:px-4 py-2 font-medium'>
                                                {i.day}
                                            </td>
                                            <td className='border border-gray-400 text-gray px-1 lg:px-4 py-2 font-medium'>
                                                {i.destination}
                                            </td>
                                            <td className='border border-gray-400 text-gray px-1 lg:px-4 py-2 font-medium'>
                                                {i.activities}
                                            </td>

                                        </tr>
                                    ))
                                }
                            </tbody>

                        </table>
                    </div>
                </div>


                <div className='w-full lg:w-2/3 flex flex-col items-start justify-center gap-4 mt-4'>

                    <div>
                        <h1 className="font-bold text-xl mb-2">Trip Inclusions:</h1>
                        <ul className="space-y-2 text-[#666666] list-disc list-inside leading-relaxed">
                            <li>Accommodation: Standard twin-sharing stays in 4-star equivalent hotels (Kathmandu, Pokhara, Nagarkot, Chitwan) and a cozy lodge in Ghandruk.</li>
                            <li>Transportation: All airport transfers, ground transport by private A/C vehicles, and flights between Kathmandu, Pokhara, and Chitwan.</li>
                            <li>Wellness & Sightseeing: Services of a Local Tour Guide & Yoga Instructor, entrance fees for all specified sightseeing, and all necessary permits (TIMS & ACAP).</li>
                            <li>Meals: All meals as specified in the detailed itinerary (Breakfast, Lunch, Dinner).</li>
                            <li>Special Touches: Farewell dinner at a traditional Nepali restaurant, featuring cultural performances.</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="font-bold text-xl mb-4">Trip Exclusions:</h1>
                        <ul className="space-y-2 text-[#666666] list-disc list-inside leading-relaxed">
                            <li>International airfare and Nepal Visa fee.</li>
                            <li>Travel and Rescue Insurance.</li>
                            <li>Personal expenses (beverages, phone calls, laundry).</li>
                            <li>Optional activities (Hot Balloon, Paragliding, Bungee Jumping, Ayurvedic Massage, etc.).</li>
                            <li>Tipping the crew.</li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default NepalRetreat;
