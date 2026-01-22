import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp should be used within a AppProvider.');
  }
  return context;
}
