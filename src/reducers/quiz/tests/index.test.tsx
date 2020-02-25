/**
 * quiz reducer tests
 */

import { SET_IS_QUIZ_COMPLETED, SET_CATEGORY } from 'actions/actionTypes';
import { quizReducer, initialState } from '..';

describe('quiz reducer', () => {
  it('should return the initial state', () => {
    const result = quizReducer(undefined, {});
    expect(result).toEqual(initialState);
  });

  it('should handle SET_IS_QUIZ_COMPLETED', () => {
    const isQuizCompleted = true;
    const action = {
      type: SET_IS_QUIZ_COMPLETED,
      payload: isQuizCompleted,
    };
    const result = quizReducer(initialState, action);

    expect(result).toEqual({ ...initialState, isQuizCompleted });
  });

  it('should handle SET_CATEGORY', () => {
    const category = 'history';
    const action = {
      type: SET_CATEGORY,
      payload: category,
    };
    const result = quizReducer(initialState, action);

    expect(result).toEqual({ ...initialState, category });
  });
});
