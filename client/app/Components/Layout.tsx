import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import { LayoutProps } from '@/utils/type';
import getTheme from '@/utils/styles';
import Script from 'next/script';

export default function Layout({ title, children, darkMode }: LayoutProps) {
  return (
    <ThemeProvider theme={getTheme({ darkMode })}>
      <Head>
        {/* This script runs before React hydration */}
        <Script
          id="strip-extension-attrs"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Remove attributes injected by known extensions
              document.documentElement.removeAttribute('crosspilot');
              document.documentElement.removeAttribute('cz-shortcut-listen');
            `,
          }}
        />
        <title>
          {title ? `${title} - Oyafemi Portfolio` : 'Oyafemi Portfolio'}
        </title>
      </Head>
      <CssBaseline />
      <Container>{children}</Container>
    </ThemeProvider>
  );
}
