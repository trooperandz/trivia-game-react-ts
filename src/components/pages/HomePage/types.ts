import { FormValues } from 'components/Form/types';
import { LoadingState } from 'reducers/home/types';

export type HomeProps = {
  reduxFormValues: FormValues;
  isLoading: LoadingState;
};
