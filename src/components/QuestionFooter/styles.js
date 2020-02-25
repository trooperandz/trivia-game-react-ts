import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 72px;
  border-top: 1px solid #ccc;
  background-color: #fff;
  z-index: 1;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 24px;
`;

export const QuestionCounter = styled.div`
  color: gray;
  font-size: 24px;
`;
