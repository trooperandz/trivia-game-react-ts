import { TriviaQuestion } from 'components/Question/types';

export type ActiveQuestion = number;

export type QuizState = {
  triviaQuestions: TriviaQuestion[];
  activeQuestion: ActiveQuestion;
  category: string;
  isQuizCompleted: boolean;
};
