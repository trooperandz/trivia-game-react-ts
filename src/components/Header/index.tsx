import React, { FC } from 'react';

import * as S from './styles';

export const Header: FC = () => (
  <S.Wrapper>
    <S.Container>
      <S.Title>Trivia</S.Title>
      <S.Avatar />
    </S.Container>
  </S.Wrapper>
);
