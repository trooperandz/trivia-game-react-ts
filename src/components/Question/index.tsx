import React, { useState, FC, SyntheticEvent } from 'react';

import { Radio } from 'components/Form/Radio';
import { Button } from 'components/Button';
import { SpinnerBalls } from 'components/Button/styles';
import * as S from './styles';

type Question = {
  viewportWidth: number;
  handleSubmit: Function;
  question: string;
  questionNumber: number;
  isProcessing: boolean;
  answerChoices: string[];
};

export const Question: FC<Question> = props => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined,
  );
  console.log({ selectedValue });
  const {
    viewportWidth,
    handleSubmit,
    question,
    questionNumber,
    isProcessing,
    answerChoices,
  } = props;

  const handleButtonClick = () => {
    handleSubmit(questionNumber);
  };

  const handleRadioClick = (e: SyntheticEvent<HTMLInputElement>) => {
    console.log('selected value: ', e.currentTarget.value);
    setSelectedValue(e.currentTarget.value);
  };

  return (
    <S.Container width={viewportWidth}>
      <S.Question dangerouslySetInnerHTML={{ __html: question }} />
      {answerChoices.map(answer => {
        return (
          <Radio
            label={answer}
            value={answer}
            checked={selectedValue === answer}
            onChange={handleRadioClick}
          />
        );
      })}
      <Button handleSubmit={handleButtonClick}>
        {isProcessing ? <SpinnerBalls /> : 'Proceed'}
      </Button>
    </S.Container>
  );
};
