import React from 'react'

const PhotoModal = ({ closeModal, selectedImage }) => {
    return (
        <div
            className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75'
            onClick={closeModal}
        >
            <div className='relative max-w-4xl w-full p-4'>
                <img
                    className='w-full h-auto max-h-[80vh] object-contain rounded-lg'
                    src={selectedImage}
                    alt='Enlarged gallery image'
                />
                <button
                    className='absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition'
                    onClick={closeModal}
                >
                    &times;
                </button>
            </div>
        </div>
    )
}

export default PhotoModal
