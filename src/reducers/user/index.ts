import { SET_USER_NAME } from 'actions/actionTypes';
import { Action } from '../types';

export const initialState = {
  userName: '',
};

export const userReducer = (state = initialState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER_NAME:
      return { ...state, userName: payload };
    default:
      return state;
  }
};
