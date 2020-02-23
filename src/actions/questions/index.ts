/**
 * Question actions
 */

import { History } from 'history';
import { Dispatch } from 'redux';

import { triviaAPI } from 'utils/api';
import { FormValues } from 'components/Form/types';
import { TriviaQuestion } from 'components/Question/types';
import {
  SET_TRIVIA_QUESTIONS,
  SET_ACTIVE_QUESTION,
  SET_CATEGORY,
} from 'actions/actionTypes';

// Save trivia questions from API response
export const setTriviaQuestions = (triviaQuestions: TriviaQuestion[]) => ({
  type: SET_TRIVIA_QUESTIONS,
  payload: triviaQuestions,
});

// Set active question for slider location and indicators
export const setActiveQuestion = (activeQuestion: number) => ({
  type: SET_ACTIVE_QUESTION,
  payload: activeQuestion,
});

// Send and receive trivia API request
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

// Save category for global display
export const setCategory = (category: string) => ({
  type: SET_CATEGORY,
  payload: category,
});
