import React, { FC, SyntheticEvent } from 'react';

import { InputType } from '../types';
import { ErrorText } from 'components/ErrorText';
import * as S from '../styles';

export const Input: FC<InputType> = props => {
  const { label, id, name, value, error, onChange, placeholder } = props;
  console.log({ value });
  return (
    <S.InputWrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </S.InputWrapper>
  );
};
