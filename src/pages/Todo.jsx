import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import "../App.css";

const DetailMain = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const DetailHeader = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
  padding: 0 24px;
  justify-content: space-between;
  align-items: center;
`;

const DetailBox = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PrevButton = styled.button`
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 120px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  cursor: pointer;
`;

function Todo() {
  const params = useParams();
  const todos = useSelector((todos) => todos.todos);
  const foundData = todos.find((item) => item.id === params.id);
  const navigate = useNavigate();

  return (
    <DetailMain>
      <DetailBox>
        <div>
          <DetailHeader>
            ID: {params.id}
            <PrevButton onClick={() => navigate("/")}>이전으로</PrevButton>
          </DetailHeader>

          <h1 className="detail-header">{foundData.title}</h1>
          <main className="detail-main">{foundData.contents}</main>
        </div>
      </DetailBox>
    </DetailMain>
  );
}

export default Todo;
