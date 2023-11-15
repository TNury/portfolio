import Image from 'next/image';

import { ExternalLink } from '@portfolio/components/ui/ExternalLink';
import { Technology } from '@portfolio/components/ui/Technology';

import { ProjectProps } from '@portfolio/types/project.types';

type ProjectBoxProps = {
  projectProps: ProjectProps;
};

export const ProjectBox: React.FC<ProjectBoxProps> = ({ projectProps }) => {
  return (
    <div className='flex flex-col gap-10'>
      <h3 className='text-3xl font-bold text-text-2 sm:text-4xl'>
        {projectProps.name}
      </h3>
      <div className='flex w-full flex-col items-center gap-16'>
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
          className='hidden h-auto w-[500px] sm:block'
        />
        <div className='flex flex-col gap-8'>
          <p className='text-base text-text-1 sm:text-lg'>
            {projectProps.description}
          </p>
          <div className='flex flex-col gap-4 sm:w-80'>
            <div className='flex flex-wrap gap-4'>
              {projectProps.technologies.map((technology, index) => (
                <Technology key={index} name={technology} />
              ))}
            </div>
            <ExternalLink href='https://petshop.karhard.com/' />
          </div>
        </div>
      </div>
    </div>
  );
};
