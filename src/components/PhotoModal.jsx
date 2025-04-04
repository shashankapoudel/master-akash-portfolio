import React from 'react'

const PhotoModal = ({ closeModal, selectedImage }) => {
    return (
        <div
            className='fixed inset-0 z-50 flex items-center bg-black bg-opacity-0 w-2xl'
            onClick={closeModal}
        >
            <div className='relative max-w-2xl p-4'>

                <img
                    className='w-full h-auto max-h-[80vh] object-contain rounded-lg'
                    src={selectedImage}
                    alt='Enlarged gallery image'
                    loading="lazy"
                />
                <button
                    className='absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-xl hover:bg-opacity-70 transition text-4xl w-16'
                    onClick={closeModal}
                >
                    &times;
                </button>

            </div>
        </div>
    )
}

export default PhotoModal
