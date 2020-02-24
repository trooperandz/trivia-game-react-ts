import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 102px;
`;

export const Title = styled.p`
  margin: 32px;
  text-align: center;
  color: #6d7278;
  font-size: 32px;
`;

export const Form = styled.form.attrs(props => ({
  onSubmit: props.onSubmit,
}))`
  display: flex;
  flex-direction: column;
`;
