import React, { FC, useState, SyntheticEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { FormValues, FormError } from './types';
import { LoadingState } from '../../types';
import { Select } from './Select';
import { Input } from './Input';
import { Button } from '../../components/Button';
import {
  inputParams,
  errorMessages,
  initialErrorValues,
  getLocalStorageFormValues,
} from '../../utils/form';
import { setUserName } from '../../actions/user';
import { loadTriviaQuestions } from '../../actions/questions';
import { SpinnerBalls } from '../Button/styles';
import * as S from './styles';

export const Form: FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({});
  const [formErrors, setFormErrors] = useState<FormError>(initialErrorValues);
  const [isLoading, setIsLoading] = useState<LoadingState>(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const values = getLocalStorageFormValues();
    if (values) {
      setFormValues(values);
    }
  }, []);

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    let isError = false;

    const errors: FormError = Object.keys(formValues).reduce(
      (acc: FormError, formValue: string) => {
        if (!formValues[formValue]) {
          // @ts-ignore
          acc[formValue] = errorMessages[formValue];
          isError = true;
        } else {
          acc[formValue] = '';
        }

        return acc;
      },
      {},
    );

    if (isError) {
      setFormErrors(errors);
    } else {
      setIsLoading(true);
      localStorage.setItem('triviaFormValues', JSON.stringify(formValues));
      dispatch(loadTriviaQuestions(formValues, history));
      dispatch(setUserName(formValues.firstName));
    }
  };

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value, name },
    } = e;

    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      {inputParams.map(params =>
        params.options ? (
          <Select
            error={formErrors[params.name]}
            key={params.id}
            value={formValues[params.name]}
            onChange={handleChange}
            options={params.options}
            {...params}
          />
        ) : (
          <Input
            error={formErrors[params.name]}
            key={params.id}
            onChange={handleChange}
            value={formValues[params.name]}
            {...params}
          />
        ),
      )}
      <Button type="submit" onSubmit={handleSubmit}>
        {isLoading ? <SpinnerBalls /> : 'Submit'}
      </Button>
    </S.Form>
  );
};
