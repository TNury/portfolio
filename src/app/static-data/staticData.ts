import { LinksProps } from '@portfolio/types/header.types';
import { ProjectProps } from '@portfolio/types/project.types';

export const staticHeaderData: LinksProps = [
  {
    type: 'nav',
    href: '#sobre',
    label: 'Sobre',
  },
  {
    type: 'nav',
    href: '#serviços',
    label: 'Serviços',
  },
  {
    type: 'nav',
    href: '#trabalho',
    label: 'Projetos',
  },
  {
    type: 'nav',
    href: '#contato',
    label: 'Contato',
  },
  {
    type: 'cv',
    href: '/assets/media/pdf/CV_Português.pdf',
    label: 'Currículo',
  },
];

export const staticProjects: ProjectProps[] = [
  {
    name: 'Petshop by Karhard.',
    description:
      '"Petshop By Karhard" é uma loja encantadora em Berlim, Alemanha, que oferece uma ampla variedade de produtos com temática animal. Esse site é sua plataforma de e-commerce.',
    technologies: [
      'Javascript',
      'Next.js',
      'JSS',
      'MUI v5',
      'Redux',
      'Redux Saga',
      'Stripe',
    ],
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
      '“Weng Contemporary” é uma plataforma de e-commerce que oferece uma seleção com curadoria de edições limitadas de importantes artistas contemporâneos.',
    technologies: ['Javascript', 'Next.js', 'JSS', 'MUI v4', 'Stripe'],
    productionUrl: 'https://www.wengcontemporary.com/',
    media: {
      xs: '/assets/media/png/weng_contemporary-xs.png',
      sm: '/assets/media/png/weng_contemporary-sm.png',
      md: '/assets/media/png/weng_contemporary-md.png',
      lg: '/assets/media/png/weng_contemporary-lg.png',
    },
  },
  {
    name: 'Crown Clothing.',
    description:
      '"Crown Clothing" é uma demo de um e-commerce moderno que desenvolvi para ilustrar meu domínio em tecnologias de ponta.',
    technologies: [
      'Typescript',
      'Next.js 13',
      'TailwindCSS',
      'GraphQL',
      'Shopify Storefront API',
      'Stripe',
    ],
    productionUrl: 'https://crown-clothing.stellarwind.com.br/',
    media: {
      xs: '/assets/media/png/crown_clothing-xs.png',
      sm: '/assets/media/png/crown_clothing-sm.png',
      md: '/assets/media/png/crown_clothing-md.png',
      lg: '/assets/media/png/crown_clothing-lg.png',
    },
  },
  {
    name: 'SantéCaps.',
    description:
      '"SantéCaps" é uma empresa brasileira especializada em suplementos voltados para mulheres com deficiências vitamínicas que impactam a beleza. Seu site oferece informações detalhadas sobre seus produtos e funciona como um eficiente mecanismo de direcionamento de vendas para clientes em potencial.',
    technologies: ['HTML', 'JavaScript', 'CSS', 'TailwindCSS'],
    productionUrl: 'https://santecaps.com.br/',
    media: {
      xs: '/assets/media/png/santecaps-xs.png',
      sm: '/assets/media/png/santecaps-sm.png',
      md: '/assets/media/png/santecaps-md.png',
      lg: '/assets/media/png/santecaps-lg.png',
    },
  },
  {
    name: 'UR-Skis.',
    description:
      '"UR-Skis" é um site que demonstra 3 designs excepcionais de esquis feitos a mão por uma renomada fabricante Suíça. O site tem um design extremamente minimalista e elegante.',
    technologies: ['Typescript', 'Next.js 13', 'TailwindCSS'],
    productionUrl: 'https://ur-skis.ch/',
    media: {
      xs: '/assets/media/png/ur_skis-xs.png',
      sm: '/assets/media/png/ur_skis-sm.png',
      md: '/assets/media/png/ur_skis-md.png',
      lg: '/assets/media/png/ur_skis-lg.png',
    },
  },
  {
    name: 'Contemporary Culture.',
    description:
      '"Contemporary Culture" é uma empresa de consultoria de arte e design sob medida fundada pela Dra. Michaela Neumeister de Pury. O site é uma vitrine artística de seus serviços e projetos.',
    technologies: ['Javascript', 'React', 'Redux', 'JSS', 'MUI v5'],
    productionUrl: 'https://contemporary-culture.com/',
    media: {
      xs: '/assets/media/png/contemporary_culture-xs.png',
      sm: '/assets/media/png/contemporary_culture-sm.png',
      md: '/assets/media/png/contemporary_culture-md.png',
      lg: '/assets/media/png/contemporary_culture-lg.png',
    },
  },
  {
    name: 'Ostheopathie Meilen.',
    description:
      '"Ostheopathie Meilen" é uma clínica de osteopatia situada na Suíça que oferece uma ampla gama de serviços de saúde. O site deles tem como objetivo apresentar seus serviços seguindo design artístico e atraente.',
    technologies: ['Javascript', 'React', 'Redux', 'JSS', 'MUI v5'],
    productionUrl: 'https://www.osteopathie-meilen.ch/',
    media: {
      xs: '/assets/media/png/om-xs.png',
      sm: '/assets/media/png/om-sm.png',
      md: '/assets/media/png/om-md.png',
      lg: '/assets/media/png/om-lg.png',
    },
  },
];
