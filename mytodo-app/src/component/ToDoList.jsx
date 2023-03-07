import React, { useState } from 'react';
import ToDoListItem from './ToDoListItem';
import styled from 'styled-components';




function ToDoList ({todos}) {
    return(
        <ul className="TodoList">
            {todos.map((todo) => (
                <ToDoListItem
                todo={todo}
                key={todo.id}
                />
            ))}
        </ul>
    );
}

export default ToDoList