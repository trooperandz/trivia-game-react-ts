import { setUserName } from '..';
import { SET_USER_NAME } from 'actions/actionTypes';

describe('user actions', () => {
  it('should create an action to set the user name', () => {
    const userName = 'Holland';
    const expectedAction = {
      type: SET_USER_NAME,
      payload: userName,
    };
    const action = setUserName(userName);

    expect(action).toEqual(expectedAction);
  });
});
