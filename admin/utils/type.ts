import type { ReactNode } from "react";

interface GetThemeOptions {
  darkMode: boolean;
}

interface LayoutProps {
  title: string;
  children: ReactNode;
  darkMode: boolean;
}

interface FormAreaProps {
  title: string;
  value: string;
  minRows?: number;
  handleChangeArea: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

type DashboardLayoutProps = {
  blogPost: string;
  blogComponent: React.ReactNode;
  experience: string;
  experienceComponent: React.ReactNode;
  projects: string;
  projectsComponent: React.ReactNode;
};

export type {
  GetThemeOptions,
  LayoutProps,
  DashboardLayoutProps,
  FormAreaProps,
};
