import React from 'react';
import './styles.scss'

const Example1 = () => {

    // tạo state với giá trị khởi tạo
    // mỗi lần thay đổi state thì cần clone ra 1 object khác
    // useState dùng kiểu replace nên nó sẽ xoá object cũ
    const [color, setColor] = React.useState(() => {
        return localStorage.getItem('color') || 'deeppink';
    });

    // vì init state chỉ sử dụng 1 lần nên sẽ viết dạng như sau
    const [text, setText] = React.useState(() => {
        return ""
    });

    const getRandomColor = () => {
        const colors = ['deeppink', 'green', 'yellow', 'black', 'blue'];
        const randomIndex = Math.trunc(Math.random() * colors.length);
        return colors[randomIndex];
    }

    const onClick = () => {
        const color = getRandomColor();
        setColor(color);
        localStorage.setItem('color', color)
    }

    return (
        <div className="color-box" style={{backgroundColor: color}} onClick={onClick}>

        </div>
    );
};

export default Example1;