import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 28px;
  color: gray;
`;

export const Question = styled.h2`
  font-size: 25px;
  color: gray;
`;

export const Number = styled.h2`
  font-size: 25px;
  color: gray;
`;

export const UserAnswer = styled.p.attrs(props => ({
  isCorrectAnswer: props.isCorrectAnswer,
}))`
  font-size: 25px;
  color: ${props => (props.isCorrectAnswer ? '#4aa' : 'red')};
`;

export const CorrectAnswerTitle = styled.h3`
  font-size: 25px;
  color: #4aa;
  border-bottom: 1px solid #ccc;
`;

export const CorrectAnswer = styled.p`
  font-size: 25px;
  color: gray;
`;

export const Count = styled.p`
  font-size: 20px;
  color: gray;
`;

export const ResultContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 32px;
`;
