/**
 * Questions actions
 */

import { History } from 'history';
import { Dispatch } from 'redux';

import { triviaAPI } from 'utils/api';
import { FormValues } from 'components/Form/types';
import { TriviaQuestion } from 'components/Question/types';
import {
  SET_TRIVIA_QUESTIONS,
  SET_ACTIVE_QUESTION,
  SET_API_ERROR,
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

// Show API errors;
// TOOD: this probably shouldn't be in redux
export const setApiError = (error: string) => ({
  type: SET_API_ERROR,
  payload: error,
});

// Send and receive trivia API request
// TODO need to test this action too
export const loadTriviaQuestions = (
  formValues: FormValues,
  history: History,
) => {
  const { amount, category, type, difficulty } = formValues;
  const params = {
    amount,
    category,
    type,
    difficulty,
  };

  return async (dispatch: Dispatch) => {
    try {
      const response = await triviaAPI.get('/', { params });
      const {
        data: { response_code: responseCode, results },
      } = response;

      // Response code 0 is success
      if (responseCode !== 0) {
        let errorMessage = '';

        switch (responseCode) {
          case 1:
            errorMessage =
              "Sorry, the API doesn't have enough questions for your query";
            break;
          case 2:
            errorMessage = 'Sorry, your query contained an invalid parameter';
            break;
          default:
            errorMessage = 'Sorry, there was an unknown API error';
        }

        throw new Error(errorMessage);
        // dispatch(setApiError(errorMessage));
      } else {
        dispatch(setTriviaQuestions(results));
        history.push('/questions');
      }
    } catch (e) {
      console.error(e);
      dispatch(setApiError(e.message));
    }
  };
};
