/**
 * Home actions
 */

import { triviaAPI } from 'utils/api';
import { FormValues } from 'components/Form/types';
import { setTriviaQuestions } from 'actions/questions';
import { History } from 'history';
import { Dispatch } from 'redux';

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
      const response = await triviaAPI.get('/', { params });
      console.log('response.data: ', response.data);
      dispatch(setTriviaQuestions(response.data.results));
      history.push('/questions');
    } catch (e) {
      console.error(e);
      // TODO: set error state here if necessary
    }
  };
};
