import { cn } from '@portfolio/lib/lib';

type SectionProps = React.HTMLAttributes<HTMLDivElement>;

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  ...restOfProps
}) => {
  return (
    <section
      className={cn('w-full max-w-screen-lg px-4 py-28 sm:px-16', className)}
      {...restOfProps}>
      {children}
    </section>
  );
};
