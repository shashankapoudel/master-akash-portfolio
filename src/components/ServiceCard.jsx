import React from 'react'

const ServiceCard = () => {
    return (
        <div className='flex flex-col gap-2 relative mt-4 p-4 font-poppins'>

            <h1 className='text-center text-3xl font-semibold text-[#111111]'>Meditation Guidelines</h1>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-2'>

                <div className=' flex flex-col items-center p-4 lg:p-8 border border-[#E6E7F3] bg-[#FFFFFF] rounded-lg'>

                    <h1 className='text-[#022B4A] font-bold'>Service name</h1>
                    <img
                        className='w-full rounded-md mb-4'
                        src='/Images/homePhoto.jpg'
                    />
                    <p className='text-[#666666]  font-poppins'>In a world filled with distractions, finding inner peace can feel like a distant dream. Yogi Akash offers personalized meditation guidance to help you reconnect with your inner self, achieve mental clarity, and cultivate lasting tranquility.</p>

                    <button
                        className='w-full lg:w-1/3 bg-[#044F86] rounded-md p-2 text-white mt-2  bg-gradient-to-r from-[#044F86] to-[#0A6EB5]  '
                    >
                        Book my session
                    </button>

                </div>

                <div className='flex flex-col items-center p-4 lg:p-8 border border-[#E6E7F3] bg-[#FFFFFF] rounded-lg'>

                    <h1 className='text-[#022B4A] font-bold'>Sound Healing classes</h1>
                    <img
                        className='w-full rounded-md mb-4'
                        src='/Images/homePhoto.jpg'
                    />
                    <p className='text-[#666666]'>With years of experience in sound therapy and a deep understanding of vibrational healing, Yogi Akash brings a unique blend of ancient wisdom and modern insights to his classes. Whether you are a curious beginner or an experienced practitioner, his guidance will empower you to unlock the full potential of sound healing.</p>

                    <button
                        className=' w-full lg:w-1/3 bg-[#044F86] rounded-md p-2 text-white mt-2  bg-gradient-to-r from-[#044F86] to-[#0A6EB5] '
                    >
                        Book my session
                    </button>

                </div>

                <div className='flex flex-col items-center p-4 lg:p-8 border border-[#E6E7F3] bg-[#FFFFFF] rounded-lg'>

                    <h1 className='text-[#022B4A] font-bold'>Service name</h1>
                    <img
                        className='w-full rounded-md mb-4'
                        src='/Images/homePhoto.jpg'
                    />
                    <p className='text-[#666666]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque veritatis amet fugiat sunt aliquid inventore laboriosam obcaecati perferendis quasi quam? Vitae hic delectus mollitia vel nesciunt expedita dicta consequatur dolor.</p>

                    <button
                        className='w-full lg:w-1/3 bg-[#044F86] rounded-md p-2 text-white mt-2  bg-gradient-to-r from-[#044F86] to-[#0A6EB5] '
                    >
                        Book my session
                    </button>

                </div>

                <div className=' flex flex-col items-center p-4 lg:p-8 border border-[#E6E7F3] bg-[#FFFFFF] rounded-lg'>

                    <h1 className='text-[#022B4A] font-bold'>Service name</h1>
                    <img
                        className='w-full rounded-md mb-4'
                        src='/Images/homePhoto.jpg'
                    />
                    <p className='text-[#666666]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque veritatis amet fugiat sunt aliquid inventore laboriosam obcaecati perferendis quasi quam? Vitae hic delectus mollitia vel nesciunt expedita dicta consequatur dolor.</p>

                    <button
                        className='w-full lg:w-1/3 flex items-center justify-center bg-[#044F86] rounded-md p-2 text-white mt-2  bg-gradient-to-r from-[#044F86] to-[#0A6EB5] '
                    >
                        Book my session
                    </button>
                </div>

            </div>

        </div>
    )
}

export default ServiceCard
