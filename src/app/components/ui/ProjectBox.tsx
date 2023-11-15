import Image from 'next/image';

import { ExternalLink } from '@portfolio/components/ui/ExternalLink';
import { Technology } from '@portfolio/components/ui/Technology';

import { ProjectProps } from '@portfolio/types/project.types';

type ProjectBoxProps = {
  projectProps: ProjectProps;
  // OBS: Keep in mind that 0 is an even number.
  parity: 'even' | 'odd';
};

export const ProjectBox: React.FC<ProjectBoxProps> = ({
  projectProps,
  parity,
}) => {
  return (
    <div className='flex flex-col gap-10'>
      <h3 className='text-3xl font-bold text-text-2 sm:text-4xl md:hidden'>
        {projectProps.name}
      </h3>
      <div className='flex w-full flex-col items-center gap-16 md:grid md:grid-cols-2 md:items-start'>
        <Image
          src='assets/media/svg/smartphone.svg'
          alt='project_icon'
          width={250}
          height={520}
          className='h-auto w-[250px] sm:hidden'
        />
        <Image
          src='assets/media/svg/tablet.svg'
          alt='project_icon'
          width={500}
          height={600}
          className='hidden h-auto w-[500px] sm:block md:hidden'
        />
        <Image
          src='assets/media/svg/laptop.svg'
          alt='project_icon'
          width={500}
          height={600}
          className='hidden h-auto w-full md:block'
        />
        <div
          data-is-even={parity === 'even'}
          className='flex flex-col gap-8 md:h-full md:justify-between md:data-[is-even="false"]:row-span-full'>
          <p className='text-base text-text-1 sm:text-lg md:hidden'>
            {projectProps.description}
          </p>
          <div className='hidden flex-col gap-10 md:flex'>
            <h3
              data-is-even={parity === 'even'}
              className='hidden text-3xl font-bold text-text-2 sm:text-4xl md:block md:data-[is-even="true"]:text-right'>
              {projectProps.name}
            </h3>
            <p
              data-is-even={parity === 'even'}
              className='text-base text-text-1 sm:text-lg md:data-[is-even="true"]:text-right'>
              {projectProps.description}
            </p>
          </div>
          <div
            data-is-even={parity === 'even'}
            className='flex flex-col gap-4 sm:w-80 md:data-[is-even="true"]:ml-auto md:data-[is-even="true"]:items-end'>
            <div
              data-is-even={parity === 'even'}
              className='flex flex-wrap gap-4 md:data-[is-even="true"]:justify-end'>
              {projectProps.technologies.map((technology, index) => (
                <Technology key={index} name={technology} />
              ))}
            </div>
            <ExternalLink href={projectProps.productionUrl} />
          </div>
        </div>
      </div>
    </div>
  );
};
