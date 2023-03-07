import React, { useState } from 'react';
import styled from 'styled-components';


function ToDoListItem ({todo}) {

    const {id, text, checked} = todo;
    return(
        <li className="TodoListItem">
            <div className={('checkbox', { checked })}>
                <div className="text">{text}</div>
            </div>
            
        </li>
    );
}

export default ToDoListItem