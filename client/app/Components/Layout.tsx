"use client";

import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Head from "next/head";
import React from "react";
import { LayoutProps } from "@/utils/type";
import getTheme from "@/utils/styles";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ title, children, darkMode }: LayoutProps) {
  return (
    <ThemeProvider theme={getTheme({ darkMode })}>
      <CssBaseline />
      <Head>
        <title>
          {title ? `${title} - Oyafemi Portfolio` : "Oyafemi Portfolio"}
        </title>
      </Head>
      <Nav />
      <Box component="main">{children}</Box>
      <Footer />
    </ThemeProvider>
  );
}
