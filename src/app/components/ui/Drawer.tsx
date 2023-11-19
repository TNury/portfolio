'use client';

import { useEffect } from 'react';

import ReactDOM from 'react-dom';

import Image from 'next/image';

type DrawerProps = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
};

export const Drawer: React.FC<DrawerProps> = ({ open, children, onClose }) => {
  useEffect(() => {
    const bodyRef = document.getElementsByTagName('body')[0];
    if (open) {
      bodyRef.style.overflow = 'hidden';
    }

    return () => {
      bodyRef.style.overflow = 'auto';
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <div
      data-open={open}
      className='group fixed inset-0 z-20 flex justify-end data-[open="false"]:pointer-events-none'>
      <div
        onClick={onClose}
        className='absolute inset-0 bg-accents-1-opaque backdrop-blur-sm transition-all duration-200 group-data-[open="false"]:opacity-0'
        role='button'
      />
      <div className='relative h-full w-1/2 min-w-min bg-black p-4 transition-all duration-200 group-data-[open="false"]:translate-x-full'>
        <Image
          onClick={onClose}
          src='/assets/media/svg/close.svg'
          alt='close_icon'
          role='button'
          width={24}
          height={24}
          className='absolute right-4 top-4 h-fit w-fit'
        />
        {children}
      </div>
    </div>,
    document.getElementsByTagName('body')[0]
  );
};
