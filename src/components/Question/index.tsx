import React, { FC, useState, SyntheticEvent } from 'react';

import { Radio } from 'components/Form/Radio';
import { Button } from 'components/Button';
import { QuestionType } from './types';
import * as S from './styles';

export const Question: FC<QuestionType> = props => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined,
  );

  const {
    viewportWidth,
    onClick,
    question,
    questionNumber,
    answerChoices,
  } = props;

  const buttonStyle = { maxWidth: '116px' };

  const handleRadioChange = (e: SyntheticEvent<HTMLInputElement>) => {
    setSelectedValue(e.currentTarget.value);
  };

  return (
    <S.Container width={viewportWidth}>
      <S.Question dangerouslySetInnerHTML={{ __html: question }} />
      <S.RadioWrapper>
        {answerChoices.map(answer => {
          return (
            <Radio
              label={answer}
              value={answer}
              checked={selectedValue === answer}
              onChange={handleRadioChange}
            />
          );
        })}
      </S.RadioWrapper>
      <S.ButtonWrapper>
        <Button
          styleType="secondary"
          onSubmit={() => onClick(questionNumber - 1)}
          style={buttonStyle}
        >
          Back
        </Button>
        <Button
          styleType="secondary"
          onSubmit={() => onClick(questionNumber + 1)}
          style={buttonStyle}
        >
          Next
        </Button>
      </S.ButtonWrapper>
    </S.Container>
  );
};
