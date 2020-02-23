import { TriviaQuestion } from 'components/Question/types';

export type QuestionFooterType = {
  activeQuestion: number;
  onNavigationClick: Function;
  triviaQuestions: TriviaQuestion[];
  isQuizCompleted: boolean;
};
