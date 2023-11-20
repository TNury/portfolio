'use client';

import { cn } from '@portfolio/lib/lib';

import { type VariantProps, cva } from 'class-variance-authority';

const buttonVariants = cva(
  'w-fit border border-accents-2 px-6 py-3 hover:bg-accents-2 text-text-2',
  {
    variants: {
      variant: {
        primary: 'border-accents-2 bg-accents-1',
        secondary: 'border-accents-2 bg-black',
      },
      size: {
        default: 'px-6 py-3',
        sm: 'px-5 py-2',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = (props: ButtonProps) => {
  const { children, className, variant, size, ...restOfProps } = props;

  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...restOfProps}>
      {children}
    </button>
  );
};
