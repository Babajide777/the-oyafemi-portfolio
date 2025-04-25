import { ReactNode } from 'react';

interface GetThemeOptions {
  darkMode: boolean;
}

interface LayoutProps {
  title: string;
  children: ReactNode;
  darkMode: boolean;
}

export type { GetThemeOptions, LayoutProps };
