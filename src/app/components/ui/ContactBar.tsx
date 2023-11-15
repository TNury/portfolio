'use client';

import { useEffect, useState } from 'react';

import { EmailIcon } from '@portfolio/icons/EmailIcon';
import { GithubIcon } from '@portfolio/icons/GithubIcon';
import { LinkedInIcon } from '@portfolio/icons/LinkedInIcon';
import { PhoneIcon } from '@portfolio/icons/PhoneIcon';

import { useViewport } from '@portfolio/hooks/useViewport';

export const ContactBar = () => {
  const viewport = useViewport();
  const [openContactDetails, setOpenContactDetails] = useState(false);

  useEffect(() => {
    if (viewport !== 'xs' && viewport !== 'sm') {
      const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const documentHeight = document.body.scrollHeight;

        if (scrollPosition >= documentHeight - 300) {
          setOpenContactDetails(true);
        } else {
          setOpenContactDetails(false);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className='pointer-events-none fixed bottom-0 left-0 right-0 z-10 hidden flex-col items-center gap-8 md:flex'>
      <div className='flex w-full max-w-screen-lg justify-end'>
        <div className='pointer-events-auto flex w-16 flex-col items-center gap-8'>
          <a
            href='https://www.linkedin.com/in/yuri-souza-b26bb3180/'
            target='_blank'
            className='group relative flex items-center'>
            <span
              data-force-show={openContactDetails}
              className='absolute -left-80 hidden w-80 pr-4 text-right text-lg leading-none text-text-2 group-hover:block md:data-[force-show="true"]:block'>
              Yuri Souza
            </span>
            <LinkedInIcon
              data-force-show={openContactDetails}
              className='group-hover:text-text-2 md:data-[force-show="true"]:text-text-2'
            />
          </a>
          <a
            href='https://github.com/TNury/'
            target='_blank'
            className='group relative flex items-center'>
            <span
              data-force-show={openContactDetails}
              className='absolute -left-80 hidden w-80 pr-4 text-right text-lg leading-none text-text-2 group-hover:block md:data-[force-show="true"]:block'>
              TNury
            </span>
            <GithubIcon
              data-force-show={openContactDetails}
              className='group-hover:text-text-2 md:data-[force-show="true"]:text-text-2'
            />
          </a>
          <a
            href='tel:+5583981264559'
            className='group relative flex items-center'>
            <span
              data-force-show={openContactDetails}
              className='absolute -left-80 hidden w-80 pr-4 text-right text-lg leading-none text-text-2 group-hover:block md:data-[force-show="true"]:block'>
              +55 83 98126-4559
            </span>
            <PhoneIcon
              data-force-show={openContactDetails}
              className='group-hover:text-text-2 md:data-[force-show="true"]:text-text-2'
            />
          </a>
          <a
            href='mailto:yurdesou@gmail.com'
            className='group relative flex items-center'>
            <span
              data-force-show={openContactDetails}
              className='absolute -left-80 hidden w-80 pr-4 text-right text-lg leading-none text-text-2 group-hover:block md:data-[force-show="true"]:block'>
              yurdesou@gmail.com
            </span>
            <EmailIcon
              data-force-show={openContactDetails}
              className='group-hover:text-text-2 md:data-[force-show="true"]:text-text-2'
            />
          </a>
          <div className='h-36'>
            <div className='h-full w-[1.5px] bg-accents-2' />
          </div>
        </div>
      </div>
    </div>
  );
};
