/**
 * Formata o nome de uma modalidade de forma inteligente
 *
 * Regras:
 * 1. Se o nome contém padrões especiais (letras maiúsculas/minúsculas misturadas, hífens),
 *    preserva a formatação original (ex: "e-Sports", "BMX Freestyle")
 * 2. Caso contrário, aplica capitalização padrão em cada palavra
 * 3. Se forceUpperCase for true, aplica uppercase mas preserva formatações especiais
 *
 * @param slug - O slug da modalidade (ex: "esports", "bmx-freestyle")
 * @param originalName - O nome original da modalidade (opcional, usado para verificação)
 * @param forceUpperCase - Se true, aplica uppercase exceto para modalidades com formatação especial
 * @returns O nome formatado da modalidade
 *
 * @example
 * // Sem uppercase
 * formatModalityName('esports') // => 'e-Sports'
 * formatModalityName('bmx-freestyle') // => 'BMX Freestyle'
 * formatModalityName('paraciclismo') // => 'Paraciclismo'
 *
 * // Com uppercase (forceUpperCase = true)
 * formatModalityName('e-Sports', 'e-Sports', true) // => 'e-Sports' (preserva!)
 * formatModalityName('BMX Freestyle', 'BMX Freestyle', true) // => 'BMX FREESTYLE'
 * formatModalityName('PISTA', 'PISTA', true) // => 'PISTA'
 * formatModalityName('Paraciclismo', 'Paraciclismo', true) // => 'PARACICLISMO'
 */
export function formatModalityName(
  slug: string,
  originalName?: string,
  forceUpperCase: boolean = false,
): string {
  if (!slug) return 'Evento';

  // Lista de modalidades com formatação especial (case-sensitive)
  // Estas modalidades NUNCA devem ter uppercase aplicado
  const specialFormats: Record<string, string> = {
    esports: 'e-Sports',
    'e-sports': 'e-Sports',
  };

  // Modalidades que podem ter uppercase aplicado normalmente
  const normalUppercaseFormats: Record<string, string> = {
    'bmx-freestyle': 'BMX FREESTYLE',
    'bmx-racing': 'BMX RACING',
    mtb: 'MTB',
    'mountain bike': 'MOUNTAIN BIKE',
    pista: 'PISTA',
    paraciclismo: 'PARACICLISMO',
    'para-ciclismo': 'PARACICLISMO',
    'ciclismo de estrada': 'CICLISMO DE ESTRADA',
    estrada: 'ESTRADA',
    'ciclismo para todos': 'CICLISMO PARA TODOS',
  };

  const slugLower = slug.toLowerCase();
  const originalLower = originalName?.toLowerCase();

  // Verifica se é uma modalidade com formatação especial que deve ser preservada
  if (
    specialFormats[slugLower] ||
    (originalLower && specialFormats[originalLower])
  ) {
    return specialFormats[slugLower] || specialFormats[originalLower!];
  }

  // Se forceUpperCase é true, verifica se existe um formato uppercase predefinido
  if (forceUpperCase) {
    if (normalUppercaseFormats[slugLower]) {
      return normalUppercaseFormats[slugLower];
    }
    if (originalLower && normalUppercaseFormats[originalLower]) {
      return normalUppercaseFormats[originalLower];
    }
  }

  // Se o nome original foi fornecido, verifica se contém padrões especiais
  if (originalName) {
    // Verifica se contém letras maiúsculas após minúsculas (ex: "eSports")
    // ou se contém hífens seguidos de maiúsculas (ex: "e-Sports")
    const hasSpecialPattern =
      /[a-z][A-Z]/.test(originalName) ||
      /-[A-Z]/.test(originalName) ||
      /^[a-z]-/.test(originalName);

    if (hasSpecialPattern) {
      // Preserva formatação especial mesmo com forceUpperCase
      return originalName;
    }

    // Se forceUpperCase, retorna o nome original em uppercase
    if (forceUpperCase) {
      return originalName.toUpperCase();
    }

    return originalName;
  }

  // Aplicação padrão: capitalizar primeira letra de cada palavra
  const formatted = slug
    .split('-')
    .map((word) => {
      // Se a palavra tem 3 letras ou menos, deixa em maiúsculas (ex: MTB, BMX)
      if (word.length <= 3) {
        return word.toUpperCase();
      }
      // Capitaliza primeira letra
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');

  // Aplica uppercase se solicitado
  return forceUpperCase ? formatted.toUpperCase() : formatted;
}

/**
 * Obtém o nome formatado de uma modalidade a partir dos dados disponíveis
 *
 * @param slug - O slug da modalidade
 * @param modalitiesData - Array com os dados das modalidades (opcional)
 * @param forceUpperCase - Se true, aplica uppercase exceto para modalidades com formatação especial
 * @returns O nome formatado da modalidade
 */
export function getFormattedModalityName(
  slug: string,
  modalitiesData?: Array<{ modalityId: string; modalityName: string }>,
  forceUpperCase: boolean = false,
): string {
  if (!slug) return 'Evento';

  // Tenta encontrar o nome original nos dados fornecidos
  if (modalitiesData) {
    const modality = modalitiesData.find((m) => m.modalityId === slug);
    if (modality) {
      return formatModalityName(slug, modality.modalityName, forceUpperCase);
    }
  }

  // Fallback para formatação baseada no slug
  return formatModalityName(slug, undefined, forceUpperCase);
}
