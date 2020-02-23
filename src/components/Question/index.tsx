import React, { FC, useState, SyntheticEvent } from 'react';

import { Radio } from 'components/Form/Radio';
import { QuestionType } from './types';
import * as S from './styles';

export const Question: FC<QuestionType> = props => {
  const {
    viewportWidth,
    question,
    answerChoices,
    onRadioChange,
    selectedAnswer,
  } = props;

  const buttonStyle = { maxWidth: '116px' };

  return (
    <S.Container width={viewportWidth}>
      <S.QuestionWrapper>
        <S.Question dangerouslySetInnerHTML={{ __html: question }} />
        <S.RadioWrapper>
          {answerChoices.map(answer => {
            return (
              <Radio
                label={answer}
                value={answer}
                checked={selectedAnswer === answer}
                onChange={onRadioChange}
              />
            );
          })}
        </S.RadioWrapper>
      </S.QuestionWrapper>
    </S.Container>
  );
};
