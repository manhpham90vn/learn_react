import React, {useState, useEffect} from 'react';

const Clock = () => {
    const [timeString, setTimeString] = useState(null);
    const intervalRef = React.useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            const now = new Date();
            const newTimeString = now.toLocaleTimeString();
            setTimeString(newTimeString);
        }, 1000);

        return () => {
            clearInterval(intervalRef.current);
        }
    }, [])

    return (
        <p style={{fontSize: '42px'}}>
            {timeString}
        </p>
    )

}

export default Clock;