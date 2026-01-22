import { useMemo, useState } from 'react';

export function useSearch<T>(items: T[], keys: (keyof T)[]) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = useMemo(() => {
    if (!searchTerm) return items;

    return items.filter((item) =>
      keys.some((key) =>
        String(item[key]).toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    );
  }, [items, searchTerm, keys]);

  return { searchTerm, setSearchTerm, filteredItems };
}
