/**
 * Quiz actions
 */

import { SET_IS_QUIZ_COMPLETED, SET_CATEGORY } from 'actions/actionTypes';

// Completed state, shared for different screen logic
export const setIsQuizCompleted = (isQuizCompleted: boolean) => ({
  type: SET_IS_QUIZ_COMPLETED,
  payload: isQuizCompleted,
});

// Save category for global display
export const setCategory = (category: string) => ({
  type: SET_CATEGORY,
  payload: category,
});
