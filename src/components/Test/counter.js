import React from 'react';

const Counter = () => {

    const [count, setCount] = React.useState(0);

    return (
        <div>
            {count}

            <button onClick={() => setCount(x => x + 1)}>Increase</button>
        </div>
    );
};

export default Counter;