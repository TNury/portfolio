'use client';

import { cn } from '@portfolio/lib/lib';

import { type VariantProps, cva } from 'class-variance-authority';

const buttonVariants = cva(
  'w-fit border border-accents-2 px-6 py-3 text-lg hover:bg-accents-2 sm:text-xl',
  {
    variants: {
      variant: {
        primary: 'border-accents-2 bg-accents-1',
        secondary: 'border-accents-2 bg-black',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = (props: ButtonProps) => {
  const { children, className, variant, ...restOfProps } = props;

  return (
    <button
      className={cn(buttonVariants({ variant, className }))}
      {...restOfProps}>
      {children}
    </button>
  );
};
