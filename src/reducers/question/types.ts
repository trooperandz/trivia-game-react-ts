import { TriviaQuestion } from 'components/Question/types';

export type ActiveQuestion = number;

export type QuestionsState = {
  triviaQuestions: TriviaQuestion[];
  activeQuestion: ActiveQuestion;
  apiError: string;
};
