import {
  SET_FORM_VALUES,
  SET_IS_LOADING,
  SET_TRIVIA_QUESTIONS,
} from 'actions/actionTypes';

const initialState = {
  formValues: {},
  triviaQuestions: [],
  isLoading: false,
};

export const homeReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_FORM_VALUES:
      console.log('reached SET_FORM_VALUES, action = ', action);
      return { ...state, formValues: payload };
    case SET_TRIVIA_QUESTIONS:
      console.log('reached SET_TRIVIA_QUESTIONS, action = ', action);
      return { ...state, triviaQuestions: payload };
    case SET_IS_LOADING:
      console.log('reached SET_IS_LOADING, action = ', action);
      return { ...state, isLoading: payload };
    default:
      return state;
  }
};
