import { QuizState } from 'reducers/quiz/types';
import { QuestionsState } from 'reducers/question/types';
import { UserState } from 'reducers/user/types';

export type Action = {
  type: string;
  payload: any;
};

export type State = {
  quiz: QuizState;
  user: UserState;
  questions: QuestionsState;
};
