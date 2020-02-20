import { SET_TRIVIA_QUESTIONS, SET_ACTIVE_QUESTION } from 'actions/actionTypes';

const initialState = {
  triviaQuestions: [],
  activeQuestion: 0,
};

export const questionsReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_TRIVIA_QUESTIONS:
      console.log('reached SET_TRIVIA_QUESTIONS, action = ', action);
      return { ...state, triviaQuestions: payload };
    case SET_ACTIVE_QUESTION:
      return { ...state, activeQuestion: payload };
    default:
      return state;
  }
};
