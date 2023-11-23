import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@portfolio/components/ui/Button';
import { Section } from '@portfolio/components/ui/Section';

import { BannerContentProps } from '@portfolio/types/project.types';

type BannerProps = {
  bannerProps: BannerContentProps;
};

export const Banner: React.FC<BannerProps> = ({ bannerProps }) => {
  return (
    <Section className='relative flex min-h-screen items-center'>
      <div className='flex flex-col gap-8'>
        <p className='text-lg text-text-1 sm:text-xl'>Olá, meu nome é</p>
        <h1 className='text-5xl font-bold text-text-2 sm:text-6xl'>
          Yuri Souza.
        </h1>
        <p className='text-lg text-text-1 sm:max-w-xl sm:text-xl'>
          {bannerProps.description}
        </p>
        <div className='flex flex-col gap-4 sm:flex-row'>
          <Link href='#my_work'>
            <Button className='text-lg sm:text-xl'>Conheça meu trabalho</Button>
          </Link>
          <Link href={bannerProps.button_two.link}>
            <Button className='text-lg sm:text-xl' variant='secondary'>
              {bannerProps.button_two.label}
            </Button>
          </Link>
        </div>
      </div>
      <div className='absolute left-0 -z-10 h-[90vh] max-h-[1920px] w-[90vh] max-w-screen-xl animate-spin-slow sm:left-[15vh] md:left-auto md:right-[-30vh] md:top-0 md:h-[175vh] md:w-[175vh] lg:right-[-450px]'>
        <Image
          alt='react_icon'
          src='/assets/media/svg/react_icon.svg'
          width={1024}
          height={1024}
          className='h-full w-full'
        />
      </div>
    </Section>
  );
};
