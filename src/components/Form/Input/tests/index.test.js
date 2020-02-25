import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Input } from '..';

describe('Input', () => {
  it('renders error text if there is an error', () => {
    const error = 'That was the worst input ever.';
    const { queryByText } = render(
      <Input error={error} label="test" id="test" onSubmit={() => {}} />,
    );

    expect(queryByText(error)).toBeDefined();
  });

  it('fires the onChange prop when an onChange event occurs', () => {
    const label = 'test-label';
    const mockOnChange = jest.fn();
    const { getByLabelText } = render(
      <Input name="test" label={label} id="test" onChange={mockOnChange} />,
    );
    const input = getByLabelText(label);

    fireEvent.change(input, { target: { value: 'hello' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
