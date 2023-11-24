'use client';

import { useEffect, useState } from 'react';

import { EmailIcon } from '@portfolio/icons/EmailIcon';
import { GithubIcon } from '@portfolio/icons/GithubIcon';
import { LinkedInIcon } from '@portfolio/icons/LinkedInIcon';

import { useViewport } from '@portfolio/hooks/useViewport';

import { WhatsappIcon } from './icons/WhatsappIcon';

export const ContactBar = () => {
  const viewport = useViewport();
  const [openContactDetails, setOpenContactDetails] = useState(false);

  useEffect(() => {
    if (viewport !== 'xs' && viewport !== 'sm') {
      const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const documentHeight = document.body.scrollHeight;

        if (scrollPosition >= documentHeight - 100) {
          setOpenContactDetails(true);
        } else {
          setOpenContactDetails(false);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [viewport]);

  return (
    <div className='pointer-events-none fixed bottom-0 left-0 right-0 z-10 hidden flex-col items-center gap-8 md:flex'>
      <div className='flex w-full max-w-screen-lg justify-end'>
        <div className='pointer-events-auto flex w-16 flex-col items-center gap-8'>
          <a
            href='https://www.linkedin.com/in/yuri-souza-b26bb3180/'
            target='_blank'
            data-force-show={openContactDetails}
            className='group relative flex items-center'>
            <div className='absolute -left-80 hidden w-80 items-end justify-end pr-4 group-hover:flex md:group-data-[force-show="true"]:flex'>
              <span className='w-fit bg-background text-lg leading-none text-text-2'>
                Yuri Souza
              </span>
            </div>
            <LinkedInIcon className='group-hover:text-text-2 md:group-data-[force-show="true"]:text-text-2' />
          </a>
          <a
            href='https://github.com/TNury/'
            target='_blank'
            data-force-show={openContactDetails}
            className='group relative flex items-center'>
            <div className='absolute -left-80 hidden w-80 items-end justify-end pr-4 group-hover:flex md:group-data-[force-show="true"]:flex'>
              <span className='w-fit bg-background text-lg leading-none text-text-2'>
                TNury
              </span>
            </div>

            <GithubIcon className='group-hover:text-text-2 md:group-data-[force-show="true"]:text-text-2' />
          </a>
          <a
            href='https://api.whatsapp.com/send?phone=5583981264559&text=Ol%C3%A1,%20estava%20navegando%20pelo%20seu%20website%20em%20me%20interessei%20no%20seu%20trabalho.'
            target='_blank'
            data-force-show={openContactDetails}
            className='group relative flex items-center'>
            <div className='absolute -left-80 hidden w-80 items-end justify-end pr-4 group-hover:flex md:group-data-[force-show="true"]:flex'>
              <span className='w-fit bg-background text-lg leading-none text-text-2'>
                +55 83 98126-4559
              </span>
            </div>

            <WhatsappIcon className='group-hover:text-text-2 md:group-data-[force-show="true"]:text-text-2' />
          </a>
          <a
            href='mailto:yurdesou@gmail.com'
            data-force-show={openContactDetails}
            className='group relative flex items-center'>
            <div className='absolute -left-80 hidden w-80 items-end justify-end pr-4 group-hover:flex md:group-data-[force-show="true"]:flex'>
              <span className='w-fit bg-background text-lg leading-none text-text-2'>
                yurdesou@gmail.com
              </span>
            </div>
            <EmailIcon className='group-hover:text-text-2 md:group-data-[force-show="true"]:text-text-2' />
          </a>
          <div className='h-44'>
            <div className='h-full w-[1.5px] bg-accents-2' />
          </div>
        </div>
      </div>
    </div>
  );
};
