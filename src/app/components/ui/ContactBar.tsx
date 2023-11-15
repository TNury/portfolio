import { EmailIcon } from '@portfolio/icons/EmailIcon';
import { GithubIcon } from '@portfolio/icons/GithubIcon';
import { LinkedInIcon } from '@portfolio/icons/LinkedInIcon';
import { PhoneIcon } from '@portfolio/icons/PhoneIcon';

export const ContactBar = () => {
  return (
    <div className='fixed bottom-0 right-0 z-10 hidden w-16 flex-col items-center gap-8 md:flex'>
      <a
        href='https://www.linkedin.com/in/yuri-souza-b26bb3180/'
        target='_blank'
        className='group relative flex items-center'>
        <span className='absolute leading-none -left-80 hidden w-80 pr-4 text-right text-lg text-text-2 group-hover:block'>
          Yuri Souza
        </span>
        <LinkedInIcon className='group-hover:text-text-2' />
      </a>
      <a
        href='https://github.com/TNury/'
        target='_blank'
        className='group relative flex items-center'>
        <span className='absolute leading-none -left-80 hidden w-80 pr-4 text-right text-lg text-text-2 group-hover:block'>
          TNury
        </span>
        <GithubIcon className='group-hover:text-text-2' />
      </a>
      <a href='tel:+5583981264559' className='group relative flex items-center'>
        <span className='absolute leading-none -left-80 hidden w-80 pr-4 text-right text-lg text-text-2 group-hover:block'>
          +55 83 98126-4559
        </span>
        <PhoneIcon className='group-hover:text-text-2' />
      </a>
      <a href='mailto:yurdesou@gmail.com' className='group relative flex items-center'>
        <span className='absolute leading-none -left-80 hidden w-80 pr-4 text-right text-lg text-text-2 group-hover:block'>
          yurdesou@gmail.com
        </span>
        <EmailIcon className='group-hover:text-text-2' />
      </a>
      <div className='h-44'>
        <div className='h-full w-[1.5px] bg-accents-2' />
      </div>
    </div>
  );
};
