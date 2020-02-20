import React, { FC, useState, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { FormValues, FormError } from 'components/Form/types';
import { HomeProps } from './types';
import { Select } from 'components/Form/Select';
import { Input } from 'components/Form/Input';
import { Button } from 'components/Button';
import { Header } from 'components/Header';
import { inputParams, errorMessages, initialErrorValues } from 'utils/form';
import { setValues, loadTriviaQuestions } from 'actions/home';
import { SpinnerBalls } from 'components/Button/styles';
import * as S from './styles';

export const HomePage: FC<HomeProps> = props => {
  const { reduxFormValues, isLoading } = props;

  const [formValues, setFormValues] = useState<FormValues>(reduxFormValues);
  const [formErrors, setFormErrors] = useState<FormError>(initialErrorValues);

  const dispatch = useDispatch();
  const history = useHistory();

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
      dispatch(setValues(formValues));
      dispatch(loadTriviaQuestions(formValues, history));
    }
  };

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value, name },
    } = e;

    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <>
      <Header />
      <S.Wrapper>
        <S.Title>State your terms</S.Title>
        <S.Form onSubmit={handleSubmit}>
          {inputParams.map(params =>
            params.options ? (
              <Select
                error={formErrors[params.name]}
                key={params.id}
                value={formValues[params.name]}
                onChange={handleChange}
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
      </S.Wrapper>
    </>
  );
};
