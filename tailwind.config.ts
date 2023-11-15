import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '0px',
        sm: '768px',
        md: '1024px',
        lg: '1440px',
        xl: '1920px',
      },
      fontSize: {
        xs: ['0.625rem', '150%'], // 10px
        sm: ['0.875rem', '150%'], // 14px
        base: ['1rem', '150%'], // 16px
        lg: ['1.125rem', '150%'], // 18px
        xl: ['1.25rem', '150%'], // 20px

        'xl-header': ['1.25rem', '140%'], // 20px, used as h6
        '2xl': ['1.5rem', '140%'], // 24px
        '3xl': ['2rem', '130%'], // 32px
        '4xl': ['2.5rem', '120%'], // 40px
        '5xl': ['3rem', '120%'], // 48px
        '6xl': ['3.5rem', '120%'], // 56px
      },
      colors: {
        background: '#000',
        foreground: '#fff',

        'accents-1': '#111',
        'accents-2': '#333',
        'accents-2-opaque': '#33333340',
        'accents-3': '#444',
        'accents-4': '#666',
        'accents-5': '#888',
        'accents-6': '#999',
        'accents-7': '#eaeaea',
        'accents-8': '#fafafa',

        'text-1': '#A1A1A1',
        'text-2': '#EDEDED',
        'text-3': '#A1A1A14D',
      },
    },
    borderWidth: {
      DEFAULT: '1.5px',
      2: '3px',
    },
    animation: {
      'spin-slow': 'spin 120s linear infinite',
    },
  },
  plugins: [],
};
export default config;
