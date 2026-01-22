import { Antidoping } from '../../domains/cbc-site/interfaces/Documents/Document';

export const documentsMock: Antidoping[] = [
  {
    year: 2025,
    date: '06 de fevereiro de 2025',
    title:
      'Circular CBC 082 - 27.09.2023 - Artigo 10.14.1 do ADR da UCI, qualquer indivíduo sancionado está proibido de participar em qualquer capacidade num Evento ou atividade autorizada, reconhecida ou organizada pela UCI, uma Confederação Continental, uma Federação Nacional...',
    sections: {
      officialDocuments: [
        {
          description:
            'Qualquer indivíduo sancionado está proibido de participar em qualquer capacidade num Evento ou atividade autorizada, reconhecida ou organizada  10.14.1 do ADR da UCI, qualquer indivíduo sancionado está proibido de participar em qualquer capacidade num Evento ou atividade autorizada, reconhecida ou organizada',
          fileName: 'arquivo.pdf',
          fileUrl: '/docs/arquivo.pdf',
        },
      ],
      provisionalNotices: [
        {
          title:
            'CAD-CBC - Citação 003/2012 (Aline Fernandes Paiva Paroliz), atleta.',
          fileName: 'arquivo.pdf',
          fileUrl: '/docs/arquivo.pdf',
        },
        {
          title: 'CAD-CBC - Citação 003/2012 (Sumaia Ali dos Santos), atleta.',
          fileName: 'arquivo.pdf',
          fileUrl: '/docs/arquivo.pdf',
        },
        {
          title: 'Notificação provisória - Suspensão preventiva (exemplo)',
          fileName: 'notificacao-provisoria.pdf',
          fileUrl: '/docs/notificacao-provisoria.pdf',
        },
        {
          title:
            'Notificação provisória - Processo administrativo exemplo 2025',
          fileName: 'notificacao-2025.pdf',
          fileUrl: '/docs/notificacao-2025.pdf',
        },
      ],
    },
  },
  {
    year: 2024,
    date: '08 de janeiro de 2024',
    title:
      'Portaria 001/2024 - Nomeação de Administrador Provisório da Federação Noroiterograndense de Ciclismo.',
    sections: {
      officialDocuments: [
        {
          description:
            'Portaria 001/2024 - Nomeação e atribuições do Administrador Provisório.',
          fileName: 'portaria-001-2024.pdf',
          fileUrl: '/docs/portaria-001-2024.pdf',
        },
        {
          description:
            'Relatório de acompanhamento das ações administrativas - 2024',
          fileName: 'relatorio-acompanhamento-2024.pdf',
          fileUrl: '/docs/relatorio-acompanhamento-2024.pdf',
        },
      ],
      provisionalNotices: [
        {
          title:
            'Notificação provisória - Processo administrativo exemplo 2024',
          fileName: 'notificacao-2024.pdf',
          fileUrl: '/docs/notificacao-2024.pdf',
        },
      ],
    },
  },
  {
    year: 2023,
    date: '06 de janeiro de 2023',
    title:
      'CBC lança programas para promoção da Equidade de Gênero no Ciclismo.',
    sections: null,
  },
];
