import React from 'react';

import * as S from './styles';

const Button = (props: any) => {
  const { handleSubmit, step, isProcessing } = props;

  return (
    <S.Button onClick={() => handleSubmit(step)}>
      {isProcessing ? <S.SpinnerBalls /> : 'Proceed'}
    </S.Button>
  );
};

export default Button;
