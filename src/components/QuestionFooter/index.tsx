import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from 'components/Button';
import { QuestionIndicator } from 'components/QuestionIndicator';
import { QuestionFooterType } from './types';
import { LoadingState } from 'types';
import { SpinnerBalls } from 'components/Button/styles';
import { useMediaQuery } from 'hooks';
import * as S from './styles';

const buttonStyle = { maxWidth: '116px' };

export const QuestionFooter: FC<QuestionFooterType> = props => {
  const [isLoading, setIsLoading] = useState<LoadingState>(false);
  const history = useHistory();

  const {
    activeQuestion,
    onNavigationClick,
    triviaQuestions,
    isQuizCompleted,
  } = props;

  const isLastQuestion = activeQuestion === triviaQuestions.length - 1;
  const isTablet = useMediaQuery('(max-width: 900px)');

  const handleNextClick = () => {
    if (isLastQuestion) {
      setIsLoading(true);

      // Simulate processing, just for fun...
      setTimeout(() => {
        history.push('/results');
      }, 500);
    } else {
      onNavigationClick(activeQuestion + 1);
    }
  };

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
        {isTablet ? (
          <S.QuestionCounter>
            {activeQuestion + 1} / {triviaQuestions.length}
          </S.QuestionCounter>
        ) : (
          <QuestionIndicator
            questionNumber={activeQuestion}
            triviaQuestions={triviaQuestions}
            onProgressClick={onNavigationClick}
          />
        )}
        <Button
          secondary={!isQuizCompleted}
          onSubmit={handleNextClick}
          style={buttonStyle}
          disabled={isLastQuestion && !isQuizCompleted}
        >
          {isLoading ? <SpinnerBalls /> : isQuizCompleted ? 'Submit' : 'Next'}
        </Button>
      </S.Container>
    </S.Wrapper>
  );
};
