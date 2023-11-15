import { Section } from '@portfolio/components/ui/Section';
import { ProjectBox } from '@portfolio/components/ui/project/ProjectBox';

import { isOddOrEven } from '@portfolio/lib/lib';

import { staticProjects } from 'src/app/static-data/staticData';

export const MyWork = () => {
  return (
    <Section className='flex flex-col gap-20'>
      <h2 className='text-center text-4xl font-bold text-text-2 sm:text-5xl'>
        Meu trabalho.
      </h2>
      <div className='flex flex-col gap-28'>
        {staticProjects.map((project, index) => (
          <ProjectBox
            key={index}
            projectProps={project}
            parity={isOddOrEven(index)}
          />
        ))}
      </div>
    </Section>
  );
};
