'use client';

import { useEffect, useRef } from 'react';

import ReactDOM from 'react-dom';

import Image from 'next/image';

type DrawerProps = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
};

export const Drawer: React.FC<DrawerProps> = ({ open, children, onClose }) => {
  const bodyRef = useRef<HTMLBodyElement>(null);

  useEffect(() => {
    bodyRef.current = document.getElementsByTagName('body')[0];

    if (open && bodyRef.current) {
      bodyRef.current.style.overflow = 'hidden';
    }

    return () => {
      if (bodyRef.current) {
        bodyRef.current.style.overflow = 'auto';
      }
    };
  }, [onClose]);

  if (!bodyRef.current) return null;

  return ReactDOM.createPortal(
    <div
      data-open={open}
      className='group fixed inset-0 z-20 flex justify-end data-[open="false"]:pointer-events-none'>
      <div
        onClick={onClose}
        className='absolute inset-0 bg-accents-1-opaque backdrop-blur-sm transition-all duration-75 group-data-[open="false"]:opacity-0'
        role='button'
      />
      <div className='relative h-full w-3/5 min-w-fit bg-black p-4 transition-all duration-75 group-data-[open="false"]:translate-x-full'>
        <Image
          onClick={onClose}
          src='/assets/media/svg/close.svg'
          alt='close_icon'
          role='button'
          width={32}
          height={32}
          className='absolute right-4 top-4 h-10 w-10 z-20'
        />
        {children}
      </div>
    </div>,
    bodyRef.current
  );
};
