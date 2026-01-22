import { useCallback } from 'react';

export function useDownload() {
  const downloadFile = useCallback((fileUrl: string, fileName?: string) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    if (fileName) {
      link.download = fileName;
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return { downloadFile };
}
