import React from 'react'

const GalleryCard = () => {
    return (
        <div className='flex flex-col p-8'>

            <h1 className='text-center text-3xl font-semibold text-[#111111]'>Gallery</h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4'>

                <img
                    className='w-full rounded-md mb-4'
                    src='/Images/homePhoto.jpg'
                />
                <img
                    className='w-full rounded-md mb-4'
                    src='/Images/homePhoto.jpg'
                />
                <img
                    className='w-full rounded-md mb-4'
                    src='/Images/homePhoto.jpg'
                />
                <img
                    className='w-full rounded-md mb-4'
                    src='/Images/homePhoto.jpg'
                />
                <img
                    className='w-full rounded-md mb-4'
                    src='/Images/homePhoto.jpg'
                />
                <img
                    className='w-full rounded-md mb-4'
                    src='/Images/homePhoto.jpg'
                />
                <img
                    className='w-full rounded-md mb-4'
                    src='/Images/homePhoto.jpg'
                />
                <img
                    className='w-full rounded-md mb-4'
                    src='/Images/homePhoto.jpg'
                />
            </div>

        </div>
    )
}

export default GalleryCard
