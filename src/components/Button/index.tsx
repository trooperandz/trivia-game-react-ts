import React, { FC } from 'react';

import { ButtonType } from './types';
import * as S from './styles';

export const Button: FC<ButtonType> = props => {
  const {
    onSubmit,
    type,
    secondary,
    style,
    disabled,
    dataTest,
    animated,
    children,
  } = props;

  return (
    <S.Button
      secondary={secondary}
      type={type}
      style={style}
      onClick={onSubmit}
      disabled={disabled}
      animated={animated}
      data-testid={dataTest}
    >
      {children}
    </S.Button>
  );
};
