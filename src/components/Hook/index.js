import React, {useCallback, useMemo} from 'react';
import Example6 from "./example6";
import useMagicColor from "./useMagicColor";
import Example7 from "./example7";
import Example8 from "./example8";
import Example9 from "./example9";

const Hook = (props) => {

    // const [show, setShow] = React.useState(true);
    // const color = useMagicColor()
    // const [count, setCount] = React.useState(0);
    //
    // const onClick = () => {
    //     setShow(false);
    // }

    // trả về 1 function 1 lần duy nhất
    // prop là dạng func thì là callback
    const handleEx7Click = useCallback(() => {
        console.log('Ex7 click')
    }, [])

    // trả về dữ liệu 1 lần duy nhất
    // props là dạng data thì là memo
    const data = useMemo(() => [
        {
            name: 'Hello',
            value: 1
        }
    ], [])

    // console.log('render', count)

    return (
        <>
            {/*<button onClick={onClick}>Toggle</button>*/}
            {/*{show && <Example6/>}*/}
            {/*{color}*/}

            {/*<button onClick={() => setCount(count + 1)}>Increase</button>*/}
            {/*{count}*/}
            {/*<Example7 name={count} onClick={handleEx7Click}/>*/}

            {/*<Example8 />*/}
            <Example9 />
        </>
    )
}

export default Hook;