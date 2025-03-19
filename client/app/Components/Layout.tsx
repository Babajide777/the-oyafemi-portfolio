import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import { LayoutProps } from '@/utils/type';
import getTheme from '@/utils/styles';

export default function Layout({ title, children, darkMode }: LayoutProps) {
  return (
    <ThemeProvider theme={getTheme({ darkMode })}>
      <Head>
        <title>
          {title ? `${title} - Oyafemi Portfolio` : 'Oyafemi Portfolio'}
        </title>
      </Head>
      <CssBaseline />
      <Container>{children}</Container>
    </ThemeProvider>
  );
}
1;
