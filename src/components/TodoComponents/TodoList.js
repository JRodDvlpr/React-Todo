import React from 'react';
import Todo from './Todo';


const TodoList = props => {
    return (
        <div className="todo-list">
            {props.todos.map(item => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
            <button className="clear-button" onClick={props.clearChecked}>
                Clear Completed
            </button>
        </div>
    );
};

export default TodoList;