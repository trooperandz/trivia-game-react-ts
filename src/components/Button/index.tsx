import React, { FC } from 'react';

import { ButtonType } from './types';
import * as S from './styles';

export const Button: FC<ButtonType> = props => {
  const { onClick, secondary, dataTest, animated, children, ...rest } = props;

  return (
    <S.Button
      secondary={secondary}
      onClick={onClick}
      animated={animated}
      data-testid={dataTest}
      {...rest}
    >
      {children}
    </S.Button>
  );
};
