'use client';

import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import { LayoutProps } from '@/utils/type';
import getTheme from '@/utils/styles';
import Header from './Nav';
import Footer from './Footer';

export default function Layout({ title, children, darkMode }: LayoutProps) {
  return (
    <ThemeProvider theme={getTheme({ darkMode })}>
      <CssBaseline />
      <Head>
        <title>
          {title ? `${title} - Oyafemi Portfolio` : 'Oyafemi Portfolio'}
        </title>
      </Head>
      <Box>{children}</Box>
    </ThemeProvider>
  );
}
1;
