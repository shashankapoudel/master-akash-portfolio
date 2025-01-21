import React from 'react'
import { useLocation } from 'react-router-dom';
const Timings = ["9:00", "9:15", "9:30", "10:30", "11:30", "11:45", "12:15"];
import { CiCalendarDate } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import MeetingForm from '../components/meetingForm';

const SchedueleMeeting = () => {

    const location = useLocation()
    const date = location.state;
    console.log(date)

    return (
        <div className='m-8'>

            <div className='flex flex-col lg:flex-row w-full  tracking-wider font-playfair-display border-2 border-[#3c5551] p-2'>

                <div className='lg:w-1/3 w-full  p-3 text-[#a7594d] font-medium'>
                    <h1 className='flex justify-center  font-semibold text-3xl p-2'>Akash Banjara</h1>

                    <div className='flex items-center gap-1'>
                        <CiCalendarDate className='font-semibold text-xl' />
                        <p><span className='font-semibold text-xl'>Date: </span>{date.selectedDate}</p>
                    </div>

                    <div className='flex items-center gap-1'>
                        <CiClock2 className='font-semibold text-xl' />
                        <p><span className='font-semibold text-xl'>Time: </span></p>
                    </div>

                </div>

                <div className="h-100 border-2 border-[#3c5551] m-4"></div>

                <div className="lg:w-2/3 w-full">
                    <MeetingForm />
                </div>

            </div>

        </div>
    )
}

export default SchedueleMeeting
