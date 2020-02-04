import styled, { css, keyframes } from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #4aa;
  color: #333;
  border-radius: 24px;
  padding: 0 24px;
  min-width: 240px;
  min-height: 52px;
  outline: none;
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
  background-color: #000;
  width: 18px;
  height: 18px;
  transform-origin: center center;
  display: inline-block;
`;

export const SpinnerBalls = styled.div`
  ${spinnerStyles}
  position: relative;
  background-color: rgba(#000, 1);
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
