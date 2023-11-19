import { useEffect, useState } from 'react';

type Threshold = 0 | 1 | 2;

export const useHeaderThreshold = (): Threshold => {
  const [threshold, setThreshold] = useState<Threshold>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Enables the header visibility controls
      if (scrollY > 500 && threshold !== 2) {
        setThreshold(2);

        return;
      }

      // Enables the header background
      if (scrollY > 50 && scrollY < 500 && threshold !== 1) {
        setThreshold(1);

        return;
      }

      // Disables the header background
      if (scrollY < 50 && threshold !== 0) {
        setThreshold(0);

        return;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return threshold;
};
