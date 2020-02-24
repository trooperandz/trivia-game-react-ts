import styled, { css } from 'styled-components';

export const Form = styled.form.attrs(props => ({
  onSubmit: props.onSubmit,
}))`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 8px;
`;

export const Label = styled.label`
  font-size: 16px;
  color: #333;
`;

const inputStyles = css`
  width: 100%;
  max-width: 400px;
  height: 52px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: #fff;
  margin: 8px 0 16px;
  font-size: 18px;
  color: gray;

  &:placeholder {
    color: gray;
  }
`;

export const Select = styled.select.attrs(props => ({
  onChange: props.onChange,
}))`
  ${inputStyles}
`;

// TODO: browser applying different styles to select and this
export const Input = styled.input.attrs(props => ({
  onChange: props.onChange,
}))`
  ${inputStyles}
  height: 48px;
  border-radius: 4px;
`;
