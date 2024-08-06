import React, {useEffect} from 'react';

function Example8(props) {

    // 1
    const [count, setCount] = React.useState(0);
    const prevCount = React.useRef(count);

    // 3
    useEffect(() => {
        prevCount.current = count
    }, [count])

    const handleClick = () => {
        setCount((pre) => pre + 1);
    }

    console.log("Example 8 rerender", count, prevCount.current)

    // 2
    return (
        <div>
            Prev Count {prevCount.current}
            Count {count}
            <button onClick={handleClick}>Click</button>
        </div>
    );
}

export default Example8;