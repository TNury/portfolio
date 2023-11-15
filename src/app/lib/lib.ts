import { twMerge } from 'tailwind-merge';

import { type ClassValue, clsx } from 'clsx';

/**
 * Merges class names using the `clsx` and `tailwind-merge` libraries.
 * @param inputs - The class names to merge.
 * @returns A string with the merged class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Determines if a given number is odd or even.
 * @param number - The number to check.
 * @returns 'odd' if the number is odd, 'even' if the number is even.
 */
export function isOddOrEven(number: number): 'odd' | 'even' {
  if (number % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}
