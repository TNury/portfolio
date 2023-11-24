import { EmailIcon } from '@portfolio/icons/EmailIcon';
import { GithubIcon } from '@portfolio/icons/GithubIcon';
import { LinkedInIcon } from '@portfolio/icons/LinkedInIcon';
import { WhatsappIcon } from '@portfolio/icons/WhatsappIcon';

import { cn } from '@portfolio/lib/lib';

type ContactInfoProps = React.HTMLAttributes<HTMLDivElement>;

export const ContactInfo: React.FC<ContactInfoProps> = ({
  className,
  ...restOfProps
}) => {
  return (
    <div
      className={cn(
        'flex w-full flex-col items-center justify-center gap-8 md:hidden',
        className
      )}
      {...restOfProps}>
      <div className='flex flex-col items-center gap-2'>
        <h3 className='text-lg font-bold text-text-2 sm:text-xl-header'>
          Whatsapp
        </h3>
        <a
          href='https://api.whatsapp.com/send?phone=5583981264559&text=Ol%C3%A1,%20estava%20navegando%20pelo%20seu%20website%20e%20me%20interessei%20no%20seu%20trabalho.'
          className='flex items-center gap-2'>
          <WhatsappIcon className='hover:text-text-2' />
          <span className='text-base text-text-1 sm:text-lg'>
            +55 (83) 98126-4559
          </span>
        </a>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <h3 className='text-lg font-bold text-text-2 sm:text-xl-header'>
          Redes Sociais
        </h3>
        <div className='flex gap-8'>
          <a
            href='https://www.linkedin.com/in/yuri-souza-b26bb3180/'
            target='_blank'>
            <LinkedInIcon className='hover:text-text-2' />
          </a>
          <a href='https://github.com/TNury/' target='_blank'>
            <GithubIcon className='hover:text-text-2' />
          </a>
          <a href='mailto:yurdesou@gmail.com'>
            <EmailIcon className='hover:text-text-2' />
          </a>
        </div>
      </div>
    </div>
  );
};
