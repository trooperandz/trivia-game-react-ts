import React, { FC } from 'react';
import { useId } from 'react-id-generator';

import { RadioType } from './types';
import * as S from './styles';

export const Radio: FC<RadioType> = props => {
  const { label, checked, value, onChange } = props;

  const [htmlId] = useId();

  return (
    <S.Wrapper>
      <S.Input
        type="radio"
        id={htmlId}
        value={value}
        checked={checked}
        onChange={onChange}
        data-testid="radio-input"
      />
      <S.Label htmlFor={htmlId} dangerouslySetInnerHTML={{ __html: label }} />
    </S.Wrapper>
  );
};
