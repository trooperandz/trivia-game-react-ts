import React, { FC } from 'react';

import { Button } from 'components/Button';
import { QuestionIndicator } from 'components/QuestionIndicator';
import { QuestionFooterType } from './types';
import * as S from './styles';

const buttonStyle = { maxWidth: '116px' };

export const QuestionFooter: FC<QuestionFooterType> = props => {
  const {
    totalQuestions,
    activeQuestion,
    onNavigationClick,
    triviaQuestions,
  } = props;

  return (
    <S.Wrapper>
      <S.Container>
        <Button
          secondary
          onSubmit={() => onNavigationClick(activeQuestion - 1)}
          style={buttonStyle}
          disabled={activeQuestion === 0}
        >
          Back
        </Button>
        <QuestionIndicator
          questionNumber={activeQuestion}
          triviaQuestions={triviaQuestions}
          onProgressClick={onNavigationClick}
        />
        <Button
          secondary
          onSubmit={() => onNavigationClick(activeQuestion + 1)}
          style={buttonStyle}
          disabled={activeQuestion === totalQuestions}
        >
          Next
        </Button>
      </S.Container>
    </S.Wrapper>
  );
};
