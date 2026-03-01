import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router'

const TopBar = () => {
    
    // get current location
    const location = useLocation()
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000); // 1000 milliseconds = 1 second

        return () => {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div
            className='w-full h-full bg-background col-span-15 row-span-1 flex flex-row items-center justify-between p-4 px-5'
        >
            <h3
                className='text-primary font-semibold text-lg'
            >
                {location.pathname.substring(1)}
            </h3>

            <div
                className='flex flex-row items-center gap-5 w-fit h-fit'
            >   

                {/* date */}
                <div
                    className='flex flex-row items-center gap-1 w-fit h-full text-text/60'
                >
                    <svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.1 0-2 .9-2 2v1h18V6c0-1.1-.9-2-2-2M3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8H3zm4-8h10v2H7zm0 4h7v2H7z"></path></svg>
                    <h2
                        className='font-medium pb-px'
                    >
                        {new Date().toLocaleDateString()}
                    </h2>
                </div>

                {/* time */}
                <div
                    className='flex flex-row items-center gap-1 w-fit h-full text-text/60'
                >
                    <svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M12 2C6.58 2 2 6.58 2 12s4.58 10 10 10 10-4.58 10-10S17.42 2 12 2m5 11h-6V7h2v4h4z"></path></svg>
                    <h2
                        className='font-medium pb-px'
                    >
                        {time.toLocaleTimeString().substring(5,-1)}
                    </h2>
                </div>

            </div>

        </div>
    )
}

export default TopBar