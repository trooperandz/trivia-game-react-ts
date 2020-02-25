import styled from 'styled-components';

export const Container = styled.div.attrs(props => ({
  width: props.width,
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: ${props => props.width}px;
  color: #4aa;
  font-size: 40px;
  margin: 0;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Question = styled.h1`
  padding: 24px;
  max-width: 600px;
  line-height: 1.2;
  font-size: 32px;
  line-height: 1.3;

  @media screen and (min-width: 380px) {
    font-size: 38px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;
  width: 100%;
  max-width: 600px;
`;

export const RadioWrapper = styled.div`
  position: relative;
  left: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
  max-width: 300px;

  @media screen and (min-width: 380px) {
    left: 88px;
    font-size: 38px;
    max-width: none;
  }
`;
