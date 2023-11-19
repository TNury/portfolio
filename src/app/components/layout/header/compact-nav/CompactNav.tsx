'use client';

import { useState } from 'react';

import Image from 'next/image';

import { NavLinks } from '@portfolio/components/layout/header/nav-links/NavLinks';
import { Drawer } from '@portfolio/components/ui/Drawer';

export const CompactNav = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className='flex w-full justify-end p-4'>
      <Image
        onClick={() => setOpen(true)}
        src='/assets/media/svg/menu.svg'
        alt='menu_icon'
        role='button'
        width={32}
        height={32}
        className='h-10 w-10'
      />

      <Drawer open={open} onClose={() => setOpen(false)}>
        <NavLinks
          onLinkClick={() => setOpen(false)}
          className='flex-col items-center justify-center'
        />
      </Drawer>
    </nav>
  );
};
