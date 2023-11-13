import Image from 'next/image';

export const Banner = () => {
  return (
    <section className='relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-28'>
      <div className='flex flex-col gap-8'>
        <p className='text-lg text-text-1'>Olá, meu nome é</p>
        <h1 className='text-5xl text-text-2'>Yuri Souza.</h1>
        <p className='text-lg text-text-1'>
          Sou um Engenheiro de Software apaixonado por criar experiências
          digitais envolventes e funcionais.
        </p>
        <div className='flex flex-col gap-4'>
          <button className='w-fit border border-accents-2  bg-accents-1 px-6 py-3 text-lg hover:bg-accents-2'>
            Conheça meu trabalho.
          </button>
          <button className='w-fit border border-accents-2 bg-black px-6 py-3 text-lg hover:bg-accents-2'>
            Mais sobre mim.
          </button>
        </div>
      </div>
      <div className='absolute left-0 -z-10 h-[90vh] w-[90vh]'>
        <Image alt='react_icon' src='assets/media/svg/react_icon.svg' fill />
      </div>
    </section>
  );
};
