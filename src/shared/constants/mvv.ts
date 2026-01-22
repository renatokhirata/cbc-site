export interface MVVItem {
  title: string;
  content: string;
  bgColor: 'tertiary' | 'yellow' | 'secondary';
  color: 'typeText.primary' | 'typeText.default';
  items?: string[];
}

export const mvvData: MVVItem[] = [
  {
    title: 'Missão',
    content:
      'Desenvolver, promover e fortalecer o ciclismo em todas as suas modalidades no território nacional, contribuindo para a formação de atletas, a evolução técnica e o acesso democrático ao esporte.',
    bgColor: 'tertiary',
    color: 'typeText.primary',
  },
  {
    title: 'Visão',
    content:
      'Ser referência global em gestão esportiva e no desenvolvimento do ciclismo, reconhecida por sua atuação ética, inclusiva e transformadora.',
    bgColor: 'yellow',
    color: 'typeText.default',
  },
  {
    title: 'Valores',
    content: '',
    bgColor: 'secondary',
    color: 'typeText.primary',
    items: [
      'Respeito ao esporte e às pessoas',
      'Transparência e ética na gestão',
      'Excelência e inovação',
      'Inclusão e diversidade',
      'Valorização dos talentos brasileiros',
      'Comprometimento com o desenvolvimento sustentável',
    ],
  },
];
