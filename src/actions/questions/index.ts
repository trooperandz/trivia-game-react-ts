/**
 * Question actions
 */

import { TriviaQuestion } from 'components/Question/types';
import { SET_TRIVIA_QUESTIONS, SET_ACTIVE_QUESTION } from 'actions/actionTypes';

/**
 * Save trivia questions from API response
 */
export const setTriviaQuestions = (triviaQuestions: TriviaQuestion[]) => ({
  type: SET_TRIVIA_QUESTIONS,
  payload: triviaQuestions,
});

/**
 * Set active question for slider location
 */
export const setActiveQuestion = (activeQuestion: number) => ({
  type: SET_ACTIVE_QUESTION,
  payload: activeQuestion,
});
