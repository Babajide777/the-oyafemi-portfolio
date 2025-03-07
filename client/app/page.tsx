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
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box
        sx={{
          maxHeight: '100vh',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Header />
        <Box sx={{ flex: 1 }}>
          <Homescreen />
        </Box>
      </Box>
      {/* <Box>
        <About />
        <Technologies />
        <Work />
      </Box>
      <Footer /> */}
    </Box>
  );
}
