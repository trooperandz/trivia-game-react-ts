import React, { FC } from 'react';

import { Header } from 'components/Header';
import { Form } from 'components/Form';
import * as S from './styles';

export const HomeScreen: FC = () => {
  return (
    <>
      <Header />
      <S.Wrapper>
        <S.Title>Welcome to the Trivia Challenge!</S.Title>
        <Form />
      </S.Wrapper>
    </>
  );
};
