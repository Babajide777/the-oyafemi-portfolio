import { ReactNode } from 'react';

interface GetThemeOptions {
  darkMode: boolean;
}

interface LayoutProps {
  title: string;
  children: ReactNode;
  darkMode: boolean;
}

type itemData = {
  img: string;
  title: string;
  year: number;
}

export type { GetThemeOptions, LayoutProps, itemData };
