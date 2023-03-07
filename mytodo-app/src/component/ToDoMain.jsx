import React, { useState } from 'react';
import ToDoInsert from './ToDoInsert';
import styled from 'styled-components';
import ToDoList from './ToDoList';


const ToDoMainBlock = styled.div`
  width: 500px;
  height: 700px;
  position: relative;
  background: #fff9f4;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ToDoHeaderBlock = styled.header`
  width: 500px;
  height: 80px;
  position: relative;
  background: #cd6a1a;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
`;

function ToDoMain ({todos,setTodos}) {
    return(
        <ToDoMainBlock>
            <ToDoHeaderBlock><h1>ToDo-List</h1></ToDoHeaderBlock>        
            <ToDoList todos = {todos}/>       
            <ToDoInsert todos = {todos} setTodos ={setTodos}/>    
         </ToDoMainBlock>
    );
}

export default ToDoMain