import { HomeState } from 'reducers/home/types';
import { QuestionState } from 'reducers/questions/types';

export type State = {
  home: HomeState;
  questions: QuestionState;
};
