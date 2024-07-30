import React from 'react';
import TodoList from "./components/TodoList";
import todoList from "./components/TodoList";

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new'
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Code',
            status: 'new'
        },
    ]

    const [todo, setTodo] = React.useState(initTodoList)

    const handleTodoClick = (item, index) => {
        const newTodo = [...todo]
        newTodo[index] = {
            ...newTodo[index],
            status: newTodo[index].status === 'new' ? 'completed' : 'new'
        }
        setTodo(newTodo)
    }

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={todo} onTodoClick={handleTodoClick}/>
        </div>
    );
}

export default TodoFeature;