import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from 'components/Button';
import { QuestionIndicator } from 'components/QuestionIndicator';
import { QuestionFooterType } from './types';
import { LoadingState } from 'types';
import { SpinnerBalls } from 'components/Button/styles';
import * as S from './styles';
import { TriviaQuestion } from 'components/Question/types';

const buttonStyle = { maxWidth: '116px' };

export const QuestionFooter: FC<QuestionFooterType> = props => {
  const [isLoading, setIsLoading] = useState<LoadingState>(false);
  const history = useHistory();

  const {
    totalQuestions,
    activeQuestion,
    onNavigationClick,
    triviaQuestions,
  } = props;

  const isLastQuestion = activeQuestion === totalQuestions;
  const isAllQuestionsAnwered = triviaQuestions.find(
    (triviaQuestion: TriviaQuestion) =>
      triviaQuestion.selected_answer === undefined,
  );

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

  // TODO: only show submit btn style after radio is answered,
  // make sure does not try to progress automatically (look at QuestionSlider)
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
          onSubmit={handleNextClick}
          style={isLastQuestion ? buttonStyle : {}}
          disabled={isLastQuestion && !isAllQuestionsAnwered}
        >
          {isLoading ? (
            <SpinnerBalls />
          ) : isAllQuestionsAnwered ? (
            'Submit'
          ) : (
            'Next'
          )}
        </Button>
      </S.Container>
    </S.Wrapper>
  );
};
