
import React, { useState, useMemo } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";
import TimezoneSelect from "react-timezone-select";
import moment from "moment-timezone";


const Schedule = () => {
    const [date, setDate] = useState(null);
    const [time, setTime] = useState("");
    const [callTime, setCallTime] = useState("");
    const [selectedTimezone, setSelectedTimezone] = useState(
        Intl.DateTimeFormat().resolvedOptions().timeZone
    );


    const navigate = useNavigate();

    const handleDateChange = (newDate) => {
        setDate(newDate);
        setTime("");
    };


    const TimingsNPT = [
        "09:00",
        "09:15",
        "09:30",
        "10:30",
        "11:30",
        "11:45",
        "12:15",
    ];


    const Timings = useMemo(() => {
        return TimingsNPT.map((nptTime) => {
            return moment
                .tz(nptTime, "HH:mm", "Asia/Kathmandu")
                .tz(selectedTimezone)
                .format("h:mm A");
        });
    }, [selectedTimezone]);

    const handleScheduleCall = () => {
        navigate("/contact/schedule-meeting", {
            state: {
                date: date.toDateString(),
                time: time,
                timezone: selectedTimezone,
                callTime: callTime,
            },
        });
    };

    return (
        <div className="flex flex-col items-center text-black p-2 lg:p-4 gap-2 w-full">

            <h2 className=" text-lg lg:text-xl font-semibold mb-4 text-white bg-gradient-to-br from-[#a7594d] to-[#f4c2a1] p-2 rounded-xl font-playfair-display">
                Schedule Call with Akash
            </h2>

            <div className="mb-4 w-full lg:w-1/2">
                <label className="block text-sm font-medium text-[#03385F] mb-2">
                    Select Your Timezone
                </label>
                <TimezoneSelect
                    value={selectedTimezone}
                    onChange={(tz) => setSelectedTimezone(tz.value)}
                    className="w-full"
                />
            </div>

            <Calendar
                onChange={handleDateChange}
                value={date}
                minDate={new Date()}
                className="lg:p-10 p-2 "
            />


            <p className="text-[#03385F] mb-4">
                Selected Date:{" "}
                <span className="text-xl font-semibold">
                    {date ? date.toDateString() : "No date selected"}
                </span>
            </p>

            {date && (
                <div className="w-full lg:w-1/2 mb-3 p-4">
                    <select
                        className="p-2 border border-[#03385F] w-full"
                        onChange={(e) => {
                            setCallTime(e.target.value);
                        }}
                    >
                        <option value="">Select call minutes</option>
                        <option value="15">15 minutes</option>
                        <option value="30">30 minutes</option>
                        <option value="45">45 minutes</option>
                        <option value="60">60 minutes</option>
                    </select>
                </div>
            )}

            {callTime && (
                <div className="mb-2">
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
                            Selected Time:{" "}
                            <span className="font-semibold">{time}</span>
                        </p>
                    )}
                </div>
            )}


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

