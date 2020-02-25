import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 206px;
  min-height: 40px;
  color: #000;
  padding: 0 24px;
  border-radius: 6px;
`;

export const QuestionNumber = styled.p.attrs(props => ({
  isActive: props.isActive,
  isAnswered: props.isAnswered,
}))`
  color: ${props => (props.isActive ? '#4aa' : 'gray')};
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
  font-size: ${props => (props.isActive ? '20px' : '18px')};
  background-color: ${props =>
    props.isAnswered ? 'rgba(0,0,0, 0.1)' : '#fff'};
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  border-radius: 3px;
  justify-content: center;
  cursor: pointer;

  &:first-child {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    width: 42px;
  }

  &:last-child {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    width: 42px;
  }
`;
