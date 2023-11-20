import Link from 'next/link';

import { Button } from '@portfolio/components/ui/Button';

import { cn } from '@portfolio/lib/lib';

type NavLinksProps = React.HTMLAttributes<HTMLUListElement> & {
  onLinkClick?: () => void;
};

export const NavLinks: React.FC<NavLinksProps> = ({
  className,
  onLinkClick,
  ...restOfProps
}) => {
  return (
    <ul className={cn('flex h-full gap-8', className)} {...restOfProps}>
      <li>
        <Link
          href='#about'
          onClick={onLinkClick}
          className='border-b border-transparent pb-2 text-base text-text-2 hover:border-accents-7 sm:text-lg'>
          Sobre
        </Link>
      </li>
      <li>
        <Link
          href='#what_i_do'
          onClick={onLinkClick}
          className='border-b border-transparent pb-2 text-base text-text-2 hover:border-accents-7 sm:text-lg'>
          Serviços
        </Link>
      </li>
      <li>
        <Link
          href='#my_work'
          onClick={onLinkClick}
          className='border-b border-transparent pb-2 text-base text-text-2 hover:border-accents-7 sm:text-lg'>
          Trabalho
        </Link>
      </li>
      <li>
        <Link
          href='#contact'
          onClick={onLinkClick}
          className='border-b border-transparent pb-2 text-base text-text-2 hover:border-accents-7 sm:text-lg'>
          Contato
        </Link>
      </li>
      <li>
        <Link href="/assets/media/pdf/CV_Português.pdf" target='_blank'>
          <Button className='text-base sm:text-lg' size='sm'>
            Curriculo
          </Button>
        </Link>
      </li>
    </ul>
  );
};
