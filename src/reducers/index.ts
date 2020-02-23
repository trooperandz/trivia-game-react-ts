import { combineReducers } from 'redux';

import { quizReducer } from 'reducers/quiz';
import { userReducer } from 'reducers/user';

export const rootReducer = combineReducers({
  quiz: quizReducer,
  user: userReducer,
});
