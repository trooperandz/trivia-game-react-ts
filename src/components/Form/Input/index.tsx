import React, { FC, SyntheticEvent } from 'react';

import { InputType } from '../types';
import { ErrorText } from 'components/ErrorText';
import * as S from '../styles';

export const Input: FC<InputType> = props => {
  const { label, id, name, error, onChange, placeholder } = props;

  return (
    <S.InputWrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </S.InputWrapper>
  );
};
