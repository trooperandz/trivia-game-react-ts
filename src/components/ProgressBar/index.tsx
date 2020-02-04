import React from 'react';

import * as S from './styles';

const ProgressBar = (props: any) => {
  const { step, questionData } = props;

  return (
    <S.Container>
      {questionData.map((item: any) => (
        <S.Status isActive={item.step === step + 1}>{item.step}</S.Status>
      ))}
    </S.Container>
  );
};

export default ProgressBar;
