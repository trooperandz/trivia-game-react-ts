import { SET_IS_QUIZ_COMPLETED, SET_CATEGORY } from 'actions/actionTypes';

const initialState = {
  category: '',
  isQuizCompleted: false,
};

export const quizReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CATEGORY:
      return { ...state, category: payload };
    case SET_IS_QUIZ_COMPLETED:
      return { ...state, isQuizCompleted: payload };
    default:
      return state;
  }
};
