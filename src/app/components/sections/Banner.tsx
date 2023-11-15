import Image from 'next/image';

import { Button } from '@portfolio/components/ui/Button';
import { Section } from '@portfolio/components/ui/Section';

export const Banner = () => {
  return (
    <Section className='relative flex min-h-screen items-center justify-center overflow-hidden '>
      <div className='flex flex-col gap-8'>
        <p className='text-lg text-text-1 sm:text-xl'>Olá, meu nome é</p>
        <h1 className='text-5xl font-bold text-text-2 sm:text-6xl'>Yuri Souza.</h1>
        <p className='text-lg text-text-1 sm:text-xl sm:max-w-xl'>
          Sou um Engenheiro de Software apaixonado por criar experiências
          digitais envolventes e funcionais.
        </p>
        <div className='flex flex-col gap-4'>
          <Button>Conheça meu trabalho.</Button>
          <Button variant='secondary'>Mais sobre mim.</Button>
        </div>
      </div>
      <div className='absolute left-0 -z-10 h-[90vh] w-[90vh] animate-spin-slow sm:left-[15vh]'>
        <Image alt='react_icon' src='assets/media/svg/react_icon.svg' fill />
      </div>
    </Section>
  );
};
