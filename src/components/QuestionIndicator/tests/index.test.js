import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { QuestionIndicator } from '..';

const renderComponent = props =>
  render(
    <QuestionIndicator
      questionNumber={1}
      triviaQuestions={[{ category: 'art' }, { category: 'music' }]}
      onProgressClick={() => {}}
      {...props}
    />,
  );

describe('QuestionIndicator', () => {
  it('should call the click handler on the click event', () => {
    const onProgressClick = jest.fn();
    const { getByText } = renderComponent({ onProgressClick });

    fireEvent.click(getByText('2'));
    expect(onProgressClick).toHaveBeenCalled();
  });

  it('should display the correct question number', () => {
    const questionNumber = 0;
    const { getByText } = renderComponent({ questionNumber });

    expect(getByText('1')).toBeDefined();
  });
});
