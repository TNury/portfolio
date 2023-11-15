import Image from 'next/image';

import { Section } from '@portfolio/components/ui/Section';
import { Technology } from '@portfolio/components/ui/Technology';

export const About = () => {
  return (
    <Section className='flex flex-col gap-20'>
      <h2 className='text-4xl font-bold text-text-2 sm:text-5xl'>Sobre mim.</h2>
      <div className='flex flex-col gap-16 md:flex-row md:items-start'>
        <div className='flex flex-col gap-8 md:w-1/2'>
          <div className='flex flex-col gap-4'>
            <p className='text-lg text-text-1 sm:text-xl'>
              Lorem ipsum dolor sit amet consectetur. Vulputate augue at
              ultrices mauris convallis interdum tincidunt. Sed eu malesuada
              pellentesque ut.
            </p>
            <p className='text-lg text-text-1 sm:text-xl'>
              Lorem ipsum dolor sit amet consectetur. Vulputate augue at
              ultrices mauris convallis interdum tincidunt. Sed eu malesuada
              pellentesque ut. Ac vestibulum eu enim mi quis sagittis egestas.
            </p>
            <p className='text-lg text-text-1 sm:text-xl'>
              Gravida quis arcu metus lacus tristique amet augue.
            </p>
          </div>
          <div className='flex flex-col gap-2'>
            <h3 className='text-lg sm:text-xl-header font-bold text-text-2'>Web</h3>
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
            <h3 className='text-lg sm:text-xl-header font-bold text-text-2'>Mobile</h3>
            <div className='flex flex-col gap-1'>
              <Technology name='Dart' />
              <Technology name='Flutter' />
            </div>
          </div>
        </div>
        <div className='flex w-full items-center justify-center md:w-1/2'>
          <div className='border-2 group relative w-full max-w-sm border-accents-2'>
            <Image
              src='/assets/media/jpg/profile.JPG'
              width={1600}
              height={1600}
              className='h-auto w-full object-cover grayscale group-hover:grayscale-0'
              alt='profile'
            />
            <div className='bg-accents-2-opaque absolute inset-0 z-10 group-hover:opacity-0' />
          </div>
        </div>
      </div>
    </Section>
  );
};
