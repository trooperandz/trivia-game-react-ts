import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Button } from '..';

describe('Button', () => {
  it('renders the correct children', () => {
    const buttonText = 'Test Button';
    const { queryByText } = render(
      <Button onClick={() => {}}>{buttonText}</Button>,
    );

    expect(queryByText(buttonText)).toBeDefined();
  });

  it('calls the onClick function on the click event', () => {
    const mockSubmit = jest.fn();
    const dataTest = 'generic-btn';
    const { getByTestId } = render(
      <Button onClick={mockSubmit} dataTest={dataTest}>
        The Best Button
      </Button>,
    );

    fireEvent.click(getByTestId(dataTest));
    expect(mockSubmit).toHaveBeenCalledTimes(1);
  });
});
