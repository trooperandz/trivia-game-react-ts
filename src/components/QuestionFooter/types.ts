import { TriviaQuestion } from 'components/Question/types';

export type QuestionFooterType = {
  totalQuestions: number;
  activeQuestion: number;
  onNavigationClick: Function;
  triviaQuestions: TriviaQuestion[];
};
