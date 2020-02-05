import React, { FC } from 'react';

import { GlobalStyles } from 'globalStyles';
import { Select } from 'components/Select';
import * as S from './styles';

const App: FC = () => {
  return (
    <S.Wrapper>
      <GlobalStyles />
      <S.Description>State your terms!</S.Description>
      <form>
        <Select />
        <Select />
        <Select />
        <Select />
      </form>
    </S.Wrapper>
  );
};

export default App;
