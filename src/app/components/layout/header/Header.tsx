'use client';

import { CompactNav } from '@portfolio/components/layout/header/compact-nav/CompactNav';
import { ExtendedNav } from '@portfolio/components/layout/header/extended-nav/ExtendedNav';

import { useHeaderThreshold } from '@portfolio/hooks/useHeaderStatus';
import { useScrollDirection } from '@portfolio/hooks/useScrollDirection';

import { LinksProps } from '@portfolio/types/header.types';

type HeaderProps = {
  links: LinksProps;
};

export const Header: React.FC<HeaderProps> = ({ links }) => {
  const threshold = useHeaderThreshold();
  const scrollDirection = useScrollDirection();

  return (
    <header
      data-has-background={threshold >= 1}
      data-hidden={scrollDirection === 'down' && threshold === 2}
      className='fixed left-0 right-0 top-0 z-10 flex justify-center border-b border-transparent shadow-md transition-all duration-200 data-[hidden="true"]:-translate-y-full data-[has-background="true"]:bg-background-opaque  data-[has-background="true"]:backdrop-blur-sm md:h-20'>
      <CompactNav links={links} />

      <ExtendedNav links={links} />
    </header>
  );
};
