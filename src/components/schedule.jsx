
// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import { useNavigate } from 'react-router-dom';
// import { InlineWidget } from 'react-calendly';

// const Schedule = () => {
//     const [date, setDate] = useState(null);
//     const [time, setTime] = useState("");

//     const [meetingData, setMeetingData] = useState(null);
//     const navigate = useNavigate();

//     const handleDateChange = (newDate) => {
//         setDate(newDate);
//         setTime("");
//     };

//     const Timings = ["9:00 AM", "9:15 AM", "9:30 AM", "10:30 AM", "11:30 AM", "11:45 AM", "12:15 PM"];

//     // const handleTimeSelection = (selectedTime) => {
//     //     const newMeetingData = { date: date.toDateString(), time: selectedTime };
//     //     setMeetingData(newMeetingData);
//     //     setIsDialogOpen(true);
//     // };

//     const handleScheduleCall = () => {
//         navigate('/contact/schedule-meeting', {
//             state: {
//                 date: date.toDateString(),
//                 time: time

//             }
//         });
//     };

//     return (
//         <div className="flex flex-col items-center text-black p-4">
//             <h2 className="text-lg font-bold mb-4 text-[#03385F] ">Select a Date and Time</h2>
//             <Calendar
//                 onChange={handleDateChange}
//                 value={date}
//                 className="mb-4 lg:p-10 p-4 custom-calendar"
//             />
//             <p className="text-[#03385F] ] mb-4">
//                 Selected Date:{" "}
//                 <span className="text-xl font-semibold">
//                     {date ? date.toDateString() : "No date selected"}
//                 </span>
//             </p>

//             {date && (
//                 <div className="mb-4">
//                     <h3 className="text-md font-semibold text-[#3c5551] mb-2">Select a Time</h3>
//                     <div className="grid grid-cols-3 gap-2">
//                         {Timings.map((timing) => (
//                             <button
//                                 key={timing}
//                                 className={`px-4 py-2 rounded bg-[#03385F] text-white hover:bg-[#2a3f3e] ${time === timing ? "ring-2 ring-[#a7594d]" : ""
//                                     }`}
//                                 onClick={() => setTime(timing)}
//                             >
//                                 {timing}
//                             </button>
//                         ))}
//                     </div>
//                     {time && (
//                         <p className="mt-2 text-[#a7594d]">
//                             Selected Time:{" "}
//                             <span className="font-semibold">{time}</span>
//                         </p>
//                     )}
//                 </div>
//             )}

//             {date && time && (
//                 <div className="flex items-center justify-center">
//                     <button
//                         className="px-4 py-2 bg-[#03385F] text-white rounded mt-2 transition-transform duration-300  ease-out  hover:scale-105"
//                         onClick={handleScheduleCall}
//                     >
//                         Schedule Call
//                     </button>
//                 </div>
//             )}

//             {/* <div className="mt-8 w-full">
//                 <h2 className="text-lg font-bold mb-4 text-[#a7594d]">
//                     Or Schedule via Calendly
//                 </h2>
//                 <InlineWidget
//                     url="https://calendly.com/your-calendly-username"
//                     styles={{
//                         height: '600px',
//                         width: '100%',
//                     }}
//                 />
//             </div> */}
//         </div>
//     );
// };

// export default Schedule;






// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import { useNavigate } from 'react-router-dom';
// import TimezoneSelect from 'react-timezone-select';
// import moment from 'moment-timezone';

// const Schedule = () => {
//     const [date, setDate] = useState(null);
//     const [time, setTime] = useState('');
//     const [selectedTimezone, setSelectedTimezone] = useState(
//         Intl.DateTimeFormat().resolvedOptions().timeZone // Default to user's timezone
//     );
//     const navigate = useNavigate();

//     const handleDateChange = (newDate) => {
//         setDate(newDate);
//         setTime('');
//     };

//     // Available times in UTC (you can adjust these as needed)
//     const TimingsUTC = [
//         '09:00',
//         '09:15',
//         '09:30',
//         '10:30',
//         '11:30',
//         '11:45',
//         '12:15',
//     ];

//     // Convert UTC times to the selected timezone
//     const Timings = TimingsUTC.map((utcTime) => {
//         const timeInUTC = moment.utc(utcTime, 'HH:mm');
//         return timeInUTC.tz(selectedTimezone).format('h:mm A');
//     });

//     const handleScheduleCall = () => {
//         navigate('/contact/schedule-meeting', {
//             state: {
//                 date: date.toDateString(),
//                 time: time,
//                 timezone: selectedTimezone,
//             },
//         });
//     };

//     return (
//         <div className="flex flex-col items-center text-black p-4">
//             <h2 className="text-lg font-bold mb-4 text-[#03385F]">Select a Date and Time</h2>

//             {/* Timezone Picker */}
//             <div className="mb-4 w-full max-w-md">
//                 <label className="block text-sm font-medium text-[#03385F] mb-2">
//                     Select Your Timezone
//                 </label>
//                 <TimezoneSelect
//                     value={selectedTimezone}
//                     onChange={setSelectedTimezone}
//                     className="w-full"
//                 />
//             </div>

//             {/* Calendar */}
//             <Calendar
//                 onChange={handleDateChange}
//                 value={date}
//                 className="mb-4 lg:p-10 p-4 custom-calendar"
//             />

//             {/* Selected Date */}
//             <p className="text-[#03385F] mb-4">
//                 Selected Date:{' '}
//                 <span className="text-xl font-semibold">
//                     {date ? date.toDateString() : 'No date selected'}
//                 </span>
//             </p>

//             {/* Time Selection */}
//             {date && (
//                 <div className="mb-4">
//                     <h3 className="text-md font-semibold text-[#3c5551] mb-2">
//                         Select a Time ({selectedTimezone})
//                     </h3>
//                     <div className="grid grid-cols-3 gap-2">
//                         {Timings.map((timing) => (
//                             <button
//                                 key={timing}
//                                 className={`px-4 py-2 rounded bg-[#03385F] text-white hover:bg-[#2a3f3e] ${time === timing ? 'ring-2 ring-[#a7594d]' : ''
//                                     }`}
//                                 onClick={() => setTime(timing)}
//                             >
//                                 {timing}
//                             </button>
//                         ))}
//                     </div>
//                     {time && (
//                         <p className="mt-2 text-[#a7594d]">
//                             Selected Time:{' '}
//                             <span className="font-semibold">{time}</span>
//                         </p>
//                     )}
//                 </div>
//             )}

//             {/* Schedule Call Button */}
//             {date && time && (
//                 <div className="flex items-center justify-center">
//                     <button
//                         className="px-4 py-2 bg-[#03385F] text-white rounded mt-2 transition-transform duration-300 ease-out hover:scale-105"
//                         onClick={handleScheduleCall}
//                     >
//                         Schedule Call
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Schedule;












import React, { useState, useMemo } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";
import TimezoneSelect from "react-timezone-select";
import moment from "moment-timezone";

const Schedule = () => {
    const [date, setDate] = useState(null);
    const [time, setTime] = useState("");
    const [selectedTimezone, setSelectedTimezone] = useState(
        Intl.DateTimeFormat().resolvedOptions().timeZone
    );
    const navigate = useNavigate();

    const handleDateChange = (newDate) => {
        setDate(newDate);
        setTime("");
    };

    // Available times in UTC
    const TimingsUTC = [
        "09:00",
        "09:15",
        "09:30",
        "10:30",
        "11:30",
        "11:45",
        "12:15",
    ];

    // Convert UTC times to the selected timezone
    const Timings = useMemo(() => {
        return TimingsUTC.map((utcTime) => {
            return moment.utc(utcTime, "HH:mm").tz(selectedTimezone).format("h:mm A");
        });
    }, [selectedTimezone]); // Recalculate only when timezone changes

    const handleScheduleCall = () => {
        navigate("/contact/schedule-meeting", {
            state: {
                date: date.toDateString(),
                time: time,
                timezone: selectedTimezone,
            },
        });
    };

    return (
        <div className="flex flex-col items-center text-black p-4">
            <h2 className="text-lg font-bold mb-4 text-[#03385F]">
                Select a Date and Time
            </h2>

            {/* Timezone Picker */}
            <div className="mb-4 w-full max-w-md">
                <label className="block text-sm font-medium text-[#03385F] mb-2">
                    Select Your Timezone
                </label>
                <TimezoneSelect
                    value={selectedTimezone}
                    onChange={(tz) => setSelectedTimezone(tz.value)}
                    className="w-full"
                />
            </div>

            {/* Calendar */}
            <Calendar
                onChange={handleDateChange}
                value={date}
                className="mb-4 lg:p-10 p-4 custom-calendar"
            />

            {/* Selected Date */}
            <p className="text-[#03385F] mb-4">
                Selected Date:{" "}
                <span className="text-xl font-semibold">
                    {date ? date.toDateString() : "No date selected"}
                </span>
            </p>

            {/* Time Selection */}
            {date && (
                <div className="mb-4">
                    <h3 className="text-md font-semibold text-[#3c5551] mb-2">
                        Select a Time ({selectedTimezone})
                    </h3>
                    <div className="grid grid-cols-3 gap-2">
                        {Timings.map((timing) => (
                            <button
                                key={timing}
                                className={`px-4 py-2 rounded bg-[#03385F] text-white hover:bg-[#2a3f3e] ${time === timing ? "ring-2 ring-[#a7594d]" : ""
                                    }`}
                                onClick={() => setTime(timing)}
                            >
                                {timing}
                            </button>
                        ))}
                    </div>
                    {time && (
                        <p className="mt-2 text-[#a7594d]">
                            Selected Time: <span className="font-semibold">{time}</span>
                        </p>
                    )}
                </div>
            )}

            {/* Schedule Call Button */}
            {date && time && (
                <div className="flex items-center justify-center">
                    <button
                        className="px-4 py-2 bg-[#03385F] text-white rounded mt-2 transition-transform duration-300 ease-out hover:scale-105"
                        onClick={handleScheduleCall}
                    >
                        Schedule Call
                    </button>
                </div>
            )}
        </div>
    );
};

export default Schedule;
