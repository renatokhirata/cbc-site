import img1 from '../../assets/images/carouselCards/purpleBackground.svg';
import img2 from '../../assets/images/carouselCards/blueBackground.svg';
import img3 from '../../assets/images/carouselCards/greenBackground.svg';
import img4 from '../../assets/images/carouselCards/waterGreenBackground.svg';
// import img5 from '../../assets/images/carouselCards/yellowBackground.svg';
import img6 from '../../assets/images/carouselCards/orangeBackground.svg';
import img7 from '../../assets/images/carouselCards/redBackgroud.png';
import img8 from '../../assets/images/carouselCards/pinkBackgroud.png';
import img9 from '../../assets/images/carouselCards/darkBlueBackground.png';
import icon1 from '../../assets/icons/carouselIcons/Pista.svg';
import icon2 from '../../assets/icons/carouselIcons/Estrada.svg';
import icon3 from '../../assets/icons/carouselIcons/Paraciclimo.svg';
import icon4 from '../../assets/icons/carouselIcons/Mountain Bike.svg';
// import icon5 from '../../assets/icons/carouselIcons/Layer_1.svg';
import icon6 from '../../assets/icons/carouselIcons/BMX.svg';
import icon7 from '../../assets/icons/carouselIcons/eSPORTS.svg';
import icon8 from '../../assets/icons/carouselIcons/BMX-1.svg';
import icon9 from '../../assets/icons/carouselIcons/Bike para todos.svg';
import { INavigation } from '../../domains/cbc-site/interfaces/Link/ILink';

import jogoLimpoImg from '../../assets/images/pages/ethicsOffice/carouselMedia/jogoLimpoImg.svg';
import defaultImage from '../../assets/images/pages/ethicsOffice/carouselMedia/defaultImage.svg';

export const modalitiesNavigation: INavigation = {
  type: 'modalities-navigation',
  navigationItems: [
    {
      href: '/modalidades/bmx-freestyle',
      label: 'BMX Freestyle',
      subLinks: [],
    },
    {
      href: '/modalidades/bmx-racing',
      label: 'BMX Racing',
      subLinks: [],
    },
    {
      href: '/modalidades/estrada',
      label: 'Estrada',
      subLinks: [],
    },
    {
      href: '/modalidades/mtb',
      label: 'Mountain Bike',
      subLinks: [],
    },
    {
      href: '/modalidades/pista',
      label: 'Pista',
      subLinks: [],
    },
    {
      href: '/modalidades/paraciclismo',
      label: 'Paraciclismo',
      subLinks: [],
    },
    {
      href: '/modalidades/ciclismo-para-todos',
      label: 'Ciclismo para todos',
      subLinks: [],
    },
    {
      href: '/modalidades/esports',
      label: 'e-Sports',
      subLinks: [],
    },
  ],
};

export const navbar: INavigation = {
  type: 'navbar',
  navigationItems: [
    { href: '/institucional', label: 'Institucional' },
    {
      href: `${modalitiesNavigation.navigationItems[0].href}`,
      label: 'Modalidades',
      subLinks: modalitiesNavigation.navigationItems.map((item) => ({
        href: item.href,
        label: item.label,
      })),
    },
    { href: '/federacoes', label: 'Federações' },
    {
      href: 'https://cbc-portal.majovdev.com',
      label: 'Portal da Transparência',
    },
    { href: '/comunicacao', label: 'Comunicação' },
    { href: '/contato', label: 'Contato' },
    // { href: '/imprensa', label: 'Imprensa' },
  ],
};

export const tertiaryNavigation: INavigation = {
  type: 'tertiary-navigation',
  navigationItems: [
    { href: '/governanca', label: 'Governança' },
    { href: '/antidoping', label: 'Antidoping' },
    { href: '/stjd', label: 'STJD' },
    { href: '/educacao-e-pesquisa', label: 'Educação e Pesquisa' },
    { href: '/ouvidoria', label: 'Ouvidoria' },
  ],
};

export const footerNavigation: INavigation = {
  type: 'footer-navigation',
  navigationItems: [
    {
      title: 'Modalidades',
      navigationItems: [
        { href: '/modalidades/bmx-racing', label: 'BMX Racing' },
        { href: '/modalidades/bmx-freestyle', label: 'BMX Freestyle' },
        { href: '/modalidades/estrada', label: 'Estrada' },
        { href: '/modalidades/mtb', label: 'MTB' },
        { href: '/modalidades/pista', label: 'Pista' },
        { href: '/modalidades/paraciclismo', label: 'Paraciclismo' },
        {
          href: '/modalidades/ciclismo-para-todos',
          label: 'Ciclismo para todos',
        },
        { href: '/modalidades/esports', label: 'e-Sports' },
      ],
    },
    {
      title: 'Institucional',
      navigationItems: [
        { href: '/federacoes', label: 'Federações' },
        {
          href: 'https://cbc-portal.majovdev.com',
          label: 'Portal da Transparência',
        },
        // { href: '/imprensa', label: 'Imprensa' },
        { href: '/contato', label: 'Contato' },
      ],
    },
    {
      title: 'Governança',
      navigationItems: [
        { href: '/antidoping', label: 'Antidoping' },
        { href: '/abcd', label: 'ABCD' },
        { href: '/wada', label: 'WADA' },
        { href: '/stjd', label: 'STJD' },
        { href: '/educacao-e-pesquisa', label: 'Educação e pesquisa' },
        { href: '/ouvidoria', label: 'Ouvidoria' },
      ],
    },
  ],
};

export const modalitiesCarouselData = [
  {
    type: 'modalities',

    navigationItems: [
      {
        href: '/modalidades/bmx-freestyle',
        label: 'BMX Freestyle',
        bgImage: img8,
        icon: icon8,
      },
      {
        href: '/modalidades/bmx-racing',
        label: 'BMX Racing',
        bgImage: img6,
        icon: icon6,
      },
      {
        href: '/modalidades/estrada',
        label: 'Estrada',
        bgImage: img2,
        icon: icon2,
      },
      {
        href: '/modalidades/mtb',
        label: 'MTB',
        bgImage: img4,
        icon: icon4,
      },
      {
        href: '/modalidades/pista',
        label: 'Pista',
        bgImage: img1,
        icon: icon1,
      },
      {
        href: '/modalidades/paraciclismo',
        label: 'Paraciclismo',
        bgImage: img3,
        icon: icon3,
      },
      {
        href: '/modalidades/ciclismo-para-todos',
        bgImage: img9,
        icon: icon9,
        label: 'Bike para todos',
      },
      {
        href: '/modalidades/esports',
        label: 'e-Sports',
        bgImage: img7,
        icon: icon7,
      },
    ],
  },
];

export const companiesCarouselData: INavigation[] = [
  {
    type: 'companies',
    navigationItems: [
      {
        href: '',
        bgImage: defaultImage,
        label: 'Campanha',
      },
      {
        href: '',
        bgImage: defaultImage,
        label: 'Campanha',
      },
      {
        href: '',
        bgImage: defaultImage,
        label: 'Campanha',
      },
      {
        href: '',
        bgImage: jogoLimpoImg,
      },
      {
        href: '',

        bgImage: defaultImage,
        label: 'Campanha',
      },
      {
        href: '',
        bgImage: defaultImage,
        label: 'Campanha',
      },
      {
        href: '',
        bgImage: defaultImage,
        label: 'Campanha',
      },
      {
        href: '',
        bgImage: defaultImage,
        label: 'Campanha',
      },
      {
        href: '',
        bgImage: defaultImage,
        label: 'Campanha',
      },
      {
        href: '',
        bgImage: defaultImage,
        label: 'Campanha',
      },
    ],
  },
];
