import React, {useEffect, useMemo} from 'react';
import TodoList from "./components/TodoList";
import {useLocation, useNavigate} from "react-router-dom";
import queryString from "query-string";
import TodoForm from "./components/TodoForm";

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

    const location = useLocation();
    const navigate = useNavigate()
    const [todo, setTodo] = React.useState(initTodoList)
    const [filter, setFilter] = React.useState(() => {
        const params = queryString.parse(location.search)
        return params.status || 'all'
    })

    useEffect(() => {
        const params = queryString.parse(location.search)
        setFilter(params.status || 'all')
    }, [location.search])

    const handleTodoClick = (item) => {
        console.log(item)
        // clone to new object
        const newTodo = [...todo]
        const index = newTodo.findIndex(x => x.id === item.id)

        newTodo[index] = {
            ...newTodo[index],
            status: newTodo[index].status === 'new' ? 'completed' : 'new'
        }
        setTodo(newTodo)
    }

    const handleShowAll = () => {
        const params = queryString.stringify({status: 'all'})
        const url = `${location.pathname}?${params}`
        navigate(url, {replace: true})
    }

    const handleShowCompleted = () => {
        const params = queryString.stringify({status: 'completed'})
        const url = `${location.pathname}?${params}`
        navigate(url, {replace: true})
    }

    const handleShowNew = () => {
        const params = queryString.stringify({status: 'new'})
        const url = `${location.pathname}?${params}`
        navigate(url, {replace: true})
    }

    const renderTodo = useMemo(() => {
        return todo.filter(todo => filter === 'all' || filter === todo.status)
    }, [todo, filter])

    const handleTodoFormSubmit = (values) => {
        const id = todo.reduce((max, task) => (task.id > max ? task.id : max), todo[0].id)
        const newTodo = {
            id: id + 1,
            title: values.title,
            status: 'new',
        }
        setTodo([...todo, newTodo])
    }

    return (
        <div>
            <h3>What todo</h3>
            <TodoForm onSubmit={handleTodoFormSubmit}/>

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