import React from 'react'

const ServiceCard = () => {
    return (
        <div className='flex flex-col p-8 gap-2 relative mt-4'>

            <h1 className='text-center text-3xl font-semibold text-[#111111]'>Services</h1>


            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-2'>

                <div className='p-8 border border-[#E6E7F3] bg-[#FFFFFF]'>
                    <h1 className='text-[#022B4A] font-bold'>Service name</h1>
                    <img
                        className='w-full rounded-md mb-4'
                        src='/Images/homePhoto.jpg'
                    />
                    <p className='text-[#666666]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque veritatis amet fugiat sunt aliquid inventore laboriosam obcaecati perferendis quasi quam? Vitae hic delectus mollitia vel nesciunt expedita dicta consequatur dolor.</p>

                    <button
                        className='w-full bg-[#044F86] rounded-md p-2 text-white mt-2'
                    >
                        Book my session
                    </button>
                </div>

                <div className='p-8 border border-[#E6E7F3] bg-[#FFFFFF]'>
                    <h1 className='text-[#022B4A] font-bold'>Service name</h1>
                    <img
                        className='w-full rounded-md mb-4'
                        src='/Images/homePhoto.jpg'
                    />
                    <p className='text-[#666666]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque veritatis amet fugiat sunt aliquid inventore laboriosam obcaecati perferendis quasi quam? Vitae hic delectus mollitia vel nesciunt expedita dicta consequatur dolor.</p>

                    <button
                        className='w-full bg-[#044F86] rounded-md p-2 text-white mt-2'
                    >
                        Book my session
                    </button>
                </div>

                <div className='p-8 border border-[#E6E7F3] bg-[#FFFFFF]'>
                    <h1 className='text-[#022B4A] font-bold'>Service name</h1>
                    <img
                        className='w-full rounded-md mb-4'
                        src='/Images/homePhoto.jpg'
                    />
                    <p className='text-[#666666]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque veritatis amet fugiat sunt aliquid inventore laboriosam obcaecati perferendis quasi quam? Vitae hic delectus mollitia vel nesciunt expedita dicta consequatur dolor.</p>

                    <button
                        className='w-full bg-[#044F86] rounded-md p-2 text-white mt-2'
                    >
                        Book my session
                    </button>
                </div>

                <div className='p-8 border border-[#E6E7F3] bg-[#FFFFFF]'>
                    <h1 className='text-[#022B4A] font-bold'>Service name</h1>
                    <img
                        className='w-full rounded-md mb-4'
                        src='/Images/homePhoto.jpg'
                    />
                    <p className='text-[#666666]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque veritatis amet fugiat sunt aliquid inventore laboriosam obcaecati perferendis quasi quam? Vitae hic delectus mollitia vel nesciunt expedita dicta consequatur dolor.</p>

                    <button
                        className='w-full bg-[#044F86] rounded-md p-2 text-white mt-2'
                    >
                        Book my session
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ServiceCard
