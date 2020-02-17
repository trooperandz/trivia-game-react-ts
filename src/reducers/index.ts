import { combineReducers } from 'redux';

import { homeReducer } from 'reducers/home';
import { questionsReducer } from 'reducers/questions';

export const rootReducer = combineReducers({
  home: homeReducer,
  questions: questionsReducer,
});
