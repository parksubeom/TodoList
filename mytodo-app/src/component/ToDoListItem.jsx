import React, { useState, useRef, useEffect, memo } from 'react';
import styled from 'styled-components';


const ToDodivBlock = styled.div`
 width: 100%;
`;


const ToDoliBlock = styled.li`
 width: 100%;
 list-style: none;
 padding: 10px 0;
 margin: 5px 0;
 background: rgba( 232, 201, 237, 0.35 );
 box-shadow: 0 0 8px 0 rgba(0, 0, 20, 0.3);
 &:hover{  
    background: rgba( 232, 201, 237, 0.8 );
    color : #f4e8ff
  }
`;

const ToDoSuccessBlock = styled.li`
 width: 100%;
 list-style: none;
 padding: 10px 0;
 margin: 5px 0;
 background: rgba( 150, 201, 237, 0.2 );
 box-shadow: 0 0 8px 0 rgba(0, 0, 20, 0.3);
 text-decoration: line-through;
 font-size: 16px;
`;

const ToDotextBlock = styled.span`
text-align: right;
font-size: 20px;
> a{
    text-decoration-line: none;
    color: #19191a;
    &:hover{  
    background: rgba( 232, 201, 237, 0.8 );
    color : #ffffff
    }
}  
`
const ToDoSuccessspan = styled.span`
text-align: right;
font-size: 18px;
> a{
    text-decoration-line: none;
    color: #69696c;
}  
`

const ToDodateBlock = styled.p`
text-align: right;
color: #19191a;
font-size: 12px;
margin-right: 10px;
`;

const ToDolateBlock = styled.p`
color: #ff0000;
text-align: right;
margin-right: 10px;
font-size: 12px;
animation: blink 1s infinite;
@keyframes blink {
    50% {
        color: #19191a;
    }
}
`;

const ToDoSuccsessBtn = styled.span`
width: 30px;
cursor: pointer;
font-size:15px;
margin-left:10px;
`;

const ToDoDeleteBtn = styled.span`
width: 30px;
margin-left:10px;
cursor: pointer;
font-size:15px;
`;



function ToDoListItem({ todo,todos,setTodos }) {

    const [success, setSuccess] = useState(false)

    const { id, text, date } = todo;
    const googleulr = `https://www.google.com/search?q=${text}&sxsrf=AJOqlzWmKMltXpsKhW5LXn5NeZhVRSGEUQ%3A1678406201764&source=hp&ei=OXIKZKm-LIP5hwPdlo2oAw&iflsig=AK50M_UAAAAAZAqASUnEuWXCverjO0fsiwQN9qHNa017&ved=0ahUKEwjpvsWrhtD9AhWD_GEKHV1LAzUQ4dUDCAo&uact=5&oq=%EB%A6%AC%EB%8D%95%EC%8A%A4&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgjECcyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoHCCMQ6gIQJzoRCC4QgAQQsQMQgwEQxwEQ0QM6CwgAEIAEELEDEIMBOgsILhCABBCxAxDUAjoKCC4QgAQQ1AIQCjoECAAQQzoECC4QQzoKCC4QxwEQ0QMQQzoQCAAQgAQQFBCHAhCxAxCDAToKCAAQgAQQFBCHAjoOCC4QgAQQsQMQgwEQ1AI6CwguEIAEELEDEIMBULICWKoUYOgUaApwAHgCgAF2iAHZCpIBBDEuMTKYAQCgAQGwAQo&sclient=gws-wiz`

    const now = new Date()
    const date1 = new Date(date);
    const date2 = new Date(now.setDate(now.getDate() + 3))


    const successTodo = () => {
        setSuccess(!success)
    }

    const deleteTode = () => {
       let copy = [...todos]
       let copy2 = copy.filter((el) => {
        return el.id !== todo.id
       })
       setTodos(copy2)
    }


    return (
        <ToDodivBlock>
            {!success ? <ToDoliBlock>
                <ToDotextBlock><a href={googleulr} target="_blank">{text}</a></ToDotextBlock>
                {date1 > date2 ? <ToDodateBlock>{date}까지</ToDodateBlock> : <ToDolateBlock>{date}까지</ToDolateBlock>}
                <ToDoSuccsessBtn onClick={successTodo}>✔️</ToDoSuccsessBtn>
                <ToDoDeleteBtn onClick={deleteTode}>🗑️</ToDoDeleteBtn>
            </ToDoliBlock>
                :
                <ToDoSuccessBlock onClick={successTodo}>
                    <ToDoSuccessspan><a href={googleulr} target="_blank">{text}</a></ToDoSuccessspan>
                    <ToDoSuccsessBtn onClick={successTodo}>재도전</ToDoSuccsessBtn>
                </ToDoSuccessBlock>}
        </ToDodivBlock>

    );
}

export default ToDoListItem