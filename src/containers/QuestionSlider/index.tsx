import React, { useState, useEffect, FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Header } from 'components/Header';
import { Question } from 'components/Question';
import { QuestionIndicator } from 'components/QuestionIndicator';
import { State } from 'reducers/types';
import { TriviaQuestion } from 'components/Question/types';
import { useWindowResize } from 'utils/hooks';
import * as S from './styles';

const QuestionSlider: FC = () => {
  const [horizontalPosition, setHorizontalPosition] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  // @ts-ignore
  const { viewportWidth } = useWindowResize();
  const triviaQuestions = useSelector(
    (state: State) => state.questions.triviaQuestions,
  );

  console.log({ triviaQuestions });
  useEffect(() => {
    setHorizontalPosition(-viewportWidth * questionNumber);
  }, [viewportWidth]);

  const handleNavigationClick = (questionStep: number) => {
    setQuestionNumber(questionStep);
    setHorizontalPosition(-viewportWidth * questionStep);
  };

  const handleProgressClick = (questionStep: number) => {
    setQuestionNumber(questionStep);
    setHorizontalPosition(-viewportWidth * questionStep);
  };

  return (
    <>
      <Header />
      <S.Wrapper>
        {triviaQuestions.length ? (
          <>
            <S.SliderContainer horizontalPosition={horizontalPosition}>
              {triviaQuestions.map(
                (triviaQuestion: TriviaQuestion, i: number) => (
                  <Question
                    key={`${i}-${triviaQuestion.correct_answer}`}
                    questionNumber={i}
                    question={triviaQuestion.question}
                    totalQuestions={triviaQuestions.length - 1}
                    viewportWidth={viewportWidth}
                    onClick={handleNavigationClick}
                    answerChoices={[
                      ...triviaQuestion.incorrect_answers,
                      triviaQuestion.correct_answer,
                    ]}
                  />
                ),
              )}
            </S.SliderContainer>
            <QuestionIndicator
              questionNumber={questionNumber}
              triviaQuestions={triviaQuestions}
              handleProgressClick={handleProgressClick}
            />
          </>
        ) : (
          <>
            <S.EmptyStateTitle>You have no questions!</S.EmptyStateTitle>
            <S.Link>
              Get some <Link to="/">here</Link>
            </S.Link>
          </>
        )}
      </S.Wrapper>
    </>
  );
};

export default QuestionSlider;
