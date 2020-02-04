import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100hw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
`;

export const SliderContainer = styled.div.attrs(props => ({
  horizontalPosition: props.horizontalPosition,
}))`
  display: flex;
  align-self: flex-start;
  position: relative;
  height: 100%;
  min-height: 600px;
  margin: 32px 0;
  transition: all 0.45s ease-in-out;
  transform: translateX(${props => props.horizontalPosition}px);
`;
