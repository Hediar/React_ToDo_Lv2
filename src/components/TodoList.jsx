import React from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { completeStateToto, deleteTodo } from '../redux/modules/todos';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

function TodoList({listIsDone}) {
  const todos = useSelector(todos => todos.todos);
  const dispatch = useDispatch();

  const TodoBox = styled.div`
    width: 270px;
    padding: 12px 24px 24px;
    align-items: center;
    justify-content: center;
    border: 4px solid teal;
    border-radius: 10px;
  `

  const ListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  `;

  const BoxButton = styled.button`
    background-color: white;
    border: 2px solid ${(props) => props.borderColor};
    border-radius: 5px;
    height: 40px;
    width: 50%;
  `;
  return (
    <div>
        <h2>{listIsDone ? '완료 목록' : '진행중'}</h2>
        <ListBox>
        {
            todos
            .filter((todo) => todo.isDone === listIsDone)
            .map((todo) =>{
              return (
                <TodoBox 
                  key={todo.id}>
                  <Link to={`/todo/${todo.id}`}>상세보기</Link>
                  <h2>{todo.title}</h2>
                  <p>{todo.contents}</p>
       
                  <div className='buttons'>

                    <BoxButton borderColor="green"
                    onClick={() => {
                      dispatch(completeStateToto(todo));
                    }}>
                      {listIsDone ? '취소' : '완료'}
                      </BoxButton>
                    <BoxButton borderColor="red"
                     onClick={() => {
                    dispatch(deleteTodo(todo));
                  }}>삭제</BoxButton>

                  </div>
            </TodoBox>
            )
        })
        }
        </ListBox>
    </div>
  )
}

export default TodoList
