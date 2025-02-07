import React from 'react'
import { FaLightbulb } from 'react-icons/fa';
const Quotes = () => {
    return (
        <div className='mt-2'>
            <h1 className='flex items-center justify-center text-[#022B4A] font-bold text-2xl lg:text-3xl gap-1'>My Quotes </h1>

            <div className=' grid grid-cols-1 lg:grid-cols-2 mt-3'>

                <div className='flex flex-col lg:flex-row md:flex-row justify-center items-center p-4 '>
                    <img
                        src='/Images/homePhoto.jpg'
                        className='w-64 h-64 rounded-custom object-cover'
                    />

                    <div className=' flex p-2 md:p-8 lg:p-8 bg-[#FFFFFF] rounded-2xl text-[#022B4A] font-semibold text-2xl
                 font-marck-script'>
                        <p> <span className='font-extrabold text-4xl'> " </span> When sound resonates with your soul, healing becomes effortless

                        </p>
                    </div>

                </div>

                <div className='flex flex-col lg:flex-row md:flex-row justify-center items-center p-2 lg:p-4'>
                    <img
                        src='/Images/homePhoto.jpg'
                        className='w-64 h-64 rounded-custom object-cover'
                    />

                    <div className=' flex p-2 md:p-8 lg:p-8 bg-[#FFFFFF] rounded-2xl text-[#022B4A] font-semibold text-2xl
                    font-marck-script'>
                        <p> <span className='font-extrabold text-4xl'> " </span> When sound resonates with your soul, healing becomes effortless

                        </p>
                    </div>

                </div>

            </div>

        </div >
    )
}

export default Quotes
