import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { TriviaQuestion } from 'components/Question/types';
import { State } from 'reducers/types';
import * as S from './styles';

export const TriviaResults: FC = () => {
  const { triviaQuestions, isQuizCompleted } = useSelector(
    (state: State) => state.quiz,
  );
  const { userName } = useSelector((state: State) => state.user);

  const totalQuestions = triviaQuestions.length - 1;
  // TODO: add to redux state and get from there?
  const totalCorrectAnswers = triviaQuestions.reduce(
    (acc: number, triviaQuestion: TriviaQuestion) => {
      const {
        selected_answer: selectedAnswer,
        correct_answer: correctAnswer,
      } = triviaQuestion;

      if (selectedAnswer === correctAnswer) {
        acc += 1;
      }

      return acc;
    },
    0,
  );
  console.log({ isQuizCompleted });

  return (
    <S.Wrapper>
      {isQuizCompleted ? (
        <>
          <S.Title>Your results, {userName}</S.Title>
          <S.Count>
            {totalCorrectAnswers}/{totalQuestions} correct
          </S.Count>
          {triviaQuestions.map((triviaQuestion: TriviaQuestion, i: number) => {
            const {
              question,
              selected_answer: selectedAnswer,
              correct_answer: correctAnswer,
            } = triviaQuestion;

            const isCorrectAnswer = selectedAnswer === correctAnswer;

            return (
              <S.ResultContainer>
                {isCorrectAnswer ? <S.IconCheck /> : <S.IconX />}
                <S.QuestionWrapper>
                  <S.Number>{i + 1}.</S.Number>
                  <S.Question dangerouslySetInnerHTML={{ __html: question }} />
                </S.QuestionWrapper>
                <S.QuestionWrapper>
                  <S.UserAnswerTitle isCorrectAnswer={isCorrectAnswer}>
                    Your answer:
                  </S.UserAnswerTitle>
                  <S.CorrectAnswer>{selectedAnswer}</S.CorrectAnswer>
                </S.QuestionWrapper>
                {!isCorrectAnswer && (
                  <S.QuestionWrapper>
                    <S.CorrectAnswerTitle>Correct Answer:</S.CorrectAnswerTitle>
                    <S.CorrectAnswer>{correctAnswer}</S.CorrectAnswer>
                  </S.QuestionWrapper>
                )}
              </S.ResultContainer>
            );
          })}
        </>
      ) : (
        <>
          <S.EmptyStateTitle>You have no quiz results!</S.EmptyStateTitle>
          <S.Link>
            Go <Link to="/">here</Link> to start a quiz!
          </S.Link>
        </>
      )}
    </S.Wrapper>
  );
};
