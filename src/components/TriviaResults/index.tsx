import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { TriviaQuestion } from 'components/Question/types';
import { State } from 'reducers/types';
import * as S from './styles';

export const TriviaResults: FC = () => {
  const { triviaQuestions } = useSelector((state: State) => state.quiz);
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
  console.log({ totalCorrectAnswers });
  // TODO: put in redux state too?
  const isQuestionsRemaining = triviaQuestions.find(
    (triviaQuestion: TriviaQuestion) =>
      triviaQuestion.selected_answer === undefined,
  );
  console.log({ isQuestionsRemaining });
  return (
    <S.Wrapper>
      {isQuestionsRemaining ? (
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
                <S.Number>{i + 1}.</S.Number>
                <S.Question>{question}</S.Question>
                <S.UserAnswer isCorrectAnswer={isCorrectAnswer}>
                  {selectedAnswer}
                </S.UserAnswer>
                {isCorrectAnswer && (
                  <>
                    <S.CorrectAnswerTitle>Correct Answer:</S.CorrectAnswerTitle>
                    <S.CorrectAnswer>{correctAnswer}</S.CorrectAnswer>
                  </>
                )}
              </S.ResultContainer>
            );
          })}
        </>
      ) : (
        <div>empty state</div>
      )}
    </S.Wrapper>
  );
};
