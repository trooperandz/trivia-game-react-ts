import React, { FC } from 'react';

import { RadioType } from './types';
import * as S from './styles';

export const Radio: FC<RadioType> = props => {
  const { label, checked, value, onChange } = props;
  console.log({ checked });
  return (
    <S.Wrapper>
      <S.Input
        type="radio"
        id={label}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <S.Label htmlFor={label}>{label}</S.Label>
    </S.Wrapper>
  );
};