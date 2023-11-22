import Image from 'next/image';

import { Section } from '@portfolio/components/ui/Section';

export const WhatIDo = () => {
  return (
    <Section className='flex flex-col gap-20 md:flex-row md:gap-16'>
      <div className='flex h-fit flex-col gap-20 md:sticky md:top-28 md:w-1/2'>
        <h2 className='text-4xl font-bold text-text-2 sm:text-5xl'>
          O que eu faço.
        </h2>

        <p className='text-lg text-text-1 sm:text-xl'>
          Minha especialização reside na construção de websites responsivos e
          funcionais, adaptados para todos os tipos de dispositivos. Cada
          dispositivo possui características únicas, e é nesse entendimento que
          eu moldo experiências digitais. Os exemplos{' '}
          <span className='md:hidden'>abaixo</span>{' '}
          <span className='hidden md:inline'>à direita</span> descrevem onde
          cada formato ganha vida:
        </p>
      </div>
      <div className='flex flex-col items-center gap-28 md:w-1/2'>
        <div className='flex w-full flex-col items-center gap-8'>
          <Image
            src='/assets/media/svg/desktop.svg'
            alt='desktop_icon'
            width={1920}
            height={1080}
            className='h-auto w-[300px] sm:h-[350px] sm:w-auto'
          />
          <div className='flex flex-col gap-2 text-center'>
            <h3 className='text-lg font-bold text-text-2 sm:text-xl-header'>
              Desktop
            </h3>
            <p className='text-base text-text-1 sm:max-w-sm sm:text-lg'>
              Ideal para sites com funcionalidade complexa ou alto nível de
              interatividade, como plataformas de comércio online e ferramentas
              de produtividade.
            </p>
          </div>
        </div>
        <div className='flex w-full flex-col items-center gap-8'>
          <Image
            src='/assets/media/svg/laptop.svg'
            alt='laptop_icon'
            width={1366}
            height={768}
            className='h-auto w-[250px] sm:h-[300px] sm:w-auto'
          />
          <div className='flex flex-col gap-2 text-center'>
            <h3 className='text-lg font-bold text-text-2 sm:text-xl-header'>
              Laptop
            </h3>
            <p className='text-base text-text-1 sm:max-w-sm sm:text-lg'>
              Equilibra interatividade e portabilidade, sendo perfeito para
              qualquer tipo de website, seja ele simples ou complexo.
            </p>
          </div>
        </div>
        <div className='flex w-full flex-col items-center gap-8'>
          <Image
            src='/assets/media/svg/tablet.svg'
            alt='tablet_icon'
            width={768}
            height={1024}
            className='h-auto w-[150px] sm:h-[250px] sm:w-auto'
          />
          <div className='flex flex-col gap-2 text-center sm:max-w-sm'>
            <h3 className='text-lg font-bold text-text-2 sm:text-xl-header'>
              Tablet
            </h3>
            <p className='text-base text-text-1 sm:text-lg'>
              Ideal para sites com conteúdo visual, como revistas, sites de
              fotos, etc.
            </p>
          </div>
        </div>
        <div className='flex w-full flex-col items-center gap-8'>
          <Image
            src='/assets/media/svg/smartphone.svg'
            alt='phone_icon'
            width={375}
            height={812}
            className='h-auto w-[100px] sm:h-[200px] sm:w-auto'
          />
          <div className='flex flex-col gap-2 text-center'>
            <h3 className='text-lg font-bold text-text-2 sm:text-xl-header'>
              Smartphone
            </h3>
            <p className='text-base text-text-1 sm:max-w-sm sm:text-lg'>
              Essencial para atender à maioria dos usuários, o smartphone é a
              resolução chave para acesso a sites. Sua importância reside na
              conveniência e prevalência, sendo o principal meio de interação
              online. Sites otimizados para dispositivos móveis alcançam uma
              audiência mais ampla.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
