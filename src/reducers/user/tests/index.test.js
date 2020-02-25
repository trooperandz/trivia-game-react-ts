/**
 * user reducer tests
 */

import { SET_USER_NAME } from 'actions/actionTypes';
import { userReducer, initialState } from '..';

describe('user reducer', () => {
  it('should return the initial state', () => {
    const result = userReducer(undefined, {});
    expect(result).toEqual(initialState);
  });

  it('should handle SET_USER_NAME', () => {
    const userName = 'Matthew';
    const action = {
      type: SET_USER_NAME,
      payload: userName,
    };
    const result = userReducer(initialState, action);

    expect(result).toEqual({ ...initialState, userName });
  });
});
