import React, { FC, useState, SyntheticEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FormValues, FormError } from 'components/Form/types';
import { Select } from 'components/Form/Select';
import { Input } from 'components/Form/Input';
import { Button } from 'components/Button';
import { Header } from 'components/Header';
import { inputParams } from 'utils/quizInputParams';
import { setValues } from 'actions';
import * as S from './styles';

const initialFormValues = {
  firstName: '',
  amount: '',
  category: '',
  difficulty: '',
};

const errorMessages = {
  firstName: 'Please enter your first name',
  amount: 'Please select an amount',
  category: 'Please select a category',
  difficulty: 'Please select a difficulty level',
};

const Home: FC = () => {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [formErrors, setFormErrors] = useState<FormError>(initialFormValues);

  const reduxFormValues = useSelector((state: any) => state.home.formValues);
  const dispatch = useDispatch();

  console.log({ reduxFormValues });

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    let isError: boolean = false;

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
        <S.Title>State your terms!</S.Title>
        <S.Form onSubmit={handleSubmit}>
          {inputParams.map(params =>
            params.options ? (
              <Select
                error={formErrors[params.name]}
                key={params.id}
                onChange={handleChange}
                {...params}
              />
            ) : (
              <Input
                error={formErrors[params.name]}
                key={params.id}
                onChange={handleChange}
                {...params}
              />
            ),
          )}
          <Button type="submit" handleSubmit={handleSubmit}>
            Submit
          </Button>
        </S.Form>
      </S.Wrapper>
    </>
  );
};

export default Home;
