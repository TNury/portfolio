import { cn } from '@portfolio/lib/lib';

type SectionProps = React.HTMLAttributes<HTMLDivElement>;

export const Section: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <section
      className={cn(
        'relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-28',
        className
      )}>
      {children}
    </section>
  );
};
