import { TriviaQuestion } from 'components/Question/types';

export type ActiveQuestion = number;

export type QuestionState = {
  triviaQuestions: TriviaQuestion[];
  activeQuestion: ActiveQuestion;
};
