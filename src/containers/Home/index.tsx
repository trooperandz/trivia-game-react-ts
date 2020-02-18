import React, { FC, useState, useEffect, SyntheticEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { State } from 'reducers/types';
import { FormValues, FormError } from 'components/Form/types';
import { Select } from 'components/Form/Select';
import { Input } from 'components/Form/Input';
import { Button } from 'components/Button';
import { Header } from 'components/Header';
import { inputParams } from 'utils/quizInputParams';
import { setValues, loadTriviaQuestions } from 'actions/home';
import { SpinnerBalls } from 'components/Button/styles';
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

const Home: FC = props => {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [formErrors, setFormErrors] = useState<FormError>(initialFormValues);

  const reduxFormValues = useSelector((state: State) => state.home.formValues);
  const isLoading = useSelector((state: State) => state.home.isLoading);
  const dispatch = useDispatch();
  const history = useHistory();

  // If previous form values are saved in redux state, repopulate on reload
  useEffect(() => {
    if (Object.keys(reduxFormValues).length) {
      setFormValues({ ...formValues, ...reduxFormValues });
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

export default Home;
