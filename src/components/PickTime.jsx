import React from 'react'

const PickTime = () => {

    const Timings = ["9:00", "9:15", "9:30", "10:30", "11:30", "11:45", "12:15"];

    return (
        <div className='m-10'>
            <div className='flex w-full  border '>
                <div className='w-1/3 border p-2'>
                    <h1 className='flex justify-center text-white font-semibold text-3xl'>Akash Banjara</h1>
                    
                </div>

                <div className="flex flex-col  items-center justify-center w-2/3">
                    {Timings.map((item) => (
                        <button
                            key={item}
                            onClick={() => handleTime(item)}
                            className="py-2 px-20 text-center border-b border-t border-spacing-2 text-white">
                            {item}
                        </button>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default PickTime
