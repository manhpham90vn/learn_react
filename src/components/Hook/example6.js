import React, {useEffect} from 'react';

const formatTime = (date) => {
    if (!date) return ''
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);
    return `${hours}:${minutes}:${seconds}`;
}

const Example6 = () => {

    const [time, setTime] = React.useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const nowStr = formatTime(now);

            setTime(nowStr)
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            {time}
        </div>
    );
};

Example6.prototypes = {

}

export default Example6;