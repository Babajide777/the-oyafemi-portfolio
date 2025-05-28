// styles.js
import { createTheme, Theme } from "@mui/material/styles";
import type { CSSProperties } from "react";
import { GetThemeOptions } from "./type";

// Extend MUI Typography to include "body3" and "body4"
declare module "@mui/material/styles" {
  interface TypographyVariants {
    body3: CSSProperties;
    body4: CSSProperties;
  }
  interface TypographyVariantsOptions {
    body3?: CSSProperties;
    body4?: CSSProperties;
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
    body4: true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      Yellow: string;
      Black100: string;
      Black200: string;
      Black300: string;
      Black400: string;
      Black500: string;
      FooterBlack?: string;
      FooterButton?: string;
      Gray100: string;
      Gray200: string;
      darkGray?: string;
      white: string;
      maroon?: string;
      darkMaroon?: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      Yellow?: string;
      Black100?: string;
      Black200?: string;
      Black300?: string;
      Black400?: string;
      Black500?: string;
      FooterBlack?: string;
      FooterButton?: string;
      Gray100: string;
      Gray200: string;
      darkGray?: string;
      white: string;
      maroon?: string;
      darkMaroon?: string;
    };
  }
}

const getTheme = ({ darkMode }: GetThemeOptions): Theme =>
  createTheme({
    typography: {
      fontFamily: '"Cormorant SC", "Outfit", sans-serif',
      h1: { fontFamily: '"Cormorant SC", serif' },
      body1: { fontFamily: '"Outfit", sans-serif' },
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
        Yellow: "#E6AF2E",
        Black100: "#000000",
        Black200: "#1B1B1B",
        Black300: "#3C3C3C",
        Black400: "#242424",
        Black500: "#2B2B2B",
        FooterBlack: "#111111",
        FooterButton: "#121212",
        Gray100: "#6B6B6B",
        Gray200: "rgba(0, 0, 0, 0.22)",
        darkGray: "#636363",
        white: "#FFFFFF",
        maroon: "rgba(115, 15, 6, 0.4)",
        darkMaroon: "#6B0504",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "capitalize",
          },
        },
      },
    },
  });

export default getTheme;
