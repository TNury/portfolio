import { cn } from '@portfolio/lib/lib';

type SectionProps = React.HTMLAttributes<HTMLDivElement>;

export const Section: React.FC<SectionProps> = ({ children, className }) => {
  return <section className={cn('px-4 py-28', className)}>{children}</section>;
};
