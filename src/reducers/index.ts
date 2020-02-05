import { combineReducers } from 'redux';

import { homeReducer } from 'reducers/homeReducer';
import { questionsReducer } from 'reducers/questionsReducer';

export const rootReducer = combineReducers({
  home: homeReducer,
  questions: questionsReducer,
});
