import {
  setTriviaQuestions,
  setActiveQuestion,
  loadTriviaQuestions,
  setApiError,
} from '..';
import {
  SET_TRIVIA_QUESTIONS,
  SET_ACTIVE_QUESTION,
  SET_API_ERROR,
} from 'actions/actionTypes';

describe('questions actions', () => {
  it('should create an action to set trivia questions', () => {
    const triviaQuestions = [{ category: 'history' }, { category: 'science' }];
    const expectedAction = {
      type: SET_TRIVIA_QUESTIONS,
      payload: triviaQuestions,
    };
    const action = setTriviaQuestions(triviaQuestions);

    expect(action).toEqual(expectedAction);
  });

  it('should create an action to set the active question', () => {
    const activeQuestion = 246;
    const expectedAction = {
      type: SET_ACTIVE_QUESTION,
      payload: activeQuestion,
    };
    const action = setActiveQuestion(activeQuestion);

    expect(action).toEqual(expectedAction);
  });

  it('should create an action to set api errors', () => {
    const apiError = 'An incorrect parameter was provided.';
    const expectedAction = {
      type: SET_API_ERROR,
      payload: apiError,
    };
    const action = setApiError(apiError);

    expect(action).toEqual(expectedAction);
  });

  // TODO: loadTriviaQuestions
});
