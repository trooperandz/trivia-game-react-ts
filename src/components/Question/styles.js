import styled from 'styled-components';

export const Container = styled.div.attrs(props => ({
  width: props.width,
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  /* width: 100vw; */
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
