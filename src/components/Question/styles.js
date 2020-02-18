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

export const Question = styled.div`
  padding: 24px;
  max-width: 600px;
  line-height: 1.2;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
`;

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
`;
