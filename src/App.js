
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
        padding: '10px',
      }}
      >
        헤더
      </header>

      <main
        style={{
        padding: '10px',
      }}
      >
        <Input todos={todos} setTodos={setTodos}></Input>
        
        <div>
          <h1>리스트 영역</h1>
          <TodoList todos={todos} setTodos={setTodos} listIsDone={false}/>
          <TodoList todos={todos} setTodos={setTodos} listIsDone={true}/>
          
        </div>
      </main>

      <footer
        style={{
          padding: '10px',
      }}
      >
        푸터
      </footer>
    </div>
  );
}

export default App;
