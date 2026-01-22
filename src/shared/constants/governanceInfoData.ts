import { InfoResume } from '../../domains/cbc-site/interfaces/Info/Info';
import organograma from '../../assets/icons/documentIcons/organograma.svg';
import atas_e_reunioes from '../../assets/icons/documentIcons/atas-e-reunioes.svg';
import certidoes from '../../assets/icons/documentIcons/certidoes.svg';
import edital_de_convocacao from '../../assets/icons/documentIcons/edital-de-convocacao-e-assemb-geral.svg';
import entidades_filiadas from '../../assets/icons/documentIcons/entidades-filiadas.svg';
import normas_e_regulamentos from '../../assets/icons/documentIcons/normas-e-regulamentos.svg';
import poderes_e_entidades from '../../assets/icons/documentIcons/poderes-e-entidades.svg';
import estatuto from '../../assets/icons/documentIcons/estatuto.svg';

export const governanceInfoData: InfoResume[] = [
  {
    id: 'gov-1',
    title: 'Organograma',
    icon: organograma,
    subtitle: 'Estrutura organizacional da entidade',
    category: 'governance',
    date: '2025',
    content:
      'Acesse as atas que registram de forma oficial as decisões, reuniões e deliberações da Confederação Brasileira de Ciclismo.',
    documents: [
      {
        id: 'doc-org-1',
        name: `ATA DA ASSEMBLEIA GERAL ORDINÁRIA ELETIVA DA CBC  - 08.03.2025.pdf`,
        url: 'https://example.com/ata-08-03-2025.pdf',
        date: '21/03/2024',
      },
      {
        id: 'doc-org-2',
        name: 'ATA DA ASSEMBLEIA GERAL ORDINÁRIA ELETIVA DA CBC - 08.03.2025.pdf',
        url: 'https://example.com/ata-08-03-2025.pdf',
        date: '21/03/2024',
      },
      {
        id: 'doc-org-3',
        name: 'ATA DA ASSEMBLEIA GERAL ORDINÁRIA ELETIVA DA CBC - 08.03.2025.pdf',
        url: 'https://example.com/ata-08-03-2025.pdf',
        date: '21/03/2024',
      },
      {
        id: 'doc-org-4',
        name: 'ATA DA ASSEMBLEIA GERAL ORDINÁRIA ELETIVA DA CBC - 08.03.2025.pdf',
        url: 'https://example.com/ata-08-03-2025.pdf',
        date: '21/03/2024',
      },
      {
        id: 'doc-org-5',
        name: 'ATA DA ASSEMBLEIA GERAL ORDINÁRIA ELETIVA DA CBC - 08.03.2025.pdf',
        url: 'https://example.com/ata-08-03-2025.pdf',
        date: '21/03/2024',
      },
    ],
    documentsByYear: [
      {
        year: '2025',
        documents: [
          {
            id: 'doc-org-1',
            name: 'ATA DA ASSEMBLEIA GERAL ORDINÁRIA ELETIVA DA CBC - 08.03.2025.pdf',
            url: 'https://example.com/ata-08-03-2025.pdf',
            date: '08/03/2025',
          },
          {
            id: 'doc-org-2',
            name: 'LINK DO VIDEO DA GRAVAÇÃO DA AGO E AGE DA CBC REALIZADA EM 23.03.2024',
            url: 'https://example.com/video-23-03-2024.mp4',
            date: '23/03/2025',
          },
        ],
      },
      {
        year: '2024',
        documents: [
          {
            id: 'doc-org-3',
            name: 'ATA DA ASSEMBLEIA GERAL ORDINÁRIA DA CBC - 07.03.2024.pdf',
            url: 'https://example.com/ata-07-03-2024.pdf',
            date: '07/03/2024',
          },
          {
            id: 'doc-org-4',
            name: 'Documento Exemplo 2024.pdf',
            url: 'https://example.com/documento-2024.pdf',
            date: '15/06/2024',
          },
        ],
      },
      {
        year: '2023',
        documents: [
          {
            id: 'doc-org-5',
            name: 'Documento Exemplo 2023.pdf',
            url: 'https://example.com/documento-2023.pdf',
            date: '10/02/2023',
          },
        ],
      },
    ],
    representative: [
      {
        id: '1',
        name: 'Nome da representante',
      },
      {
        id: '2',
        name: 'Nome da representante',
      },
    ],
    members: [
      {
        id: '1',
        name: 'Nome do membro',
      },
      {
        id: '2',
        name: 'Nome do membro',
      },
    ],
    council: [
      {
        id: '1',
        name: 'Nome do conselho',
      },
      {
        id: '2',
        name: 'Nome do conselho',
      },
    ],
  },
  {
    id: 'gov-2',
    title: 'Poderes da Entidade',
    icon: poderes_e_entidades,
    subtitle: 'Funções e competências dos poderes',
    category: 'governance',
    date: '2025',
    content:
      'Explica as funções e competências dos diferentes poderes que compõem a entidade, como Assembleia Geral, Diretoria, Conselhos e Comissões.',
    documents: [
      {
        id: 'doc-pow-1',
        name: 'Poderes_da_Entidade.pdf',
        url: 'https://example.com/poderes-entidade.pdf',
        date: '15/01/2025',
      },
      {
        id: 'doc-pow-2',
        name: 'Poderes_da_Entidade.pdf',
        url: 'https://example.com/poderes-entidade.pdf',
        date: '20/08/2024',
      },
      {
        id: 'doc-pow-3',
        name: 'Poderes_da_Entidade.pdf',
        url: 'https://example.com/poderes-entidade.pdf',
        date: '10/03/2024',
      },
      {
        id: 'doc-pow-4',
        name: 'Poderes_da_Entidade.pdf',
        url: 'https://example.com/poderes-entidade.pdf',
        date: '05/11/2023',
      },
      {
        id: 'doc-pow-5',
        name: 'Poderes_da_Entidade.pdf',
        url: 'https://example.com/poderes-entidade.pdf',
        date: '12/05/2023',
      },
    ],
    documentsByYear: [
      {
        year: '2025',
        documents: [
          {
            id: 'doc-pow-1',
            name: 'Poderes da Entidade - Atualização 2025.pdf',
            url: 'https://example.com/poderes-entidade-2025.pdf',
            date: '15/01/2025',
          },
        ],
      },
      {
        year: '2024',
        documents: [
          {
            id: 'doc-pow-2',
            name: 'Poderes da Entidade - Revisão Agosto.pdf',
            url: 'https://example.com/poderes-entidade-ago2024.pdf',
            date: '20/08/2024',
          },
          {
            id: 'doc-pow-3',
            name: 'Poderes da Entidade - Primeira Versão 2024.pdf',
            url: 'https://example.com/poderes-entidade-mar2024.pdf',
            date: '10/03/2024',
          },
        ],
      },
      {
        year: '2023',
        documents: [
          {
            id: 'doc-pow-4',
            name: 'Poderes da Entidade - Novembro 2023.pdf',
            url: 'https://example.com/poderes-entidade-nov2023.pdf',
            date: '05/11/2023',
          },
          {
            id: 'doc-pow-5',
            name: 'Poderes da Entidade - Maio 2023.pdf',
            url: 'https://example.com/poderes-entidade-mai2023.pdf',
            date: '12/05/2023',
          },
        ],
      },
    ],
  },
  {
    id: 'gov-3',
    title: 'Estatuto',
    icon: estatuto,
    subtitle: 'Normas fundamentais de funcionamento',
    category: 'governance',
    date: '2025',
    content:
      'Documento que estabelece as normas fundamentais de funcionamento da entidade, definindo sua estrutura, finalidades, direitos e deveres de seus membros.',
    documents: [
      {
        id: 'doc-statute-1',
        name: 'Estatuto_CBC.pdf',
        url: 'https://example.com/estatuto.pdf',
        date: '10/02/2025',
      },
      {
        id: 'doc-statute-2',
        name: 'Estatuto_CBC.pdf',
        url: 'https://example.com/estatuto.pdf',
        date: '18/09/2024',
      },
      {
        id: 'doc-statute-3',
        name: 'Estatuto_CBC.pdf',
        url: 'https://example.com/estatuto.pdf',
        date: '25/06/2024',
      },
      {
        id: 'doc-statute-4',
        name: 'Estatuto_CBC.pdf',
        url: 'https://example.com/estatuto.pdf',
        date: '14/12/2023',
      },
      {
        id: 'doc-statute-5',
        name: 'Estatuto_CBC.pdf',
        url: 'https://example.com/estatuto.pdf',
        date: '22/07/2023',
      },
      {
        id: 'doc-statute-6',
        name: 'Estatuto_CBC.pdf',
        url: 'https://example.com/estatuto.pdf',
        date: '08/01/2023',
      },
    ],
    documentsByYear: [
      {
        year: '2025',
        documents: [
          {
            id: 'doc-statute-1',
            name: 'Estatuto CBC - Versão Atualizada 2025.pdf',
            url: 'https://example.com/estatuto-2025.pdf',
            date: '10/02/2025',
          },
        ],
      },
      {
        year: '2024',
        documents: [
          {
            id: 'doc-statute-2',
            name: 'Estatuto CBC - Emenda Setembro 2024.pdf',
            url: 'https://example.com/estatuto-set2024.pdf',
            date: '18/09/2024',
          },
          {
            id: 'doc-statute-3',
            name: 'Estatuto CBC - Revisão Junho 2024.pdf',
            url: 'https://example.com/estatuto-jun2024.pdf',
            date: '25/06/2024',
          },
        ],
      },
      {
        year: '2023',
        documents: [
          {
            id: 'doc-statute-4',
            name: 'Estatuto CBC - Dezembro 2023.pdf',
            url: 'https://example.com/estatuto-dez2023.pdf',
            date: '14/12/2023',
          },
          {
            id: 'doc-statute-5',
            name: 'Estatuto CBC - Julho 2023.pdf',
            url: 'https://example.com/estatuto-jul2023.pdf',
            date: '22/07/2023',
          },
          {
            id: 'doc-statute-6',
            name: 'Estatuto CBC - Janeiro 2023.pdf',
            url: 'https://example.com/estatuto-jan2023.pdf',
            date: '08/01/2023',
          },
        ],
      },
    ],
    representative: [
      {
        id: '1',
        name: 'Nome da representante',
      },
      {
        id: '2',
        name: 'Nome da representante',
      },
    ],
    members: [
      {
        id: '1',
        name: 'Nome do membro',
      },
      {
        id: '2',
        name: 'Nome do membro',
      },
    ],
    council: [
      {
        id: '1',
        name: 'Nome do conselho',
      },
      {
        id: '2',
        name: 'Nome do conselho',
      },
    ],
  },
  {
    id: 'gov-4',
    title: 'Normas e Regulamentos',
    icon: normas_e_regulamentos,
    subtitle: 'Regras e diretrizes das atividades',
    category: 'governance',
    date: '2025',
    content:
      'Reúne as regras e diretrizes que orientam o funcionamento das atividades esportivas, administrativas e institucionais da entidade.',
    documents: [
      {
        id: 'doc-reg-1',
        name: 'Normas_e_Regulamentos.pdf',
        url: 'https://example.com/normas-regulamentos.pdf',
        date: '05/03/2025',
      },
      {
        id: 'doc-reg-2',
        name: 'Normas_e_Regulamentos.pdf',
        url: 'https://example.com/normas-regulamentos.pdf',
        date: '12/11/2024',
      },
      {
        id: 'doc-reg-3',
        name: 'Normas_e_Regulamentos.pdf',
        url: 'https://example.com/normas-regulamentos.pdf',
        date: '28/04/2024',
      },
      {
        id: 'doc-reg-4',
        name: 'Normas_e_Regulamentos.pdf',
        url: 'https://example.com/normas-regulamentos.pdf',
        date: '19/09/2023',
      },
      {
        id: 'doc-reg-5',
        name: 'Normas_e_Regulamentos.pdf',
        url: 'https://example.com/normas-regulamentos.pdf',
        date: '03/02/2023',
      },
    ],
    documentsByYear: [
      {
        year: '2025',
        documents: [
          {
            id: 'doc-reg-1',
            name: 'Normas e Regulamentos - Atualização 2025.pdf',
            url: 'https://example.com/normas-2025.pdf',
            date: '05/03/2025',
          },
        ],
      },
      {
        year: '2024',
        documents: [
          {
            id: 'doc-reg-2',
            name: 'Normas e Regulamentos - Novembro 2024.pdf',
            url: 'https://example.com/normas-nov2024.pdf',
            date: '12/11/2024',
          },
          {
            id: 'doc-reg-3',
            name: 'Normas e Regulamentos - Abril 2024.pdf',
            url: 'https://example.com/normas-abr2024.pdf',
            date: '28/04/2024',
          },
        ],
      },
      {
        year: '2023',
        documents: [
          {
            id: 'doc-reg-4',
            name: 'Normas e Regulamentos - Setembro 2023.pdf',
            url: 'https://example.com/normas-set2023.pdf',
            date: '19/09/2023',
          },
          {
            id: 'doc-reg-5',
            name: 'Normas e Regulamentos - Fevereiro 2023.pdf',
            url: 'https://example.com/normas-fev2023.pdf',
            date: '03/02/2023',
          },
        ],
      },
    ],
    representative: [
      {
        id: '1',
        name: 'Nome da representante',
      },
      {
        id: '2',
        name: 'Nome da representante',
      },
    ],
    members: [
      {
        id: '1',
        name: 'Nome do membro',
      },
      {
        id: '2',
        name: 'Nome do membro',
      },
    ],
    council: [
      {
        id: '1',
        name: 'Nome do conselho',
      },
      {
        id: '2',
        name: 'Nome do conselho',
      },
    ],
  },
  {
    id: 'gov-5',
    title: 'Atas e Reuniões',
    icon: atas_e_reunioes,
    subtitle: 'Registros oficiais das reuniões',
    category: 'governance',
    date: '2025',
    content:
      'Disponibiliza as atas e registros oficiais das reuniões realizadas, assegurando transparência nas deliberações e decisões da entidade.',
    documents: [
      {
        id: 'doc-minutes-1',
        name: 'Atas_Reunioes_08-03-2025.pdf',
        url: 'https://example.com/atas-08-03-2025.pdf',
        date: '08/03/2025',
      },
      {
        id: 'doc-minutes-2',
        name: 'Atas_Reunioes_15-12-2024.pdf',
        url: 'https://example.com/atas-15-12-2024.pdf',
        date: '15/12/2024',
      },
      {
        id: 'doc-minutes-3',
        name: 'Atas_Reunioes_20-08-2024.pdf',
        url: 'https://example.com/atas-20-08-2024.pdf',
        date: '20/08/2024',
      },
      {
        id: 'doc-minutes-4',
        name: 'Atas_Reunioes_10-05-2024.pdf',
        url: 'https://example.com/atas-10-05-2024.pdf',
        date: '10/05/2024',
      },
      {
        id: 'doc-minutes-5',
        name: 'Atas_Reunioes_25-11-2023.pdf',
        url: 'https://example.com/atas-25-11-2023.pdf',
        date: '25/11/2023',
      },
    ],
    documentsByYear: [
      {
        year: '2025',
        documents: [
          {
            id: 'doc-minutes-1',
            name: 'Ata de Reunião - 08 de Março de 2025.pdf',
            url: 'https://example.com/atas-08-03-2025.pdf',
            date: '08/03/2025',
          },
        ],
      },
      {
        year: '2024',
        documents: [
          {
            id: 'doc-minutes-2',
            name: 'Ata de Reunião - 15 de Dezembro de 2024.pdf',
            url: 'https://example.com/atas-15-12-2024.pdf',
            date: '15/12/2024',
          },
          {
            id: 'doc-minutes-3',
            name: 'Ata de Reunião - 20 de Agosto de 2024.pdf',
            url: 'https://example.com/atas-20-08-2024.pdf',
            date: '20/08/2024',
          },
          {
            id: 'doc-minutes-4',
            name: 'Ata de Reunião - 10 de Maio de 2024.pdf',
            url: 'https://example.com/atas-10-05-2024.pdf',
            date: '10/05/2024',
          },
        ],
      },
      {
        year: '2023',
        documents: [
          {
            id: 'doc-minutes-5',
            name: 'Ata de Reunião - 25 de Novembro de 2023.pdf',
            url: 'https://example.com/atas-25-11-2023.pdf',
            date: '25/11/2023',
          },
        ],
      },
    ],
    representative: [
      {
        id: '1',
        name: 'Nome da representante',
      },
      {
        id: '2',
        name: 'Nome da representante',
      },
    ],
    members: [
      {
        id: '1',
        name: 'Nome do membro',
      },
      {
        id: '2',
        name: 'Nome do membro',
      },
    ],
    council: [
      {
        id: '1',
        name: 'Nome do conselho',
      },
      {
        id: '2',
        name: 'Nome do conselho',
      },
    ],
  },
  {
    id: 'gov-6',
    title: 'Edital de Convocação e Assembleia Geral',
    icon: edital_de_convocacao,
    subtitle: 'Publicações oficiais de convocações',
    category: 'governance',
    date: '2025',
    content:
      'Publicações oficiais de convocações e comunicados relacionados às Assembleias Gerais, com informações sobre datas, pautas e resultados.',
    documents: [
      {
        id: 'doc-call-1',
        name: 'Edital_Convocacao_08-03-2025.pdf',
        url: 'https://example.com/edital-08-03-2025.pdf',
        date: '08/03/2025',
      },
      {
        id: 'doc-call-2',
        name: 'Edital_Convocacao_22-10-2024.pdf',
        url: 'https://example.com/edital-22-10-2024.pdf',
        date: '22/10/2024',
      },
      {
        id: 'doc-call-3',
        name: 'Edital_Convocacao_15-07-2024.pdf',
        url: 'https://example.com/edital-15-07-2024.pdf',
        date: '15/07/2024',
      },
      {
        id: 'doc-call-4',
        name: 'Edital_Convocacao_30-03-2024.pdf',
        url: 'https://example.com/edital-30-03-2024.pdf',
        date: '30/03/2024',
      },
      {
        id: 'doc-call-5',
        name: 'Edital_Convocacao_12-12-2023.pdf',
        url: 'https://example.com/edital-12-12-2023.pdf',
        date: '12/12/2023',
      },
    ],
    documentsByYear: [
      {
        year: '2025',
        documents: [
          {
            id: 'doc-call-1',
            name: 'Edital de Convocação - Assembleia Geral 08/03/2025.pdf',
            url: 'https://example.com/edital-08-03-2025.pdf',
            date: '08/03/2025',
          },
        ],
      },
      {
        year: '2024',
        documents: [
          {
            id: 'doc-call-2',
            name: 'Edital de Convocação - Assembleia Geral 22/10/2024.pdf',
            url: 'https://example.com/edital-22-10-2024.pdf',
            date: '22/10/2024',
          },
          {
            id: 'doc-call-3',
            name: 'Edital de Convocação - Assembleia Geral 15/07/2024.pdf',
            url: 'https://example.com/edital-15-07-2024.pdf',
            date: '15/07/2024',
          },
          {
            id: 'doc-call-4',
            name: 'Edital de Convocação - Assembleia Geral 30/03/2024.pdf',
            url: 'https://example.com/edital-30-03-2024.pdf',
            date: '30/03/2024',
          },
        ],
      },
      {
        year: '2023',
        documents: [
          {
            id: 'doc-call-5',
            name: 'Edital de Convocação - Assembleia Geral 12/12/2023.pdf',
            url: 'https://example.com/edital-12-12-2023.pdf',
            date: '12/12/2023',
          },
        ],
      },
    ],
    representative: [
      {
        id: '1',
        name: 'Nome da representante',
      },
      {
        id: '2',
        name: 'Nome da representante',
      },
    ],
    members: [
      {
        id: '1',
        name: 'Nome do membro',
      },
      {
        id: '2',
        name: 'Nome do membro',
      },
    ],
    council: [
      {
        id: '1',
        name: 'Nome do conselho',
      },
      {
        id: '2',
        name: 'Nome do conselho',
      },
    ],
  },
  {
    id: 'gov-7',
    title: 'Entidades Filiadas',
    icon: entidades_filiadas,
    subtitle: 'Lista de federações e clubes vinculados',
    category: 'governance',
    date: '2025',
    content:
      'Lista das federações, clubes e demais organizações esportivas vinculadas à entidade, promovendo integração e fortalecimento do esporte em todo o país.',
    documents: [
      {
        id: 'doc-aff-1',
        name: 'Entidades_Filiadas.pdf',
        url: 'https://example.com/entidades-filiadas.pdf',
        date: '01/01/2025',
      },
      {
        id: 'doc-aff-2',
        name: 'Entidades_Filiadas.pdf',
        url: 'https://example.com/entidades-filiadas.pdf',
        date: '15/09/2024',
      },
      {
        id: 'doc-aff-3',
        name: 'Entidades_Filiadas.pdf',
        url: 'https://example.com/entidades-filiadas.pdf',
        date: '10/03/2024',
      },
      {
        id: 'doc-aff-4',
        name: 'Entidades_Filiadas.pdf',
        url: 'https://example.com/entidades-filiadas.pdf',
        date: '20/08/2023',
      },
      {
        id: 'doc-aff-5',
        name: 'Entidades_Filiadas.pdf',
        url: 'https://example.com/entidades-filiadas.pdf',
        date: '05/01/2023',
      },
    ],
    documentsByYear: [
      {
        year: '2025',
        documents: [
          {
            id: 'doc-aff-1',
            name: 'Lista de Entidades Filiadas - Janeiro 2025.pdf',
            url: 'https://example.com/entidades-jan2025.pdf',
            date: '01/01/2025',
          },
        ],
      },
      {
        year: '2024',
        documents: [
          {
            id: 'doc-aff-2',
            name: 'Lista de Entidades Filiadas - Setembro 2024.pdf',
            url: 'https://example.com/entidades-set2024.pdf',
            date: '15/09/2024',
          },
          {
            id: 'doc-aff-3',
            name: 'Lista de Entidades Filiadas - Março 2024.pdf',
            url: 'https://example.com/entidades-mar2024.pdf',
            date: '10/03/2024',
          },
        ],
      },
      {
        year: '2023',
        documents: [
          {
            id: 'doc-aff-4',
            name: 'Lista de Entidades Filiadas - Agosto 2023.pdf',
            url: 'https://example.com/entidades-ago2023.pdf',
            date: '20/08/2023',
          },
          {
            id: 'doc-aff-5',
            name: 'Lista de Entidades Filiadas - Janeiro 2023.pdf',
            url: 'https://example.com/entidades-jan2023.pdf',
            date: '05/01/2023',
          },
        ],
      },
    ],
    representative: [
      {
        id: '1',
        name: 'Nome da representante',
      },
      {
        id: '2',
        name: 'Nome da representante',
      },
    ],
    members: [
      {
        id: '1',
        name: 'Nome do membro',
      },
      {
        id: '2',
        name: 'Nome do membro',
      },
    ],
    council: [
      {
        id: '1',
        name: 'Nome do conselho',
      },
      {
        id: '2',
        name: 'Nome do conselho',
      },
    ],
  },
  {
    id: 'gov-8',
    title: 'Recursos Humanos',
    icon: organograma,
    subtitle: 'Informações institucionais sobre gestão de pessoas',
    category: 'governance',
    date: '2025',
    content:
      'Apresenta informações institucionais sobre a gestão de pessoas, políticas internas e estrutura administrativa da entidade.',
    documents: [
      {
        id: 'doc-hr-1',
        name: 'Recursos_Humanos.pdf',
        url: 'https://example.com/recursos-humanos.pdf',
        date: '12/02/2025',
      },
    ],
    documentsByYear: [
      {
        year: '2025',
        documents: [
          {
            id: 'doc-hr-1',
            name: 'Recursos Humanos - Estrutura 2025.pdf',
            url: 'https://example.com/rh-2025.pdf',
            date: '12/02/2025',
          },
        ],
      },
    ],
  },
  {
    id: 'gov-9',
    title: 'Certidões',
    icon: certidoes,
    subtitle: 'Certidões atualizadas da entidade',
    category: 'governance',
    date: '2025',
    content:
      'Área destinada à consulta e download de certidões atualizadas, garantindo transparência quanto à regularidade fiscal e jurídica da entidade.',
    documents: [
      {
        id: 'doc-cert-1',
        name: 'Certidoes_Atualizadas.pdf',
        url: 'https://example.com/certidoes.pdf',
        date: '18/01/2025',
      },
    ],
    documentsByYear: [
      {
        year: '2025',
        documents: [
          {
            id: 'doc-cert-1',
            name: 'Certidões Atualizadas - Janeiro 2025.pdf',
            url: 'https://example.com/certidoes-jan2025.pdf',
            date: '18/01/2025',
          },
        ],
      },
    ],
  },
  {
    id: 'gov-10',
    title: 'Convênios',
    icon: normas_e_regulamentos,
    subtitle: 'Parcerias e acordos firmados',
    category: 'governance',
    date: '2025',
    content:
      'Reúne informações sobre parcerias e acordos firmados com instituições públicas e privadas, detalhando seus objetivos e escopo.',
    documents: [
      {
        id: 'doc-agree-1',
        name: 'Convenios.pdf',
        url: 'https://example.com/convenios.pdf',
        date: '25/02/2025',
      },
    ],
    documentsByYear: [
      {
        year: '2025',
        documents: [
          {
            id: 'doc-agree-1',
            name: 'Convênios e Parcerias - Fevereiro 2025.pdf',
            url: 'https://example.com/convenios-fev2025.pdf',
            date: '25/02/2025',
          },
        ],
      },
    ],
  },
  {
    id: 'button-card',
    title: 'CONSELHOS E COMITÊS',
    icon: normas_e_regulamentos,
    subtitle:
      'Apresenta os órgãos colegiados que auxiliam na gestão da entidade, com informações sobre composição, competências e principais atribuições.',
    buttons: [
      {
        id: 'button-1',
        label: 'Conselho Fiscal',
      },
      {
        id: 'button-2',
        label: 'Comissão de Atletas',
      },
      {
        id: 'button-3',
        label: 'Conselho Administrativo',
      },
      {
        id: 'button-4',
        label: 'Área de Ética e Integridade',
      },
    ],
  },
  {
    id: 'gov-12',
    title: 'Eleições',
    icon: edital_de_convocacao,
    subtitle: 'Processos eleitorais da entidade',
    category: 'governance',
    date: '2025',
    content:
      'Espaço com informações sobre os processos eleitorais da entidade, incluindo editais, candidaturas, resultados e regras que asseguram a transparência das eleições.',
    documents: [
      {
        id: 'doc-elect-1',
        name: 'Elections_Results_2025.pdf',
        url: 'https://example.com/eleicoes-2025.pdf',
        date: '15/03/2025',
      },
    ],
    documentsByYear: [
      {
        year: '2025',
        documents: [
          {
            id: 'doc-elect-1',
            name: 'Resultado das Eleições 2025.pdf',
            url: 'https://example.com/eleicoes-resultado-2025.pdf',
            date: '15/03/2025',
          },
        ],
      },
    ],
  },
  {
    id: 'gov-13',
    title: 'Assembleias',
    icon: atas_e_reunioes,
    subtitle: 'Pautas e atas das assembleias',
    category: 'governance',
    date: '2025',
    content:
      'Reúne informações e pautas das Assembleias realizadas, reforçando o compromisso com a transparência e a participação dos membros.',
    documents: [
      {
        id: 'doc-assembly-1',
        name: 'Assembleias_Pautas_2025.pdf',
        url: 'https://example.com/assembleias-2025.pdf',
        date: '20/02/2025',
      },
    ],
    documentsByYear: [
      {
        year: '2025',
        documents: [
          {
            id: 'doc-assembly-1',
            name: 'Pautas das Assembleias 2025.pdf',
            url: 'https://example.com/assembleias-pautas-2025.pdf',
            date: '20/02/2025',
          },
        ],
      },
    ],
  },
  {
    id: 'gov-14',
    title: 'Documentos Gerais',
    icon: estatuto,
    subtitle: 'Documentos institucionais diversos',
    category: 'governance',
    date: '2025',
    content:
      'Área destinada à disponibilização de documentos institucionais diversos, garantindo acesso público e transparência administrativa.',
    documents: [
      {
        id: 'doc-general-1',
        name: 'Documentos_Gerais.pdf',
        url: 'https://example.com/documentos-gerais.pdf',
        date: '05/01/2025',
      },
    ],
    documentsByYear: [
      {
        year: '2025',
        documents: [
          {
            id: 'doc-general-1',
            name: 'Documentos Gerais - Compilação 2025.pdf',
            url: 'https://example.com/documentos-gerais-2025.pdf',
            date: '05/01/2025',
          },
        ],
      },
    ],
  },
];

export default governanceInfoData;
