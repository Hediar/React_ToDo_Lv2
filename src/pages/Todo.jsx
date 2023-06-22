import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

function Todo() {
  const params = useParams();
  const todos = useSelector(todos => todos.todos);
  const foundData = todos.find((item) => item.id === params.id);
  const navigate = useNavigate();

  console.log(foundData);
  return (
    <div>
      <div>
        <div>
          <div>
            ID: {params.id}
          </div>
          <button
          onClick={() => navigate('/')}
          >이전으로</button>
        </div>

        <div>
          <h1>{foundData.title}</h1>
          <main>{foundData.contents}</main>
        </div>
      </div>
    </div>
  )
}

export default Todo