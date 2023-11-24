import { NavLinks } from '@portfolio/components/layout/header/nav-links/NavLinks';

import { LinksProps } from '@portfolio/types/header.types';

type ExtendedNavProps = {
  links: LinksProps;
};

export const ExtendedNav: React.FC<ExtendedNavProps> = ({ links }) => {
  return (
    <nav className='hidden h-full w-full max-w-screen-lg items-center justify-end px-16 md:flex'>
      <NavLinks className='items-center h-full' links={links} />
    </nav>
  );
};
