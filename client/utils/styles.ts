// styles.js
import { createTheme, Theme } from '@mui/material/styles';
import type { CSSProperties } from 'react';
import { GetThemeOptions } from './type';

// Extend MUI Typography to include "body3" and "body4"
declare module '@mui/material/styles' {
  interface TypographyVariants {
    body3: CSSProperties;
    body4: CSSProperties;
  }
  interface TypographyVariantsOptions {
    body3?: CSSProperties;
    body4?: CSSProperties;
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
    body4: true;
  }
}

const getTheme = ({ darkMode }: GetThemeOptions): Theme =>
  createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '*': {
            margin: 0,
            padding: 0,
            boxSizing: 'content-box'
          }
        }
      }
    },

    typography: {
      fontFamily: 'Cormorant SC, serif',
      h1: { fontSize: '40px', fontWeight: 400 },
      h2: { fontSize: '40px', fontWeight: 600 },
      h3: { fontSize: '56px', fontWeight: 700 },
      h4: {
        fontFamily: 'Outfit, sans-serif',
        fontSize: '20px',
        fontWeight: 900
      },
      h5: {
        fontFamily: 'Outfit, sans-serif',
        fontSize: '32px',
        fontWeight: 700
      },
      body1: {
        fontFamily: 'Outfit, sans-serif',
        fontSize: '14px',
        fontWeight: 500
      },
      body2: {
        fontFamily: 'Outfit, sans-serif',
        fontSize: '16px',
        fontWeight: 400
      },
      body3: {
        fontFamily: 'Outfit, sans-serif',
        fontSize: '20px',
        fontWeight: 400
      },
      body4: {
        fontFamily: 'Outfit, sans-serif',
        fontSize: '16px',
        fontWeight: 400
      }
    },
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode ? '#121212' : '#ffffff'
      },
      text: {
        primary: darkMode ? '#ffffff' : '#000000'
      }
    }
  });

export default getTheme;
