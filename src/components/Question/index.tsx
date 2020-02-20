import React, { FC, useState, SyntheticEvent } from 'react';

import { Radio } from 'components/Form/Radio';
import { Button } from 'components/Button';
import { QuestionType } from './types';
import * as S from './styles';

export const Question: FC<QuestionType> = props => {
  const {
    viewportWidth,
    onNavigationClick,
    question,
    questionNumber,
    answerChoices,
    onRadioChange,
    selectedAnswer,
    totalQuestions,
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
        <S.ButtonWrapper>
          <Button
            secondary
            onSubmit={() => onNavigationClick(questionNumber - 1)}
            style={buttonStyle}
            disabled={questionNumber === 0}
          >
            Back
          </Button>
          <Button
            secondary
            onSubmit={() => onNavigationClick(questionNumber + 1)}
            style={buttonStyle}
            disabled={questionNumber === totalQuestions}
          >
            Next
          </Button>
        </S.ButtonWrapper>
      </S.QuestionWrapper>
    </S.Container>
  );
};
