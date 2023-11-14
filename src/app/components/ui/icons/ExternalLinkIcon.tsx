interface IconProps extends React.HTMLAttributes<SVGElement> {}

export const ExternalLinkIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      width='24'
      height='24'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
      className='with-icon_icon__MHUeb'
      color='var(--geist-foreground)'
      data-testid='geist-icon'
      shapeRendering='geometricPrecision'
      viewBox='0 0 24 24'
      style={{ width: 24, height: 24 }}
      {...props}
      >
      <path d='M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3'></path>
    </svg>
  );
};
