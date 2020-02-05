import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 48px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  min-width: 264px;
  min-height: 40px;
  border: 1px solid gray;
  color: #000;
  padding: 0 24px;
  border-radius: 6px;
  z-index: 1;
`;

export const QuestionNumber = styled.p.attrs(props => ({
  isActive: props.isActive,
}))`
  color: ${props => (props.isActive ? '#4aa' : 'gray')};
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
  font-size: ${props => (props.isActive ? '20px' : '18px')};
`;
