import { ProjectBox } from '@portfolio/components/ui/ProjectBox';
import { Section } from '@portfolio/components/ui/Section';

import { isOddOrEven } from '@portfolio/lib/lib';

import { ProjectProps } from '@portfolio/types/project.types';

const staticProjects: ProjectProps[] = [
  {
    name: 'Petshop by Karhard.',
    description:
      'Lorem ipsum dolor sit amet consectetur. Vulputate augue at ultrices mauris convallis interdum tincidunt. Sed eu malesuada pellentesque ut.',
    technologies: ['NextJS', 'MUI v5', 'Redux', 'Redux Saga', 'Stripe'],
    productionUrl: 'https://petshop.karhard.com/',
  },
  {
    name: 'Weng Contemporary.',
    description:
      'Lorem ipsum dolor sit amet consectetur. Vulputate augue at ultrices mauris convallis interdum tincidunt. Sed eu malesuada pellentesque ut.',
    technologies: ['NextJS', 'MUI v5', 'Redux', 'Redux Saga', 'Stripe'],
    productionUrl: 'https://petshop.karhard.com/',
  },
];

export const MyWork = () => {
  return (
    <Section className='flex flex-col gap-20'>
      <h2 className='text-4xl font-bold text-text-2 sm:text-5xl text-center'>
        Coisas que construí.
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
