import React from 'react';

const TodoForm = props => {
    
    return (
        <form className='form' onSubmit={props.handleSubmit}>
            <input
            type="text"
            name="name"
            value={props.todoText}
            onChange={props.handleChanges}
            />
            <button className="add-button">Add Item</button>
        </form>
    );
}

export default TodoForm;