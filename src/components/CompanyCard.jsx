import React from 'react'

const CompanyCard = () => {
    return (
        <div className='flex flex-col gap-4 mt-4 '>
            <h1 className='text-center text-[#022B4A] text-3xl font-bold'>Companies</h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 lg:gap-6 mt-2'>

                <div className='flex flex-col items-center justify-center p-2 lg:p-4'>
                    <img
                        className='rounded-full w-64 h-64 object-cover'
                        src='/Images/homePhoto.jpg'
                    />
                    <h1 className='text-[#03385F] font-semibold'>Company name</h1>
                    <p className='text-[#666666] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae distinctio hic non accusamus quam dignissimos quae vitae nisi. Corrupti quod doloremque ullam libero illo perspiciatis voluptatem est, magni ducimus dolore.</p>
                </div>

                <div className='flex flex-col items-center justify-center  p-2 lg:p-4 '>
                    <img
                        className='rounded-full w-64 h-64 object-cover'
                        src='/Images/homePhoto.jpg'
                    />
                    <h1 className='text-[#03385F] font-semibold'>Company name</h1>
                    <p className='text-center text-[#666666]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae distinctio hic non accusamus quam dignissimos quae vitae nisi. Corrupti quod doloremque ullam libero illo perspiciatis voluptatem est, magni ducimus dolore.</p>
                </div>

                <div className='flex flex-col items-center justify-center  p-2 lg:p-4 '>
                    <img
                        className='rounded-full w-64 h-64 object-cover'
                        src='/Images/homePhoto.jpg'
                    />
                    <h1 className='text-[#03385F] font-semibold'>Company name</h1>
                    <p className='text-center text-[#666666]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae distinctio hic non accusamus quam dignissimos quae vitae nisi. Corrupti quod doloremque ullam libero illo perspiciatis voluptatem est, magni ducimus dolore.</p>
                </div>

                <div className='flex flex-col items-center justify-center p-2 lg:p-4'>
                    <img
                        className='rounded-full w-64 h-64 object-cover'
                        src='/Images/homePhoto.jpg'
                    />
                    <h1 className='text-[#03385F] font-semibold'>Company name</h1>
                    <p className='text-center text-[#666666]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae distinctio hic non accusamus quam dignissimos quae vitae nisi. Corrupti quod doloremque ullam libero illo perspiciatis voluptatem est, magni ducimus dolore.</p>
                </div>

            </div>
        </div>
    )
}

export default CompanyCard
