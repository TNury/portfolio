import Image from 'next/image';

import { Section } from '@portfolio/components/ui/Section';

export const WhatIDo = () => {
  return (
    <Section className='flex flex-col gap-20'>
      <h2 className='text-4xl font-bold text-text-2 sm:text-5xl'>O que eu faço.</h2>
      <div className='flex flex-col gap-16'>
        <p className='text-lg sm:text-xl text-text-1'>
          Lorem ipsum dolor sit amet consectetur. Vulputate augue at ultrices
          mauris convallis interdum tincidunt. Sed eu malesuada pellentesque ut.
        </p>
        <div className='flex w-full flex-col items-center gap-28'>
          <Image
            src='assets/media/svg/desktop.svg'
            alt='desktop_icon'
            width={481}
            height={367}
            className='h-auto w-[300px] sm:w-auto sm:h-[350px]'
          />
          <Image
            src='assets/media/svg/laptop.svg'
            alt='laptop_icon'
            width={535}
            height={367}
            className='h-auto w-[250px] sm:w-auto sm:h-[300px]'
          />
          <Image
            src='assets/media/svg/tablet.svg'
            alt='tablet_icon'
            width={278}
            height={367}
            className='h-auto w-[150px] sm:w-auto sm:h-[250px]'
          />
          <Image
            src='assets/media/svg/smartphone.svg'
            alt='phone_icon'
            width={175}
            height={367}
            className='h-auto w-[100px] sm:w-auto sm:h-[200px]'
          />
        </div>
        <p className='text-lg sm:text-xl text-text-1'>
          Lorem ipsum dolor sit amet consectetur. Vulputate augue at ultrices
          mauris convallis interdum tincidunt. Sed eu malesuada pellentesque ut.
          Ac vestibulum eu enim mi quis sagittis egestas. Gravida quis arcu
          metus lacus tristique amet augue.
        </p>
      </div>
    </Section>
  );
};
