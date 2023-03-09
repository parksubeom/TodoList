import React, { useState, useRef, useEffect, memo } from 'react';
import ToDoInsert from './ToDoInsert';
import styled from 'styled-components';
import ToDoList from './ToDoList';


const ToDoMainBlock = styled.div`
  width: 500px;
  height: 700px;
  position: relative;
  border-radius: 16px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  z-index: 2;
  background: rgba( 232, 191, 237, 0.15 );
  box-shadow: rgba(240, 46, 170, 0.3) 5px 5px, rgba(240, 46, 170, 0.2) 10px 10px, rgba(240, 46, 170, 0.1) 15px 15px, rgba(240, 46, 170, 0.06) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
  backdrop-filter: blur( 0px );
  -webkit-backdrop-filter: blur( 0px );
  border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

const ToDoHeaderBlock = styled.header`
  width: 500px;
  height: 130px;
  position: relative;
  background: rgba( 252, 191, 237, 0.45 );
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  h1 {
    color: #fff6e6;
    text-align: left;
    margin-left: 10px;
    margin:20px;
  
  }
  h3 {
    color: #fff6e6;
    text-align: left;
    margin-left: 10px;
  }
  h4 {
    color: #fff6e6;
    text-align: left;
    margin-left: 10px;
  }
`;
 
let today = `${new Date().getFullYear()}년 ${new Date().getMonth() + 1}월 ${new Date().getDate()}일 `; 
let week = new Array('일','월','화','수','목','금','토')[new Date().getDay()]

function ToDoMain({ todos, setTodos }) {
  return (
    <ToDoMainBlock>
      <ToDoInsert todos={todos} setTodos={setTodos} />
      <ToDoHeaderBlock>
        <h1>{today }</h1>
        <h3>{week}요일</h3>
        <h4>남은 할 일 {todos.length}개</h4>
      </ToDoHeaderBlock>
      <ToDoList todos={todos} />
    </ToDoMainBlock>
  );
}

export default ToDoMain