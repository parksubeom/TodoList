import React, { useState, useRef, useEffect, memo } from 'react';
import ToDoInsert from './ToDoInsert';
import styled from 'styled-components';
import ToDoList from './ToDoList';


const ToDoMainBlock = styled.div`
  width: 500px;
  min-height: 700px;
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
  background: rgba( 252, 201, 237, 0.7 );
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  h1 {
    color: #19191c;
    text-align: left;
    margin-left: 10px;
    margin-top:20px;
  
  }
  h3 {
    color: #4e4e51;
    text-align: left;
    margin-left: 10px;
    margin-bottom: 20px;
  }
  h4 {
    color: #1c1919;
    text-align: left;
    margin-left: 10px;
  }
`;
 
let today = `${new Date().getFullYear()}년 ${new Date().getMonth() + 1}월 ${new Date().getDate()}일 `; 
let week = new Array('일','월','화','수','목','금','토')[new Date().getDay()]

function ToDoMain({ todos, setTodos,modal, setModal }) {

  return (
    <ToDoMainBlock>
      <ToDoHeaderBlock>
        <h1>{today }</h1>
        <h3>{week}요일</h3>
        <h4>남은 할 일 {todos.length}개</h4>
      </ToDoHeaderBlock>
      <ToDoList todos={todos}  setTodos ={setTodos} setModal={setModal} modal={modal} />
    </ToDoMainBlock>
  );
}

export default ToDoMain