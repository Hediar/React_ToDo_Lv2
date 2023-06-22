import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { addTodo } from '../redux/modules/todos';

import { styled } from 'styled-components';
import '../App.css';

function Input() {

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const InputButton = styled.button`
    background-color: teal;
    color: white;
    border: none;
    border-radius: 12px;
    height: 40px;
    width: 140px;
  `

  const AddForm = styled.form`
    align-items: center;
    display: flex;
    gap: 20px;
  `

  const AddInput = styled.input`
    border: none;
    border-radius: 12px;
    height: 40px;
    width: 250px;
    padding: 0 12px;
  `

  return (
    <>
          <AddForm onSubmit={(event) => {
            event.preventDefault();
            const newTodo = {
                id: uuid(),
                title: title,
                contents: contents,
                isDone: false,
              };

              dispatch(addTodo(newTodo));
              setTitle('');
              setContents('');
          }}>
            <label>제목</label>
            <AddInput 
              value={title} 
              onChange={(event) => {
              setTitle(event.target.value)}} />
            <label>내용</label>
            <AddInput
              value={contents}
              onChange={(event) => {
                setContents(event.target.value)}} />
            <InputButton>추가하기</InputButton>
          </AddForm>
    </>
     
  )
}


export default Input
