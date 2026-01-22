/**
 * Extrai o ID do vídeo de uma URL do YouTube
 * Suporta formatos: youtube.com/watch?v=ID, youtu.be/ID, youtube.com/embed/ID
 */
export function extractYouTubeVideoId(url: string): string | null {
  const regexPatterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
  ];

  for (const pattern of regexPatterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}

/**
 * Gera a URL do thumbnail de um vídeo do YouTube
 * Qualidade padrão: maxresdefault (melhor qualidade disponível)
 */
export function getYouTubeThumbnail(
  url: string,
  quality: 'default' | 'hqdefault' | 'maxresdefault' = 'maxresdefault',
): string | null {
  const videoId = extractYouTubeVideoId(url);

  if (!videoId) {
    return null;
  }

  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
}

/**
 * Verifica se uma URL é de um vídeo do YouTube
 */
export function isYouTubeUrl(url: string): boolean {
  return url.includes('youtube.com') || url.includes('youtu.be');
}
