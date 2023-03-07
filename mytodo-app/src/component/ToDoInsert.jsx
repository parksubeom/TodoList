import React, { useState } from 'react';
import styled from 'styled-components';

const ToDoInputtBlock = styled.input`
  margin-top: 300px;
  position: absolute;
  justify-content: center;
  align-items: center;
  position: relative;
`;


function ToDoInsert({todos,setTodos}) {
    const [inputvalue, setInputvalue] = useState('')



    const insertChange = (e) => {
        setInputvalue
            (e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(todos)
       let copy = [...todos,{id:todos.length+1,text:inputvalue,checked:false}]
       setTodos(copy)
       
        setInputvalue('')
    };
    return (
        <div className="insert">
            <form onSubmit={(e) =>onSubmit(e)}>
                <ToDoInputtBlock
                    type="text"
                    value={inputvalue}
                    name="insert"
                    id="insert"
                    onChange={insertChange} ></ToDoInputtBlock>
                <button type="submit">등록</button>
            </form>

        </div>
    );
}

export default ToDoInsert