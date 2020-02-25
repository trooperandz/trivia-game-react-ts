import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Button } from '..';

describe('Button', () => {
  it('renders the correct children', () => {
    const buttonText = 'Test Button';
    const { queryByText } = render(
      <Button onSubmit={() => {}}>{buttonText}</Button>,
    );

    expect(queryByText(buttonText)).toBeDefined();
  });

  it('calls the onSubmit function on the click event', () => {
    const mockSubmit = jest.fn();
    const dataTest = 'generic-btn';
    const { getByTestId } = render(
      <Button onSubmit={mockSubmit} dataTest={dataTest}>
        The Best Button
      </Button>,
    );

    fireEvent.click(getByTestId(dataTest));
    expect(mockSubmit).toHaveBeenCalledTimes(1);
  });
});
