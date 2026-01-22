// import bmxFreestyleMainPhoto from '../../assets/images/modal/bmg_racing_modal/photo3.svg';
import photo1 from '../../assets/images/modal/bmg_racing_modal/photo1.svg';
import photo2 from '../../assets/images/modal/bmg_racing_modal/photo2.svg';
import photo3 from '../../assets/images/modal/bmg_racing_modal/photo3.svg';

import photo4 from '../../assets/images/modal/bmxModalImg/photo1.svg';
import photo5 from '../../assets/images/modal/bmxModalImg/photo2.svg';

import photo6 from '../../assets/images/modal/paraCiclismoModal/photo1.svg';
import photo7 from '../../assets/images/modal/paraCiclismoModal/photo2.svg';
import photo8 from '../../assets/images/modal/paraCiclismoModal/photo3.svg';

import photo9 from '../../assets/images/modal/pistaModal/photo1.svg';
import photo10 from '../../assets/images/modal/pistaModal/photo2.svg';

import photo11 from '../../assets/images/modal/ciclismoEstrada/photo1.svg';
import photo12 from '../../assets/images/modal/ciclismoEstrada/photo2.svg';
import photo13 from '../../assets/images/modal/ciclismoEstrada/photo3.svg';

import photo14 from '../../assets/images/modal/ciclismoPTModal.svg';
import photo15 from '../../assets/images/modal/esportModal.svg';
import photo16 from '../../assets/images/modal/PANAMERICANO_ESTRADA_Modal.svg';

import { Modality } from '../../domains/cbc-site/interfaces/Modality/IModality';
import { pagesBanners } from './banners';

const {
  aboutMountainBike,
  aboutBmxRacing,
  aboutBmxFreestyle,
  aboutCiclismoParaTodos,
  aboutESports,
  aboutParaciclismo,
  aboutPista,
  aboutEstrada,
} = pagesBanners;

const modalityData: Modality[] = [
  {
    modalityId: 'ciclismo-para-todos',
    modalityName: 'CICLISMO PARA TODOS',
    modalityDescription:
      'O Ciclismo para Todos é a porta de entrada para o universo da bicicleta. Com foco na mobilidade, saúde e integração social, a modalidade incentiva o uso da bike como estilo de vida. A CBC atua para tornar o ciclismo mais acessível, fomentando projetos, eventos e políticas que promovem bem-estar e inclusão em todo o Brasil.',
    modalBanner: photo14,
    aboutBanner: aboutCiclismoParaTodos,
    color: '#1A2B6D',
    achievements: [],
  },
  {
    modalityId: 'pista',
    modalityName: 'PISTA',
    modalityDescription:
      'Com raízes que têm origem no século XIX, o ciclismo de pista esteve presente desde os Jogos de Atenas 1896, ficando ausente apenas em Estocolmo 1912. As competições acontecem em velódromos de 250 metros, com curvas inclinadas, que exigem técnica, explosão e tática.\n\nDesde Seul 1988, as mulheres também competem no programa olímpico, que atualmente conta com seis provas no calendário:',
    modalBanner: photo10,
    aboutBanner: aboutPista,
    color: '#1A2B6D',
    infos: [
      {
        infoId: 'sprint-individual',
        title: 'Sprint (Velocidade individual)',
        description:
          'Disputa em duelos. Os ciclistas percorrem três voltas, mas apenas os 200 metros finais são cronometrados. A partir dos melhores tempos, seguem eliminatórias até a decisão por medalhas.',
        coverImage: photo9,
      },
    ],
    achievements: [],
  },
  {
    modalityId: 'bmx-racing',
    modalityName: 'BMX RACING',
    modalityDescription:
      'O BMX Racing, conhecido no Brasil como bicicross, surgiu no sul da Califórnia, no fim dos anos 1960. Inspirado no motocross, rapidamente conquistou espaço entre jovens que adaptavam bicicletas para competir em pistas de terra.',
    modalBanner: photo3,
    aboutBanner: aboutBmxRacing,
    color: '#1A2B6D',
    infos: [
      {
        infoId: 'primeira-corrida-oficial',
        title: 'A primeira corrida oficial',
        description:
          'foi registrada em 1969, no Palms Park, em Santa Monica. Reconhecido pela União Ciclística Internacional (UCI) em 1993, o BMX estreou no programa olímpico em Pequim 2008 e permanece desde então. O Brasil esteve presente em todas as edições olímpicas da modalidade.',
        coverImage: photo1,
      },
      {
        infoId: 'formato-de-prova',
        title: 'Formato de prova',
        description:
          'Disputado em pistas curtas, com rampas, curvas inclinadas e seções de ondulação, o BMX coloca até oito ciclistas lado a lado, largando de uma rampa elevada. As baterias eliminatórias levam os mais rápidos até a final, em que vence quem cruza a linha de chegada primeiro.',
        coverImage: photo2,
      },
    ],
    achievements: [],
  },
  {
    modalityId: 'bmx-freestyle',
    modalityName: 'BMX Freestyle',
    modalityDescription:
      'O BMX Freestyle Park nasceu nos anos 1970 como expressão de manobras e acrobacias urbanas. Tornou-se disciplina oficial da UCI em 2016 e estreou no calendário olímpico em Tóquio 2020 (realizado em 2021). No Brasil, a modalidade ganhou força nos últimos anos, com destaque para Gustavo “Bala Loka”, sexto colocado nos Jogos de Paris 2024.',
    modalBanner: photo5,
    aboutBanner: aboutBmxFreestyle,
    color: '#1A2B6D',
    infos: [
      {
        infoId: 'impacto-olimpico',
        title: 'Impacto olímpico',
        description:
          'Desde sua inclusão, o Freestyle Park ganhou visibilidade internacional e atraiu uma nova geração de ciclistas. O formato, jovem e dinâmico, conquistou espaço estratégico dentro do movimento olímpico por seu apelo moderno e pela conexão direta com o público urbano.',
        coverImage: photo4,
      },
    ],
    achievements: [],
  },
  {
    modalityId: 'mtb',
    modalityName: 'Mountain Bike',
    modalityDescription:
      'O Mountain Bike estreou no programa olímpico em Atlanta, 1996, com a prova de Cross Country Olímpico (XCO). No Brasil, o esporte se expandiu com diversas vertentes. Entre as mais populares estão o XCO, o Short Track (XCC), o Eliminator (XCE), e a Maratona (XCM). Modalidades como Downhill, Enduro e e-MTB também crescem no país, embora ainda não façam parte do programa olímpico.',
    modalBanner: photo16,
    aboutBanner: aboutMountainBike,
    color: '#2E4A1B',
    achievements: [],
  },
  {
    modalityId: 'estrada',
    modalityName: 'Ciclismo de Estrada',
    modalityDescription:
      'O ciclismo de estrada é uma das modalidades mais tradicionais dos Jogos Olímpicos, presente desde Atenas 1896. No Brasil, as principais provas disputadas são a Prova de Resistência (Road Race) e o Contrarrelógio Individual (Time Trial).',
    aboutBanner: aboutEstrada,
    modalBanner: photo13,
    color: '#1A2B6D',
    infos: [
      {
        infoId: 'road-race',
        title: 'Prova de Resistência (Road Race)',
        description:
          'Largada em pelotão, percorrendo longas distâncias em diferentes tipos de terreno. Vence quem cruza a linha de chegada primeiro.',
        coverImage: photo11,
      },
      {
        infoId: 'time-trial',
        title: 'Contrarrelógio Individual (Time Trial)',
        description:
          'Cada atleta larga sozinho em intervalos regulares, geralmente com um minuto de diferença, e o objetivo é completar o percurso no menor tempo possível.',
        coverImage: photo12,
      },
    ],
    achievements: [],
  },
  {
    modalityId: 'paraciclismo',
    modalityName: 'PARA-CICLISMO',
    modalityDescription:
      'O paraciclismo estreou nos Jogos Paralímpicos de Atlanta 1996 (estrada) e Sydney 2000 (pista). A modalidade reúne atletas com diferentes tipos de deficiência, competindo em bicicletas adaptadas às suas condições funcionais.\n\nNo Brasil, o esporte é organizado pela Confederação Brasileira de Ciclismo (CBC), em parceria com o Comitê Paralímpico Brasileiro (CPB), seguindo normas da UCI.\n\nAs categorias são divididas em quatro grupos principais:',
    aboutBanner: aboutParaciclismo,
    modalBanner: photo8,
    color: '#1A2B6D',
    infos: [
      {
        infoId: 'handbike',
        title: 'Handbike (H1 a H5)',
        description:
          'Para atletas que utilizam bicicletas impulsionadas pelos braços. Variam de competidores com tetraplegia severa (H1) até aqueles com maior controle de tronco e braços ou amputações nos membros inferiores (H5).',
        coverImage: photo6,
      },
      {
        infoId: 'convencional',
        title: 'Ciclismo Convencional (C1 a C5)',
        description:
          'Ciclistas com diferentes graus de limitação motora que competem em bicicletas tradicionais. Quanto menor o número da classe, maior o comprometimento funcional.',
        coverImage: photo7,
      },
    ],
    achievements: [],
  },
  {
    modalityId: 'esports',
    modalityName: 'e-Sports',
    modalityDescription:
      'O universo do ciclismo também vive no virtual. Conheça os e-Sports da CBC: treinos, competições e desafios em plataformas digitais que exigem tanto quanto a estrada. Alta performance, estratégia e emoção agora também no mundo online.',
    aboutBanner: aboutESports,
    modalBanner: photo15,
    color: '#1A2B6D',
    achievements: [],
  },
];

export default modalityData;
