import { createContext } from 'react';

/** Тема приложения: значения читаются компонентами экранов. */
export interface Theme {
  sys: {
    surface: string;
    onSurface: string;
    primary: string;
    onPrimary: string;
  };
}

export const theme: Theme = {
  sys: {
    surface: '#ffffff',
    onSurface: '#0f172a',
    primary: '#3b82f6',
    onPrimary: '#ffffff',
  },
};

export const ThemeContext = createContext<Theme | null>(theme);
