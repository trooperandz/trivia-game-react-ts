import {
  SET_TRIVIA_QUESTIONS,
  SET_ACTIVE_QUESTION,
  SET_IS_QUIZ_COMPLETED,
  SET_CATEGORY,
} from 'actions/actionTypes';

const initialState = {
  triviaQuestions: [],
  activeQuestion: 0,
  category: '',
  isQuizCompleted: false,
};

export const quizReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_TRIVIA_QUESTIONS:
      return { ...state, triviaQuestions: payload };
    case SET_ACTIVE_QUESTION:
      return { ...state, activeQuestion: payload };
    case SET_CATEGORY:
      return { ...state, category: payload };
    case SET_IS_QUIZ_COMPLETED:
      return { ...state, isQuizCompleted: payload };
    default:
      return state;
  }
};
