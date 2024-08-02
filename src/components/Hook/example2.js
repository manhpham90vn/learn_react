import React from 'react';
import PropTypes from "prop-types";

const Example2 = () => {
    const [todos, setTodos] = React.useState([{id: 1, title: 'Todo 1'}, {id: 2, title: 'Todo 2'}, {
        id: 3, title: 'Todo 3'
    },]);

    const onTodoClick = (todo) => {
        const newTodos = todos.filter((t) => t.id !== todo.id);
        setTodos(newTodos);
    }

    const handleSubmit = (value) => {
        const newTodo = {
            id: todos.length + 1, title: value,
        }
        const newTodos = [...todos, newTodo];
        setTodos(newTodos);
    }

    return (<>
        <TodoForm onSubmit={handleSubmit}/>
        <ul>
            {todos.map((todo) => (<li key={todo.id} onClick={() => onTodoClick(todo)}>
                {todo.title}
            </li>))}
        </ul>
    </>);
};

const TodoForm = (props) => {
    const {onSubmit} = props
    const [value, setValue] = React.useState('')

    const handleValueChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(value)
        setValue('')
    }

    return (<form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleValueChange}/>
        <button type="submit" onClick={handleSubmit}>Add</button>
    </form>)
}

TodoForm.prototype = {
    onSubmit: PropTypes.func,
}

TodoForm.defaultProps = {
    onSubmit: null,
}

export default Example2;