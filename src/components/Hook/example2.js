import React from 'react';

const Example2 = () => {
    const [todos, setTodos] = React.useState([
        {id: 1, title: 'Todo 1'},
        {id: 2, title: 'Todo 2'},
        {id: 3, title: 'Todo 3'},
    ]);

    const onTodoClick = (todo) => {
        const newTodos = todos.filter((t) => t.id !== todo.id);
        setTodos(newTodos);
    }

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id} onClick={() => onTodoClick(todo)}>
                    {todo.title}
                </li>
            ))}
        </ul>
    );
};

export default Example2;