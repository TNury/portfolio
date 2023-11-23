export type BannerContentProps = {
  description: string;

  button_two: {
    link: string;
    label: string;
  };
};

export type ProjectProps = {
  name: string;
  description: string;
  technologies: string[];
  productionUrl: string;
  media: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
};
