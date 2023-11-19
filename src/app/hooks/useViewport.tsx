import { useLayoutEffect, useState } from 'react';

export const useViewport = () => {
  const [viewport, setViewport] = useState('');

  useLayoutEffect(() => {
    const breakpoints = {
      xs: 0,
      sm: 640,
      md: 1024,
      lg: 1440,
      xl: 1920,
    };

    const updateViewport = () => {
      const width = window.innerWidth;
      const keys = Object.keys(breakpoints);
      for (let i = keys.length - 1; i >= 0; i--) {
        if (width >= breakpoints[keys[i]]) {
          setViewport(keys[i]);
          break;
        }
      }
    };

    window.addEventListener('resize', updateViewport);
    updateViewport();

    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  return viewport;
};
