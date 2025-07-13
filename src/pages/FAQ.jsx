import React from 'react'

const FAQ = () => {

    const Faqs = [
        {
            question: "Who is Master Akash Banjara?",
            answer: "Master Akash Banjara, a leading Nepalese Singing Bowl Healing Master dedicated to transforming lives through the ancient, soothing vibrations of Himalayan sound. He blends ancient Himalayan wisdom with sound frequencies for profound well-being."
        },

        {
            question: "What kind of healing sessions does Master Akash offer?",
            answer: "Master Akash Banjara offers diverse healing sessions, including deeply relaxing private and group Sound Baths and Sound Healing. He also conducts comprehensive Basic, Advanced, and Master Sound Healing Teacher Training courses. Additionally, he provides expert guidance in Meditation and Mindfulness, offers personalized mentorship, and facilitates transformative Spiritual Retreats for holistic well-being."
        },

        {
            question: "Can Master Akash Banjara Provide Sound Healing Sessions at My Location?",
            answer: "Yes, absolutely! Master Akash Banjara offers flexible options to bring the transformative power of sound healing directly to you.For group sound baths, Master Akash can travel to your designated space, whether it's an office, event venue, or private residenc creating a harmonious experience for all attendees.For a deeply personalized and immersive individual sound bath or personal training session, we highly recommend experiencing it at our dedicated healing space.This environment is specifically designed to maximize the therapeutic benefits, ensuring a truly serene and undisturbed experience."
        },
        {
            question: "What are the benefits of sound healing with Master Akash?",
            answer: "Master Akash, a Himalayas-rooted healer from Nepal, brings over 18 years of expertise in ancient sound healing techniques. His sessions feature Hong Kong’s largest gong for deep vibrational therapy, promoting relaxation and inner balance.\n\nKey Benefits:\n- The powerful gong vibrations induce a meditative state, reducing stress and anxiety.\n- Sound baths help release trapped emotions, fostering inner peace and emotional balance.\n- Ancient techniques clear blockages, enhancing the flow of prana.\n- The resonant sounds improve focus, mindfulness, and mental stillness.\n- Vibrational therapy supports cellular healing and overall well-being."
        }




    ]



    return (
        <div className='min-h-screen text-[#111111] p-12 font-poppins'>

            <div className='flex flex-col items-center justify-center gap-4'>

                {
                    Faqs.map((faq) => (
                        <div className='border-4 p-4 leading-relaxed tracking-wide flex flex-col gap-4'>
                            <p className='font-bold'>{faq.question}</p>
                            <p
                                style={{ whiteSpace: 'pre-line' }}
                            >{faq.answer}</p>
                        </div>
                    ))
                }
            </div>


        </div>
    )
}

export default FAQ
