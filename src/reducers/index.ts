import { combineReducers } from 'redux';

import { quizReducer } from 'reducers/quiz';
import { userReducer } from 'reducers/user';
import { questionReducer } from 'reducers/question';

export const rootReducer = combineReducers({
  quiz: quizReducer,
  user: userReducer,
  questions: questionReducer,
});
