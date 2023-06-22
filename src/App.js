import styled from 'styled-components';
import Input from './components/Input';
import TodoList from './components/TodoList';

const MainBox = styled.div`
    min-width: 800px;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  `;

const TitleBox = styled.header`
    display: flex;
    height: 50px;
    width: 70%;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
  `;

const InputBox = styled.div`
    background-color: gainsboro;
    border-radius: 12px;
    justify-content: space-between;
    margin: 0 auto;
    padding: 30px;
    align-items: center;
    display: flex;
    gap: 20px;
  `;


function App() {

  return (
    <MainBox>
      <TitleBox>
        <div>My Todo List</div>
        <div>React</div>
      </TitleBox>

      <InputBox>
          <Input />
      </InputBox>

      <main>

          <TodoList listIsDone={false}/>
          <TodoList listIsDone={true}/>

      </main>

      <footer
        style={{
          padding: '10px',
      }}
      >
      </footer>
    </MainBox>
  );
}

export default App;
