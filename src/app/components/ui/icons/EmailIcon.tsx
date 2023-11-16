interface IconProps extends React.HTMLAttributes<SVGElement> {}

export const EmailIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='23'
      height='25'
      fill='none'
      viewBox='0 0 23 25'
      color='#999'
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M4.111 4.055h14.611c1.005 0 1.827.9 1.827 2v12c0 1.1-.822 2-1.827 2H4.112c-1.005 0-1.827-.9-1.827-2v-12c0-1.1.822-2 1.826-2z'></path>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M20.549 6.055l-9.132 7-9.132-7'></path>
    </svg>
  );
};
