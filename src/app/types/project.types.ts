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
