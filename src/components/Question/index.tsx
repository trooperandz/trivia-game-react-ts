import React from 'react';

import Button from 'components/Button';
import * as S from './styles';

const Question = (props: any) => {
  const {
    viewportWidth,
    handleSubmit,
    question,
    questionNumber,
    isProcessing,
  } = props;

  return (
    <S.Container width={viewportWidth}>
      <S.Question>{question}</S.Question>
      <Button
        questionNumber={questionNumber}
        isProcessing={isProcessing}
        handleSubmit={handleSubmit}
      >
        Submit
      </Button>
    </S.Container>
  );
};

export default Question;
