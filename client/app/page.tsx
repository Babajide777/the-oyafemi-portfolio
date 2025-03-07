'use client';

import { Box, Container, Typography } from '@mui/material';
import About from './Components/about';
import Homescreen from './Components/Homescreen';
import Technologies from './Components/technologies';
import Work from './Components/work';
import Footer from './Components/Footer';
import Header from './Components/Header';

export default function Home() {
  return (
    <Box>
      <Header />
      <Homescreen />
      <About />
      <Technologies />
      <Work />
      <Footer />
    </Box>
  );
}
