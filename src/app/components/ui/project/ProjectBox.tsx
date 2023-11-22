import { ExternalLink } from '@portfolio/components/ui/ExternalLink';
import { Technology } from '@portfolio/components/ui/Technology';
import { ProjectMedia } from '@portfolio/components/ui/project/ProjectMedia';

import { ProjectProps } from '@portfolio/types/project.types';

type ProjectBoxProps = {
  projectProps: ProjectProps;
  parity: 'even' | 'odd';
};

export const ProjectBox: React.FC<ProjectBoxProps> = ({
  projectProps,
  parity,
}) => {
  return (
    <div data-parity={parity} className='group flex flex-col gap-10'>
      <h3 className='text-3xl font-bold text-text-2 sm:text-4xl md:hidden'>
        {projectProps.name}
      </h3>
      <div className='flex w-full flex-col items-center gap-16 md:grid md:grid-cols-2 md:items-start'>
        <ProjectMedia projectMedia={projectProps.media} />
        <div className='flex flex-col gap-8 md:h-full md:justify-between md:group-data-[parity="odd"]:row-span-full'>
          <p className='text-base text-text-1 sm:text-lg md:hidden'>
            {projectProps.description}
          </p>
          <div className='hidden flex-col gap-10 md:flex md:group-data-[parity="even"]:items-end'>
            <h3 className='hidden text-3xl font-bold text-text-2 sm:text-4xl md:block md:group-data-[parity="even"]:text-right'>
              {projectProps.name}
            </h3>
            <p className='text-base text-text-1 sm:text-lg md:max-w-md md:group-data-[parity="even"]:text-right'>
              {projectProps.description}
            </p>
          </div>
          <div className='flex flex-col gap-4 sm:w-80 md:group-data-[parity="even"]:ml-auto md:group-data-[parity="even"]:items-end'>
            <div className='flex flex-wrap gap-4 md:group-data-[parity="even"]:justify-end'>
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
