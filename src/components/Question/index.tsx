import React from 'react';

import Button from 'components/Button';
import * as S from './styles';

const Question = (props: any) => {
  const { viewportWidth, handleSubmit, question, step, isProcessing } = props;

  return (
    <S.Container width={viewportWidth}>
      <p>{question}</p>
      <Button
        step={step}
        isProcessing={isProcessing}
        handleSubmit={handleSubmit}
      >
        Submit
      </Button>
    </S.Container>
  );
};

export default Question;
