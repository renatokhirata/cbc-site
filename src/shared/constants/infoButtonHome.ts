export interface InfoButtonHome {
  title: string;
  subtitle: string;
  icon: string;
  color: 'primary' | 'secondary' | 'tertiary' | 'default';
  href?: string;
  onClick?: () => void;
}

import sejaParceiro from '../../assets/icons/pages/home/infoButton/sejaParceiro.svg';
import governancaIcon from '../../assets/icons/pages/home/infoButton/governanca.svg';
import canalDeEticaIcon from '../../assets/icons/pages/home/infoButton/canalEtica.svg';
import ouvidoriaIcon from '../../assets/icons/pages/home/infoButton/ouvidoria.svg';
import antidoping from '../../assets/icons/pages/home/infoButton/antidoping.svg';
import documentosIcon from '../../assets/icons/pages/home/infoButton/documentos.svg';
import stjdIcon from '../../assets/icons/pages/home/infoButton/stjd.svg';

const infoButtonHome: InfoButtonHome[] = [
  {
    title: 'SEJA UM PARCEIRO',
    subtitle: 'Conecte-se à CBC e fortaleça o ciclismo brasileiro com a gente.',
    icon: sejaParceiro,
    color: 'default',
  },
  {
    title: 'GOVERNANÇA',
    subtitle: 'Transparência e responsabilidade na gestão da CBC.',
    icon: governancaIcon,
    color: 'default',
    href: '/governanca',
  },
  {
    title: 'CANAL DE ÉTICA',
    subtitle: 'Espaço seguro e confidencial para relatar condutas irregulares.',
    icon: canalDeEticaIcon,
    color: 'default',
    href: '/canal-de-etica',
  },
  {
    title: 'ANTIDOPING',
    subtitle:
      'Informações e orientações sobre práticas limpas e seguras no esporte.',
    icon: antidoping,
    color: 'default',
    href: '/antidoping',
  },
  {
    title: 'OUVIDORIA',
    subtitle:
      'Canal aberto para sugestões, elogios e manifestações da comunidade.',
    icon: ouvidoriaIcon,
    color: 'default',
    href: '/ouvidoria',
  },
  {
    title: 'DOCUMENTOS',
    subtitle:
      'Acesse regulamentos, atas, estatutos e outros documentos oficiais da CBC.',
    icon: documentosIcon,
    color: 'default',
    href: '/documentos',
  },
  {
    title: 'STJD',
    subtitle: 'Acompanhe decisões, regulamentos e processos do STJD',
    icon: stjdIcon,
    color: 'default',
    href: '/stjd',
  },
];

export default infoButtonHome;
