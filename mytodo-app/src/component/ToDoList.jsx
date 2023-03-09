import React, {  useState, useRef, useEffect, memo  } from 'react';
import ToDoListItem from './ToDoListItem';
import styled from 'styled-components';

const ToDoListul = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
`



function ToDoList ({todos}) {
    return(
        <ToDoListul>
            {todos.map((todo) => (
                <ToDoListItem
                todo={todo}
                key={todo.id}
                />
            ))}
        </ToDoListul>
    );
}

export default ToDoList