import React, { FC, useState, SyntheticEvent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { FormValues, FormError } from './types';
import { LoadingState } from 'types';
import { State } from 'reducers/types';
import { Select } from './Select';
import { Input } from './Input';
import { Button } from 'components/Button';
import { ErrorText } from 'components/ErrorText';
import { SpinnerBalls } from 'components/Button/styles';
import * as S from './styles';
import {
  inputParams,
  errorMessages,
  initialFormValues,
  getLocalStorageFormValues,
} from 'utils/form';
import {
  setUserName,
  loadTriviaQuestions,
  setActiveQuestion,
  setIsQuizCompleted,
  setCategory,
  setApiError,
} from 'actions';

export const Form: FC = () => {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [formErrors, setFormErrors] = useState<FormError>(initialFormValues);
  const [isLoading, setIsLoading] = useState<LoadingState>(false);
  const { apiError } = useSelector((state: State) => state.questions);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const values = getLocalStorageFormValues();

    if (Object.keys(values).length) {
      setFormValues(values);
    }
  }, []);

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('handleSubmit clicked');
    setApiError('');
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

      // Remove any state from questions slider
      dispatch(setActiveQuestion(0));
      dispatch(setIsQuizCompleted(false));
    }
  };

  const handleChange = (
    e: SyntheticEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const {
      currentTarget: { value, name },
    } = e;

    // Save category name
    if (name === 'category') {
      // @ts-ignore
      const categoryName = e.target[e.target.selectedIndex].getAttribute(
        'data-category',
      );
      dispatch(setCategory(categoryName));
    }

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
      {apiError && (
        <ErrorText style={{ position: 'relative' }}>{apiError}</ErrorText>
      )}
      <Button type="submit" onSubmit={handleSubmit}>
        {!apiError && isLoading ? <SpinnerBalls /> : 'Begin'}
      </Button>
    </S.Form>
  );
};
