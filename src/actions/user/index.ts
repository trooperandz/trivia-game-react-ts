/**
 * User actions
 */

import { SET_USER_NAME } from 'actions/actionTypes';

// Save user infor for global display
export const setUserName = (userName: string) => ({
  type: SET_USER_NAME,
  payload: userName,
});
