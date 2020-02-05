import React from 'react';

import * as S from './styles';

const Button = (props: any) => {
  const { handleSubmit, questionNumber, isProcessing } = props;

  return (
    <S.Button onClick={() => handleSubmit(questionNumber)}>
      {isProcessing ? <S.SpinnerBalls /> : 'Proceed'}
    </S.Button>
  );
};

export default Button;
