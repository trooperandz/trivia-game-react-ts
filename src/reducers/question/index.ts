import {
  SET_TRIVIA_QUESTIONS,
  SET_ACTIVE_QUESTION,
  SET_API_ERROR,
} from 'actions/actionTypes';

export const initialState = {
  triviaQuestions: [],
  activeQuestion: 0,
  apiError: '',
};

export const questionReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_TRIVIA_QUESTIONS:
      return { ...state, triviaQuestions: payload };
    case SET_ACTIVE_QUESTION:
      return { ...state, activeQuestion: payload };
    case SET_API_ERROR:
      return { ...state, apiError: payload };
    default:
      return state;
  }
};
