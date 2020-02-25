import React from 'react';
import { render } from '@testing-library/react';

import { Question } from '..';

describe('Question', () => {
  it('should render the correct number of answer choices', () => {
    const answerChoices = ['yes', 'no', 'maybe'];
    const dataTest = 'radio-input';
    const { getAllByTestId } = render(
      <Question
        viewportWidth={1200}
        answerChoices={answerChoices}
        question="test"
        onRadioChange={() => {}}
      />,
    );

    expect(getAllByTestId(dataTest)).toHaveLength(answerChoices.length);
  });
});
