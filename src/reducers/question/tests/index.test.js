/**
 * question reducer tests
 */

import {
  SET_TRIVIA_QUESTIONS,
  SET_ACTIVE_QUESTION,
  SET_API_ERROR,
} from 'actions/actionTypes';
import { questionReducer, initialState } from '..';

describe('question reducer', () => {
  it('should return the initial state', () => {
    const result = questionReducer(undefined, {});
    expect(result).toEqual(initialState);
  });

  it('should handle SET_TRIVIA_QUESTIONS', () => {
    const triviaQuestions = [{ category: 'games' }, { category: 'history' }];
    const action = {
      type: SET_TRIVIA_QUESTIONS,
      payload: triviaQuestions,
    };
    const result = questionReducer(initialState, action);

    expect(result).toEqual({ ...initialState, triviaQuestions });
  });

  it('should handle SET_ACTIVE_QUESTION', () => {
    const activeQuestion = 14;
    const action = {
      type: SET_ACTIVE_QUESTION,
      payload: activeQuestion,
    };
    const result = questionReducer(initialState, action);

    expect(result).toEqual({ ...initialState, activeQuestion });
  });

  it('should handle SET_API_ERROR', () => {
    const apiError = 'There are not enough questions for that request.';
    const action = {
      type: SET_API_ERROR,
      payload: apiError,
    };
    const result = questionReducer(initialState, action);

    expect(result).toEqual({ ...initialState, apiError });
  });
});
