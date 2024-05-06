import { useEffect, useState } from "react";

const RealTime = ({ className }) => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);

        return () => {
            clearInterval(timerID);
        };
    }, []);

    const tick = () => {
        setCurrentTime(new Date());
    };
    return <p className={className}>{currentTime.toLocaleTimeString()}</p>
};

export default RealTime;
