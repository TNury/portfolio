import Image from 'next/image';

import { Section } from '@portfolio/components/ui/Section';
import { Technology } from '@portfolio/components/ui/Technology';

export const About = () => {
  return (
    <Section id='about' className='flex flex-col gap-20'>
      <h2 className='text-4xl font-bold text-text-2 sm:text-5xl'>Sobre mim.</h2>
      <div className='flex flex-col gap-16 md:flex-row md:items-start'>
        <div className='flex flex-col gap-8 md:w-1/2'>
          <p className='text-lg text-text-1 sm:text-xl'>
            Olá! Meu nome é Yuri. Sou um desenvolvedor de software que no
            momento atua como freelancer. Tenho experiência com desenvolvimento
            web e mobile utilizando as tecnologias listadas abaixo.
          </p>
          <div className='flex flex-col gap-2'>
            <h3 className='text-lg font-bold text-text-2 sm:text-xl-header'>
              Web
            </h3>
            <div className='flex flex-col gap-1 sm:grid sm:grid-cols-2'>
              <Technology name='JavaScript (ES6+)' />
              <Technology name='TypeScript' />
              <Technology name='React' />
              <Technology name='Next.JS (13 & 14)' />
              <Technology name='MUI V4 & V5' />
              <Technology name='TailwindCSS' />
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <h3 className='text-lg font-bold text-text-2 sm:text-xl-header'>
              Mobile
            </h3>
            <div className='flex flex-col gap-1'>
              <Technology name='Dart' />
              <Technology name='Flutter' />
            </div>
          </div>
        </div>
        <div className='flex w-full items-center justify-center md:w-1/2'>
          <div className='group w-full max-w-sm border-2 border-accents-2'>
            <Image
              src='/assets/media/jpg/profile.JPG'
              width={1600}
              height={1600}
              className='h-auto w-full object-cover'
              alt='profile'
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
