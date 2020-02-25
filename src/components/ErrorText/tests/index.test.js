import React from 'react';
import { render } from '@testing-library/react';

import { ErrorText } from '..';

describe('ErrorText', () => {
  it('renders the correct error text', () => {
    const errorText = 'This is an error!';
    const { queryByText } = render(<ErrorText>{errorText}</ErrorText>);

    expect(queryByText(errorText)).toBeDefined();
  });
});
