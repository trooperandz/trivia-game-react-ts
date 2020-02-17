import React, { FC } from 'react';

import * as S from './styles';

type QuestionIndicator = {
  questionNumber: number;
  questionData: any;
  handleProgressClick: Function;
};

export const QuestionIndicator: FC<QuestionIndicator> = props => {
  const { questionNumber, questionData, handleProgressClick } = props;

  return (
    <S.Container>
      {questionData.map((item: any) => (
        <S.QuestionNumber
          key={item.questionNumber}
          onClick={() => handleProgressClick(item.questionNumber - 1)}
          isActive={item.questionNumber === questionNumber + 1}
        >
          {item.questionNumber}
        </S.QuestionNumber>
      ))}
    </S.Container>
  );
};
