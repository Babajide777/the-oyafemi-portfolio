// styles.js
import { createTheme, Theme } from "@mui/material/styles";
import type { CSSProperties } from "react";
import { GetThemeOptions } from "./type";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      Red: string;
      white: string;
      Black100: string;
      Black200: string;
      Black300: string;
      Black400: string;
      lightGray: string;
      lightGray2: string;
      lightGray3: string;
      darkGray: string;
      darkGray2: string;
      gray100: string;
      gray200: string;
      gray300: string;
      coolGray: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      Red?: string;
      white?: string;
      Black100?: string;
      Black200?: string;
      Black300?: string;
      Black400?: string;
      lightGray?: string;
      lightGray2?: string;
      lightGray3?: string;
      darkGray?: string;
      darkGray2?: string;
      gray100?: string;
      gray200?: string;
      gray300?: string;
      coolGray?: string;
    };
  }
}

const getTheme = ({ darkMode }: GetThemeOptions): Theme =>
  createTheme({
    typography: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
    },
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#121212" : "#ffffff",
      },
      text: {
        primary: darkMode ? "#ffffff" : "#000000",
      },
      custom: {
        Red: "#F90000",
        white: "#FFFFFF",
        Black100: "#000000",
        Black200: "#1E1E1E",
        Black300: "#18181B",
        Black400: "#0B0B0B",
        gray100: "#C1C1C1",
        gray200: "#D4D4D8",
        gray300: "#B6B6B6",
        lightGray: "#EFEFEF",
        lightGray2: "#DBDBDB",
        lightGray3: "#E4E4E7",
        darkGray: "#52525B",
        darkGray2: "#FBFBFB",
        coolGray: "#111827",
      },
    },
  });

export default getTheme;
