import React from 'react'

const Quotes = () => {
    return (
        <div className='mt-2'>
            <h1 className='text-[#022B4A] font-bold text-2xl lg:text-3xl  text-center'>My Quotes</h1>

            <div className=' grid grid-cols-1 lg:grid-cols-2 mt-3'>

                <div className='flex flex-col lg:flex-row md:flex-row justify-center items-center p-4 '>
                    <img
                        src='/Images/homePhoto.jpg'
                        className='w-64 h-64 rounded-custom object-cover'
                    />
                    <div className=' p-6 bg-[#FFFFFF] rounded-lg text-[#666666]'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nam corrupti debitis maiores assumenda asperiores doloribus neque dolore maxime veritatis ducimus.</p>
                    </div>

                </div>

                <div className='flex flex-col lg:flex-row md:flex-row justify-center items-center p-4'>
                    <img
                        src='/Images/homePhoto.jpg'
                        className='w-64 h-64 rounded-custom object-cover '
                    />

                    <div className='p-6 bg-[#FFFFFF] rounded-lg text-[#666666]'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nam corrupti debitis maiores assumenda asperiores doloribus neque dolore maxime veritatis ducimus, necessitatibus, magnam .</p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Quotes
