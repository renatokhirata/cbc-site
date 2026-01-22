export interface EthicsInfoItem {
  id: string;
  title: string;
  description: string;
}

export const ethicsInfoData: EthicsInfoItem[] = [
  {
    id: 'fraudes-correcao',
    title: 'Fraudes e corrupção',
    description:
      'Práticas ilegais ou antiéticas que envolvem desvio de dinheiro, recebimento de propina, adulteração de documentos ou qualquer ação que comprometa a transparência e a honestidade da entidade.',
  },
  {
    id: 'conflito-interesses',
    title: 'Conflito de interesses',
    description:
      'Situações em que interesses pessoais, profissionais ou financeiros possam influenciar, de forma inadequada, as decisões e responsabilidades dentro da entidade.',
  },
  {
    id: 'assedio-moral-sexual',
    title: 'Assédio moral ou sexual',
    description:
      'Comportamentos abusivos que causem constrangimento, intimidação ou humilhação. Isso inclui ofensas verbais, tratamento desrespeitoso, intimidações, bem como avanços ou condutas de caráter sexual sem consentimento.',
  },
  {
    id: 'abuso-fisico-emocional',
    title: 'Abusos físicos, emocionais ou psicológicos',
    description:
      'Ações que causem dor física, sofrimento emocional ou psicológico, incluindo agressões, ameaças, intimidações ou qualquer comportamento que afete a integridade de uma pessoa.',
  },
  {
    id: 'discriminacao-preconceito',
    title: 'Discriminação ou preconceito',
    description:
      'Qualquer forma de tratamento desigual ou injusto baseado em raça, cor, gênero, orientação sexual, religião, idade, condição física, origem ou qualquer característica pessoal.',
  },
  {
    id: 'uso-indevido-recursos',
    title: 'Uso indevido de recursos da entidade',
    description:
      'Quando bens, verbas, materiais ou qualquer recurso pertencente à entidade são utilizados para fins pessoais ou fora dos objetivos institucionais.',
  },
  {
    id: 'doping',
    title: 'Doping',
    description:
      'Uso de substâncias ou métodos proibidos com o objetivo de melhorar artificialmente o desempenho esportivo, colocando em risco a saúde e a integridade do esporte.',
  },
  {
    id: 'violacao-codigo',
    title: 'Violação ao Código de Ética e Conduta da CBC',
    description:
      'Qualquer ação que esteja em desacordo com os princípios, valores e regras estabelecidas no Código de Ética e Conduta da entidade.',
  },
  {
    id: 'manipulacao-resultados',
    title: 'Manipulação de resultados',
    description:
      'Qualquer tentativa de alterar, influenciar ou combinar resultados de competições de forma desonesta, prejudicando a lisura e a credibilidade do esporte.',
  },
];

export default ethicsInfoData;
