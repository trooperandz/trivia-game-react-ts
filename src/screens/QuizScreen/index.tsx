import React, { FC } from 'react';

import { Header } from 'components/Header';
import { QuestionSlider } from 'components/QuestionSlider';

export const QuizScreen: FC = () => {
  return (
    <>
      <Header />
      <QuestionSlider />
    </>
  );
};
