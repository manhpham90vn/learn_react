import React, {useEffect} from 'react';

const getRandomColor = () => {
    const colors = ['deeppink', 'green', 'yellow', 'black', 'blue'];
    const randomIndex = Math.trunc(Math.random() * colors.length);
    return colors[randomIndex];
}

const Example3 = () => {

    // useEffect chia ra làm 2 loại:
    // Không cần clean up: khi gọi api hoặc tương tác với DOM
    // Cần clean up: khi thực hiện subscribe, set interval, set timeout
    // thực hiện sau khi render
    // chỉ thực hiện khi dependencies trong ngoặc vuông thay đổi
    // được thực thi ít nhất 1 lần sau lần render đầu tiên

    // thực hiện trước mỗi lần render
    const [color, setColor] = React.useState(() => {
        console.log("Chạy trước khi render")
        return 'green'
    });

    const [mount, setMount] = React.useState(true);

    // không có dependencies luôn thực thi sau mỗi lần render
    useEffect(() => {
        console.log('Type 1: No dependencies - 1')

        return () => {
            // Được gọi trước mỗi lần render tiếp theo theo hoặc khi unmount
            console.log('Type 1: No dependencies - 2')
        }
    })

    // dependencies là mảng rỗng chỉ chạy 1 lần sau lần render đầu tiên
    useEffect(() => {
        console.log('Type 2: Empty dependencies - 1')

        return () => {
            // Được gọi trước một lần duy nhất khi unmount
            console.log('Type 2: Empty dependencies - 2')
        }
    }, [])

    useEffect(() => {
        console.log('Type 3: Color dependencies - 1')

        return () => {
            // Được gọi trước mỗi lần render tiếp theo theo hoặc khi unmount
            console.log('Type 3: Color dependencies - 2')
        }
    }, [color]);

    console.log("Tiến hành render")

    // render
    return (
        <div>
            {mount && (<div style={{width: 100, height: 100, backgroundColor: color}}></div>)}
            <button onClick={() => setColor(getRandomColor())}>Update</button>
            <button onClick={() => setMount(!mount)}>Mount</button>
        </div>
    );
};

export default Example3;