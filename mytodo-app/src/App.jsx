import './App.css';
import {React, useState,useEffect} from 'react';
import ToDoMain from './component/ToDoMain';
import ToDoInsert from './component/ToDoInsert';
import ToDoList from './component/ToDoList';
import ToDoListItem from './component/ToDoListItem';


function App() {
  let today = `${new Date().getFullYear()}년 ${new Date().getMonth() + 1}월 ${new Date().getDate()}일 `;
  const [todos, setTodos] = useState(
    [  
      { id: 1,
          text: '리액트 기초 알아보기',
          checked: true,
          date: `${today}`
      },
      { id: 2,
          text: '스타일드 컴포넌트 사용하기',
          checked: true,
          date: `${today}`
      },
      { id: 3,
          text: '리덕스 학습하기',
          checked: true,
          date: `${today}`
      }
  ]
  )

  useEffect(() => {window.localStorage.setItem('todo', JSON.stringify(todos))}) 
  const localtodo = JSON.parse(localStorage.getItem("todo"));
  useEffect(() => {
    if (localtodo == null) 
        setTodos([])
     else 
        setTodos(localtodo);  
}, [])


  return (
    <div className="App">
      <ToDoMain todos={todos} setTodos = {setTodos}/>
    </div>
  );
}

export default App;
