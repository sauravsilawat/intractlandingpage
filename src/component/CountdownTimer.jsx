import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const [time, setTime] = useState(480); // 8 minutes in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (timeInSeconds) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;
        return `00 : ${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
    };

    return (
        <div className='timer'>
            <h1>{formatTime(time)}</h1>
        </div>
    );
};

export default CountdownTimer;
