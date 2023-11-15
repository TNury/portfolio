import Image from 'next/image';

import { Section } from '@portfolio/components/ui/Section';

export const WhatIDo = () => {
  return (
    <>
      <Section className='flex flex-col gap-20 md:hidden'>
        <h2 className='text-4xl font-bold text-text-2 sm:text-5xl'>
          O que eu faço.
        </h2>
        <div className='flex flex-col gap-16'>
          <p className='text-lg text-text-1 sm:text-xl'>
            Lorem ipsum dolor sit amet consectetur. Vulputate augue at ultrices
            mauris convallis interdum tincidunt. Sed eu malesuada pellentesque
            ut.
          </p>
          <div className='flex w-full flex-col items-center gap-28'>
            <Image
              src='assets/media/svg/desktop.svg'
              alt='desktop_icon'
              width={481}
              height={367}
              className='h-auto w-[300px] sm:h-[350px] sm:w-auto'
            />
            <Image
              src='assets/media/svg/laptop.svg'
              alt='laptop_icon'
              width={535}
              height={367}
              className='h-auto w-[250px] sm:h-[300px] sm:w-auto'
            />
            <Image
              src='assets/media/svg/tablet.svg'
              alt='tablet_icon'
              width={278}
              height={367}
              className='h-auto w-[150px] sm:h-[250px] sm:w-auto'
            />
            <Image
              src='assets/media/svg/smartphone.svg'
              alt='phone_icon'
              width={175}
              height={367}
              className='h-auto w-[100px] sm:h-[200px] sm:w-auto'
            />
          </div>
          <p className='text-lg text-text-1 sm:text-xl'>
            Lorem ipsum dolor sit amet consectetur. Vulputate augue at ultrices
            mauris convallis interdum tincidunt. Sed eu malesuada pellentesque
            ut. Ac vestibulum eu enim mi quis sagittis egestas. Gravida quis
            arcu metus lacus tristique amet augue.
          </p>
        </div>
      </Section>
      <Section className='hidden gap-16 md:flex'>
        <div className='flex w-1/2 flex-col gap-20 h-fit sticky top-28'>
          <h2 className='text-4xl font-bold text-text-2 sm:text-5xl'>
            O que eu faço.
          </h2>
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
              Gravida quis arcu metus lacus tristique amet augue.
            </p>
          </div>
        </div>
        <div className='flex w-1/2 flex-col items-center gap-28'>
          <Image
            src='assets/media/svg/desktop.svg'
            alt='desktop_icon'
            width={481}
            height={367}
            className='h-auto w-[300px] sm:h-[350px] sm:w-auto'
          />
          <Image
            src='assets/media/svg/laptop.svg'
            alt='laptop_icon'
            width={535}
            height={367}
            className='h-auto w-[250px] sm:h-[300px] sm:w-auto'
          />
          <Image
            src='assets/media/svg/tablet.svg'
            alt='tablet_icon'
            width={278}
            height={367}
            className='h-auto w-[150px] sm:h-[250px] sm:w-auto'
          />
          <Image
            src='assets/media/svg/smartphone.svg'
            alt='phone_icon'
            width={175}
            height={367}
            className='h-auto w-[100px] sm:h-[200px] sm:w-auto'
          />
        </div>
      </Section>
    </>
  );
};
