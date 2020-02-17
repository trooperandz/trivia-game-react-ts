import { SET_TRIVIA_QUESTIONS } from 'actions/actionTypes';

const initialState = {
  triviaQuestions: [],
};

export const questionsReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_TRIVIA_QUESTIONS:
      console.log('reached SET_TRIVIA_QUESTIONS, action = ', action);
      return { ...state, triviaQuestions: payload };
    default:
      return state;
  }
};
