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

const AddTodo = styled.button`
  cursor: pointer;
  text-align: center;
  font-size: 50px;
  width: 50px;
  height: 50PX;
  border-radius: 50px;
  border-style: none;
  background: rgba( 232, 201, 237, 0.35 );
  box-shadow: 0 0 8px 0 rgba(0, 0, 20, 0.3);
  &:hover{  
    background-color: #50db8c;
    color : #ffffff
  }
`



function ToDoList ({todos,setTodos,modal, setModal}) {


    const addToDomodal = () => {
        setModal(!modal)
    }

    return(
        <ToDoListul>
            {todos.map((todo) => (
                <ToDoListItem todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />))}
            <AddTodo onClick={addToDomodal}>{!modal?"+":"x"}</AddTodo>
        </ToDoListul>
    );
}

export default ToDoList