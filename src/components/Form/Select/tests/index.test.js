import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { inputParams } from '../../../../utils/form';
import { Select } from '..';

const amountOptions = inputParams.find(param => param.name === 'amount');

const renderComponent = props =>
  render(
    <Select
      label="test"
      name="test"
      id="test"
      onChange={() => {}}
      options={amountOptions.options}
      {...props}
    />,
  );

describe('Select', () => {
  describe('the default "Select..." option', () => {
    it('should render if the field is required and there is no value', () => {
      const { getByText } = renderComponent({
        required: true,
        value: undefined,
      });

      expect(getByText('Select...')).toBeDefined();
    });

    it('should not render if the field is not required and there is a value', () => {
      const { queryByText } = renderComponent({ required: false, value: 2 });

      expect(queryByText('Select...')).toBeNull();
    });
  });

  it('renders error text if there is an error', () => {
    const error = 'You need to select something';
    const { queryByText } = renderComponent({ error });

    expect(queryByText(error)).toBeDefined();
  });

  it('should render the correct number of options', () => {
    const dataTest = 'select-option';
    const { getAllByTestId } = renderComponent({ dataTest });

    expect(getAllByTestId(dataTest)).toHaveLength(amountOptions.options.length);
  });

  it('fires the onChange prop when an onChange event occurs', () => {
    const label = 'test-label';
    const mockOnChange = jest.fn();
    const { getByLabelText } = renderComponent({
      label,
      onChange: mockOnChange,
    });

    const selectOption = getByLabelText(label);

    fireEvent.change(selectOption, { target: { value: 2 } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
