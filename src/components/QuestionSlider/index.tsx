import React, { useState, useEffect, FC, SyntheticEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { QuestionFooter } from 'components/QuestionFooter';
import { Question } from 'components/Question';
import { State } from 'reducers/types';
import { TriviaQuestion } from 'components/Question/types';
import { ActiveQuestion } from 'reducers/question/types';
import { useWindowResize } from 'hooks';
import * as S from './styles';
import {
  setTriviaQuestions,
  setActiveQuestion,
  setIsQuizCompleted,
} from 'actions';

export const QuestionSlider: FC = () => {
  const [horizontalPosition, setHorizontalPosition] = useState(0);

  // @ts-ignore
  const { viewportWidth } = useWindowResize();
  const dispatch = useDispatch();
  const { category, isQuizCompleted } = useSelector(
    (state: State) => state.quiz,
  );
  const { triviaQuestions, activeQuestion } = useSelector(
    (state: State) => state.questions,
  );

  useEffect(() => {
    setHorizontalPosition(-viewportWidth * activeQuestion);
  }, [viewportWidth]);

  // Save answer selection and automagically move to next question
  const handleRadioChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    const nextQuestion = activeQuestion + 1;
    const canMoveToNext = nextQuestion !== triviaQuestions.length;

    triviaQuestions[activeQuestion].selected_answer = value;

    const isQuestionsUnanswered = triviaQuestions.some(
      (triviaQuestion: TriviaQuestion) => !triviaQuestion.selected_answer,
    );

    dispatch(setTriviaQuestions([...triviaQuestions]));

    if (isQuestionsUnanswered && canMoveToNext) {
      setTimeout(() => {
        dispatch(setActiveQuestion(nextQuestion));
        setHorizontalPosition(-viewportWidth * nextQuestion);
      }, 400);
    } else if (!isQuestionsUnanswered) {
      dispatch(setIsQuizCompleted(true));
    }
  };

  // Move back and forth between questions and progress indicator clicks
  const handleNavigationClick = (questionNumber: ActiveQuestion) => {
    dispatch(setActiveQuestion(questionNumber));
    setHorizontalPosition(-viewportWidth * questionNumber);
  };

  const questions = triviaQuestions.map(
    (triviaQuestion: TriviaQuestion, i: number) => {
      const {
        question,
        selected_answer: selectedAnswer,
        correct_answer: correctAnswer,
        incorrect_answers: incorrectAnswers,
      } = triviaQuestion;

      return (
        <Question
          key={`${i}-${question}`}
          selectedAnswer={selectedAnswer}
          question={question}
          viewportWidth={viewportWidth}
          onRadioChange={handleRadioChange}
          answerChoices={[...incorrectAnswers, correctAnswer]}
        />
      );
    },
  );

  return (
    <S.Wrapper>
      {triviaQuestions.length ? (
        <>
          <S.SliderContainer
            data-testId="slider-container"
            horizontalPosition={horizontalPosition}
          >
            {questions}
          </S.SliderContainer>
          <S.Title>{category}</S.Title>
          <QuestionFooter
            activeQuestion={activeQuestion}
            onNavigationClick={handleNavigationClick}
            triviaQuestions={triviaQuestions}
            isQuizCompleted={isQuizCompleted}
          />
        </>
      ) : (
        <>
          <S.EmptyStateTitle data-testid="empty-state">
            You have no questions!
          </S.EmptyStateTitle>
          <S.Link>
            Get some <Link to="/">here</Link>
          </S.Link>
        </>
      )}
    </S.Wrapper>
  );
};
