import Link from 'next/link';

import { Button } from '@portfolio/components/ui/Button';

import { cn } from '@portfolio/lib/lib';

import { LinksProps } from '@portfolio/types/header.types';

type NavLinksProps = React.HTMLAttributes<HTMLUListElement> & {
  links: LinksProps;
  onLinkClick?: () => void;
};

export const NavLinks: React.FC<NavLinksProps> = ({
  className,
  links,
  onLinkClick,
  ...restOfProps
}) => {
  return (
    <ul className={cn('flex h-full gap-8', className)} {...restOfProps}>
      {links.map(({ type, href, label }, index) => (
        <li key={index}>
          <Link
            href={href}
            onClick={onLinkClick}
            target={type === 'cv' ? '_blank' : undefined}
            className='border-b border-transparent pb-[10.5px] text-base text-text-2 hover:border-accents-7 sm:text-lg'>
            {type === 'nav' ? (
              label
            ) : (
              <Button className='text-base sm:text-lg' size='sm'>
                {label}
              </Button>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};
