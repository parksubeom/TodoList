import React, {  useState, useRef, useEffect, memo  } from 'react';
import styled from 'styled-components';

const ToDoInputtBlock = styled.input`
  width: 70%;
  height: 30px;
  border: 2px solid black;
`;
const ToDoBtn = styled.button`
    width: 20%;
    height: 30px;
    border: 2px solid black;
   
`
const ToDoInputForm = styled.form`
width: 100%;
justify-content: center;
align-items: center;
position: absolute;
bottom: 100px;

`


function ToDoInsert({todos,setTodos}) {
    const [inputvalue, setInputvalue] = useState('')
    const [limittime, setLimetTime] = useState('')
    
    const insertChange = (e) => {
        setInputvalue
            (e.target.value);
    };

    const limitdate = (e) => {
        setLimetTime
            (e.target.value);
            console.log(limittime)
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(todos)
       let copy = [...todos,{id:todos.length+1,text:inputvalue,checked:false, date: `${limittime}`}]
       setTodos(copy)
        setInputvalue('')
    };

 
    return (
        <div className="insert">
            <ToDoInputForm onSubmit={(e) =>onSubmit(e)}>
                <ToDoInputtBlock
                    type="text"
                    value={inputvalue}
                    name="insert"
                    id="insert"
                    onChange={insertChange} ></ToDoInputtBlock>
                <ToDoBtn type="submit">등록</ToDoBtn>
                <ToDoInputtBlock
                type="date"
                onChange={limitdate}
                ></ToDoInputtBlock>
            </ToDoInputForm>

        </div>
    );
}

export default ToDoInsert