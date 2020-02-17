import React, { FC, useState, SyntheticEvent } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';

import { HomeType } from './types';
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

const Home: FC<HomeType> = props => {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [formErrors, setFormErrors] = useState<FormError>(initialFormValues);

  const { onSubmitFormValues, reduxFormValues } = props;

  console.log({ reduxFormValues });

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const { firstName, amount, category, difficulty } = formValues;
    console.log('clicked submit', e);
    // validate and then send to trivia api for generating questions
    // https://opentdb.com/api.php?amount=10&category=20&difficulty=easy

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
      onSubmitFormValues(formValues);
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

const mapStateToProps = (state: any) => ({
  reduxFormValues: state.home.formValues,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSubmitFormValues: (values: FormValues) => dispatch(setValues(values)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
