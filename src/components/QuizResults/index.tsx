import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { TriviaQuestion } from 'components/Question/types';
import { resetAppState } from 'utils/app';
import { Button } from 'components/Button';
import { State } from 'reducers/types';
import * as S from './styles';

export const QuizResults: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { userName } = useSelector((state: State) => state.user);
  const { triviaQuestions } = useSelector((state: State) => state.questions);
  const { isQuizCompleted } = useSelector((state: State) => state.quiz);
  const totalQuestions = triviaQuestions.length - 1;

  const handlePlayAgain = () => {
    resetAppState(dispatch);
    history.push('/');
  };

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

  const quizResults = triviaQuestions.map(
    (triviaQuestion: TriviaQuestion, i: number) => {
      const {
        question,
        selected_answer: selectedAnswer,
        correct_answer: correctAnswer,
      } = triviaQuestion;

      const isCorrectAnswer = selectedAnswer === correctAnswer;

      return (
        <S.ResultContainer key={i}>
          {isCorrectAnswer ? <S.IconCheck /> : <S.IconX />}
          <S.TextWrapper>
            <S.Number>{i + 1}.</S.Number>
            <S.Question dangerouslySetInnerHTML={{ __html: question }} />
          </S.TextWrapper>
          <S.TextWrapper>
            <S.AnswerTitle isCorrectAnswer={isCorrectAnswer}>
              Your answer:
            </S.AnswerTitle>
            <S.Answer dangerouslySetInnerHTML={{ __html: selectedAnswer }} />
          </S.TextWrapper>
          {!isCorrectAnswer && (
            <S.TextWrapper>
              <S.AnswerTitle isCorrectAnswer>Correct Answer:</S.AnswerTitle>
              <S.Answer dangerouslySetInnerHTML={{ __html: correctAnswer }} />
            </S.TextWrapper>
          )}
        </S.ResultContainer>
      );
    },
  );

  return (
    <S.Wrapper>
      <S.Container>
        {isQuizCompleted ? (
          <>
            <S.Title>Your results, {userName}</S.Title>
            <S.Count>
              {totalCorrectAnswers}/{totalQuestions} correct
            </S.Count>
            {quizResults}
            <Button onClick={handlePlayAgain}>Play Again?</Button>
          </>
        ) : (
          <>
            <S.EmptyStateTitle>You have no quiz results!</S.EmptyStateTitle>
            <S.Link>
              Go <Link to="/">here</Link> to start a quiz!
            </S.Link>
          </>
        )}
      </S.Container>
    </S.Wrapper>
  );
};
