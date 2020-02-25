import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Radio } from '..';

describe('Radio', () => {
  it('fires the onChange prop when a click event occurs', () => {
    const label = 'test-label';
    const mockOnChange = jest.fn();
    const { getByLabelText } = render(
      <Radio
        value="test"
        label={label}
        checked={false}
        onChange={mockOnChange}
      />,
    );
    const radioButton = getByLabelText(label);

    fireEvent.click(radioButton);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
