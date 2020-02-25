import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from 'components/Button';
import { QuestionIndicator } from 'components/QuestionIndicator';
import { QuestionFooterType } from './types';
import { LoadingState } from 'types';
import { SpinnerBalls } from 'components/Button/styles';
import { useMediaQuery } from 'hooks';
import * as S from './styles';

const submitButtonStyle = {
  position: 'absolute',
  top: '-110px',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 1,
};
const navigateButtonStyle = { maxWidth: '116px' };

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
  const isPhone = useMediaQuery('(max-width: 375px)');
  const submitButtonPosition = isPhone ? { top: '-80px' } : { top: '-110px' };

  const handleSubmit = () => {
    setIsLoading(true);

    // Simulate processing...
    setTimeout(() => {
      history.push('/results');
    }, 500);
  };

  return (
    <S.Wrapper>
      <S.Container>
        <Button
          secondary
          onSubmit={() => onNavigationClick(activeQuestion - 1)}
          style={navigateButtonStyle}
          disabled={activeQuestion === 0}
        >
          Back
        </Button>
        {isQuizCompleted && (
          <Button
            onSubmit={handleSubmit}
            style={{ ...submitButtonStyle, ...submitButtonPosition }}
            animated
            dataTest="submit-quiz-btn"
          >
            {isLoading ? <SpinnerBalls /> : 'Submit Quiz'}
          </Button>
        )}
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
          secondary
          onSubmit={() => onNavigationClick(activeQuestion + 1)}
          style={navigateButtonStyle}
          disabled={isLastQuestion}
        >
          Next
        </Button>
      </S.Container>
    </S.Wrapper>
  );
};
