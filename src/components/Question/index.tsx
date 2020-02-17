import React, { FC } from 'react';

import { Button } from 'components/Button';
import { SpinnerBalls } from 'components/Button/styles';
import * as S from './styles';

type Question = {
  viewportWidth: number;
  handleSubmit: Function;
  question: string;
  questionNumber: number;
  isProcessing: boolean;
};

export const Question: FC<Question> = props => {
  const {
    viewportWidth,
    handleSubmit,
    question,
    questionNumber,
    isProcessing,
  } = props;

  const handleButtonClick = () => {
    handleSubmit(questionNumber);
  };

  return (
    <S.Container width={viewportWidth}>
      <S.Question dangerouslySetInnerHTML={{ __html: question }} />
      <Button handleSubmit={handleButtonClick}>
        {isProcessing ? <SpinnerBalls /> : 'Proceed'}
      </Button>
    </S.Container>
  );
};
