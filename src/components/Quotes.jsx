import React from 'react'

const Quotes = () => {
    return (
        <div className='mt-2'>
            <h1 className='text-[#022B4A] font-semibold text-2xl  text-center'>My Quotes</h1>

            <div className='grid grid-cols-2 mt-5'>

                <div className='flex justify-center items-center p-4 '>
                    <img
                        src='/Images/homePhoto.jpg'
                        className='w-64 h-64 rounded-custom object-cover'
                    />
                    <div className=' p-8 bg-[#FFFFFF] rounded-lg text-[#666666]'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nam corrupti debitis maiores assumenda asperiores doloribus neque dolore maxime veritatis ducimus, necessitatibus, magnam laudantium modi numquam error aliquam provident obcaecati.</p>
                    </div>

                </div>

                <div className='flex justify-center items-center p-4'>
                    <img
                        src='/Images/homePhoto.jpg'
                        className='w-64 h-64 rounded-custom object-cover '
                    />

                    <div className='p-8 bg-[#FFFFFF] rounded-lg text-[#666666]'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nam corrupti debitis maiores assumenda asperiores doloribus neque dolore maxime veritatis ducimus, necessitatibus, magnam laudantium modi numquam error aliquam provident obcaecati.</p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Quotes
