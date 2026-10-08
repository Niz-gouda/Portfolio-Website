import { useCallback, useEffect, useState } from 'react';

export type ThemePreference = 'system' | 'light' | 'dark';

const STORAGE_KEY = 'portfolio-theme';

function readStored(): ThemePreference {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === 'light' || value === 'dark' ? value : 'system';
  } catch {
    return 'system'; // storage can be blocked (private mode); fall back to the OS preference
  }
}

/** Light, dark or follow the OS. The choice is stored, and index.html applies it before first paint. */
export function useTheme() {
  const [preference, setPreference] = useState<ThemePreference>(readStored);

  useEffect(() => {
    const root = document.documentElement;
    if (preference === 'system') delete root.dataset.theme;
    else root.dataset.theme = preference;
    try {
      if (preference === 'system') localStorage.removeItem(STORAGE_KEY);
      else localStorage.setItem(STORAGE_KEY, preference);
    } catch {
      /* ignore */
    }
  }, [preference]);

  const cycle = useCallback(() => {
    setPreference((p) => (p === 'system' ? 'light' : p === 'light' ? 'dark' : 'system'));
  }, []);

  return { preference, cycle };
}
