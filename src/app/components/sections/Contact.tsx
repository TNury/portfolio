import { EmailIcon } from '@portfolio/icons/EmailIcon';
import { GithubIcon } from '@portfolio/icons/GithubIcon';
import { LinkedInIcon } from '@portfolio/icons/LinkedInIcon';
import { PhoneIcon } from '@portfolio/icons/PhoneIcon';

import { Section } from '@portfolio/components/ui/Section';

export const Contact = () => {
  return (
    <Section
      id='contato'
      className='flex flex-col items-center gap-20 text-center'>
      <h2 className='text-4xl font-bold text-text-2 sm:text-5xl'>Contato.</h2>
      <div className='flex flex-col gap-8'>
        <p className='text-lg text-text-1 sm:max-w-xl sm:text-xl'>
          Atualmente estou em busca de uma oportunidade de trabalho como
          Desenvolvedor Front-end. Caso queira entrar em contato comigo, você
          pode me encontrar através das minhas redes sociais ou por email/telefone.
        </p>
        <div className='flex w-full justify-center gap-8 md:hidden'>
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
        </div>
      </div>
    </Section>
  );
};
