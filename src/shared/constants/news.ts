import { NewsResume } from '../../domains/cbc-site/interfaces/News/INews';
import cardimage from '../../assets/images/cardimage.jpg';
import mobileBanner from '../../assets/images/banners/mobileBanner.svg';

export const newsItems: NewsResume[] = [
  {
    id: '1',
    title:
      'Gustavo "Bala Loka" e Eduarda Bordignon conquistam o título brasileiro de BMX Freestyle Park 2025',
    subtitle:
      'Evento realizado em Maringá (PR) reuniu os principais nomes da modalidade e coroou os novos campeões nacionais',
    category: 'BMX Freestyle',
    modalitySlug: 'bmx-freestyle',
    date: '(Em 03/08/2025 às 09:39:54)',
    coverImage: {
      url: cardimage,
      alt: 'Gustavo "Bala Loka" e Eduarda Bordignon conquistam o título brasileiro de BMX Freestyle Park 2025',
    },
    imageContent: [
      {
        url: cardimage,
        alt: 'Bala Loka e Duda Crédito: Allan Modesto/CBC',
      },
      {
        url: mobileBanner,
        alt: 'Campeonato Nacional de Estrada reúne atletas de todo o Brasil',
      },
      {
        url: cardimage,
        alt: 'Gustavo "Bala Loka" e Eduarda Bordignon conquistam o título brasileiro de BMX Freestyle Park 2025',
      },
      {
        url: mobileBanner,
        alt: 'Campeonato Nacional de Estrada reúne atletas de todo o Brasil',
      },
    ],
    newsContent:
      'Após dominar todas as fases do campeonato de ponta a ponta, Gustavo Batista de Oliveira, o Bala Loka, conquistou o título da Elite Pro Masculino no Campeonato Brasileiro de BMX Freestyle Park 2025. A competição foi realizada entre os dias 1° e 3 de agosto, em Maringá (PR), e reuniu os melhores atletas do país em três dias de disputas de alto nível.\n\n“Foi uma final acirrada. Cada atleta entrou pra dar tudo o que tinha, e o nível estava altíssimo. Fico muito feliz de ter conseguido fazer a minha volta como planejei e conquistar mais esse título. É muito importante voltar a me sentir confiante após a lesão, mas sei que ainda tem muito trabalho pela frente. Muito obrigado pela torcida e o carinho de todos”, declarou Gustavo após a final.\n\nBala Loka confirmou seu favoritismo e brilhou dentro da pista com sequencias de manobras que levantou a arquibancada e conquistou 89,00 pontos na grande final da Elite Pro Masculino, superando Felipe Herison "Manerim" (88,00) e Davi Sodré (86,00). No feminino, Eduarda Bordignon foi o grande destaque e venceu com a nota de 69,00 pontos e levou o título da Elite Pro. O pódio ainda contou com Carolina Bittencourt (58,33). \n\nAlém das disputas da Elite, o evento também premiou os campeões de outras 11 categorias. Na Júnior Masculino, o título ficou com Marcus Eduardo (31,52), enquanto Luna Navarro da Silva venceu a Júnior Feminino (25,67). Lorenzo Martins foi o melhor na Juvenil Masculino (57,00), e Sophia Suri Volponi conquistou a vitória no Amador Feminino (44,00). Entre os homens, Pedro Otávio Gléria foi campeão do Amador Masculino (45,67), Guilherme Yuuki Kondo Jesus venceu a Iniciante I Masculino (68,33), Pedro Silvério Duarte foi o melhor na Iniciante II Masculino (81,33), e Pedro Luiz de Souza dominou a Iniciante III Masculino com nota 89,00.',
  },
  {
    id: '2',
    title: 'Campeonato Nacional de Estrada reúne atletas de todo o Brasil',
    subtitle:
      'Evento realizado em Belo Horizonte (MG) contou com a participação de mais de 300 ciclistas',
    category: 'Ciclismo de Estrada',
    modalitySlug: 'estrada',
    date: '(Em 15/07/2025 às 14:20:00)',
    coverImage: {
      url: mobileBanner,
      alt: 'Campeonato Nacional de Estrada reúne atletas de todo o Brasil',
    },
    imageContent: [
      {
        url: mobileBanner,
        alt: 'Campeonato Nacional de Estrada reúne atletas de todo o Brasil',
      },
      {
        url: cardimage,
        alt: 'Gustavo "Bala Loka" e Eduarda Bordignon conquistam o título brasileiro de BMX Freestyle Park 2025',
      },
      {
        url: mobileBanner,
        alt: 'Campeonato Nacional de Estrada reúne atletas de todo o Brasil',
      },
    ],
    newsContent:
      'O Campeonato Nacional de Estrada 2025 foi realizado em Belo Horizonte (MG) e contou com a participação de mais de 300 ciclistas de diferentes estados. A prova de resistência exigiu preparo físico e estratégia dos atletas, que enfrentaram percursos de longa distância e subidas desafiadoras. A edição deste ano destacou-se pelo alto nível técnico e pela grande presença de público ao longo do trajeto.',
  },
  {
    id: '3',
    title: 'Nova pista de BMX é inaugurada em São Paulo',
    subtitle:
      'Evento realizado no Parque da Juventude contou com a presença de atletas profissionais e iniciantes',
    category: 'BMX',
    modalitySlug: 'bmx-racing',
    date: '(Em 10/06/2025 às 10:00:00)',
    coverImage: {
      url: cardimage,
      alt: 'Nova pista de BMX é inaugurada em São Paulo',
    },
    imageContent: [
      { url: cardimage, alt: 'Nova pista de BMX é inaugurada em São Paulo' },
      {
        url: cardimage,
        alt: 'Gustavo "Bala Loka" e Eduarda Bordignon conquistam o título brasileiro de BMX Freestyle Park 2025',
      },
      {
        url: mobileBanner,
        alt: 'Campeonato Nacional de Estrada reúne atletas de todo o Brasil',
      },
    ],
    newsContent:
      'A cidade de São Paulo ganhou uma nova pista de BMX no Parque da Juventude, totalmente equipada para receber competições nacionais e internacionais. A inauguração contou com a presença de atletas profissionais e iniciantes, que já puderam testar o espaço em demonstrações de alto nível. A pista faz parte de um projeto da prefeitura para incentivar a prática esportiva e oferecer mais opções de lazer para a população.',
  },
  {
    id: '4',
    title: 'Equipe brasileira garante vaga para o Pan-Americano de Ciclismo',
    subtitle:
      'Evento realizado em São Paulo (SP) contou com a participação de atletas de todo o Brasil',
    category: 'Competição Internacional',
    modalitySlug: 'estrada',
    date: '(Em 22/05/2025 às 16:45:00)',
    coverImage: {
      url: mobileBanner,
      alt: 'Equipe brasileira garante vaga para o Pan-Americano de Ciclismo',
    },
    imageContent: [
      {
        url: mobileBanner,
        alt: 'Equipe brasileira garante vaga para o Pan-Americano de Ciclismo',
      },
      {
        url: cardimage,
        alt: 'Gustavo "Bala Loka" e Eduarda Bordignon conquistam o título brasileiro de BMX Freestyle Park 2025',
      },
      {
        url: mobileBanner,
        alt: 'Campeonato Nacional de Estrada reúne atletas de todo o Brasil',
      },
    ],
    newsContent:
      'A seleção brasileira de ciclismo confirmou presença no Pan-Americano de Ciclismo 2025 após garantir classificação nas etapas qualificatórias realizadas no Chile e na Colômbia. A equipe brasileira será representada por atletas das categorias estrada e pista, que vêm demonstrando evolução significativa nos últimos anos. O Pan-Americano acontecerá em Lima, no Peru, e servirá também como preparação para o Mundial da modalidade.',
  },
  {
    id: '5',
    title: 'Projeto social de ciclismo transforma vidas no interior do Paraná',
    subtitle: 'Iniciativa tem beneficiado jovens de comunidades carentes',
    category: 'Projeto Social',
    modalitySlug: 'ciclismo-para-todos',
    date: '(Em 05/04/2025 às 11:30:00)',
    coverImage: {
      url: cardimage,
      alt: 'Projeto social de ciclismo transforma vidas no interior do Paraná',
    },
    imageContent: [
      {
        url: cardimage,
        alt: 'Projeto social de ciclismo transforma vidas no interior do Paraná',
      },
    ],
    newsContent:
      'No município de Cascavel (PR), um projeto social tem utilizado o ciclismo como ferramenta de inclusão e transformação social. Crianças e adolescentes de comunidades carentes participam de treinos semanais, recebem acompanhamento escolar e têm acesso a bicicletas doadas por parceiros. O projeto já revelou talentos que competem em nível estadual e tem se tornado referência em ações sociais ligadas ao esporte.',
  },
  {
    id: '6',
    title: 'Brasil confirma candidatura para sediar o Mundial de Ciclismo 2029',
    subtitle:
      'Evento realizado em Brasília (DF) contará com a participação de atletas de todo o mundo',
    category: 'Competição Internacional',
    modalitySlug: 'estrada',
    date: '(Em 18/03/2025 às 09:00:00)',
    coverImage: {
      url: cardimage,
      alt: 'Brasil confirma candidatura para sediar o Mundial de Ciclismo 2029',
    },
    imageContent: [
      {
        url: cardimage,
        alt: 'Brasil confirma candidatura para sediar o Mundial de Ciclismo 2029',
      },
    ],
    newsContent:
      'A Confederação Brasileira de Ciclismo anunciou oficialmente a candidatura do Brasil para sediar o Campeonato Mundial de Ciclismo em 2029. A proposta prevê que o evento seja realizado em Brasília, com percursos urbanos e de estrada integrados à paisagem da capital federal. Caso seja aprovada, será a primeira vez que o país receberá a principal competição mundial da modalidade.',
  },
  {
    id: '7',
    title: 'Circuito de Mountain Bike terá etapas em três estados em 2025',
    subtitle:
      'Organização confirma calendário e estrutura para atletas amadores e profissionais',
    category: 'Mountain Bike',
    modalitySlug: 'mtb',
    date: '(Em 02/02/2025 às 08:00:00)',
    coverImage: {
      url: cardimage,
      alt: 'Circuito de Mountain Bike terá etapas em três estados em 2025',
    },
    imageContent: [
      {
        url: cardimage,
        alt: 'Circuito de Mountain Bike terá etapas em três estados',
      },
      { url: mobileBanner, alt: 'Banner do circuito de MTB' },
    ],
    newsContent:
      'O circuito nacional de Mountain Bike 2025 terá etapas confirmadas em Minas Gerais, São Paulo e Paraná. As provas contemplam categorias do amador ao profissional, com percursos técnicos e trechos de cross-country olímpico. A organização aposta em maior integração com clubes locais e infraestrutura ampliada para atletas e público.',
  },
  {
    id: '8',
    title: 'Programa de capacitação para treinadores recebe inscrições',
    subtitle:
      'Curso voltado para formação de treinadores de base com enfoque em segurança e metodologia',
    category: 'Formação',
    modalitySlug: 'institucional',
    date: '(Em 20/01/2025 às 12:00:00)',
    coverImage: {
      url: mobileBanner,
      alt: 'Programa de capacitação para treinadores recebe inscrições',
    },
    imageContent: [{ url: mobileBanner, alt: 'Capacitação para treinadores' }],
    newsContent:
      'A Confederação lançou um programa de capacitação destinado a treinadores das categorias de base, com módulos sobre preparação física, prevenção de lesões e ética esportiva. As vagas são limitadas e as inscrições serão avaliadas por comissões regionais.',
  },
  {
    id: '9',
    title:
      'Federações estaduais recebem apoio para reformular calendários locais',
    subtitle:
      'Iniciativa visa otimizar o calendário competitivo e incentivar atletas locais',
    category: 'Federações',
    modalitySlug: 'institucional',
    date: '(Em 12/01/2025 às 09:15:00)',
    coverImage: {
      url: cardimage,
      alt: 'Federações estaduais recebem apoio para reformular calendários locais',
    },
    imageContent: [{ url: cardimage, alt: 'Calendário competitivo estadual' }],
    newsContent:
      'A CBC disponibilizou um pacote de consultoria para federações estaduais com o objetivo de reorganizar calendários locais e reduzir conflitos entre eventos. A proposta inclui formação de equipes técnicas e suporte logístico.',
  },
  {
    id: '10',
    title:
      'Festival de Ciclismo de Rua promove inclusão e participação popular',
    subtitle:
      'Evento gratuito atraiu famílias e incentivou a prática do ciclismo urbano',
    category: 'Evento',
    modalitySlug: 'ciclismo-para-todos',
    date: '(Em 28/02/2025 às 17:00:00)',
    coverImage: {
      url: mobileBanner,
      alt: 'Festival de Ciclismo de Rua promove inclusão e participação popular',
    },
    imageContent: [
      { url: mobileBanner, alt: 'Festival de Ciclismo de Rua' },
      { url: cardimage, alt: 'Público no festival de ciclismo' },
    ],
    newsContent:
      'O Festival de Ciclismo de Rua reuniu atividades para todas as idades, como passeios guiados, oficinas de mecânica e aulas de segurança no trânsito. A iniciativa incentivou a adoção de rotas cicláveis e trouxe parcerias com prefeituras locais.',
  },
  {
    id: '11',
    title: 'Atleta paraolímpico recebe homenagem por conquistas internacionais',
    subtitle: 'Reconhecimento destaca trajetória de superação e inspiração',
    category: 'Paraciclismo',
    modalitySlug: 'paraciclismo',
    date: '(Em 30/03/2025 às 10:30:00)',
    coverImage: {
      url: cardimage,
      alt: 'Atleta paraolímpico recebe homenagem por conquistas internacionais',
    },
    imageContent: [{ url: cardimage, alt: 'Homenagem a atleta paraolímpico' }],
    newsContent:
      'A cerimônia de homenagem celebrou os resultados de atletas paraolímpicos que conquistaram pódios em competições internacionais. O reconhecimento reforça políticas de apoio e inclusão no esporte adaptado.',
  },
  {
    id: '12',
    title:
      'Calendário escolar e esportivo: parceria entre escolas e clubes cresce',
    subtitle:
      'Ações buscam aproximar estudantes das práticas esportivas regulares',
    category: 'Educação',
    modalitySlug: 'ciclismo-para-todos',
    date: '(Em 07/04/2025 às 08:30:00)',
    coverImage: {
      url: mobileBanner,
      alt: 'Calendário escolar e esportivo: parceria entre escolas e clubes cresce',
    },
    imageContent: [
      { url: mobileBanner, alt: 'Parceria entre escolas e clubes' },
    ],
    newsContent:
      'Programas de incentivo ao esporte nas escolas têm ampliado parcerias com clubes locais, oferecendo aulas e projetos de ciclismo para jovens. As primeiras avaliações indicam aumento no interesse e na adesão de estudantes às atividades.',
  },
  {
    id: '13',
    title:
      'Estrada: nova etapa do circuito estadual confirma percursos desafiadores',
    subtitle:
      'Prova reunirá atletas regionais e nacionais em percurso com subidas técnicas',
    category: 'Ciclismo de Estrada',
    modalitySlug: 'estrada',
    date: '(Em 12/06/2025 às 07:30:00)',
    coverImage: {
      url: mobileBanner,
      alt: 'Estrada: nova etapa do circuito estadual confirma percursos desafiadores',
    },
    imageContent: [
      { url: mobileBanner, alt: 'Etapa do circuito estadual de estrada' },
      { url: cardimage, alt: 'Atletas durante a prova de estrada' },
    ],
    newsContent:
      'A organização anunciou detalhes da próxima etapa do circuito estadual de estrada, incluindo mapas de percurso e pontos de hidratação. Espera-se a participação de equipes de várias regiões, com categorias para jovens e elite.',
  },
  {
    id: '14',
    title: 'Ciclismo de estrada lança selo de sustentabilidade em eventos',
    subtitle:
      'Medidas visam reduzir impacto ambiental e promover práticas sustentáveis nas provas',
    category: 'Ciclismo de Estrada',
    modalitySlug: 'estrada',
    date: '(Em 01/05/2025 às 10:00:00)',
    coverImage: {
      url: cardimage,
      alt: 'Ciclismo de estrada lança selo de sustentabilidade em eventos',
    },
    imageContent: [
      {
        url: cardimage,
        alt: 'Selo de sustentabilidade em eventos de ciclismo',
      },
    ],
    newsContent:
      'A iniciativa apresenta critérios de gestão de resíduos, uso de materiais recicláveis e opções de transporte sustentável para atletas e público. Eventos que cumprirem os requisitos receberão o selo em suas comunicações.',
  },
];
