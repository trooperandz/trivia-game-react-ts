import { SET_TRIVIA_QUESTIONS, SET_ACTIVE_QUESTION } from 'actions/actionTypes';

const initialState = {
  triviaQuestions: [],
  activeQuestion: 0,
};

export const quizReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_TRIVIA_QUESTIONS:
      return { ...state, triviaQuestions: payload };
    case SET_ACTIVE_QUESTION:
      return { ...state, activeQuestion: payload };
    default:
      return state;
  }
};
