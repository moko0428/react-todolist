import React from "react";
import styled from "styled-components";

const todoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;
function todoHead() {
  const weekDay = ["일", "월", "화", "수", "목", "금", "토"];

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();
  const week = weekDay[date.getDay()];
  return (
    <todoHeadBlock>
      <h1>
        {year}년 {month}월 {day}일
      </h1>
      <div>{week}요일</div>
      <div>할 일 2개 남음</div>
    </todoHeadBlock>
  );
}

export default todoHead;
