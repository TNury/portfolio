interface IconProps extends React.HTMLAttributes<SVGElement> {}

export const LinkedInIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='25'
      height='25'
      fill='none'
      viewBox='0 0 25 25'
      color='#999'
      {...props}>
      <path
        fill='#000'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M16.625 8.055a6 6 0 016 6v7h-4v-7a2 2 0 10-4 0v7h-4v-7a6 6 0 016-6zM2.625 9.055h4v12h-4v-12zM4.625 6.055a2 2 0 100-4 2 2 0 000 4z'></path>
    </svg>
  );
};
