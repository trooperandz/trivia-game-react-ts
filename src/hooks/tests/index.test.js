// TODO: need to test useWindowResize() also

import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { useMediaQuery } from '..';

const getMatchMediaMock = (matches = false) => {
  const mediaQueryList = {
    matches,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };

  const matchMedia = jest.fn(() => mediaQueryList);

  return { matchMedia, mediaQueryList };
};

const Demo = ({ query }) => {
  const isNarrow = useMediaQuery(query);
  return isNarrow ? 'narrow screen' : 'widescreen';
};

describe('useMediaQuery', () => {
  beforeEach(cleanup);

  it('should create mediaQueryList for corresponding query', () => {
    const { matchMedia } = getMatchMediaMock();
    window.matchMedia = matchMedia;

    render(<Demo query="(min-width: 320) and (max-width: 425px)" />);

    expect(matchMedia).toBeCalledWith(
      '(min-width: 320) and (max-width: 425px)',
    );
    expect(matchMedia).toBeCalledTimes(1);
  });
});
