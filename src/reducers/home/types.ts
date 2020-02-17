import { FormValues } from 'components/Form/types';
import { TriviaQuestion } from 'components/Question/types';

export type LoadingState = boolean;

export type HomeState = {
  formValues: FormValues;
  triviaQuestions: TriviaQuestion[];
  isLoading: LoadingState;
};
