import { Dispatch } from 'redux';

import { unsetLocalStorageFormValues } from 'utils/form';
import { setIsQuizCompleted } from 'actions/quiz';
import { setUserName } from 'actions/user';
import {
  setTriviaQuestions,
  setCategory,
  setActiveQuestion,
} from 'actions/questions';

export const resetAppState = (dispatch: Dispatch) => {
  dispatch(setTriviaQuestions([]));
  dispatch(setCategory(''));
  dispatch(setActiveQuestion(0));
  dispatch(setUserName(''));
  dispatch(setIsQuizCompleted(false));
  unsetLocalStorageFormValues();
};
