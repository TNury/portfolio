import Image from 'next/image';

import { cn } from '@portfolio/lib/lib';

type TechnologyProps = {
  name: string;
  className?: string;
};

export const Technology: React.FC<TechnologyProps> = ({ name, className }) => {
  return (
    <div className={cn('flex gap-2', className)}>
      <Image
        alt='chevron_right'
        src='/assets/media/svg/chevron_right.svg'
        width={24}
        height={24}
      />
      <p className='text-base text-text-1 sm:text-lg'>{name}</p>
    </div>
  );
};
