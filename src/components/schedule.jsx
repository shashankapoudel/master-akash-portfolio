

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import MeetingForm from './meetingForm';

const Schedule = () => {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState("");
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [meetingDateandTime, setMeetingDateandTime] = useState(null);
    const navigate = useNavigate();

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    const Timings = ["9:00", "9:15", "9:30", "10:30", "11:30", "11:45", "12:15"];

    const handleTime = (selectedTime) => {
        const meetingData = { date: date.toDateString(), time: selectedTime };
        setMeetingDateandTime(meetingData);
        setIsDialogOpen(true);

    };

    return (
        <div className="flex  justify-center  bg-[#A8B391] text-black">
            <div className="">
                <h2 className="text-lg font-bold mb-2 text-[#a7594d]">Select a Date and Time</h2>
                <Calendar
                    onChange={handleDateChange}
                    value={date}
                    className="mb-4 lg:p-10 p-4  custom-calendar"
                />
                <p className="text-[#a7594d]">Selected Date:   <span className='text-xl font-semibold'>{date.toDateString()}</span> </p>

                <div className='flex items-center justify-center'>
                    <button
                        className="px-4 py-2  bg-[#3c5551] text-white rounded mt-2"
                        onClick={() => navigate('/contact/schedule-meeting', { state: { selectedDate: date.toDateString() } })}
                    >
                        Schedule Call
                    </button>
                </div>

            </div>

        </div >
    );
};

export default Schedule;

