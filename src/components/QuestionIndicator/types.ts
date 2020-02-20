import { TriviaQuestion } from 'components/Question/types';

export type QuestionIndicatorType = {
  questionNumber: number;
  triviaQuestions: TriviaQuestion[];
  onProgressClick: Function;
};
