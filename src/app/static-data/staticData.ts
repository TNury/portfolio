import { ProjectProps } from '@portfolio/types/project.types';


export const staticProjects: ProjectProps[] = [
  {
    name: 'Petshop by Karhard.',
    description:
      'Lorem ipsum dolor sit amet consectetur. Vulputate augue at ultrices mauris convallis interdum tincidunt. Sed eu malesuada pellentesque ut.',
    technologies: ['NextJS', 'MUI v5', 'Redux', 'Redux Saga', 'Stripe'],
    productionUrl: 'https://petshop.karhard.com/',
    media: {
      xs: '/assets/media/png/petshop_by_karhard-xs.png',
      sm: '/assets/media/png/petshop_by_karhard-sm.png',
      md: '/assets/media/png/petshop_by_karhard-md.png',
      lg: '/assets/media/png/petshop_by_karhard-lg.png',
    },
  },
  {
    name: 'Weng Contemporary.',
    description:
      'Lorem ipsum dolor sit amet consectetur. Vulputate augue at ultrices mauris convallis interdum tincidunt. Sed eu malesuada pellentesque ut.',
    technologies: ['NextJS', 'MUI v5', 'Stripe'],
    productionUrl: 'https://www.wengcontemporary.com/',
    media: {
      xs: '/assets/media/png/weng_contemporary-xs.png',
      sm: '/assets/media/png/weng_contemporary-sm.png',
      md: '/assets/media/png/weng_contemporary-md.png',
      lg: '/assets/media/png/weng_contemporary-lg.png',
    },
  },
];