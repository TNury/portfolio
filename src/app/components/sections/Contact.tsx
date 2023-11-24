import { ContactInfo } from '@portfolio/components/ui/ContactInfo';
import { Section } from '@portfolio/components/ui/Section';

export const Contact = () => {
  return (
    <Section
      id='contato'
      className='flex flex-col items-center gap-20 text-center'>
      <h2 className='text-4xl font-bold text-text-2 sm:text-5xl'>Contato.</h2>
      <div className='flex flex-col gap-8'>
        <p className='text-lg text-text-1 sm:max-w-xl sm:text-xl'>
          Atualmente estou em busca de uma oportunidade de trabalho como
          Desenvolvedor Front-end. Caso queira entrar em contato comigo, você
          pode me encontrar através das minhas redes sociais ou por
          email/telefone.
        </p>
        <ContactInfo />
      </div>
    </Section>
  );
};
