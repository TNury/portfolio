import Image from 'next/image';

import { cn } from '@portfolio/lib/lib';

import { ProjectProps } from '@portfolio/types/project.types';

type ProjectMediaProps = React.HTMLAttributes<HTMLDivElement> & {
  projectMedia: ProjectProps['media'];
};

export const ProjectMedia: React.FC<ProjectMediaProps> = ({
  className,
  projectMedia,
  ...restOfProps
}) => {
  return (
    <div
      className={cn('relative flex h-auto w-full justify-center', className)}
      {...restOfProps}>
      {/* Smartphone */}
      <Image
        src={projectMedia.xs}
        width={375}
        height={812}
        alt='image'
        className='absolute top-[11.5%] h-auto w-[217px] object-fill sm:hidden'
      />
      <Image
        src='/assets/media/svg/smartphone.svg'
        alt='project_icon'
        width={375}
        height={812}
        className='h-auto w-[250px] sm:hidden'
      />
      {/* Tablets */}
      <Image
        src={projectMedia.sm}
        width={768}
        height={1024}
        alt='image'
        className='absolute top-[11.5%] hidden h-[482px] w-[417px] object-fill sm:block md:hidden'
      />
      <Image
        src='/assets/media/svg/tablet.svg'
        alt='project_icon'
        width={768}
        height={1024}
        className='hidden h-auto w-[500px] sm:block md:hidden'
      />
      {/* Laptops */}
      <Image
        src={projectMedia.md}
        width={1366}
        height={768}
        alt='image'
        className='absolute top-[8%] hidden h-[76%] object-fill px-[9%] md:block lg:hidden'
      />
      <Image
        src='/assets/media/svg/laptop.svg'
        alt='project_icon'
        width={1366}
        height={768}
        className='hidden h-auto w-full md:block lg:hidden'
      />
      {/* Desktops */}
      <Image
        src={projectMedia.lg}
        width={1920}
        height={1080}
        alt='image'
        className='absolute inset-0 hidden h-[78.9%] object-fill lg:block lg:p-[1.45rem]'
      />
      <Image
        src='/assets/media/svg/desktop.svg'
        alt='project_icon'
        width={1920}
        height={1080}
        className='hidden h-auto w-full lg:block'
      />
    </div>
  );
};
