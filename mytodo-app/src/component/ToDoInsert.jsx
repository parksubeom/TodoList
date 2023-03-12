import React, { useState, useRef, useEffect, memo } from 'react';
import styled from 'styled-components';

const ToDoInputtBlock = styled.input`
  width: 70%;
  height: 50px;
  border: 2px solid black;
`;

const ToDodateBlock = styled.input`
  bottom: 0;
  width: 35%;
  height: 50px;
  border: 2px solid black;
`;

const ToDoBtn = styled.button`
    cursor: pointer;
    width: 20%;
    height: 50px;
    border: 2px solid black;
    
   
`
const ToDoInputForm = styled.form`
    position: absolute;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(15px);
    z-index: 9999;
    animation: fadeIn 0.5s forwards;
    @keyframes fadeIn {

100% {
    opacity: 100;
}
}
`

const ToDoInputbox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 640px;
    position: relative;
    background-color: #fbeddc;
    border-radius: 30px;
`



function ToDoInsert({ todos, setTodos, setModal }) {
    const [inputvalue, setInputvalue] = useState('')
    const [limittime, setLimetTime] = useState('')

    const insertChange = (e) => {
        setInputvalue
            (e.target.value);
    };

    const limitdate = (e) => {
        setLimetTime
            (e.target.value);
    };

    const addTodo = (e) => {
        e.preventDefault();
        let copy = [...todos, { id: todos[todos.length-1].id + 1, text: inputvalue, checked: false, date: `${limittime}` }]
        setTodos(copy)
        setInputvalue('')
        setModal(false)
    };

    const closeModal = () => {
      setModal(false)
    };
    



    return (
        <div className="insert">
            <ToDoInputForm onSubmit={(e) =>addTodo(e)}>
                <ToDoInputbox>
                    <ToDoInputtBlock
                        type="text"
                        value={inputvalue}
                        name="insert"
                        id="insert"
                        onChange={insertChange} >
                    </ToDoInputtBlock>
                    <ToDodateBlock
                        type="date"
                        onChange={limitdate}
                    ></ToDodateBlock>
                    <ToDoBtn type="submit">등록</ToDoBtn>
                    <ToDoBtn type="button" onClick={closeModal}>x</ToDoBtn>
                    
                </ToDoInputbox>
                

            </ToDoInputForm>

        </div>
    );
}

export default ToDoInsert