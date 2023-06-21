
import { useState } from 'react';
import './App.css';
import uuid from 'react-uuid';
import Input from './components/Input';
import TodoList from './components/TodoList';

function App() {
  // const [title, setTitle] = useState('');
  // const [contents, setContents] = useState('');

  const [todos, setTodos] = useState([
    {
      id: uuid(),
      title: '제목1',
      contents: '내용1',
      isDone: false,
    },
    {
      id: uuid(),
      title: '제목2',
      contents: '내용2',
      isDone: true,
    },
    {
      id: uuid(),
      title: '제목3',
      contents: '내용3',
      isDone: false,
    },
    {
      id: uuid(),
      title: '제목4',
      contents: '내용4',
      isDone: false,
    },
  ]);


  return (
    <div>
      <header
      style={{
        backgroundColor: '#f7e9c3',
        padding: '10px',
      }}
      >
        헤더
      </header>

      <main
        style={{
        backgroundColor: '#d9f7c3',
        padding: '10px',
      }}
      >
        <Input todos={todos} setTodos={setTodos}></Input>
        {/* <div>
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
        </div> */}
        <div>
          <h1>리스트 영역</h1>
          <TodoList todos={todos} setTodos={setTodos} listIsDone={false}/>
          {/* <div>
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
          </div> */}
          <TodoList todos={todos} setTodos={setTodos} listIsDone={true}/>
          {/* <div>
            <h2>완료 목록</h2>
            {
            todos
            .filter((todo) => todo.isDone === true)
            .map((todo) =>{
              console.log(todo);
              return (
                <div style={{
                  border: '1px solid black',
                  margin: '20px',
                  padding: '10px',
                }}>
                  <h3>{todo.title}, {todo.id}</h3>
                  <p>{todo.contents}</p>
                  <p>{todo.isDone.toString()}</p>
                  <button>완료</button>
                  <button
                    onClick={() => {
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
                    }}
                  >취소</button>
                </div>
              )
            })
          }
          </div> */}
          
        </div>
      </main>

      <footer
        style={{
          backgroundColor: '#c3e9f7',
          padding: '10px',
      }}
      >
        푸터
      </footer>
    </div>
  );
}

export default App;
