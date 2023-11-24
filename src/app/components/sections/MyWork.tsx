import { Section } from '@portfolio/components/ui/Section';
import { ProjectBox } from '@portfolio/components/ui/project/ProjectBox';

import { isOddOrEven } from '@portfolio/lib/lib';

import { staticProjects } from 'src/app/static-data/staticData';

export const MyWork = () => {
  return (
    <Section id='trabalho' className='flex flex-col gap-20'>
      <h2 className='text-center text-4xl font-bold text-text-2 sm:text-5xl'>
        Meu trabalho.
      </h2>
      <div className='flex flex-col gap-16 md:items-center'>
        <p className='text-lg text-text-1 sm:max-w-xl sm:text-xl md:text-center'>
          Na minha trajetória como desenvolvedor, trabalhei no desenvolvimento
          de diversos projetos. Listados abaixo estão alguns dos meus trabalhos
          mais notáveis.
        </p>
        <div className='flex flex-col gap-28 w-full'>
          {staticProjects.map((project, index) => (
            <ProjectBox
              key={index}
              projectProps={project}
              parity={isOddOrEven(index)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
