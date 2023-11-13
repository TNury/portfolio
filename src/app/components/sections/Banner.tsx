import Image from 'next/image';

import { Button } from '@portfolio/components/ui/Button';

export const Banner = () => {
  return (
    <section className='relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-28'>
      <div className='flex flex-col gap-8'>
        <p className='text-lg text-text-1'>Olá, meu nome é</p>
        <h1 className='text-5xl text-text-2'>Yuri Souza.</h1>
        <p className='text-lg text-text-1'>
          Sou um Engenheiro de Software apaixonado por criar experiências
          digitais envolventes e funcionais.
        </p>
        <div className='flex flex-col gap-4'>
          <Button>Conheça meu trabalho.</Button>
          <Button variant='secondary'>Mais sobre mim.</Button>
        </div>
      </div>
      <div className='absolute left-0 -z-10 h-[90vh] w-[90vh]'>
        <Image alt='react_icon' src='assets/media/svg/react_icon.svg' fill />
      </div>
    </section>
  );
};
