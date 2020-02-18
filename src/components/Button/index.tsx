import React, { FC } from 'react';

import { ButtonType } from './types';
import * as S from './styles';

export const Button: FC<ButtonType> = props => {
  const { onSubmit, type, styleType, style, children } = props;

  return (
    <S.Button
      styleType={styleType}
      type={type}
      style={style}
      onClick={onSubmit}
    >
      {children}
    </S.Button>
  );
};
