import { Gallery } from '../../domains/cbc-site/interfaces/Media/IMedia';
import mediaImage from '../../assets/images/mediaImage.jpg';
import championshipBMX from '../../assets/images/Events/championshipBMX.jpg';
import championshipDHI from '../../assets/images/Events/championshipDHI.jpg';
import paraCycling from '../../assets/images/Events/para-cycling.png';

import blueBackground from '../../assets/images/carouselCards/blueBackground.svg';
import darkBlueBackground from '../../assets/images/carouselCards/darkBlueBackground.png';
import greenBackground from '../../assets/images/carouselCards/greenBackground.svg';
import orangeBackground from '../../assets/images/carouselCards/orangeBackground.svg';
import pinkBackground from '../../assets/images/carouselCards/pinkBackgroud.png';
import purpleBackground from '../../assets/images/carouselCards/purpleBackground.svg';
import redBackground from '../../assets/images/carouselCards/redBackgroud.png';
import waterGreenBackground from '../../assets/images/carouselCards/waterGreenBackground.svg';
import yellowBackground from '../../assets/images/carouselCards/yellowBackground.svg';

import bikeForEveryone from '../../assets/icons/carouselIcons/Bike para todos.svg';
import bmxCompetition from '../../assets/icons/carouselIcons/BMX-1.svg';
import bmxFreestyle from '../../assets/icons/carouselIcons/BMX.svg';
import eSportsIcon from '../../assets/icons/carouselIcons/eSPORTS.svg';
import roadCyclingIcon from '../../assets/icons/carouselIcons/Estrada.svg';
import trackCyclingIcon from '../../assets/icons/carouselIcons/Layer_1.svg';
import mountainBikeIcon from '../../assets/icons/carouselIcons/Mountain Bike.svg';
import paracyclingIcon from '../../assets/icons/carouselIcons/Paraciclimo.svg';
import trackIcon from '../../assets/icons/carouselIcons/Pista.svg';

export const modalityCarouselData = {
  images: [
    purpleBackground,
    blueBackground,
    greenBackground,
    waterGreenBackground,
    yellowBackground,
    orangeBackground,
    redBackground,
    pinkBackground,
    darkBlueBackground,
  ],
  icons: [
    trackIcon,
    roadCyclingIcon,
    paracyclingIcon,
    mountainBikeIcon,
    trackCyclingIcon,
    bmxFreestyle,
    eSportsIcon,
    bmxCompetition,
    bikeForEveryone,
  ],
};

export const galleries: Gallery[] = [
  {
    id: '1',
    title: 'Brasileiro de Ciclismo de Estrada Elite e Junior 2017 - CRI',
    category: 'ESTRADA',
    photoCount: 5,
    date: '27/08/2017',
    coverImage: championshipBMX,
    coverAlt: 'Brasileiro de Ciclismo de Estrada 2017',
    medias: [
      {
        url: championshipBMX,
        alt: 'Competidor no contra-relógio',
        type: 'image',
      },
      { url: championshipDHI, alt: 'Pelotão na estrada', type: 'image' },
      { url: mediaImage, alt: 'Chegada da etapa', type: 'image' },
      { url: paraCycling, alt: 'Paraciclistas em ação', type: 'image' },
      {
        url: championshipBMX,
        alt: 'Competidor no contra-relógio',
        type: 'image',
      },
      { url: championshipDHI, alt: 'Pelotão na estrada', type: 'image' },
      { url: mediaImage, alt: 'Chegada da etapa', type: 'image' },
      { url: paraCycling, alt: 'Paraciclistas em ação', type: 'image' },

      {
        url: championshipBMX,
        alt: 'Competidor no contra-relógio',
        type: 'image',
      },
      { url: championshipDHI, alt: 'Pelotão na estrada', type: 'image' },
      { url: mediaImage, alt: 'Chegada da etapa', type: 'image' },
      { url: paraCycling, alt: 'Paraciclistas em ação', type: 'image' },

      {
        url: 'https://www.youtube.com/watch?v=zA2pAm3A49U&ab_channel=CiclismoBrasileiro',
        alt: 'Vídeo highlights do campeonato',
        type: 'video',
      },
      { url: championshipDHI, alt: 'Pelotão na estrada', type: 'image' },
      { url: mediaImage, alt: 'Chegada da etapa', type: 'image' },
      { url: paraCycling, alt: 'Paraciclistas em ação', type: 'image' },

      {
        url: championshipBMX,
        alt: 'Competidor no contra-relógio',
        type: 'image',
      },
      { url: championshipDHI, alt: 'Pelotão na estrada', type: 'image' },
      { url: mediaImage, alt: 'Chegada da etapa', type: 'image' },
      { url: paraCycling, alt: 'Paraciclistas em ação', type: 'image' },
      { url: paraCycling, alt: 'Paraciclistas em ação', type: 'image' },
      {
        url: 'https://www.youtube.com/watch?v=zA2pAm3A49U&ab_channel=CiclismoBrasileiro',
        alt: 'Vídeo highlights do campeonato',
        type: 'video',
      },
      {
        url: 'https://www.youtube.com/watch?v=zA2pAm3A49U&ab_channel=CiclismoBrasileiro',
        alt: 'Vídeo highlights do campeonato',
        type: 'video',
      },
    ],
  },
  {
    id: '2',
    title: 'Volta Ciclística Internacional do Paraná 2015 - 5ª Etapa',
    category: 'ESTRADA',
    photoCount: 43,
    date: '31/05/2015',
    coverImage: championshipDHI,
    coverAlt: 'Volta Ciclística do Paraná 5ª Etapa',
    medias: [
      {
        url: championshipDHI,
        alt: 'Pelotão compacto na 5ª etapa',
        type: 'image',
      },
      { url: championshipBMX, alt: 'Sprint final', type: 'image' },
      { url: mediaImage, alt: 'Paisagem da etapa', type: 'image' },
      {
        url: 'https://www.youtube.com/shorts/_IcvhYFzLyE',
        alt: 'Short BMX',
        type: 'video',
      },
      { url: mediaImage, alt: 'Paisagem da etapa', type: 'image' },
      {
        url: 'https://www.youtube.com/shorts/_IcvhYFzLyE',
        alt: 'Short BMX',
        type: 'video',
      },
      { url: mediaImage, alt: 'Paisagem da etapa', type: 'image' },
      { url: mediaImage, alt: 'Paisagem da etapa', type: 'image' },
      {
        url: 'https://www.youtube.com/shorts/_IcvhYFzLyE',
        alt: 'Short BMX',
        type: 'video',
      },
    ],
  },
  {
    id: '3',
    title: 'Volta Ciclística Internacional do Paraná 2015 - 4ª Etapa',
    category: 'PISTA',
    photoCount: 55,
    date: '30/05/2015',
    coverImage: paraCycling,
    coverAlt: 'Volta Ciclística do Paraná 4ª Etapa',
    medias: [
      { url: paraCycling, alt: 'Paraciclistas na 4ª etapa', type: 'image' },
      { url: championshipBMX, alt: 'Grupo de fuga', type: 'image' },
      { url: championshipDHI, alt: 'Subida da montanha', type: 'image' },
      { url: mediaImage, alt: 'Vista aérea do percurso', type: 'image' },
      {
        url: 'https://www.youtube.com/watch?v=zA2pAm3A49U&ab_channel=CiclismoBrasileiro',
        alt: 'Melhores momentos da etapa',
        type: 'video',
      },
    ],
  },
  {
    id: '4',
    title: 'Volta Ciclística Internacional do Paraná 2015 - 3ª Etapa',
    category: 'PISTA',
    photoCount: 3,
    date: '29/05/2015',
    coverImage: mediaImage,
    coverAlt: 'Volta Ciclística do Paraná 3ª Etapa',
    medias: [
      { url: mediaImage, alt: 'Largada da 3ª etapa', type: 'image' },
      {
        url: championshipDHI,
        alt: 'Pelotão em alta velocidade',
        type: 'image',
      },
      { url: championshipBMX, alt: 'Ciclistas em formação', type: 'image' },
      {
        url: 'https://www.youtube.com/watch?v=zA2pAm3A49U&ab_channel=CiclismoBrasileiro',
        alt: 'Melhores momentos da etapa',
        type: 'video',
      },
    ],
  },
  {
    id: '5',
    title: 'Volta Ciclística Internacional do Paraná 2015 - 2ª Etapa',
    category: 'ESTRADA',
    photoCount: 33,
    date: '28/05/2015',
    coverImage: championshipBMX,
    coverAlt: 'Volta Ciclística do Paraná 2ª Etapa',
    medias: [
      {
        url: championshipBMX,
        alt: 'Competição acirrada na 2ª etapa',
        type: 'image',
      },
      { url: paraCycling, alt: 'Paraciclistas determinados', type: 'image' },
      { url: mediaImage, alt: 'Público acompanhando a prova', type: 'image' },
      {
        url: 'https://www.youtube.com/watch?v=zA2pAm3A49U&ab_channel=CiclismoBrasileiro',
        alt: 'Melhores momentos da etapa',
        type: 'video',
      },
    ],
  },
  {
    id: '6',
    title: 'Volta Ciclística Internacional do Paraná 2015 - 1ª Etapa',
    category: 'ESTRADA',
    photoCount: 51,
    date: '27/05/2015',
    coverImage: championshipDHI,
    coverAlt: 'Volta Ciclística do Paraná 1ª Etapa',
    medias: [
      {
        url: championshipDHI,
        alt: 'Largada oficial da 1ª etapa',
        type: 'image',
      },
      { url: championshipBMX, alt: 'Primeiros quilômetros', type: 'image' },
      { url: paraCycling, alt: 'Inclusão no esporte', type: 'image' },
      { url: mediaImage, alt: 'Cenário da competição', type: 'image' },
      {
        url: 'https://www.youtube.com/watch?v=zA2pAm3A49U&ab_channel=CiclismoBrasileiro',
        alt: 'Abertura da Volta do Paraná 2015',
        type: 'video',
      },
    ],
  },
];

// export const mediaItems: MediaResume[] = [
//   {
//     url: mediaImage,
//     alt: 'Imagem de mídia',
//   },
//   {
//     url: 'https://www.youtube.com/watch?v=zA2pAm3A49U&ab_channel=CiclismoBrasileiro',
//     alt: 'Ícone de play',
//   },
//   {
//     url: 'https://www.youtube.com/watch?v=zA2pAm3A49U&ab_channel=CiclismoBrasileiro',
//     alt: 'Vídeo de mídia',
//   },
//   {
//     url: mediaImage,
//     alt: 'Imagem de mídia',
//   },
//   {
//     url: mediaImage,
//     alt: 'Imagem de mídia',
//   },
//   {
//     url: 'https://www.youtube.com/watch?v=zA2pAm3A49U&ab_channel=CiclismoBrasileiro',
//     alt: 'Ícone de play',
//   },
//     {
//     url: mediaImage,
//     alt: 'Imagem de mídia',
//   },
//   {
//     url: 'https://www.youtube.com/watch?v=zA2pAm3A49U&ab_channel=CiclismoBrasileiro',
//     alt: 'Ícone de play',
//   },
//   {
//     url: 'https://www.youtube.com/watch?v=zA2pAm3A49U&ab_channel=CiclismoBrasileiro',
//     alt: 'Vídeo de mídia',
//   },
//   {
//     url: mediaImage,
//     alt: 'Imagem de mídia',
//   },
//   {
//     url: mediaImage,
//     alt: 'Imagem de mídia',
//   },
//   {
//     url: 'https://www.youtube.com/watch?v=zA2pAm3A49U&ab_channel=CiclismoBrasileiro',
//     alt: 'Ícone de play',
//   },
// ];
