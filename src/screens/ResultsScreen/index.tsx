import React, { FC } from 'react';

import { Header } from 'components/Header';
import { QuizResults } from 'components/QuizResults';

export const ResultsScreen: FC = () => {
  return (
    <>
      <Header />
      <QuizResults />
    </>
  );
};
