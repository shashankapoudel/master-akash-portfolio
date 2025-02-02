
import React from 'react';
import { useLocation } from 'react-router-dom';
import { CiCalendarDate, CiClock2 } from "react-icons/ci";
import MeetingForm from '../components/meetingForm';

const SchedueleMeeting = () => {
    const location = useLocation();
    const meetingData = location.state || {};
    console.log(meetingData)

    const date = meetingData.date;
    const time = meetingData.time;
    const callTime = meetingData.callTime;
    const timeZone = meetingData.timezone;
    console.log(date)

    return (
        <div className="lg:m-8 m-6">
            <div className="flex flex-col lg:flex-row w-full tracking-wider font-playfair-display border-2 border-[#3c5551] p-4">

                <div className="lg:w-1/3 w-full p-3 text-[#a7594d] font-medium gap-2">
                    <h1 className="flex justify-center font-semibold text-3xl mb-4">Akash Banjara</h1>

                    <div className="flex items-center gap-2 mb-2">
                        <CiCalendarDate className="text-xl" />
                        <p>
                            <span className="font-semibold text-xl">Date:</span> {date || "Not Selected"}
                        </p>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                        <CiClock2 className="text-xl" />
                        <p>
                            <span className="font-semibold text-xl">Time:</span> {time || "Not Selected"}
                        </p>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                        <CiClock2 className="text-xl" />
                        <p>
                            <span className="font-semibold text-xl">Minutes:</span> {callTime || "Not Selected"} minutes
                        </p>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                        <CiClock2 className="text-xl" />
                        <p>
                            <span className="font-semibold text-xl">TimeZone:</span> {timeZone || "Not Selected"}
                        </p>
                    </div>


                </div>

                <div className="h-100 border-2 border-[#3c5551] m-4"></div>


                <div className="lg:w-2/3 w-full">
                    <MeetingForm />
                </div>
            </div>
        </div>
    );
};

export default SchedueleMeeting;

