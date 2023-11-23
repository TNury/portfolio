import { NavLinks } from '@portfolio/components/layout/header/nav-links/NavLinks';

export const ExtendedNav = () => {
  return (
    <nav className='hidden md:flex h-full w-full max-w-screen-lg items-center justify-end px-16'>
      <NavLinks className='items-center' />
    </nav>
  );
};
