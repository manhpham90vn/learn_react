import React, {useEffect} from 'react';

const randomColor = (color) => {
    const colors = ['red', 'green', 'blue'];
    const currentIndex = colors.indexOf(color);

    let newIndex = currentIndex
    while (currentIndex === newIndex) {
        newIndex = Math.floor(Math.random() * colors.length);
    }

    return colors[newIndex];
}

const useMagicColor = () => {
    const [color, setColor] = React.useState('green');
    const colorRef = React.useRef('green');

    useEffect(() => {
        const interval = setInterval(() => {
            const newColor = randomColor(colorRef.current)

            console.log(newColor)

            setColor(newColor)
            colorRef.current = newColor
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return color
}

export default useMagicColor