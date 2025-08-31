import React from 'react'

const MeditationAndMindfulness = () => {
    return (
        <div className='min-h-screen p-4 lg:p-8 '>

            <h1 className='font-bold text-2xl text-center '>Meditation and Mindfulness</h1>
            <div className='flex flex-col-reverse xl:flex-row w-full'>

                <div className='w-full xl:w-1/2 p-3 md:p-6 xl:p-10 text-base md:text-lg lg:text-base   font-poppins text-justify max-w-4xl'>
                    <p className=' tracking-wider text-[#666666]  '>
                        <strong>Meditation and Mindfulness</strong> offer pathways to cultivating inner peace and a deeper connection with the present moment. It's a practice of training your attention and awareness to achieve mental clarity and emotional calm.<br />

                        <br />
                        We offer various types of meditation, including guided meditations to help you focus, breathing exercises (pranayama) to regulate your energy, and mindfulness practices that teach you to observe your thoughts and feelings without judgment.
                        <br />
                        <br />
                        Engaging in regular meditation and mindfulness practices can bring numerous benefits. It can significantly reduce stress and anxiety, improve emotional regulation, enhance focus and concentration, and promote a greater sense of overall well-being and inner harmony. By integrating these practices into your daily life, you can navigate challenges with greater ease and experience a more fulfilling existence
                    </p>
                </div>

                <div className='w-full xl:w-1/2 p-3 md:p-6 lg:p-10'>
                    <img
                        src='/Images/meditation_mindfulness.jpg'
                        className=' rounded-lg w-full h-96'
                        loading='lazy'
                    />
                </div>

            </div>

        </div>
    )
}

export default MeditationAndMindfulness;
