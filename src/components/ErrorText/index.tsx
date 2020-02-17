import React, { FC } from 'react';

import * as S from './styles';

export const ErrorText: FC = props => {
  return <S.ErrorText>{props.children}</S.ErrorText>;
};
