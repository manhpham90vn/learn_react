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
    const [filedTodo, setFiledTodo] = React.useState('all')

    const handleTodoClick = (item, index) => {
        // clone to new object
        const newTodo = [...todo]

        newTodo[index] = {
            ...newTodo[index],
            status: newTodo[index].status === 'new' ? 'completed' : 'new'
        }
        setTodo(newTodo)
    }

    const handleShowAll = () => {
        setFiledTodo('all')
    }

    const handleShowCompleted = () => {
        setFiledTodo('completed')
    }

    const handleShowNew = () => {
        setFiledTodo('new')
    }

    const renderTodo = todo.filter(todo => filedTodo === 'all' || filedTodo === todo.status)

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={renderTodo} onTodoClick={handleTodoClick}/>
            <div>
                <button onClick={handleShowAll}>Show All</button>
                <button onClick={handleShowCompleted}>Show Completed</button>
                <button onClick={handleShowNew}>Show New</button>
            </div>
        </div>
    );
}

export default TodoFeature;