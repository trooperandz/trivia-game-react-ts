import styled, { css, keyframes } from 'styled-components';

const moveInBottom = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, 2rem);
  }

  100% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
`;

const animation = css`
  ${moveInBottom} 0.3s ease-out .4s
`;

export const Button = styled.button.attrs(props => ({
  onClick: props.onClick,
  type: props.type,
  secondary: props.secondary,
  animated: props.animated,
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #4aa;
  color: #333;
  border-radius: 24px;
  margin: 16px 0;
  padding: 0 24px;
  background-color: ${props => (props.secondary ? '#fff' : '#4aa')};
  color: ${props => (props.secondary ? '#4aa' : '#fff')};
  font-size: 18px;
  width: 100%;
  max-width: 250px;
  min-height: 52px;
  outline: none;
  align-self: center;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: ${props => (props.animated ? animation : 'none')};
  animation-fill-mode: ${props => (props.animated ? 'backwards' : 'none')};

  &:hover {
    background-color: ${props => (props.secondary ? '#fff' : '#3d9999')};
  }

  &:disabled {
    border: 1px solid #ccc;
    background-color: #fff;
    color: #ccc;
    pointer-events: none;

    &:hover {
      border: 1px solid #ccc;
    }
  }
`;

const spScaleAlpha = keyframes`
  0% { opacity: 1; }
	33% {  opacity: 0.25; }
	66% { opacity: 0.25; }
	100% {  opacity: 1; }
`;

const spScaleAlphaBefore = keyframes`
  0% { opacity: 0.25; }
	33% { opacity: 1; }
	66% { opacity: 0.25; }
`;

const spScaleAlphaAfter = keyframes`
  33% { opacity: 0.25; }
	66% { opacity: 1; }
	100% { opacity: 0.25; }
`;

const spinnerStyles = css`
  border-radius: 50%;
  background-color: #fff;
  width: 18px;
  height: 18px;
  transform-origin: center center;
  display: inline-block;
`;

export const SpinnerBalls = styled.div`
  ${spinnerStyles}
  position: relative;
  background-color: rgba(#fff, 1);
  opacity: 1;
  animation: ${spScaleAlpha} 1s infinite linear;

  &:before,
  &:after {
    ${spinnerStyles}
    content: '';
    position: relative;
    opacity: 0.25;
  }

  &:before {
    left: 30px;
    top: 0px;
    animation: ${spScaleAlphaBefore} 1s infinite linear;
  }

  &:after {
    left: -30px;
    top: -20px;
    animation: ${spScaleAlphaAfter} 1s infinite linear;
  }
`;
