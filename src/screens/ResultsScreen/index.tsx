import React, { FC } from 'react';

import { Header } from 'components/Header';
import { TriviaResults } from 'components/TriviaResults';

export const ResultsScreen: FC = () => {
  return (
    <>
      <Header />
      <TriviaResults />
    </>
  );
};
