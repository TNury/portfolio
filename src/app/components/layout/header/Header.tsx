'use client';

import { CompactNav } from '@portfolio/components/layout/header/compact-nav/CompactNav';
import { ExtendedNav } from '@portfolio/components/layout/header/extended-nav/ExtendedNav';

import { useHeaderThreshold } from '@portfolio/hooks/useHeaderStatus';
import { useScrollDirection } from '@portfolio/hooks/useScrollDirection';
import { useViewport } from '@portfolio/hooks/useViewport';

export const Header = () => {
  const threshold = useHeaderThreshold();
  const scrollDirection = useScrollDirection();
  const viewport = useViewport();

  return (
    <header
      data-has-background={threshold >= 1}
      data-hidden={scrollDirection === 'down' && threshold === 2}
      className='fixed left-0 right-0 top-0 z-10 flex h-14 justify-center border-b border-transparent shadow-md transition-all duration-200 data-[hidden="true"]:-translate-y-full data-[has-background="true"]:bg-[#00000088]  data-[has-background="true"]:backdrop-blur-sm md:h-20'>
      {viewport === 'sm' || viewport === 'xs' ? (
        <CompactNav />
      ) : (
        <ExtendedNav />
      )}
    </header>
  );
};
