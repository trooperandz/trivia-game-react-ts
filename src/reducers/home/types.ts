import { FormValues } from 'components/Form/types';

export type LoadingState = boolean;

export type HomeState = {
  formValues: FormValues;
  isLoading: LoadingState;
};
