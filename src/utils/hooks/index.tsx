import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

/**
 * Return window size on initial render and on window resize event
 */
export const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState({});

  const isWindowAvailable = typeof window === 'object';

  // Initial window size
  useEffect(() => {
    if (isWindowAvailable) {
      setWindowSize({
        viewportWidth: window.innerWidth,
        viewportHeight: window.innerHeight,
      });
    }

    return undefined;
  }, []);

  // Run on resize event
  useEffect(() => {
    if (!isWindowAvailable) {
      return undefined;
    }

    const handleResize = () => {
      setWindowSize({
        viewportWidth: window.innerWidth,
        viewportHeight: window.innerHeight,
      });
    };

    const debouncedResize = debounce(handleResize, 300);

    window.addEventListener('resize', debouncedResize);
  });

  return windowSize;
};
