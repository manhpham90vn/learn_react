import React from 'react';
import Example6 from "./example6";
import useMagicColor from "./useMagicColor";
import Example7 from "./example7";

const Hook = (props) => {

    const [show, setShow] = React.useState(true);
    const color = useMagicColor()
    const [count, setCount] = React.useState(0);

    const onClick = () => {
        setShow(false);
    }

    console.log('render', count)

    return (
        <>
            <button onClick={onClick}>Toggle</button>
            {show && <Example6 />}
            {color}

            <button onClick={() => setCount(count + 1)}>Increase</button>
            {count}
            <Example7 name={count} />
        </>
    )
}

export default Hook;