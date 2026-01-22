export interface DateParts {
  day: string;
  month: string;
  year: string;
}

const MONTH_NAMES = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
];

const SHORT_MONTH_LABELS: Record<string, string> = {
  janeiro: 'JAN',
  fevereiro: 'FEV',
  março: 'MAR',
  abril: 'ABR',
  maio: 'MAI',
  junho: 'JUN',
  julho: 'JUL',
  agosto: 'AGO',
  setembro: 'SET',
  outubro: 'OUT',
  novembro: 'NOV',
  dezembro: 'DEZ',
};

const getCurrentDateParts = (): DateParts => {
  const currentDate = new Date();
  return {
    day: currentDate.getDate().toString(),
    month: currentDate.toLocaleDateString('pt-BR', { month: 'long' }),
    year: currentDate.getFullYear().toString(),
  };
};

const parseSlashDate = (dateString: string): DateParts | null => {
  const parts = dateString.split('/');
  if (parts.length !== 3) return null;

  const [day, month, year] = parts.map((part) => part.trim());
  const monthIndex = Number(month) - 1;

  if (Number.isNaN(monthIndex) || monthIndex < 0 || monthIndex > 11) {
    return null;
  }

  return {
    day: day || '',
    month: MONTH_NAMES[monthIndex] || '',
    year: year || new Date().getFullYear().toString(),
  };
};

const parseISODate = (dateString: string): DateParts | null => {
  if (!/^\d{4}-\d{2}-\d{2}/.test(dateString)) return null;

  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return null;

  return {
    day: date.getDate().toString().padStart(2, '0'),
    month: date.toLocaleDateString('pt-BR', { month: 'long' }),
    year: date.getFullYear().toString(),
  };
};

const parseExtendedDate = (dateString: string): DateParts | null => {
  const parts = dateString
    .split(' de ')
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length < 2) return null;

  const [day, month, year] = parts;
  return {
    day: day || '',
    month: month || '',
    year: year || new Date().getFullYear().toString(),
  };
};

export const getDateParts = (dateString?: string): DateParts => {
  if (dateString) {
    const trimmedDate = dateString.trim();

    if (trimmedDate.includes('/')) {
      const slashResult = parseSlashDate(trimmedDate);
      if (slashResult) return slashResult;
    }

    const isoResult = parseISODate(trimmedDate);
    if (isoResult) return isoResult;

    if (trimmedDate.includes(' de ')) {
      const extendedResult = parseExtendedDate(trimmedDate);
      if (extendedResult) return extendedResult;
    }
  }

  return getCurrentDateParts();
};

export const getShortMonth = (monthName?: string): string => {
  if (!monthName) return '---';

  const normalizedMonth = monthName.trim().toLowerCase();
  if (!normalizedMonth) return '---';

  return (
    SHORT_MONTH_LABELS[normalizedMonth] ||
    normalizedMonth
      .substring(0, Math.min(3, normalizedMonth.length))
      .toUpperCase()
  );
};
