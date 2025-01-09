'use client';

import { FC, ReactNode, createContext, useEffect, useState } from 'react';

const LOCAL_STORAGE_KEY = 'theme';

enum THEMES {
  'light' = 'light',
  'dark' = 'dark',
}

interface ThemeContextInterface {
  theme: THEMES;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const ThemeContext = createContext<ThemeContextInterface | null>(null);

export const ThemeProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const initialTheme =
    (typeof window !== 'undefined' &&
      localStorage[LOCAL_STORAGE_KEY] === THEMES.dark) ||
    (typeof window !== 'undefined' &&
      !localStorage[LOCAL_STORAGE_KEY] &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? THEMES.dark
      : THEMES.light;

  const [theme, setTheme] = useState<THEMES>(initialTheme);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (theme === THEMES.dark) {
        localStorage[LOCAL_STORAGE_KEY] = THEMES.dark;
        document.documentElement.classList.add('dark');

        return;
      }

      localStorage[LOCAL_STORAGE_KEY] = THEMES.light;
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggle = () => {
    setTheme(prevState => {
      return prevState === THEMES.dark ? THEMES.light : THEMES.dark;
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDarkMode: theme === THEMES.dark,
        toggleDarkMode: toggle,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
