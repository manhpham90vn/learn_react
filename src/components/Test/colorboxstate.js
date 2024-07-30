import React from 'react';

const ColorBoxState = (props) => {
    const [color, setColor] = React.useState('white')

    return (
        <>
            <div style={{width: 100, height: 100, background: color}}></div>
            <button onClick={() => setColor('black')}>Change to back</button>
            <button onClick={() => setColor('white')}>Change to white</button>
        </>
    )
};

export default ColorBoxState;