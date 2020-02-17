import React, { FC } from 'react';

import * as S from './styles';

type Button = {
  handleSubmit: Function;
  type?: string;
};

export const Button: FC<Button> = props => {
  const { handleSubmit, type, children } = props;

  return (
    <S.Button type={type} onClick={handleSubmit}>
      {children}
    </S.Button>
  );
};
