import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { completeStateToto, deleteTodo } from '../redux/modules/todos';
import { Link } from 'react-router-dom';

// {todos, setTodos, listIsDone}
function TodoList({listIsDone}) {
  const todos = useSelector(todos => todos.todos);
  const dispatch = useDispatch();

  return (
    <div>
        <h2>{listIsDone ? '완료 목록' : '진행중'}</h2>
        {
            todos
            .filter((todo) => todo.isDone === listIsDone)
            .map((todo) =>{
              return (
                <div 
                  key={todo.id}
                  style={{
                  border: '1px solid black',
                  margin: '20px',
                  padding: '10px',
                }}>
                  <Link to={`/todo/${todo.id}`}>상세보기</Link>
                  <h3>{todo.title}, {todo.id}</h3>
                  <p>{todo.contents}</p>
                  <p>{todo.isDone.toString()}</p>
                  <button onClick={() => {

                    dispatch(completeStateToto(todo));

                  }}>{listIsDone ? '취소' : '완료'}</button>
                  <button onClick={() => {
                  dispatch(deleteTodo(todo));
                }}>삭제</button>
            </div>
            )
        })
        }
    </div>
  )
}

export default TodoList

/* <div>
            <h2>할일 목록</h2>
            {
            todos
            .filter((todo) => todo.isDone === false)
            .map((todo) =>{
              console.log(todo);
              return (
                <div 
                  key={todo.id}
                  style={{
                  border: '1px solid black',
                  margin: '20px',
                  padding: '10px',
                }}>
                  <h3>{todo.title}, {todo.id}</h3>
                  <p>{todo.contents}</p>
                  <p>{todo.isDone.toString()}</p>
                  <button onClick={() => {
                    const newTodos = todos.map(item => {
                      if (item.id === todo.id) {
                        return {
                          ...item, isDone: !item.isDone
                        }
                      } else {
                        return item;
                      }
                    });

                    setTodos(newTodos);
                  }}>완료</button>
                  <button onClick={() => {
                    const deletedTodos = todos.filter(item => {
                      return item.id !== todo.id;
                    });
                    setTodos(deletedTodos);
                  }}>삭제</button>
                </div>
              )
            })
          }
          </div> */