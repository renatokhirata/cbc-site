import conq_paraciclismo_icon from '../../assets/icons/conq_paraciclismo_icon.svg';
import conq_mtb_icon from '../../assets/icons/conq_mtb_icon.svg';
import conq_bmx_icon from '../../assets/icons/BMX.svg';
import { AchievementsSection } from '../../domains/cbc-site/interfaces/Modality/IModality';

export const achievementsData: AchievementsSection = {
  title: 'Conquistas',
  description:
    'A CBC acumula resultados expressivos nas principais competições nacionais e internacionais, com atletas brasileiros marcando presença em Campeonatos Mundiais, Jogos Pan-Americanos e Jogos Olímpicos.',
  modalities: [
    {
      modalityId: 'paraciclismo',
      modalityName: 'Paraciclismo',
      icon: conq_paraciclismo_icon,
      color: '#4A90E2',
      achievements: [
        {
          items: [
            'No Parapan-Americanos 2023 em Santiago, o Brasil fez história com 7 medalhas e duas quebras de recorde.',
            '**Lauro Chaman** ganhou ouro na perseguição individual (velódromo) com recorde continental e prata na estrada.',
            '**Sabrina Custódia** conquistou o ouro no 500m contrarrelógio (pista) e quebrou o recorde parapan-americano.',
          ],
        },
        {
          items: [
            'Na Copa do Mundo de Paraciclismo 2025, em Maniago (Itália):',
          ],
          subItems: [
            '**Victoria Barbosa** foi ouro na categoria WC1, com ainda prata e bronze da equipe brasileira.',
            '**Lauro Chaman**, **Jady Malavazzi** e **Gilmara do Rosário** também subiram ao pódio.',
          ],
        },
      ],
      modalityDescription: '',
      infos: [],
    },
    {
      modalityId: 'mtb',
      modalityName: 'Mountain Bike (MTB)',
      icon: conq_mtb_icon,
      color: '#7CB342',
      achievements: [
        {
          items: [
            'No Campeonato Pan-Americano de MTB 2025 (Heredia, Costa Rica):',
            '**Ulan Galinski** conquistou a medalha de prata na prova Elite masculina do Cross Country Olímpico (XCO).',
            'O Brasil liderou o quadro geral de medalhas da competição.',
          ],
        },
        {
          items: ['No Pan-Americano MTB XCM (2024 em Goiana/MG):'],
          subItems: [
            '**Karen Olímpio** sagrou-se bicampeã na Elite feminina.',
            'O brasileiro **José Gabriel** conquistou prata e Bruno Lemes o bronze na Elite masculina.',
          ],
        },
        {
          items: ['No Pan-Americano de Downhill 2025 (Temuco, Chile):'],
          subItems: [
            '**Roger Vieira** garantiu bronze na Elite masculina, destacando-se em uma performance competitiva.',
          ],
        },
      ],
      modalityDescription: '',
      infos: [],
    },
    {
      modalityId: 'bmx-racing',
      modalityName: 'BMX Racing',
      icon: conq_bmx_icon,
      color: '#FF6B35',
      achievements: [
        {
          items: ['No Pan-Americano de BMX Racing 2025 (Chile):'],
          subItems: [
            '**Paola Reis** tornou-se campeã na Elite feminina.',
            '**Pedro Queiroz** garantiu o bronze na Elite masculina, com o Brasil brilhando ainda na categoria júnior.',
          ],
        },
      ],
      modalityDescription: '',
      infos: [],
    },
  ],
};

export default achievementsData;
