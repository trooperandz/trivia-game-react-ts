/**
 * Home actions
 */

import { triviaAPI } from 'utils/api';
import { TriviaQuestion } from 'components/Question/types';
import { LoadingState } from 'reducers/home/types';
import { FormValues } from 'components/Form/types';
import { History } from 'history';
import { Dispatch } from 'redux';
import {
  SET_FORM_VALUES,
  SET_TRIVIA_QUESTIONS,
  SET_IS_LOADING,
} from 'actions/actionTypes';

/**
 * Save form values for main home form mount state
 */
export const setValues = (formValues: FormValues) => {
  return {
    type: SET_FORM_VALUES,
    payload: formValues,
  };
};

/**
 * Save trivia questions from API response
 */
export const setTriviaQuestions = (triviaQuestions: TriviaQuestion[]) => {
  return {
    type: SET_TRIVIA_QUESTIONS,
    payload: triviaQuestions,
  };
};

/**
 * Set loading indicator state for any async operations
 */
export const setIsLoading = (isLoading: LoadingState) => {
  return {
    type: SET_IS_LOADING,
    payload: isLoading,
  };
};

/**
 * Send and receive trivia API request
 */
export const loadTriviaQuestions = (
  formValues: FormValues,
  history: History,
) => {
  const { amount, category, difficulty } = formValues;
  const params = {
    amount,
    category,
    difficulty,
  };

  return async (dispatch: Dispatch) => {
    try {
      dispatch(setIsLoading(true));
      const response = await triviaAPI.get('/', { params });
      console.log('response.data: ', response.data);
      dispatch(setTriviaQuestions(response.data.results));
      dispatch(setIsLoading(false));
      history.push('/questions');
    } catch (e) {
      console.error(e);
      dispatch(setIsLoading(false));
      // TODO: set error state here if necessary
    }
  };
};
