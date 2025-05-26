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
    },
  });

export default getTheme;
