import React, { useState, useEffect, FC, SyntheticEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { QuestionFooter } from 'components/QuestionFooter';
import { Question } from 'components/Question';
import { State } from 'reducers/types';
import { TriviaQuestion } from 'components/Question/types';
import { ActiveQuestion } from 'reducers/quiz/types';
import { useWindowResize } from 'hooks';
import { setTriviaQuestions, setActiveQuestion } from 'actions/questions';
import * as S from './styles';

export const QuestionSlider: FC = () => {
  const [horizontalPosition, setHorizontalPosition] = useState(0);

  // @ts-ignore
  const { viewportWidth } = useWindowResize();
  const dispatch = useDispatch();
  const { userName } = useSelector((state: State) => state.user);
  const { triviaQuestions, activeQuestion } = useSelector(
    (state: State) => state.quiz,
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

  // Move back and forth between questions and progress indicator clicks
  const handleNavigationClick = (questionNumber: ActiveQuestion) => {
    dispatch(setActiveQuestion(questionNumber));
    setHorizontalPosition(-viewportWidth * questionNumber);
  };

  return (
    <S.Wrapper>
      {triviaQuestions.length ? (
        <>
          <S.SliderContainer horizontalPosition={horizontalPosition}>
            {triviaQuestions.map(
              (triviaQuestion: TriviaQuestion, i: number) => (
                <Question
                  key={`${i}-${triviaQuestion.correct_answer}`}
                  selectedAnswer={triviaQuestion.selected_answer}
                  question={triviaQuestion.question}
                  viewportWidth={viewportWidth}
                  onRadioChange={handleRadioChange}
                  answerChoices={[
                    ...triviaQuestion.incorrect_answers,
                    triviaQuestion.correct_answer,
                  ]}
                />
              ),
            )}
          </S.SliderContainer>
          <S.Title>Good luck, {userName}</S.Title>
          <QuestionFooter
            totalQuestions={triviaQuestions.length - 1}
            activeQuestion={activeQuestion}
            onNavigationClick={handleNavigationClick}
            triviaQuestions={triviaQuestions}
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
  );
};
