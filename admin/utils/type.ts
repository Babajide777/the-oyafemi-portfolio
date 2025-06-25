import { ReactNode } from "react";

interface GetThemeOptions {
  darkMode: boolean;
}

interface LayoutProps {
  title: string;
  children: ReactNode;
  darkMode: boolean;
}

type DashboardLayoutProps = {
  blogPost: string;
  blogComponent: React.ReactNode;
  experience: string;
  experienceComponent: React.ReactNode;
  projects: string;
  projectsComponent: React.ReactNode;
};

export type { GetThemeOptions, LayoutProps, DashboardLayoutProps };
