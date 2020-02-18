import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 8px;
`;

export const Label = styled.label`
  position: relative;
  height: 24px;
  font-size: 18px;
  color: gray;

  &:before {
    content: '';
    position: absolute;
    display: inline-block;
    top: -4px;
    left: -42px;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    border: 1px solid #767676;
    background-color: #fff;
  }
`;

export const Input = styled.input.attrs(props => ({
  onChange: props.onChange,
}))`
  position: absolute;
  left: -9999999px;

  &:checked + label:before {
    border: 1px solid #4aa;
  }

  &:focus + label:before {
    border: 1px solid rgba(0, 0, 0, 30%);
    box-shadow: 0 0 0 2px rgba(74, 170, 170, 50%);
  }

  &:checked + label:after {
    content: '';
    position: absolute;
    display: inline-block;
    left: -36px;
    top: 2px;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background-color: #4aa;
  }
`;
