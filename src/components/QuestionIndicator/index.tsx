import React, { FC } from 'react';

import { TriviaQuestion } from 'components/Question/types';
import { QuestionIndicatorType } from './types';
import * as S from './styles';

export const QuestionIndicator: FC<QuestionIndicatorType> = props => {
  const { questionNumber, triviaQuestions, handleProgressClick } = props;

  return (
    <S.Container>
      {triviaQuestions.map((triviaQuestion: TriviaQuestion, i: number) => (
        <S.QuestionNumber
          key={i}
          onClick={() => handleProgressClick(i)}
          isActive={i === questionNumber}
        >
          {i + 1}
        </S.QuestionNumber>
      ))}
    </S.Container>
  );
};
