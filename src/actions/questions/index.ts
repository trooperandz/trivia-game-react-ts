/**
 * Question actions
 */

import { TriviaQuestion } from 'components/Question/types';
import { SET_TRIVIA_QUESTIONS } from 'actions/actionTypes';

/**
 * Save trivia questions from API response
 */
export const setTriviaQuestions = (triviaQuestions: TriviaQuestion[]) => {
  return {
    type: SET_TRIVIA_QUESTIONS,
    payload: triviaQuestions,
  };
};
