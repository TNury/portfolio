import { cn } from '@portfolio/lib/lib';

import { ExternalLinkIcon } from './icons/ExternalLinkIcon';

type ExternalLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  className,
  ...restOfProps
}) => {
  return (
    <a
      {...restOfProps}
      className={cn('flex gap-2 text-text-1 hover:text-text-2', className)}
      target='_blank'>
      <ExternalLinkIcon />
      <p className='text-base'>Visitar</p>
    </a>
  );
};
