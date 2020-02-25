import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { QuestionFooter } from '..';

jest.mock('hooks', () => ({
  useMediaQuery: () => {},
}));

const renderComponent = props =>
  render(
    <Router>
      <QuestionFooter
        activeQuestion={2}
        onNavigationClick={() => {}}
        triviaQuestions={[{ category: 'art' }, { category: 'music' }]}
        isQuizCompleted={true}
        {...props}
      />
    </Router>,
  );

describe('QuestionFooter', () => {
  it('should only render the submit button if the quiz is completed', () => {
    const dataTest = 'submit-quiz-btn';
    const { getByTestId } = renderComponent();

    expect(getByTestId(dataTest)).toBeDefined();
  });

  it('should not render the submit button if the quiz is incomplete', () => {
    const dataTest = 'submit-quiz-btn';
    const { queryByTestId } = renderComponent({ isQuizCompleted: false });

    expect(queryByTestId(dataTest)).toBeNull();
  });
});
