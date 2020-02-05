import React from 'react';

import * as S from './styles';

const QuestionIndicator = (props: any) => {
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

export default QuestionIndicator;
