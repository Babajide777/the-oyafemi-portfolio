import { ReactNode } from "react";

interface GetThemeOptions {
  darkMode: boolean;
}

interface LayoutProps {
  title: string;
  children: ReactNode;
  darkMode: boolean;
}
interface ArrowProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

interface PrevArrowProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

type itemData = {
  id: number;
  img: string;
  title: string;
  year: number;
};

export type {
  GetThemeOptions,
  LayoutProps,
  itemData,
  ArrowProps,
  PrevArrowProps,
};
