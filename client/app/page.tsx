'use client';

import { Box, Container, Typography } from '@mui/material';
import About from './Components/about';
import Homescreen from './Components/Homescreen';
import Technologies from './Components/technologies';
import Work from './Components/work';
import Footer from './Components/Footer';
import Header from './Components/Nav';
import Nav from './Components/Nav';

export default function Home() {
  return (
    <Box>
      <Nav />
      <Homescreen />
      <About />
      <Technologies />
      <Work />
      <Footer />
    </Box>
  );
}
