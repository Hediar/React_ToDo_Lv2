import React from 'react'

function TodoList({todos, setTodos, listIsDone}) {
  return (
    <div>
            <h2>{listIsDone ? '완료 목록' : '할 일 목록'}</h2>
            {
            todos
            .filter((todo) => todo.isDone === listIsDone)
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
          </div>
  )
}

export default TodoList