import { useState, useEffect } from 'react';
import "./style.css";


const Clock = () => {

    const [myDate, setMyDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setMyDate(new Date());
        }, 1000);
        return () => { clearInterval(intervalId) };
    }, []);


    return (
        <p className="clock">
            Dzisiaj jest {myDate.toLocaleString(undefined, {
            month: "long",
            weekday: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        })}
        </p>
    )
};

export default Clock


