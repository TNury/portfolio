export const Footer = () => {
  return (
    <footer className='px-16 py-14'>
      <p className='text-center text-lg text-text-1 sm:text-xl'>
        Projetado e construído por{' '}
        <span className='text-text-2'>Yuri Souza</span>.
      </p>
      <p className='text-center text-lg text-text-1 sm:text-xl'>
        © {new Date().getFullYear()}.
      </p>
    </footer>
  );
};
