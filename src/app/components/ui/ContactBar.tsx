import { EmailIcon } from '@portfolio/icons/EmailIcon';
import { GithubIcon } from '@portfolio/icons/GithubIcon';
import { LinkedInIcon } from '@portfolio/icons/LinkedInIcon';
import { PhoneIcon } from '@portfolio/icons/PhoneIcon';

export const ContactBar = () => {
  return (
    <div className='hidden fixed bottom-0 right-0 w-16 flex-col items-center gap-8 md:flex'>
      <a
        href='https://www.linkedin.com/in/yuri-souza-b26bb3180/'
        target='_blank'>
        <LinkedInIcon className='hover:text-text-2' />
      </a>
      <a href='https://github.com/TNury/' target='_blank'>
        <GithubIcon className='hover:text-text-2' />
      </a>
      <a href='tel:+5583981264559'>
        <PhoneIcon className='hover:text-text-2' />
      </a>
      <a href='mailto:example@example.com'>
        <EmailIcon className='hover:text-text-2' />
      </a>
      <div className='h-44'>
        <div className='h-full w-[1.5px] bg-accents-2' />
      </div>
    </div>
  );
};
