import { setIsQuizCompleted, setCategory } from '..';
import { SET_IS_QUIZ_COMPLETED, SET_CATEGORY } from 'actions/actionTypes';

describe('quiz actions', () => {
  it('should create an action to set the quiz completed status', () => {
    const isQuizCompleted = true;
    const expectedAction = {
      type: SET_IS_QUIZ_COMPLETED,
      payload: isQuizCompleted,
    };
    const action = setIsQuizCompleted(isQuizCompleted);

    expect(action).toEqual(expectedAction);
  });

  it('should create an action to set the category', () => {
    const category = 'Computer Science';
    const expectedAction = {
      type: SET_CATEGORY,
      payload: category,
    };
    const action = setCategory(category);

    expect(action).toEqual(expectedAction);
  });
});
