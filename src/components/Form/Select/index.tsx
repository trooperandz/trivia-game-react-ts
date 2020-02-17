import React, { FC } from 'react';

import { SelectType, Option } from '../types';
import { ErrorText } from 'components/ErrorText';
import * as S from '../styles';

export const Select: FC<SelectType> = props => {
  const { label, id, name, options, error, onChange } = props;

  return (
    <S.InputWrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Select id={id} name={name} onChange={onChange}>
        <option value="">Select...</option>
        {options.map((option: Option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </S.Select>
      {error && <ErrorText>{error}</ErrorText>}
    </S.InputWrapper>
  );
};
