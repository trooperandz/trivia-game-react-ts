import React, { FC } from 'react';

import { ErrorTextType } from './types';
import * as S from './styles';

export const ErrorText: FC<ErrorTextType> = props => {
  return <S.ErrorText style={props.style}>{props.children}</S.ErrorText>;
};
