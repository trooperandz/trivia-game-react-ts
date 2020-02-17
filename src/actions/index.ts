import { FormValues } from 'components/Form/types';
import { SET_FORM_VALUES } from 'actions/types';

export const setValues = (formValues: FormValues) => {
  console.log('formValues in action: ', formValues);
  return {
    type: SET_FORM_VALUES,
    payload: formValues,
  };
};
