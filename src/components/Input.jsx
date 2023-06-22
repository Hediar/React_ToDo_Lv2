import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { addTodo } from '../redux/modules/todos';

function Input() {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
  return (
    <div>
          <form onSubmit={(event) => {
            event.preventDefault();
            const newTodo = {
                id: uuid(),
                title: title,
                contents: contents,
                isDone: false,
              };
            
              // setTodos([...todos, newTodo]);
              dispatch(addTodo(newTodo));
              setTitle('');
              setContents('');
          }}>
            <input 
              value={title} 
              onChange={(event) => {
              setTitle(event.target.value)}} />
            <input
              value={contents}
              onChange={(event) => {
                setContents(event.target.value)}} />
            <button>입력</button>
          </form>
    </div>
     
  )
}


export default Input
/* <div>
          <form onSubmit={(event) => {
            event.preventDefault();
            alert(title);
            setNewTodo();
          }}>
            <input 
              value={title} 
              onChange={(event) => {
              setTitle(event.target.value)}} />
            <input
              value={contents}
              onChange={(event) => {
                setContents(event.target.value)}} />
            <button>입력</button>
          </form>
        </div> */