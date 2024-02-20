"use client"

import React, { useEffect, useState } from 'react';

export default function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Cleanup function to clear the interval
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        // Convert hours to 12-hour format
        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    }

    return (
        <main>
            <img src='/images/background.jpg' className="absolute inset-0 w-full h-full object-cover" alt="Background" />

            {/* Clock container */}
            <div className='absolute inset-0 flex items-center justify-center'>
                {/* Clock */}
                <div className='clock text-black text-7xl font-bold font-serif'>
                    <span>
                        {formatTime()}
                    </span>
                </div>
            </div>
        </main>
    );
}
