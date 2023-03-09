import React, { useState, useRef, useEffect, memo } from 'react';
import styled from 'styled-components';

const ToDoliBlock = styled.li`
 width: 100%;
 list-style: none;
 padding: 10px 0;
 margin: 5px 0;
 background: rgba( 232, 201, 237, 0.35 );
 box-shadow: 0 0 8px 0 rgba(0, 0, 20, 0.3);
 
`;

const ToDotextBlock = styled.span`
text-align: right;
font-size: 20px;
`;

const ToDodateBlock = styled.p`
text-align: right;
font-size: 12px;
margin-right: 10px;
`;
const ToDoCheckBlock = styled.input`
    
`

function ToDoListItem({ todo }) {

    const { id, text, checked, date } = todo;
    return (
        <ToDoliBlock>
            <div className={('checkbox', { checked })}>
                <div className="text">
                    <ToDotextBlock>{text}</ToDotextBlock>
                    <ToDodateBlock>{date}까지</ToDodateBlock>
                </div>

            </div>

        </ToDoliBlock>
    );
}

export default ToDoListItem