import { Dispatch } from 'redux';

import { unsetLocalStorageFormValues } from 'utils/form';
import {
  setUserName,
  setTriviaQuestions,
  setIsQuizCompleted,
  setCategory,
  setActiveQuestion,
} from 'actions';

export const resetAppState = (dispatch: Dispatch) => {
  dispatch(setTriviaQuestions([]));
  dispatch(setCategory(''));
  dispatch(setActiveQuestion(0));
  dispatch(setUserName(''));
  dispatch(setIsQuizCompleted(false));
  unsetLocalStorageFormValues();
};
