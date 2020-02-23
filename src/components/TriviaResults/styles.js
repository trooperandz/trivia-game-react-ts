import styled, { css } from 'styled-components';

import iconCheck from 'images/icon-check-24.svg';
import iconX from 'images/icon-x-24.svg';

const iconStyle = css`
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 102px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  margin: 16px;
  font-size: 28px;
  color: gray;
`;

export const IconCheck = styled.div`
  ${iconStyle}
  background-image: url(${iconCheck});
`;

export const IconX = styled.div`
  ${iconStyle}
  background-image: url(${iconX});
`;

export const Question = styled.h2`
  margin-left: 12px;
  font-size: 25px;
  color: #333;
`;

export const Number = styled.h2`
  font-size: 25px;
  color: gray;
`;

export const UserAnswerTitle = styled.p.attrs(props => ({
  isCorrectAnswer: props.isCorrectAnswer,
}))`
  font-size: 25px;
  color: ${props => (props.isCorrectAnswer ? '#4aa' : '#BA2323')};
`;

export const CorrectAnswerTitle = styled.h3`
  font-size: 25px;
  color: #4aa;
`;

export const QuestionWrapper = styled.div`
  display: flex;
  margin: 16px 0;
`;

export const CorrectAnswer = styled.p`
  margin-left: 12px;
  font-size: 25px;
  color: gray;
`;

export const Count = styled.p`
  font-size: 20px;
  color: gray;
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 32px;
  padding: 24px;
`;

export const Link = styled.p`
  margin: 16px;
  font-size: 18px;
  color: gray;
`;

export const EmptyStateTitle = styled.h1`
  font-size: 32px;
  color: #4aa;
`;
