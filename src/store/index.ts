import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from 'reducers';

export const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  console.log('store: ', store.getState());
  return store;
};
