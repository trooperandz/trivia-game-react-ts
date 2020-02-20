import React, { useState, useEffect, FC, SyntheticEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Header } from 'components/Header';
import { Question } from 'components/Question';
import { QuestionIndicator } from 'components/QuestionIndicator';
import { State } from 'reducers/types';
import { TriviaQuestion } from 'components/Question/types';
import { ActiveQuestion } from 'reducers/questions/types';
import { useWindowResize } from 'utils/hooks';
import { setTriviaQuestions, setActiveQuestion } from 'actions/questions';
import * as S from './styles';

const QuestionSlider: FC = () => {
  const [horizontalPosition, setHorizontalPosition] = useState(0);

  // @ts-ignore
  const { viewportWidth } = useWindowResize();
  const dispatch = useDispatch();
  const triviaQuestions = useSelector(
    (state: State) => state.questions.triviaQuestions,
  );
  const activeQuestion = useSelector(
    (state: State) => state.questions.activeQuestion,
  );

  useEffect(() => {
    setHorizontalPosition(-viewportWidth * activeQuestion);
  }, [viewportWidth]);

  // Save answer selection
  const handleRadioChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    triviaQuestions[activeQuestion].selected_answer = value;
    dispatch(setTriviaQuestions([...triviaQuestions]));
  };

  // Move back and forth between questions
  const handleNavigationClick = (questionNumber: ActiveQuestion) => {
    dispatch(setActiveQuestion(questionNumber));
    setHorizontalPosition(-viewportWidth * questionNumber);
  };

  // Handle "pagination" click
  const handleProgressClick = (questionNumber: ActiveQuestion) => {
    dispatch(setActiveQuestion(questionNumber));
    setHorizontalPosition(-viewportWidth * questionNumber);
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
                    selectedAnswer={triviaQuestion.selected_answer}
                    questionNumber={i}
                    question={triviaQuestion.question}
                    totalQuestions={triviaQuestions.length - 1}
                    viewportWidth={viewportWidth}
                    onNavigationClick={handleNavigationClick}
                    onRadioChange={handleRadioChange}
                    answerChoices={[
                      ...triviaQuestion.incorrect_answers,
                      triviaQuestion.correct_answer,
                    ]}
                  />
                ),
              )}
            </S.SliderContainer>
            <QuestionIndicator
              questionNumber={activeQuestion}
              triviaQuestions={triviaQuestions}
              onProgressClick={handleProgressClick}
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
