import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';



const Testimonials = () => {

    const navigate = useNavigate()
    const testimonials = [
        {
            name: "Tawny Cheung",
            text: "The most useful part of the workshop for sure is I feel like reborn. I feel my positive energy has increased after the workshop and this is really a significant milestone in my life. I am sure I will keep practice and practice of what I have learnt in workshop since I feel really good and I can do the healing for my family. Master and Catherine, really thank you for guiding me the way to positive energy!!!",
            image: "/Images/user1.jpg"
        },
        {
            name: "June Paris",
            text: "A very good experience in singing bowls learning，they will also organize sound healing field trip, don’t miss it",
            image: "/Images/user2.jpg"
        },
        {
            name: "Peggy Valdes",
            text: "After completing both the beginners and advanced singing bowl classes, I highly recommend for anyone ready to feel the power of sound.Feeling the vibrations travel up my body and settle deeply within was amazing. Thanks for Master Akash and Catherine guiding us through all the music instruments. 🙏🙏🙏Namaste",
            image: "/Images/user3.jpg"
        },
        {
            name: "Wendy Lee",
            text: "What a experience and great learning from Master Akash Banjara. So Happy to become his student. Not only to learn the skill of singing bowl sound healing to heal ourself and others but also how to become a human with kindness and empathy to ourself and others🙏🏻❤️ I graduated 5 years already and the Master and Catherine always organise activity for students stay connect and grow! ❤️",
            image: "/Images/user4.jpg"
        },
        {
            name: "Noel Wong",
            text: "I recently took sound healing courses (both beginner and advanced) with singing bowls led by Master Akash Banjara from Nepal, and it was a fantastic experience. His professionalism and deep knowledge of sound therapy, rooted in his Nepalese musical heritage, made the course truly enriching. Akash’s teaching style is clear and engaging, blending traditional techniques with practical applications. The hands-on practice with singing bowls was transformative, helping me understand chakra balancing and vibrational healing. I highly recommend his courses to anyone seeking a professional and authentic sound healing journey.",
            image: "/Images/user5.jpg"
        },
        {
            name: "Yik Chin Chan",
            text: "Master Akash, the teacher of Sound Healing HK's beginner course, has a wealth of knowledge and experience in Songpo. He selflessly teaches us all the knowledge. He is not afraid of your knowledge, but most afraid that you can't learn it well.The course is really rich.It is really tight to learn in two days.Thank you 🙏🏻Master Akash for teaching.Thank you 🙏🏻cathrine for helping.I went to register for courses in other places before because I was poor and greedy.I didn't know that the gain was not worth the loss, and I wasted a lot of money.I am really grateful to Master Akash for his selfless teaching🙏🏻🙏🏻🙏🏻",
            image: "/Images/user6.jpg"
        },
        {
            name: "Ko Hukjiop",
            text: "Master Akash is really professional. His courses start from the basics and progress to the advanced. He reminds us every day that if we want to help others heal, we must first help ourselves before we can help others. This one. The course is really rich and the teaching is very attentive. The place is small but comfortable. It can also be given to students for free practice, which is great. Worth recommending.",
            image: "/Images/user6.jpg"
        },
        {
            name: "Rita Wong",
            text: "The one-on-one sound therapy session at Sound Healing HK made me feel calm and deeply relaxed. Master Akash cleared the blockages in my chakras and balanced my body energy. At the end of the session, I felt relaxed and calm. 🙏🏻",
            image: "/Images/user6.jpg"
        },
        {
            name: "Mon Ng",
            text: "The location is convenient, the environment is clean and comfortable, the master teaches attentively and answers students' questions. It is a very comprehensive class that is not an ordinary singing bowl class, meditation, cleansing inner breathing method",
            image: "/Images/user6.jpg"
        },
        {
            name: " grace yeung",
            text: "I saw a Nepalese instructor giving a class online, so I became interested. However, due to my limited English skills, I was afraid that I wouldn’t understand anything before the class. Fortunately, instructor Catherine was there to translate, and the course content was not mainly based on theory, but explained a variety of healing methods, so that we could learn more and apply more.",
            image: "/Images/user6.jpg"
        },
        {
            name: "Denise Thomson",
            text: "Great place to buy quality singing bowls and other sound healing items. Master Akash and Catherine were very knowledgeable and didn’t push the sale which made the shopping experience enjoyable since there is so much hard selling in HK.",
            image: "/Images/user6.jpg"
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Stagger animation for cards
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: "hidden", // Reset animation when out of view
    };


    return (
        <div className='flex flex-col gap-8 bg-gradient-to-b from-[#f9f9f9] to-[#eaeaea]'>

            <div className="lg:relative md:relative flex flex-col justify-center items-center gap-4">
                {/* Image Container */}
                <div className="lg:relative md:relative w-full">
                    <img
                        src="/Images/Get in touch.jpg"
                        className="object-cover w-full lg:h-[500px]  h-auto"
                    />


                    <div className="lg:absolute md:absolute inset-0 flex flex-col justify-center items-center text-center bg-black lg:bg-opacity-40 bg-opacity-50  gap-4 lg:gap-8 p-2">

                        <div className='flex lg:flex-row md:flex-row flex-col gap-2'>
                            <motion.h1
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-white font-semibold font-marck-script text-2xl lg:text-4xl md:text-4xl"
                            >
                                🌿 Yogi Akash
                            </motion.h1>

                            <motion.h1
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="text-white font-semibold font-playfair-display text-xl lg:text-3xl md:text-3xl"
                            >
                                | Transformational Healing & Wisdom 🌿
                            </motion.h1>
                        </div>

                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.9 }}
                            className=" text-center">
                            <p className='text-white font-semibold font-playfair-display text-2xl lg:text-4xl md:text-4xl'>"Awaken Your Soul with the Healing Touch of Sound & Meditation"</p>
                        </motion.div>
                    </div>
                </div>
            </div>


            <div className="flex justify-center items-center">

            </div>

            <div className='flex flex-col gap-6 lg:m-8 lg:p-4 m-2 p-2'>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <h1 className=' text-[#666666] font-semibold font-playfair-display text-2xl lg:text-3xl'>Our wall of love</h1>
                    <p className=' text-[#666666] font-medium font-playfair-display text-xl lg:text-2xl'>See What Our Students & Seekers Say </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="hidden"
                    className='grid grid-cols-1 lg:grid-cols-3 gap-8 '>

                    {testimonials.map((test) => (

                        <motion.div
                            variants={cardVariants}
                            className='p-6 shadow-lg rounded-lg bg-white flex flex-col gap-4 transform transition-all hover:shadow-xl'>
                            <div className='flex items-center gap-2'>
                                <img
                                    src="/Images/user.jpg"
                                    className='object-cover w-8 h-8 rounded-md'
                                />
                                <h1 className='text-[#666666] text-xl font-bold font-marck-script'>{test.name}</h1>
                            </div>
                            <p className='text-[#666666] font-medium font-playfair-display italic'>
                                {test.text}
                            </p>
                        </motion.div>
                    ))
                    }

                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='flex justify-center items-center my-12'
            >
                <button onClick={() => navigate('/contact')}
                    className='bg-[#4CAF50] text-white font-semibold font-playfair-display text-xl lg:text-2xl px-8 py-4 rounded-lg hover:bg-[#45a049] transition-all'>
                    Join Us Today
                </button>
            </motion.div>

        </div >

    )
}

export default Testimonials



