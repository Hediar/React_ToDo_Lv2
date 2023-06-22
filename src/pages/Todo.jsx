import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

function Todo() {
  const params = useParams();
  const todos = useSelector(todos => todos.todos);
  const foundData = todos.find((item) => {
    return item.id === params.id;
  });
  return (
    <div>
      
    </div>
  )
}

export default Todo