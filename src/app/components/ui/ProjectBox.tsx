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
      <h3 className='text-3xl font-bold text-text-2'>{projectProps.name}</h3>
      <div className='flex w-full flex-col items-center gap-16'>
        <Image
          src='assets/media/svg/smartphone.svg'
          alt='project_icon'
          width={250}
          height={520}
          className='h-auto w-[250px]'
        />
        <div className='flex flex-col gap-8'>
          <p className='text-base text-text-1'>{projectProps.description}</p>
          <div className='flex flex-wrap gap-4'>
            {projectProps.technologies.map((technology, index) => (
              <Technology key={index} name={technology} />
            ))}

            <ExternalLink href='https://petshop.karhard.com/' />
          </div>
        </div>
      </div>
    </div>
  );
};
