import React from 'react';
import PropTypes from 'prop-types';
import classnames from "classnames";
import './styles.scss'

TodoList.propTypes = {
    todoList: PropTypes.array.isRequired,
    onTodoClick: PropTypes.func
};

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null
}

function TodoList(props) {
    const {todoList, onTodoClick} = props;

    const handleTodoClick = (item, index) => {
        if (!onTodoClick) return
        onTodoClick(item, index)
    }

    return (
        <ul className="todo-list">
            {todoList.map((item, index) => (
                <li
                    key={item.id}
                    className={classnames({'todo-item': true, completed: item.status === 'completed'})}
                    onClick={() => handleTodoClick(item, index)}>
                    {item.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;