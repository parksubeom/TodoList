import './App.css';
import { React, useState, useEffect } from 'react';
import ToDoMain from './component/ToDoMain';
import ToDoInsert from './component/ToDoInsert';
import ToDoList from './component/ToDoList';
import ToDoListItem from './component/ToDoListItem';
import styled from 'styled-components';



const Headerdiv = styled.header`
  width: 100%;
  height: 10%;
  position: absolute;
  background: rgba( 232, 201, 237, 0.35 );
  box-shadow: 0 0 8px 0 rgba(0, 0, 20, 0.3);
  top: 0;
  left: 0;
  font-size:70px;
  text-align: center;
  justify-content: center;
  
`

function App() {
  let today = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()} `;
  const [modal, setModal] = useState(false)
  const [todos, setTodos] = useState(
    [
      {
        id: 1,
        text: '리액트 기초 알아보기',
        checked: true,
        date: `${today}`
      },
      {
        id: 2,
        text: '스타일드 컴포넌트 사용하기',
        checked: true,
        date: `${today}`
      },
      {
        id: 3,
        text: '리덕스 학습하기',
        checked: true,
        date: `${today}`
      }
    ]
  )
  useEffect(() => { window.localStorage.setItem('todo', JSON.stringify(todos)) })
  const localtodo = JSON.parse(localStorage.getItem("todo"));
  useEffect(() => {
    if (localtodo == null)
      setTodos([])
    else
      setTodos(localtodo);
  }, [])


  return (
    <div className="App">
      <Headerdiv>할 것 목록(ToDo-List)</Headerdiv>
      <ToDoMain todos={todos} setTodos={setTodos} modal={modal} setModal={setModal} />
      {modal ? <ToDoInsert todos={todos} setModal={setModal} setTodos={setTodos} /> : null}

    </div>
  );
}

export default App;
